import { Raleway } from "next/font/google";
import "./globals.css";
import { Provider } from "@/Provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Avalanche Scaffold ",
  description: "Avalanche Scaffold with NextJs, RainbowKit and Wagmi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased font-raleway text-lg`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
