import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not All wanderers are lost.</h2>
      <p>- Tolkien</p>
      <p>
        Go back to <Link href="/">home page</Link>
      </p>
    </div>
  );
}
