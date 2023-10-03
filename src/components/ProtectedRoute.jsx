import React, { useContext, useEffect } from "react";
import { Auth } from "../components/providers/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { User } = useContext(Auth);

  useEffect(() => {
    if (!User) {
      toast.error(`You don't have an account`);
      navigate("/Login");
      return;
    }
    if (!User.isAdmin) {
      toast.error(`You don't have an access`);
      navigate("/");
      return;
    }
  }, [User]);

  return <>{children}</>;
};

export default ProtectedRoute;
