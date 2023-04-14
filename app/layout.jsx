import "./index.css";
//import "./globals.css";
import { Providers } from "./providers";
//

import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Fundacja everest",
  description: "Fundacja Everest",
  keywords: "Fundacja Everest, Fundacja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar children={children} />

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
