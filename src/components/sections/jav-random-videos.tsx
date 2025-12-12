import Link from 'next/link';
import Image from 'next/image';
import { Eye, Clock, Plus } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "NGOD-127 Wanita Di Kantor Pusat Toserba – Hana Haruna",
    views: "665",
    duration: "01:57:43",
    image: "/assets/images/ngod-127-10.jpg",
  },
  {
    id: 2,
    title: "SONE-652 Om Kecewa Dengan Layananmu Dek – Emika Shirakami",
    views: "1K",
    duration: "02:30:00",
    image: "/assets/images/sone-652-11.jpg",
  },
  {
    id: 3,
    title: "SONE-396 WO'OW Kamu Ketahuan, Kerja Sambilan – Kokona Nakamori",
    views: "174",
    duration: "02:02:10",
    image: "/assets/images/sone-396-12.jpg",
  },
  {
    id: 4,
    title: "KSBJ-301 Adik Ipar Sang Fotografer Mesum – Maria Nagai, Kurumi Kashiwagi",
    views: "1K",
    duration: "02:07:28",
    image: "/assets/images/ksbj-301-13.jpg",
  },
  {
    id: 5,
    title: "SSIS-353 Syuting Tanpa Script – Aika Yumeno",
    views: "222",
    duration: "02:06:46",
    image: "/assets/images/ssis-353-14.jpg",
  },
  {
    id: 6,
    title: "WAAA-569 Nostalgia Dengan Mantan Pacar – Julia",
    views: "149",
    duration: "02:10:00",
    image: "/assets/images/waaa-569-15.jpg",
  },
  {
    id: 7,
    title: "START-046 Istri Cantik-ku Dibius Dan Digangbang Rame-Rame Oleh Teman Bejadnya!! – Rei Kamiki",
    views: "1K",
    duration: "02:12:23",
    image: "/assets/images/start-046-16.jpg",
  },
  {
    id: 8,
    title: "SPRD-1518 Ibu Mertua Pengen Di Ewe – Shiori Tsukada",
    views: "1K",
    duration: "02:14:21",
    image: "/assets/images/sprd-1518-17.jpg",
  },
  {
    id: 9,
    title: "JUY-638 Ketagihan Memek Istri Bawahan – Mari Takasugi",
    views: "525",
    duration: "01:56:38",
    image: "/assets/images/juy-638-18.jpg",
  },
  {
    id: 10,
    title: "JUL-258 Kecupan Bibir Sensual Yang Tak Terlupakan – Ami Kashiwagi",
    views: "432",
    duration: "01:55:22",
    image: "/assets/images/jul-258-19.jpg",
  },
  {
    id: 11,
    title: "STARS-964 Dokter Ini Dicabuli Pasien Yang Ditolongnya – Rei Kamiki",
    views: "760",
    duration: "01:57:43",
    image: "/assets/images/stars-964-20.jpg",
  },
  {
    id: 12,
    title: "SONE-367 FWB nya Pake Perasaan Sih... – Ai Hongou",
    views: "489",
    duration: "02:30:00",
    image: "/assets/images/sone-367-21.jpg",
  },
];

export default function JavRandomVideos() {
  return (
    <section className="w-full mb-10 max-w-[1300px] mx-auto px-4 xl:px-0">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-[16px] font-bold text-white border-l-[4px] border-[#0052ff] pl-3 font-[Arial,sans-serif] leading-[1.4]">
          Jav Random Videos
        </h2>
        <Link
          href="/?filter=random"
          className="bg-[#0052ff] hover:bg-[#0041cc] text-white text-[13px] font-semibold px-4 py-2 rounded-[4px] flex items-center gap-1.5 transition-colors font-[Arial,sans-serif]"
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={3} />
          <span>More videos</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
        {videos.map((video) => (
          <article key={video.id} className="group cursor-pointer">
            <Link href={`/video/${video.id}`} className="block">
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/9] mb-2 rounded-[4px] overflow-hidden border border-[#404040]">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Views Badge */}
                <div className="absolute bottom-2 left-2 bg-[rgba(0,0,0,0.6)] text-white text-[11px] px-2 py-1 rounded-[2px] flex items-center gap-1.5 font-[Arial,sans-serif] font-normal">
                  <Eye className="w-3 h-3" strokeWidth={2} /> 
                  <span className="leading-none mt-[1px]">{video.views}</span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.6)] text-white text-[11px] px-2 py-1 rounded-[2px] flex items-center gap-1.5 font-[Arial,sans-serif] font-normal">
                  <Clock className="w-3 h-3" strokeWidth={2} />
                  <span className="leading-none mt-[1px]">{video.duration}</span>
                </div>
              </div>
              
              {/* Video Title */}
              <h3 className="text-[13px] text-white leading-[1.3] font-[Arial,sans-serif] line-clamp-2 mt-[8px]">
                {video.title}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}