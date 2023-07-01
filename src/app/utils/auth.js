import React, { useEffect } from "react";
import {STORAGE} from "../services/localStorage.service";

export const useSetToken = ({ token }) => {
  useEffect(() => {
    STORAGE.set("token", token);
  }, []);
};
