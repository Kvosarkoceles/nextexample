import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "T7 International Group",
  description: "T7 Group Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
