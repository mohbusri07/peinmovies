import Image from "next/image";
import { Play, Flame } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Define strict types for our data
interface AnimeCardData {
  id: number;
  title: string;
  image: string;
  episode: string;
  type: string;
  typeColor: "red" | "blue" | "sky"; // specific colors observed in design
  status?: "Completed";
  isHot?: boolean;
  link: string;
}

// Data mapped from the provided assets and context
const popularAnime: AnimeCardData[] = [
  {
    id: 1,
    title: "Guilty Hole Uncensored",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Guilty-Hole-2.jpg",
    episode: "Ep Batch",
    type: "ONA",
    typeColor: "red",
    status: "Completed",
    link: "#",
  },
  {
    id: 2,
    title: "1LDK + JK Ikinari Doukyo? Micchaku!? Hatsu Ecchi!!?",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/1LDK-JK-Ikinari-Doukyo-Micchaku-Hatsu-Ecchi-3.jpg",
    episode: "Ep 6",
    type: "OVA",
    typeColor: "sky",
    isHot: true,
    link: "#",
  },
  {
    id: 3,
    title: "Oshikake! Bakunyuu Gal Harem Seikatsu",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Oshikake-Bakunyuu-Gal-Harem-Seikatsu-4.jpg",
    episode: "Ep Batch",
    type: "OVA",
    typeColor: "sky",
    status: "Completed",
    link: "#",
  },
  {
    id: 4,
    title: "Maid Kyouiku: Botsuraku Kizoku Rurikawa Tsubaki The Animation",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Maid-Kyouiku-Botsuraku-Kizoku-Rurikawa-Tsubaki-The-5.jpg",
    episode: "Ep Batch",
    type: "OVA",
    typeColor: "sky",
    status: "Completed",
    link: "#",
  },
  {
    id: 5,
    title: "Nukitashi the Animation",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Nukitashi-the-Animation-6.jpg",
    episode: "Ep OVA2",
    type: "TV",
    typeColor: "blue",
    status: "Completed",
    link: "#",
  },
];

export default function PopularTodaySlider() {
  return (
    <section className="w-full bg-[#0a0e27] text-white py-5">
      <div className="container mx-auto px-5 max-w-[1920px]">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-[20px] font-semibold text-white">
            Terpopuler Hari Ini
          </h2>
        </div>

        {/* Horizontal Slider Area */}
        <div className="flex w-full gap-4 overflow-x-auto pb-4 scroll-smooth snap-x">
          {popularAnime.map((anime) => (
            <div
              key={anime.id}
              className="group relative flex-none w-[170px] sm:w-[200px] md:w-[247px] snap-start"
            >
              <Link href={anime.link} className="block group">
                {/* Image Container */}
                <div className="relative aspect-[247/350] w-full overflow-hidden rounded-lg bg-[#111827] shadow-lg border border-[#2a3f5f]">
                  {/* Main Image */}
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    fill
                    sizes="(max-width: 640px) 170px, (max-width: 768px) 200px, 247px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={anime.id <= 2}
                  />

                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Status Ribbon (Completed) - Top Left */}
                  {anime.status === "Completed" && (
                    <div className="absolute top-[12px] -left-[30px] z-20 w-[110px] -rotate-45 bg-[#ef4444] text-center shadow-md">
                      <span className="block px-8 py-[2px] text-[9px] font-bold uppercase tracking-wider text-white leading-tight">
                        Completed
                      </span>
                    </div>
                  )}

                  {/* Hot Fire Badge - Top Left (Alternative to Status) */}
                  {anime.isHot && (
                    <div className="absolute top-2 left-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
                      <Flame className="h-4 w-4 fill-[#ff4444] text-[#ff4444]" />
                    </div>
                  )}

                  {/* Type Badge - Top Right */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 z-20 rounded-bl-[4px] px-2 py-1 text-[11px] font-bold text-white shadow-sm",
                      anime.typeColor === "red" && "bg-[#ef4444]",
                      anime.typeColor === "blue" && "bg-[#0070f3]",
                      anime.typeColor === "sky" && "bg-[#0ea5e9]" // Closest to observed blue/cyan variation
                    )}
                  >
                    {anime.type}
                  </div>

                  {/* Play Icon - Centered */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                    <Play
                      className="h-12 w-12 fill-white text-white drop-shadow-md"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Bottom Badges - Absolute Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-between p-0">
                    {/* Episode Count Badge */}
                    <div className="bg-[#00a8cc] px-3 py-1 text-[11px] font-bold text-white rounded-tr-md">
                      {anime.episode}
                    </div>
                    {/* Sub/Dub Badge */}
                    <div className="bg-[#fbbf24] px-3 py-1 text-[11px] font-bold text-black rounded-tl-md">
                      Sub
                    </div>
                  </div>
                </div>

                {/* Title Below Image */}
                <div className="mt-3">
                  <h3 className="line-clamp-2 text-[15px] font-semibold leading-relaxed text-white transition-colors group-hover:text-[#00a8cc]">
                    {anime.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}