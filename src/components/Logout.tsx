import { useNavigate } from "react-router-dom";
import {Notify} from "notiflix";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      const token = localStorage.getItem("accessToken");

      try {
        if (token) {
          await axios.post(
            `http://localhost:5000/api-v1/user/userLogout`,
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          );
        }
        Notify.success("Logout successful");
      } catch (error) {
        console.error("logout failed", error);
        // Even if server logout fails, proceed with client-side logout
        Notify.failure("Server logout failed, clearing local session");
      } finally {
        // Clear AuthContext and localStorage regardless of API outcome
        auth.logout();
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userKey");
        navigate("/login");
      }
    };

    handleLogout();
  }, [navigate, auth]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600 text-lg">Logging you out...</p>
    </div>
  )
};
export default Logout;
