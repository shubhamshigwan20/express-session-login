import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
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
    </div>
  );
};

export default Dashboard;
