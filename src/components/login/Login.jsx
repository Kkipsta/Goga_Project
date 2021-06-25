import { useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { emailRegex, passwordRegex } from "../utils/Regex";
import { checkIfUserExists } from "../../hooks/isAuth";



const Login = () => {
  const { register,handleSubmit,formState: { errors },getValues} = useForm();
  let history = useHistory();


  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");


  const onSubmit = async (data) => {
      
    if (checkIfUserExists(email, password)) {
      if (email === getValues(data.email && password === getValues(password))) {
        history.push("/");
      }
    }

    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    history.push("/");
  };

  useEffect(() => {
    if(checkIfUserExists(email, password) === true) {
        history.push("/");
    }
  }, [email, history, password])



  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form
        className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md"
        onSubmit={handleSubmit(onSubmit)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-gray-600 mb-2"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>

        <p className="mb-5 text-3xl uppercase text-gray-600">Login</p>



        <input
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          name="email"
          width="100%"
          type="email"
          placeholder="Email:"
          color="white"
          {...register("email", {
            required: "მიუთითეთ ფოსტა",
            pattern: {
              value: emailRegex,
              message: "სწორად ჩაწერეთ  ფოსტა",
            },
          })}
        />

        {errors.email && (
          <p className="form_errors f-size-p6 f-weight-r">
            {errors.email.message}
          </p>
        )}




        <input
          className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none"
          autoComplete="off"
          name="password"
          width="100%"
          type="password"
          placeholder="Password"
          color="white"
          {...register("password", {
            required: "აუცილებლად მიუთითეთ თქვენი პაროლი",
            minLength: {
              value: 5,
              message: "თქვენი პაროლი 5 სიმბოლოზე პატარაა",
            },
            pattern: {
              value: passwordRegex,
              message: "თქვენი პაროლი არ არის საკმარისად ძლიერი",
            },
          })}
        />

        {errors.password && (
          <p className="form_errors f-size-p6 f-weight-r">
            {errors.password.message}
          </p>
        )}



        <button
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80"
          id="login"
          type="submit"
        >
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};
export default Login;
