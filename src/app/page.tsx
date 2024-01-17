import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Masayoshi",
  description: "Home Page",
  authors: {
    name: "Masayoshi",
    url: "https://github.com/MasaSensei",
  },
  icons: {
    icon: "/images/icon.jpeg",
  },
  openGraph: {
    title: "Home - Masayoshi",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
