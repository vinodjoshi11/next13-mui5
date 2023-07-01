const currentEnv = process.env.NEXT_PUBLIC_HOST_ENV || "PRODUCTION";

const getUrl = () => {
  const urls = {
    LOCAL: "https://api.insurance.net",
    DEVELOPMENT: "https://api.insurance.net",
    PRODUCTION: "https://api.insurance.io",
    STAGING: "https://test-api.insurance.net"
  };
  return urls[currentEnv];
};
 
module.exports = {
  getUrl 
};
