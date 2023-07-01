import React  from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import NavListItem from "app/components/Elements/List/ListWithIcon"; 
import { useSidebarStyles } from "./style";  
import { CustomerIcon } from "./NavIcon/CustomerIcon";

const SideBar = (props) => {
  const { collapse } = useSelector((state)=>state);
  const isCollapse=collapse?.open || false; 
  const classes = useSidebarStyles();
  const [role, setRole] = React.useState("PEO");  
  const [allowedRoute, setAllowedRoute] = React.useState({
    customers:true 
  });
  const router = useRouter(); 
  const roleName = (role && role.toLocaleLowerCase()) || "PEO";  
   
  return (
    <List
      component={"nav"}
      className={`${classes.sideNavWrapper} ${!isCollapse ? classes.sideNavCollaspe : ""}`}
      aria-label="left navigation"
    >   
      {/* customers */}
      {allowedRoute && allowedRoute.customers && (
        <List
          className={
            props.open ? classes.TitleSelected : classes.TitleSelectedClose
          }
        >
          <Link href={`/${roleName}/customer/listing`} className={`${router.route.includes("/customer") ? classes.selected:""}`} 
            style={{textDecoration: "none",color:"primary"}}>
            <NavListItem
              selected={router.route.includes("/customer")}
              component={"div"}
              listIconClass={classes.dashboardIcon}
              primary={"Customers"}
              primaryTypographyProps={{ variant: "" }}
              listItemTextClasses="tooltipMenu"
              listIcon={<CustomerIcon color="#424242" />}
              hoverIcon={<CustomerIcon color={"primary"} />}
            />
          </Link>
        </List>)} 
    </List>
  );
};

export default SideBar;
