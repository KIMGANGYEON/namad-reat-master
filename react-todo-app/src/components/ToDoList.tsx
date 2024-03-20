import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "./atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
//   extraError?: string;
// }

// function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IForm>({
//     defaultValues: {
//       email: "@naver.com",
//     },
//   });
//   const onValid = (data: any) => {
//     if (data.password !== data.password1) {
//       setError(
//         "password1",
//         { message: "Password are not the same" },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "Server offline." });
//   };
//   console.log(errors);
//   return (
//     <div>
//       <form
//         style={{ display: "flex", flexDirection: "column" }}
//         onSubmit={handleSubmit(onValid)}
//       >
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only use naver.com",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", {
//             required: "Write!!",
//             validate: {
//               noNico: (value) =>
//                 value.includes("nico") ? "no nicos allowed" : true,
//               noNick: (value) =>
//                 value.includes("nick") ? "no nick allowed" : true,
//             },
//           })}
//           placeholder="First Name"
//         />
//         <span>{errors?.firstName?.message}</span>

//         <input
//           {...register("lastName", { required: "Write!!" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>

//         <input
//           {...register("username", {
//             required: "Write!!",
//             minLength: { value: 10, message: "long" },
//           })}
//           placeholder="Username"
//         />
//         <span>{errors?.username?.message}</span>

//         <input
//           {...register("password", { required: "Write!!" })}
//           placeholder="Password"
//         />
//         <span>{errors?.password?.message}</span>

//         <input
//           {...register("password1", {
//             required: "Password is required",
//             minLength: { value: 5, message: "Your password is too short." },
//           })}
//           placeholder="Password1"
//         />
//         <span>{errors?.password1?.message}</span>
//         <button>Add</button>
//         <span>{errors?.extraError?.message}</span>
//       </form>
//     </div>
//   );
// }

export default ToDoList;
