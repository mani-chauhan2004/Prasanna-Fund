import React from "react";
import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Contact Pras Capital",
  description: "Contact Pras Capital for investment opportunities."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar currentPath="/contact" />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
} 