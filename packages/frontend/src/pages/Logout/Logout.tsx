import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken, removeUser } from "../../utils";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
    removeUser();
    navigate("/");
  }, []);

  return <></>;
};
