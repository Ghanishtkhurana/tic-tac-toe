import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/system";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Toaster position="top-right" />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
