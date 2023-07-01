import React from "react";
import { STORAGE } from "../services/localStorage.service";
import { useRouter } from "next/router";

export default function useRole(props) {
  const [role, setRole] = React.useState("manager");
  const router = useRouter();

  React.useEffect(() => {
    const role = STORAGE.get("role");
    setRole(role);
  }, []);

  React.useEffect(() => {
    const role = STORAGE.get("role");
    setRole(role);
  }, [router.pathname]);

  return [role, setRole];
}
