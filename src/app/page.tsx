import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AchievementsSection from "./components/home/AchievmentsSection";

export default function Home() {
  return (
    <>
      <main className="p-0 bg-neutral w-full">
        <div className="max-w-450 mx-auto">
          <HeroSection />
          <AchievementsSection />
        </div>
      </main>
    </>
  );
}
