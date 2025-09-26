import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useState } from "react";
import type { LoginFormData, User } from "../types/auth.types";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<LoginFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();

  const onLogin = async (data: LoginFormData) => {
    setLoading(true);
    setError(null);
    try {
      const { email, password } = data;

      const res = await axios.post(
        `http://localhost:5000/api-v1/user/userLogin`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const existingUser = res?.data?.existingUser;
      if (!existingUser) {
        throw new Error("Invalid response from server");
      }

      const userPayload: User = {
        id: existingUser._id ?? existingUser.id ?? "",
        fullname: existingUser.fullname || existingUser.fullrname || "",
        email: existingUser.email,
        userRole: existingUser.userRole || "user",
      };
      const accessToken = existingUser.accessToken || res?.data?.accessToken || "";

      // Update AuthContext (also persists via AuthProvider effect)
      auth.login(userPayload, accessToken);

      // Maintain previous localStorage for compatibility
      localStorage.setItem("userKey", JSON.stringify({
        _id: userPayload.id,
        fullname: userPayload.fullname,
        email: userPayload.email,
        userRole: userPayload.userRole,
      }));
      if (accessToken) localStorage.setItem("accessToken", accessToken);

      if (userPayload.userRole === "admin") {
        navigate("/dashboard");
        Notify.success("Welcome Admin. You now have Admin access.");
      } else {
        navigate("/");
        Notify.info("Logged in with user access.");
      }

      Notify.success("Login Successful");
      reset();
    } catch (err: any) {
      console.log("login failed", err);
      const msg = err?.response?.data?.message || err?.message || "Login Failed";
      setError(msg);
      Notify.failure(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        className="w-full max-w-xs p-6 bg-white rounded shadow-md"
        onSubmit={handleSubmit(onLogin)}
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2">{error}</div>
        )}

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-yellow-500 rounded text-white hover:bg-yellow-600 disabled:opacity-60"
        >
          {loading ? "Signing in..." : 'Login'}
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? {" "}
          <Link to="/register" className="text-yellow-500 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};
export default LoginForm;