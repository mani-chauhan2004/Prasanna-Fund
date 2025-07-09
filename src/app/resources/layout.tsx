import Navbar from "@/components/navbar";
export const metadata = {
    title: "Resources | Pras Capital",
    description: "Resources for founders and investors."
  };
  
  export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar currentPath="resources" />
            {children}
        </>
    );
  } 