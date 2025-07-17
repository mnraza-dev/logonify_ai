import { Provider } from "@/app/Provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Logonify AI App",
  description: "AI-Powered Logos That Speak Your Brand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} antialiased`} suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar/>
         <main className="mx-8 px-2  py-4 max-w-8xl">
         {children}
         </main>
        </Provider>
      </body>
    </html>
  );
}
