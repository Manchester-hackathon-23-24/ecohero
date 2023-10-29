import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../api/login";
import { setCredentials } from "../authSlice";

const LoginFormSchema = yup.object({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required")
});
type LoginFormValues = yup.InferType<typeof LoginFormSchema>;

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: yupResolver(LoginFormSchema)
    });
    const { mutateAsync: login } = useLoginMutation();
    const onLogin = async (data: LoginFormValues) => {
        const userData = await login(data);
        setCredentials(userData);
    };

    return (
        <form className="flex flex-col w-full space-y-3" onSubmit={handleSubmit(onLogin)}>
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
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <button type="submit" className="btn btn-primary mt-4">
                Login
            </button>
        </form>
    );
};

export default LoginForm;