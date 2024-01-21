import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import VirtualAssistance from "@/src/components/virtualAssistants";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SalimovHead />
      <Switcher />
      <VirtualAssistance />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
