import Error from "next/error";
export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  const errorCode = res.ok ? false : res.statusCode; 
  return {
    props: { errorCode:errorCode, stars: repo.stargazers_count }
  };
};
 
export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} title={"Error Page"}/>;
  }

  return <div>Next stars: {stars}</div>;
}

/* 
    Custom Error page with default next js configurations
*/