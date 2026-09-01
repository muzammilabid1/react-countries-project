import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Headers } from "../UI/Headers";

export const AppLayout = () => {
  // const navigation = useNavigation();
  // if(navigation.status === "loading") return <Loading/>
  return (
    <>
      <Headers />
      <Outlet/>
      <Footer />
    </>
  );
};
