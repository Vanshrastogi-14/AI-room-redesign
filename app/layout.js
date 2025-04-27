import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";



import { Outfit } from 'next/font/google';
import Provider from "./provider";

const outfit = Outfit({
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-outfit', 
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" className={outfit.className}>
      <body>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}


