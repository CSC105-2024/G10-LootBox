import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "../api/user";

export default function LogIn() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const schema = z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const res = await loginUser(data.username, data.password);
    if (res.success) {
      setLoginError("");
      localStorage.setItem("username", res.data.username);
      navigate("/main");
    } else {
      setLoginError(res.msg || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-100 px-4">
      <div className="w-full max-w-md">
        <div className="fixed top-12 left-0 right-0 flex justify-center z-50">
          <img src="../src/icon/logo.png" alt="LootBox Logo" className="w-52" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-orange-200 p-6 rounded-lg shadow-md w-full">
          <img src="../src/icon/loginLogo.png" alt="Login Logo" className="w-24 mx-auto" />

          <label className="block font-semibold">Username</label>
          <input
            {...register("username")}
            className="bg-white w-full p-2 border rounded mt-1"
            placeholder="Enter your Username"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          <label className="block font-semibold mt-4">Password</label>
          <input
            {...register("password")}
            type="password"
            className="bg-white w-full p-2 border rounded mt-1"
            placeholder="Enter your Password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}  

          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white p-2 mt-4 rounded font-bold border border-black cursor-pointer"
          >
            Login
          </button>

          {loginError && <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>}

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-black font-semibold hover:underline cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
