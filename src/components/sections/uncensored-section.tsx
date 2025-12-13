import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

interface AnimeCardProps {
  title: string;
  image: string;
  type: string;
  episode: string;
  status?: "Completed" | "Ongoing";
  isSub: boolean;
}

const animeList: AnimeCardProps[] = [
  {
    title: "Guilty Hole Uncensored",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Guilty-Hole-20.jpg",
    type: "ONA",
    episode: "Episode Batch",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Netorare Fighter Yaricchingu!",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Netorare-Fighter-Yaricchingu-13.jpg",
    type: "OVA",
    episode: "Episode Batch",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Daraku Reijou The Animation",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Daraku-Reijou-The-Animation_-Hakoiri-Ojousama-Neto-14.jpg",
    type: "OVA",
    episode: "Episode 1",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Hitozuma no Kuchibiru",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Hitozuma-no-Kuchibiru-wa-Kan-Chuuhai-no-Aji-ga-Shi-15.jpg",
    type: "ONA",
    episode: "Episode OVA",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Harem Camp! Uncensored",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Harem-Camp-16.jpg",
    type: "BD",
    episode: "Episode 1 - 8",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Modaete yo, Adam-kun Uncensored",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Modaete-yo-Adam-kun-17.jpg",
    type: "BD",
    episode: "Episode 1 - 8",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Joshiochi! 2-kai kara Onnanoko ga Futtekita",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Joshiochi-2-kai-kara-Onnanoko-ga_-Futtekita-18.jpg",
    type: "ONA",
    episode: "Episode 1 - 9",
    status: "Completed",
    isSub: true,
  },
  {
    title: "Secret Mission: Sennyuu Sousakan",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Secret-Mission-Sennyuu-Sousakan-wa-Zettai-ni-Maken-19.jpg",
    type: "ONA",
    episode: "Episode 1 - 8",
    status: "Completed",
    isSub: true,
  },
];

function AnimeCard({
  title,
  image,
  type,
  episode,
  status,
  isSub,
}: AnimeCardProps) {
  return (
    <div className="group relative block w-full overflow-hidden rounded-md bg-[#111827] shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,168,204,0.3)]">
      <div className="relative aspect-[247/350] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        />

        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent opacity-100" />

        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <PlayCircle className="h-12 w-12 text-white opacity-80 transition-transform duration-300 hover:scale-110 hover:opacity-100" />
        </div>

        {status === "Completed" && (
          <div className="absolute -left-[3px] -top-[3px] z-20 h-[85px] w-[85px] overflow-hidden">
            <div className="absolute top-[18px] -left-[22px] w-[120px] -rotate-45 transform bg-[#ef4444] py-[4px] text-center text-[9px] font-bold uppercase leading-none text-white shadow-md">
              Completed
            </div>
          </div>
        )}

        {isSub && (
          <div className="absolute right-0 top-0 z-20 rounded-bl bg-[#ffbd00] px-1.5 py-0.5 text-[11px] font-bold text-black shadow-sm">
            Sub
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 z-20 p-3">
          <h2 className="mb-2 line-clamp-2 text-sm font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-[#00a8cc]">
            {title}
          </h2>
          <div className="flex items-center justify-between text-[11px] font-medium">
            <span
              className={`${
                type === "BD" ? "text-blue-400" : "text-[#ffa500]"
              }`}
            >
              {type}
            </span>
            <span className="text-blue-400">{episode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UncensoredSection() {
  return (
    <div className="w-full bg-[#0a0e27] py-6 text-white font-sans">
      <div className="container mx-auto max-w-[1920px] px-5">
        <div className="mb-5 flex items-center justify-between border-b border-[#2a3f5f] pb-2">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
            Uncensored
          </h3>
          <Link
            href="/genres/uncensored"
            className="rounded bg-[#2a4e69] px-2 py-1 text-[10px] font-bold uppercase text-white hover:bg-[#346080] md:bg-transparent md:p-0 md:text-[13px] md:font-medium md:normal-case md:text-[#00a8cc] md:hover:text-[#00d4ff]"
          >
            Lihat Semua
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-5">
          {animeList.map((anime, index) => (
            <Link 
              key={index} 
              href={`/${anime.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="block"
            >
              <AnimeCard {...anime} />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/genres/uncensored"
            className="rounded-md bg-[#344c5c] px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2a3f5f] focus:outline-none focus:ring-2 focus:ring-[#00a8cc] focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
          >
            Lihat Semua
          </Link>
        </div>
      </div>
    </div>
  );
}
