import { CREATE } from "../../../app/services/RestClient";

export const setupPassword = (username, password, newPassword) => {
  return CREATE("/api/v1/setup-password", { username, password, newPassword });
};

export const forgotPassword = (email) => {
  return CREATE(`api/v1/forgot-password?username=${encodeURIComponent(email)}`);
};
