import "tailwindcss/tailwind.css";
import "../styles/login.css";
import "../styles/dashboard.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans select-none">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
