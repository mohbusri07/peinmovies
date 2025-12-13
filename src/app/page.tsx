import NavigationHeader from "@/components/sections/navigation-header";
import PopularTodaySlider from "@/components/sections/popular-today-slider";
import LatestReleases from "@/components/sections/latest-releases";
import UncensoredSection from "@/components/sections/uncensored-section";
import SidebarTrending from "@/components/sections/sidebar-trending";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0e27] flex flex-col">
      <NavigationHeader />
      
      <main className="flex-1">
        <PopularTodaySlider />
        
        <div className="container mx-auto max-w-[1920px] px-5 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <LatestReleases />
              <UncensoredSection />
            </div>
            
            <div className="hidden lg:block w-[300px] flex-shrink-0">
              <SidebarTrending />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
