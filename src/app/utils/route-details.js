export const ALL_ROUTES = {
  CUSTOMER_LISTING: "/admin/customer/listing",
  USER_DASHBOARD: "/user/dashboard"
};
const { CUSTOMER_LISTING,USER_DASHBOARD} = ALL_ROUTES;
export const ALL_AUTH_ROUTE = [CUSTOMER_LISTING,USER_DASHBOARD];
export const ROUTE_PERMISSION_MAPPING=[
  {
    appId: "1",
    url: CUSTOMER_LISTING
  } 
];