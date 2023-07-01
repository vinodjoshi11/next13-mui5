/* eslint-disable max-len */
import { makeStyles } from "@mui/styles";
export const useStyle = makeStyles((theme) => ({
  color: {
    fill: theme.palette.primary.dark
  }
}));
export const CustomerIcon = ({ color }) => {
  const classes=useStyle();
  return (
    <svg version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-64 -1078)">
          <g transform="translate(64 1078)">
            <rect width="20" height="20" />
            <path d="m10 0c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5c-2.7614 0-5-2.2386-5-5s2.2386-5 5-5m0 2c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3m9 14v4h-18v-4c0-2.67 6.33-4 9-4s9 1.33 9 4zm-9-2.1c-2.97 0-7.1 1.46-7.1 2.1v2.1h14.2v-2.1c0-0.64-4.13-2.1-7.1-2.1z"
              fill={color} className={color==="primary"?classes.color:""} fillRule="nonzero" />
          </g>
        </g>
      </g>
    </svg>
  );
};
