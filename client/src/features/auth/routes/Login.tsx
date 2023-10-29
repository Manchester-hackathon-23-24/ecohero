import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-auto items-center">
            <h1 className="text-2xl font-bold mb-4 text-neutral">Login</h1>
            <LoginForm />
            <p className="mt-4 text-neutral">
          Don't have an account? <Link className="text-info font-medium" to="/register">Register</Link>
            </p>
        </div>
    );
};
