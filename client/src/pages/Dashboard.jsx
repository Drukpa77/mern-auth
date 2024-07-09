import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () =>{
    logout();
    navigate("/");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <>{!!user && <h1>Hi {user.name}!</h1>}</>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}
