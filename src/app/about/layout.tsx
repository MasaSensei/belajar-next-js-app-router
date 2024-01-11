import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white p-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
