import { useForm } from "react-hook-form";


export default function Register() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (

        <form className="flex flex-col place-content-evenly mx-auto bg-blue-200 rounded-xl shadow border p-8 m-10">
            <input type="text" {...register("fullName")}
            className="place-content-around"/>
            <input type="email" {...register("email")}
            className="place-content-around"/>
            <input type="password" {...register("password")}/>
            <button onClick={onSubmit}>
                send
            </button>
        </form>

    )
}