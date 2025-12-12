import Header from "@/components/sections/header";
import MainTitle from "@/components/sections/main-title";
import JavTerbaruVideos from "@/components/sections/jav-terbaru-videos";
import JavRandomVideos from "@/components/sections/jav-random-videos";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <main className="px-4 xl:px-0">
        <MainTitle />
        <JavTerbaruVideos />
        <JavRandomVideos />
      </main>
      <Footer />
    </div>
  );
}
