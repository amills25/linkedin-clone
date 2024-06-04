import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* <Toaster /> */}

        <header className="sticky border-b top-0 bg-white z-50">
          <Header />
        </header>

        <div className="bg-[#f4f2ed] flex-1 w-full">{children}</div>
      </body>
    </html>
  );
}
