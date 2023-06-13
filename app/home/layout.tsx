import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
