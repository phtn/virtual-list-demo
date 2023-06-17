// import "./globals.css";
import { Poppins } from "next/font/google";
import { Nav } from "@/components/Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "500"],
  style: "normal",
});

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
      <body className={`${poppins.className}`} style={{ margin: 0 }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
