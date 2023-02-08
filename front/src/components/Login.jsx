import { useForm } from "react-hook-form";
import axios from 'axios'

export default function Login() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios.post("http://localhost:8001/login", data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("token", response.data.token);
            })
    }

    return (

        <form className="container mx-auto bg-pink-200 rounded-xl shadow border p-8 m-10">
            {/* <input type="email" {...register("email")} />
            <input type="password" {...register("password")} />
            <button onClick={onSubmit}>
                send
            </button> */}
        </form>

    )
}