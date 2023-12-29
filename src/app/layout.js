import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/app/context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Systems' Dictionary",
  description:
    "An ever increasing archive of multiple words in multiple languages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
