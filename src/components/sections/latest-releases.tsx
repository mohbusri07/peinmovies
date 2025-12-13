import Image from 'next/image';
import Link from 'next/link';
import { Play, Flame, ChevronRight } from 'lucide-react';

const ASSETS = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Yuusha-hime-Miria-7.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/1LDK-JK-Ikinari-Doukyo-Micchaku-Hatsu-Ecchi-3.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Kiken-na-Mori-Onigokko-8.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Maid-Kyouiku-Botsuraku-Kizoku-Rurikawa-Tsubaki-The-5.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Kore-tte-Naani-9.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Seikon-no-Aria-10.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Choro-Mesu-Days-11.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/H-na-Ane-Series-The-Animation-12.jpg"
];

const RELEASES = [
  {
    id: 1,
    title: "Yuusha-hime Miria Indo Sub Batch",
    image: ASSETS[0],
    status: "Completed",
    type: "OVA",
    episode: "Episode Batch",
  },
  {
    id: 2,
    title: "1LDK + JK Ikinari Doukyo Micchaku Hatsu Ecchi",
    image: ASSETS[1],
    status: "Hot",
    type: "OVA",
    episode: "Episode 6",
  },
  {
    id: 3,
    title: "Kiken na Mori Onigokko Episode 02",
    image: ASSETS[2],
    status: "Hot",
    type: "OVA",
    episode: "Episode 2",
  },
  {
    id: 4,
    title: "Maid Kyouiku Botsuraku Kizoku Rurikawa Tsubaki",
    image: ASSETS[3],
    status: "Completed",
    type: "OVA",
    episode: "Episode Batch",
  },
  {
    id: 5,
    title: "Kore tte Naani? Episode 01",
    image: ASSETS[4],
    status: "Hot",
    type: "OVA",
    episode: "Episode 1",
  },
  {
    id: 6,
    title: "Seikon no Aria Episode 01",
    image: ASSETS[5],
    status: "Hot",
    type: "OVA",
    episode: "Episode 1",
  },
  {
    id: 7,
    title: "Choro Mesu Days Episode 01",
    image: ASSETS[6],
    status: "Hot",
    type: "OVA",
    episode: "Episode 1",
  },
  {
    id: 8,
    title: "H na Ane Series The Animation Episode 01",
    image: ASSETS[7],
    status: "Hot",
    type: "OVA",
    episode: "Episode 1",
  }
];

function AnimeCard({ item }: { item: typeof RELEASES[0] }) {
  return (
    <article className="group flex flex-col w-full relative">
      <div className="relative w-full aspect-[247/350] rounded-md overflow-hidden bg-[#1a2347] border border-[#2a3f5f]/50">
        <Image 
          src={item.image} 
          alt={item.title}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          priority={item.id <= 4}
        />
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
          <Play className="fill-white text-white w-12 h-12 drop-shadow-lg" strokeWidth={0} />
        </div>

        <div className="absolute top-1.5 right-1.5 z-20">
          <span className="bg-[#ff9500] text-white text-[10px] font-bold px-1.5 py-[2px] rounded-[3px] shadow-sm tracking-wide block">
            Sub
          </span>
        </div>

        {item.status === 'Hot' && (
          <div className="absolute top-2 left-2 z-20">
            <div className="bg-[#ff4444] w-[26px] h-[26px] rounded-full flex items-center justify-center shadow-md">
              <Flame className="w-3.5 h-3.5 fill-white text-white" />
            </div>
          </div>
        )}

        {item.status === 'Completed' && (
          <div className="absolute top-0 left-0 z-20 pointer-events-none overflow-hidden w-[80px] h-[80px]">
            <div className="absolute top-[12px] left-[-28px] w-[100px] bg-[#d32f2f] text-white text-[9px] font-bold text-center py-[3px] -rotate-45 shadow-sm transform origin-center tracking-tight leading-none">
              COMPLETED
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-[32px] bg-[rgba(0,0,0,0.7)] backdrop-blur-[2px] flex items-center justify-between px-3 z-20 border-t border-white/5">
          <span className={`text-[11px] font-bold uppercase ${item.type === 'OVA' ? 'text-[#ff9500]' : 'text-white'}`}>
            {item.type}
          </span>
          <span className="text-[11px] font-bold text-[#00a8cc]">
            {item.episode}
          </span>
        </div>
      </div>

      <div className="pt-3 px-0.5">
        <h3 className="text-[14px] font-semibold leading-[1.4] text-white line-clamp-2 group-hover:text-[#00a8cc] transition-colors">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export default function LatestReleases() {
  return (
    <section className="w-full bg-[#0a0e27] text-white font-sans py-6">
      <div className="container mx-auto max-w-[1920px] px-5">
        <div className="flex items-center justify-between mb-5 relative pb-3 border-b border-[#2a3f5f]">
          <h2 className="text-[20px] font-semibold text-white leading-[1.3]">
            Rilisan Terbaru
          </h2>
          <Link 
            href="#" 
            className="text-[10px] font-bold bg-[#333] hover:bg-[#00a8cc] text-white px-2 py-1 rounded-[3px] transition-colors uppercase tracking-tight"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {RELEASES.map((item) => (
            <AnimeCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link 
            href="#" 
            className="flex items-center gap-2 bg-[#00a8cc] hover:bg-[#0099b3] text-white py-2 px-6 rounded-md text-[14px] font-medium transition-colors group"
          >
            Selanjutnya <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
