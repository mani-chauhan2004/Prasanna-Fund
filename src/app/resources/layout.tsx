import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Resources | Pras Capital",
    description: "Resources for founders and investors."
  };
  
  export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
  } 