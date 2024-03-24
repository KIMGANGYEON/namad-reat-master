import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import { ITodo, toDoState } from "../atoms";
import DragabbleCard from "./DraggableCard";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  padding: 10px 0px;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 30px;
  font-size: 18px;
  text-transform: uppercase;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isdraggingFromThis
      ? "#b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IAreaProps {
  isdraggingFromThis: boolean;
  isDraggingOver: boolean;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTodo, ...allBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };
  // const inputRef = useRef<HTMLInputElement>(null);
  // const onClick = () => {
  //   inputRef.current?.focus();
  // setTimeout(() => {
  //   inputRef.current?.blur()
  // })

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Title>{boardId}</Title>
      {/* <input ref={inputRef} placeholder="grab me" />
    <button onClick={onClick}>click me</button> */}
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isdraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard
                key={toDo.id}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
