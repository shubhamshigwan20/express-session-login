import api from "../../api/axios";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  const [userEmail, setEmail] = useState("");

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const submitEmail = () => {
    try {
      const payload = {
        email: userEmail,
      };
      api.post("/change-email", payload);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      const result = await api.post("/logout");
      if (result.status === 200) {
        logout();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <p>
        <input
          type="email"
          name="email"
          value={userEmail}
          onChange={handleEmailChange}
        />
      </p>
      <button onClick={submitEmail}>Change Email</button>
    </div>
  );
};

export default Dashboard;
