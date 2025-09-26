import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";
import type { RegistrationFormData } from "../types/auth.types";
import { useState } from "react";

const RegistrationForm = () => {
  const navigate = useNavigate();
  
  const { register, handleSubmit, reset } = useForm<RegistrationFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onRegister = async (data: RegistrationFormData) => {
    setLoading(true);
    setError(null);
    try {
      const { fullname, email, password } = data;

      // Force role to 'user' for all registrations from the UI
      const payload = { fullname, email, password, userRole: 'user' } as const;

      const res = await axios.post(
        `http://localhost:5000/api-v1/user/userRegistration`,
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      );

      const created = res?.data?.user || res?.data?.createdUser || res?.data;
      if (created?.userRole && created.userRole !== 'user') {
        // Safety check: do not allow creating admin via this form
        throw new Error('Admin accounts cannot be created from the signup form.');
      }
      
      Notify.success("Registration successful");
      navigate("/login")
      reset();
    } catch (err: any) {
      const msg = err?.response?.data?.message || err?.message || "Registration failed. Please try again.";
      setError(msg);
      Notify.failure(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form 
        onSubmit={handleSubmit(onRegister)}
        className="w-full max-w-xs p-6 bg-white rounded shadow-md"
      >
        <h2 className="mb-2 text-2xl font-bold text-center">Register</h2>
        <p className="mb-6 text-xs text-center text-gray-500">Only customer accounts can be created here. Admins are added from the backend.</p>

        {error && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded p-2">{error}</div>
        )}
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 mb-1 border rounded"
            {...register("fullname", { required: true })}
          />
        </div>
        
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-1 border rounded"
            {...register("email", { required: true })}
          />
        </div>
        
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-1 border rounded"
            {...register("password", { required: true, minLength: 6 })}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full p-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 disabled:opacity-60"
        >
          {loading ? 'Creating account...' : 'Register'}
        </button>
        
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-yellow-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;