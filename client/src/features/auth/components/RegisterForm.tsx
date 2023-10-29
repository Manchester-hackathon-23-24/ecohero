import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterMutation } from "../api/register";
import { redirect } from "react-router-dom";


const RegisterFormSchema = yup.object({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
    password2: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("This field is required"),
});
type RegisterFormValues = yup.InferType<typeof RegisterFormSchema>;

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: yupResolver(RegisterFormSchema),
    });
    const { mutateAsync: signup } = useRegisterMutation();
    const onRegister = async (data: RegisterFormValues) => {
        const userData = await signup(data);
        if (userData) {
            return redirect("/");
        }
    };

    return (
        <form className="flex flex-col w-full space-y-3" onSubmit={handleSubmit(onRegister)}>
            <input
                {...register("email")}
                type="email"
                placeholder="Your email"
                className="input input-bordered input-primary w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <input
                {...register("password")}
                type="password"
                placeholder="Your password"
                className="input input-bordered input-primary w-full"
            />
            {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
            )}
            <input
                {...register("password2")}
                type="password"
                placeholder="Confirm password"
                className="input input-bordered input-primary w-full"
            />
            {errors.password2 && (
                <p className="text-red-500">{errors.password2.message}</p>
            )}
            <button type="submit" className="btn btn-primary mt-4">
        Login
            </button>
        </form>
    );
};

export default RegisterForm;
