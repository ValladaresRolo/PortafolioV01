import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import Appbar from "@/components/Appbar";
import FormContacto from "@/components/FormContacto"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Rolando Valladares",
  description: "Portafolio simple por Bootcamp FullStack UDD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Appbar />

          {children}


          <Projects />

          <FormContacto />
          <Footer />


        </Provider>
      </body>
    </html>
  );
}
