import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="flex flex-col max-w-2xl mx-auto items-center">
            <h1 className="text-2xl font-bold mb-4 text-neutral">Register</h1>
            <RegisterForm />
            <p className="mt-4 text-neutral">
          Already have an account? <Link className="text-info font-medium" to="/login">Login</Link>
            </p>
        </div>
    );
};

