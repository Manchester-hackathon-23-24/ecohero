import Navbar from "./components/Navbar";
import { ChallengesList } from "./features/challenges/components/ChallengesList";
import { Dashboard } from "./features/admin";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { CreateChallenge } from "./features/challenges";
import { Login, Register } from "./features/auth";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();

    return (
        <div className="py-4 bg-slate-300 min-h-screen h-full">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            {location.pathname !== "/login" &&
          location.pathname !== "/register" && (
                <div className="container mx-auto text-white">
                    <Navbar />
                    <main className="container mx-auto mt-4">
                        <Routes>
                            <Route path="/" element={<ProtectedRoute />}>
                                <Route path="/" element={<ChallengesList />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route
                                    path="/challenge/new"
                                    element={<CreateChallenge />}
                                />
                            </Route>
                        </Routes>
                    </main>
                </div>
            )}
        </div>
    );
};

export default App;