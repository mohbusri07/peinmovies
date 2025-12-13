"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, Star, X, ChevronDown, ChevronUp } from "lucide-react";

export default function NavigationHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isKoleksiOpen, setIsKoleksiOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleKoleksi = () => setIsKoleksiOpen(!isKoleksiOpen);

  return (
    <div className="relative z-50 w-full text-white font-sans">
      <div
        className={`w-full flex items-center justify-between px-5 h-[60px] bg-[#0a0e27] border-b border-[#2a3f5f] transition-colors duration-300 ${
          scrolled ? "bg-[#0a0e27]/95 backdrop-blur-sm" : ""
        }`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center text-white hover:text-[#00a8cc] transition-colors cursor-pointer"
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7" />
          </button>

          <Link href="/" className="flex items-center">
            <div className="relative w-[180px] h-[34px] sm:w-[200px] sm:h-[38px] lg:w-[270px] lg:h-[50px]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b586ec9e-d02f-4db8-9005-ec6a3025e179-yurinime-com/assets/images/Header-Yurinime4-1.png"
                alt="Yurinime"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 768px) 180px, 270px"
              />
            </div>
            <h1 className="sr-only">Yurinime</h1>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-[500px] mx-6">
          <form className="w-full relative group">
            <input
              type="text"
              placeholder="Cari..."
              className="w-full h-10 bg-[#111827] border border-[#2a3f5f] text-[#b0b0b0] text-sm rounded-lg px-4 pr-10 focus:outline-none focus:border-[#00a8cc] focus:ring-1 focus:ring-[#00a8cc] transition-all placeholder:text-[#6b7280]"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center text-[#b0b0b0] hover:text-[#00a8cc] transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="md:hidden p-2 text-white hover:text-[#00a8cc] transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <Link
            href="/random"
            className="flex items-center gap-2 bg-[#00a8cc] hover:bg-[#0099b3] text-white px-4 py-2 rounded-full font-semibold text-[13px] transition-all duration-300 shadow-[0_2px_4px_rgba(0,168,204,0.3)] hover:shadow-[0_4px_12px_rgba(0,168,204,0.5)] transform hover:-translate-y-0.5"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Surprise Me!</span>
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#111827] z-50 border-r border-[#2a3f5f] transform transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-[#2a3f5f]">
            <span className="text-lg font-bold text-white tracking-wide">MENU</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-[#b0b0b0] hover:text-[#ef4444] transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 py-4">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  href="/"
                  className="block px-6 py-3 text-[14px] font-medium text-[#00a8cc] bg-[#0a0e27]/50 border-r-4 border-[#00a8cc]"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/anime/list-mode/"
                  className="block px-6 py-3 text-[14px] font-medium text-[#b0b0b0] hover:text-white hover:bg-[#0a0e27]/30 transition-colors border-r-4 border-transparent hover:border-[#2a3f5f]"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Hentai List
                </Link>
              </li>
              
              <li>
                <div
                  className="flex items-center justify-between px-6 py-3 cursor-pointer text-[#b0b0b0] hover:text-white hover:bg-[#0a0e27]/30 transition-colors border-r-4 border-transparent hover:border-[#2a3f5f]"
                  onClick={toggleKoleksi}
                >
                  <span className="text-[14px] font-medium">Koleksi</span>
                  {isKoleksiOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#00a8cc]" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
                
                <div
                  className={`bg-[#0a0e27] overflow-hidden transition-all duration-300 ease-in-out ${
                    isKoleksiOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="flex flex-col py-2">
                    {[
                      { name: "Genre", slug: "genre" },
                      { name: "Season", slug: "season" },
                      { name: "Producer", slug: "producer" },
                      { name: "Studio", slug: "studio" },
                      { name: "Country", slug: "negara" }
                    ].map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}/`}
                          className="block px-10 py-2.5 text-[13px] text-[#b0b0b0] hover:text-[#00a8cc] transition-colors"
                          onClick={() => setIsSidebarOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2a3f5f] inline-block mr-2"></span>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li>
                <Link
                  href="/bookmark/"
                  className="block px-6 py-3 text-[14px] font-medium text-[#b0b0b0] hover:text-white hover:bg-[#0a0e27]/30 transition-colors border-r-4 border-transparent hover:border-[#2a3f5f]"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Bookmark
                </Link>
              </li>
              <li>
                <Link
                  href="/history/"
                  className="block px-6 py-3 text-[14px] font-medium text-[#b0b0b0] hover:text-white hover:bg-[#0a0e27]/30 transition-colors border-r-4 border-transparent hover:border-[#2a3f5f]"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  History
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-6 border-t border-[#2a3f5f]">
            <div className="flex items-center gap-2 opacity-70">
               <div className="relative w-8 h-8 rounded bg-[#0a0e27] flex items-center justify-center border border-[#2a3f5f]">
                 <span className="text-[#00a8cc] font-bold text-xs">YN</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-xs text-white font-semibold">YuriNime</span>
                  <span className="text-[10px] text-[#b0b0b0]">Streaming</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
