import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/userSlice";
import { message } from "antd";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    if (response.status !== 200) {
      message.error("Giriş başarısız!");
    }

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(userLogin(user));
      navigate("/");
    }
  };
  
  return (
    <div className="bg-gray-800 min-h-screen text-white flex flex-col items-center justify-center">
      <div className="max-w-lg w-full p-5">
        <div className="flex flex-col items-center mb-6">
          <img src="assets/iste.png" alt="login" className="w-52" />
          <h1 className="text-3xl font-bold my-2">HEP<span className="text-[#cd2147]">İSTE</span> Admin / Giriş Yap</h1>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">E-Posta Adresi</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              className="bg-black text-green-700 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">Parola</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              className="bg-black text-green-700 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-green-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-color text-white py-2 rounded-lg focus:outline-none focus:ring focus:border-green-500 hover:bg-[#cd2147]"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
