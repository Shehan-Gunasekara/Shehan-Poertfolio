import ContactUs from "@/src/components/contactus";
import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import VirtualAssistance from "@/src/components/virtualAssistants";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Fragment>
      <SalimovHead />
      {/* <Switcher /> */}
      <VirtualAssistance />

      <ContactUs />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
