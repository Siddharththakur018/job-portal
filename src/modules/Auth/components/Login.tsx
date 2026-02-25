import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Loader from "../../../components/Loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { register, login } = useAuth();
  const [activeTab, setActiveTab] = useState("Candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [authMode, setAuthMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      setLoading(true);
      await login(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (error: any) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async () => {
    try {
      setLoading(true);
      await register(name, email, password, activeTab.toLowerCase());
      alert("OTP sent to your email. Please verify.");
      setAuthMode("login");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const isFormValid =
    authMode === "login"
      ? email.trim() !== "" && password.trim() !== ""
      : name.trim() !== "" && email.trim() !== "" && password.trim() !== "";
  return (
    <>
      <div className="flex flex-col px-20 justify-center min-h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-bold leading-8">
          {authMode === "login" ? "Welcome Back" : "Please create an Account!"}
        </h1>
        <p className="leading-10 text-brand-gray mb-8">
          {authMode === "login"
            ? "Please enter your details to continue."
            : "Fill in the details to register."}
        </p>

        <div className="flex items-center bg-gray-200 rounded-md py-2 px-1 w-full">
          <button
            onClick={() => setActiveTab("Candidate")}
            className={`flex-1 py-2 font-semibold  transition-all duration-200  cursor-pointer ${
              activeTab === "Candidate"
                ? "bg-white shadow rounded-md"
                : "text-gray-600"
            }`}
          >
            Candidate
          </button>
          <button
            onClick={() => setActiveTab("Employer")}
            className={`flex-1 py-2 font-semibold  transition-all duration-200 cursor-pointer ${activeTab === "Employer" ? "bg-white rounded-md shadow" : "text-gray-600"}`}
          >
            Employer
          </button>
        </div>

        {authMode === "signup" && (
          <div className="mt-4">
            <label className="font-bold text-md">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 border-gray-200 shadow-md outline-none mt-2"
            />
          </div>
        )}

        <div className="mt-4">
          <div className="flex flex-col">
            <label className="font-bold text-md">Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2 border-gray-200 shadow-md outline-none mb-4 mt-2"
            />
          </div>
          <div>
            <label className="font-bold text-md">Password</label>
            <input
              type="password"
              placeholder="*****"
              value={password}
              minLength={6}
              maxLength={12}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-md p-2 border-gray-200 shadow-md outline-none mb-4 mt-2"
            />
          </div>
        </div>

        <button
          onClick={authMode === "login" ? loginUser : registerUser}
          disabled={loading || !isFormValid}
          className={`w-full py-2 rounded-md transition mt-5 mb-4 font-semibold text-lg 
    ${
      loading || !isFormValid
        ? "bg-blue-700 cursor-not-allowed text-white"
        : "bg-blue-700 cursor-pointer text-white"
    }
  `}
        >
          {loading ? <Loader /> : authMode === "login" ? "Login" : "Signup"}
        </button>

        <p className="text-center">
          {authMode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span
            onClick={() =>
              setAuthMode(authMode === "login" ? "signup" : "login")
            }
            className="text-blue-700 cursor-pointer ml-1 font-semibold"
          >
            {authMode === "login" ? "Create an Account" : "Login"}
          </span>
        </p>
      </div>
    </>
  );
};

export default Login;
