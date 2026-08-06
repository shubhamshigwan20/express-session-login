import { useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleLogin = async () => {
    try {
      const result = await api.post("/login", details);
      if (result.status === 200) {
        login();
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>
        Name:{" "}
        <input
          type="text"
          name="username"
          value={details.username}
          onChange={handleInputChange}
        />
      </p>
      <p>
        Password:{" "}
        <input
          type="text"
          name="password"
          value={details.password}
          onChange={handleInputChange}
        />
      </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
