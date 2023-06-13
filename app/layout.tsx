import "./globals.css";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VirtualizedList Demo",
  description:
    "Created with NextJS 13.4 | material-ui | styled-components | react-window | react-redux | next-auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
