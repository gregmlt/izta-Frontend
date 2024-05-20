import { Inter } from "next/font/google";
import HomeContainer from "@/components/HomeContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
    <HomeContainer />
    </main>
  );
}
