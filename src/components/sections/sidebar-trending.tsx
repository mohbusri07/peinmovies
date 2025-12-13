"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Star } from "lucide-react";

export default function SidebarTrending() {
  const [activeTab, setActiveTab] = useState<'mingguan' | 'bulanan' | 'semua'>('mingguan');

  const filterOptions = [
    { label: 'Genre All', value: 'genre' },
    { label: 'Season All', value: 'season' },
    { label: 'Studio All', value: 'studio' },
    { label: 'Status All', value: 'status' },
    { label: 'Type All', value: 'type' },
    { label: 'Order by Default', value: 'order' },
  ];

  const trendingItems = [
    {
      rank: 1,
      title: "Guilty Hole Uncensored",
      image: "https://i2.wp.com/yurinime.com/wp-content/uploads/2025/10/Guilty-Hole.jpg?resize=247,350",
      genres: ["Big Oppai", "Blowjob", "Intercrural", "Paizuri", "Schoolgirl"],
      rating: 6.40
    },
    {
      rank: 2,
      title: "Oshikake! Bakunyuu Gal Harem Seikatsu",
      image: "https://i0.wp.com/yurinime.com/wp-content/uploads/2025/12/Oshikake-Bakunyuu-Gal-Harem-Seikatsu.jpg?resize=247,350",
      genres: ["Big Oppai", "Blowjob", "Creampie", "Harem", "Paizuri"],
      rating: 6.40 // Placeholder as it's cut off
    },
    {
      rank: 3,
      title: "Hatsukoi Jikan",
      image: "https://i1.wp.com/yurinime.com/wp-content/uploads/2025/12/Yuusha-hime-Miria.jpg?resize=247,350", // Fallback image from valid list
      genres: ["Big Oppai", "Blowjob", "Creampie", "Maid", "Masturbation"],
      rating: 7.82
    },
    {
      rank: 4,
      title: "Nukitashi the Animation",
      image: "https://i3.wp.com/yurinime.com/wp-content/uploads/2025/08/Nukitashi-the-Animation.jpg?resize=247,350",
      genres: ["Comedy", "Erotica", "School", "Uncensored"],
      rating: 7.12
    },
    {
      rank: 5,
      title: "Netorareta Bakunyuu Tsuma-tachi",
      image: "https://i3.wp.com/yurinime.com/wp-content/uploads/2025/10/Netorare-Fighter-Yaricchingu.jpg?resize=247,350", // Fallback image from valid list
      genres: ["Big Oppai", "Blowjob", "Cheating", "Creampie", "MILF", "Netorare"],
      rating: 7.00 // Inferred
    }
  ];

  return (
    <aside className="w-full max-w-[300px] flex flex-col gap-5 text-[#b0b0b0] font-[family-name:var(--font-sans)]">
      
      {/* --- Filter Section --- */}
      <div className="bg-[#111827] rounded-lg p-5 border border-[#2a3f5f]">
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {filterOptions.map((option, idx) => (
            <div key={idx} className="relative">
              <select 
                className="w-full appearance-none bg-[#111827] border border-[#2a3f5f] text-[#b0b0b0] text-[13px] rounded px-3 py-2 pr-8 focus:outline-none focus:border-[#00a8cc] transition-colors cursor-pointer"
                defaultValue={option.value}
              >
                <option value={option.value}>{option.label}</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[#b0b0b0]">
                <ChevronDown size={14} />
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-[#00a8cc] hover:bg-[#0099b3] text-white font-semibold text-[14px] py-2.5 rounded transition-colors flex items-center justify-center gap-2 group">
          <Search size={14} className="group-hover:scale-110 transition-transform" />
          Search
        </button>
      </div>

      {/* --- Trending Hentai Section --- */}
      <div className="bg-[#111827] rounded-lg border border-[#2a3f5f]">
        {/* Header */}
        <div className="px-5 pt-4 pb-0">
          <h3 className="text-white text-[18px] font-semibold mb-4">Trending Hentai</h3>
          
          {/* Tabs */}
          <div className="flex bg-[#0a0e27] border border-[#2a3f5f] rounded overflow-hidden mb-4">
            <button 
              onClick={() => setActiveTab('mingguan')}
              className={`flex-1 py-1.5 text-[12px] font-medium text-center transition-colors ${
                activeTab === 'mingguan' 
                  ? 'bg-[#00a8cc] text-white' 
                  : 'text-[#b0b0b0] hover:text-[#00a8cc]'
              }`}
            >
              Mingguan
            </button>
            <button 
              onClick={() => setActiveTab('bulanan')}
              className={`flex-1 py-1.5 text-[12px] font-medium text-center transition-colors border-l border-r border-[#2a3f5f] ${
                activeTab === 'bulanan' 
                  ? 'bg-[#00a8cc] text-white' 
                  : 'text-[#b0b0b0] hover:text-[#00a8cc]'
              }`}
            >
              Bulanan
            </button>
            <button 
              onClick={() => setActiveTab('semua')}
              className={`flex-1 py-1.5 text-[12px] font-medium text-center transition-colors ${
                activeTab === 'semua' 
                  ? 'bg-[#00a8cc] text-white' 
                  : 'text-[#b0b0b0] hover:text-[#00a8cc]'
              }`}
            >
              Semua
            </button>
          </div>
        </div>

        {/* List Items */}
        <div className="flex flex-col">
          {trendingItems.map((item, index) => (
            <div 
              key={item.rank}
              className={`flex gap-3 p-4 hover:bg-[#1a233b] transition-colors ${
                index !== trendingItems.length - 1 ? 'border-b border-[#2a3f5f]' : ''
              }`}
            >
              {/* Rank Number */}
              <div className="flex-shrink-0 pt-1">
                <div className="w-[28px] h-[28px] flex items-center justify-center border border-[#2a3f5f] rounded text-[13px] font-medium text-[#b0b0b0]">
                  {item.rank}
                </div>
              </div>

              {/* Thumbnail */}
              <div className="flex-shrink-0 w-[60px] h-[85px] relative rounded overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="60px"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col min-w-0 flex-1">
                <Link href="#" className="text-white text-[14px] font-bold leading-tight mb-1.5 hover:text-[#00a8cc] transition-colors line-clamp-2">
                  {item.title}
                </Link>
                <div className="text-[#888] text-[11px] leading-snug mb-1.5 line-clamp-2">
                  {item.genres.map((genre, i) => (
                    <span key={i}>
                      {genre}{i < item.genres.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 mt-auto">
                  <div className="flex text-[#FFD700] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={10} 
                        fill={i < Math.floor(item.rating / 2) + 1 ? "currentColor" : "none"} 
                        className={i < Math.floor(item.rating / 2) + 1 ? "" : "text-[#4b5563]"}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#b0b0b0] ml-1">{item.rating.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}