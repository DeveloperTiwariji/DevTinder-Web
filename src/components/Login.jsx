import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

    const [email, setEmailId] = useState("");
    const [password, setPassswor] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async ()=>{
       try{ 
        const res = await axios.post(BASE_URL+"/login", {email,password}, {withCredentials: true})
        dispatch(addUser(res.data)); 
        return navigate("/");
    }catch(err){
       setError(err.response.data || "Something went wrong");
        console.error(err);
    }
    }

    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="card bg-white w-96 shadow-lg rounded-lg p-6">
          <div className="card-body">
            <h2 className="card-title text-center text-2xl font-semibold text-gray-700">Login</h2>
            
            <div className="mt-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text text-gray-600">Email ID</span>
                </div>
                <input 
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setEmailId(e.target.value)}
                />
              </label>
  
              <label className="form-control w-full max-w-xs mt-3">
                <div className="label">
                  <span className="label-text text-gray-600">Password</span>
                </div>
                <input 
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-blue-400"
                  onChange={(e) =>setPassswor(e.target.value)}
                />
              </label>
            </div>
  
            <div className="card-actions justify-center mt-4">
              <p className="text-red-600">{error}</p>
              <button className="btn btn-primary w-full hover:bg-blue-600 " onClick={handleLogin}>Login</button>
            </div>
  
            <p className="text-center text-sm text-gray-500 mt-3">
              Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  