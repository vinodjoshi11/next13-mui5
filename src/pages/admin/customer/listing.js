import Head from "next/head"; 
import { isValidUser } from "app/services/auth.service";  
import withLayoutSecondary from "app/components/Containers/WithLayoutSecondary"; 
export const getServerSideProps = (ctx) => isValidUser(ctx);
const CustomersWrapper = () => { 
  
  return (
    <> 
   Welcome Customer
    </>
  );
};

function Customers() {
  return (
    <div>
      <Head>
        <title>Customers</title>
      </Head>
      <CustomersWrapper/>
    </div>
  );
}

export default withLayoutSecondary(Customers);
