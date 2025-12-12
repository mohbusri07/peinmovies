import Link from 'next/link';
import Image from 'next/image';
import { Eye, Clock, Plus } from 'lucide-react';

const VIDEOS = [
  {
    id: 1,
    title: "JUR-495 Hamil Anak Dari Ayah Mertua – Reika Natsume",
    slug: "jur-495-hamil-anak-dari-ayah-mertua-reika-natsume",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/jur-495-2.jpg",
    views: "736",
    duration: "02:50:00",
  },
  {
    id: 2,
    title: "ADN-738 Hubungan Terlarang Dengan Boss – Miu Shiromine",
    slug: "adn-738-hubungan-terlarang-dengan-boss-miu-shiromine",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/adn-738-3.jpg",
    views: "407",
    duration: "02:00:00",
  },
  {
    id: 3,
    title: "ATID-646 Fantasi Liar Bu Guru di Perpus – Waka Misono",
    slug: "atid-646-fantasi-liar-bu-guru-di-perpus-waka-misono",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/atid-646-4.jpg",
    views: "251",
    duration: "02:00:00",
  },
  {
    id: 4,
    title: "MIDA-372 Kalau Ga Mau Viral, Turuti Aku!! – Momoka Izumi",
    slug: "mida-372-kalau-ga-mau-viral-turuti-aku-momoka-izumi",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/mida-372-5.jpg",
    views: "304",
    duration: "02:30:00",
  },
  {
    id: 5,
    title: "MIMK-254 Dijadikan Mainan Oleh Wanita Nakal – Moka Haruhi",
    slug: "mimk-254-dijadikan-mainan-oleh-wanita-nakal-moka-haruhi",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/mimk-254-6.jpg",
    views: "115",
    duration: "02:00:00",
  },
  {
    id: 6,
    title: "SONE-184 Kesempatan Langka Bisa Ngentot Artis Bokep – Tsukasa Aoi",
    slug: "sone-184-kesempatan-langka-bisa-ngentot-artis-bokep-tsukasa-aoi",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/sone-184-7.jpg",
    views: "253",
    duration: "02:00:00",
  },
  {
    id: 7,
    title: "DASS-203 Uang Jajan Dari Kakak Perempuan – Mei Satsuki",
    slug: "dass-203-uang-jajan-dari-kakak-perempuan-mei-satsuki",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/dass-203-8.jpg",
    views: "376",
    duration: "02:00:00",
  },
  {
    id: 8,
    title: "DASS-765 Ketua OSIS yang Masokis dan Mesum – Waka Misono",
    slug: "dass-765-ketua-osis-yang-masokis-dan-mesum-waka-misono",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6e2baef0-07da-43b5-8f42-9fc54d73f245-javsubidn-tv/assets/images/dass-765-9.jpg",
    views: "177",
    duration: "02:20:00",
  },
];

const JavTerbaruVideos = () => {
  return (
    <section className="widget widget_videos_block mb-10 w-full max-w-[1300px] mx-auto text-white">
      {/* Widget Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[16px] font-bold border-l-[4px] border-[#0052ff] pl-3 leading-tight font-[Arial,sans-serif]">
          Jav Subtitle Indonesia Terbaru
        </h2>
        <Link
          href="/category/jav-sub-indo"
          className="flex items-center gap-1.5 bg-[#0052ff] hover:bg-[#0041cc] text-white text-[13px] font-semibold px-4 py-2 rounded-[4px] transition-colors"
        >
          <Plus size={14} strokeWidth={4} />
          <span>More videos</span>
        </Link>
      </div>

      {/* Videos Grid */}
      <div className="videos-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {VIDEOS.map((video) => (
          <article
            key={video.id}
            className="loop-video thumb-block full-width flex flex-col group font-[Arial,sans-serif]"
          >
            <Link href={`/${video.slug}`} className="block">
              <div className="post-thumbnail relative rounded-[4px] overflow-hidden aspect-video bg-[#2a2a2a] mb-2 border border-[#404040]">
                {/* Thumbnail Image */}
                <Image
                  src={video.imageUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Badges Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] px-2 py-1 rounded-[2px] flex items-center gap-[6px]">
                    <Eye size={13} fill="currentColor" className="text-white" />
                    <span className="leading-none">{video.views}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[11px] px-2 py-1 rounded-[2px] flex items-center gap-[6px]">
                    <Clock size={13} className="text-white" />
                    <span className="leading-none">{video.duration}</span>
                  </div>
                </div>
              </div>

              {/* Video Title */}
              <header className="entry-header">
                <span className="text-white text-[13px] leading-[1.3] font-normal line-clamp-2 hover:text-[#0052ff] transition-colors">
                  {video.title}
                </span>
              </header>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default JavTerbaruVideos;