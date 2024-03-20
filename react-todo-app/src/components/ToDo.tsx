import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newTodo = { text, id, category: name };
      console.log(oldToDo, newTodo);
      return oldToDos;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );

  //   const onClick = (newCategory: IToDo["category"]) => {
  //     console.log("i wanna to", newCategory);
  //   };
  //   return (
  //     <li>
  //       <span>{text}</span>
  //       {category !== "DOING" && (
  //         <button onClick={() => onClick("DOING")}>Doing</button>
  //       )}
  //       {category !== "TO_DO" && (
  //         <button onClick={() => onClick("TO_DO")}>To Do</button>
  //       )}
  //       {category !== "DONE" && (
  //         <button onClick={() => onClick("DONE")}>Done</button>
  //       )}
  //     </li>
  //   );
}
export default ToDo;
