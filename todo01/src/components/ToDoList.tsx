import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  // const value = useRecoilValue(toDoState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

// const [toDo, setToDo] = useState("");
// const [toDoError, setToDoError] = useState("");
// const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//   const {
//     currentTarget: { value },
//   } = event;
//   setToDoError("");
//   setToDo(value);
// };
// const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   if (toDo.length < 10) {
//     return setToDoError("To do should be longer");
//   }
//   console.log("submit");
// };
// return (
//   <div>
//     <form onSubmit={onSubmit}>
//       <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//   </form>
//   </div>
// );

// interface IForm {
//   email: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: IForm) => {

//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onValid)}>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com",
//             },
//           })}
//           placeholder="Email"
//         />
//         <button>Add</button>
//         <span>{errors?.email?.message}</span>
//       </form>
//     </div>
//   );
// }

// export default ToDoList;
