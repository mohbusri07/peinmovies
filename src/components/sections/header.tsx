import Link from 'next/link';
import Image from 'next/image';
import { Search, Home, Folder, Tag, Star } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full bg-[#1a1a1a] text-[#cccccc] font-sans border-b border-[#404040]">
      <div className="max-w-[1300px] mx-auto bg-[#1a1a1a]">
        <header id="masthead" className="site-header">
          {/* Top Branding Section */}
          <div className="site-branding flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
            {/* Logo */}
            <div className="logo flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <Link href="/" className="block hover:opacity-90 transition-opacity">
                <Image
                  src="/assets/images/JAvsubIDN-1-1.png"
                  alt="JAV SUB INDO"
                  width={293}
                  height={66}
                  className="h-auto w-[250px] md:w-[293px] object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Search Form */}
            <div className="header-search w-full md:w-auto flex-grow md:flex-grow-0 md:min-w-[400px]">
              <form className="flex items-stretch relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow bg-[#3a3a3a] text-[#cccccc] px-3 py-[9px] text-[13px] border border-[#404040] border-r-0 rounded-l-[2px] focus:outline-none placeholder-[#999999] w-full"
                />
                <button
                  type="button"
                  className="bg-[#0052ff] text-white px-3 py-[9px] rounded-r-[2px] hover:bg-[#0041cc] transition-colors flex items-center justify-center border border-[#0052ff] min-w-[40px]"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav
            id="site-navigation"
            className="main-navigation bg-[#2a2a2a] px-4 py-2 border-t border-[#404040] md:border-t-0"
          >
            <ul className="flex flex-wrap items-center gap-2 text-[14px] font-medium list-none m-0 p-0 justify-center md:justify-start">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-3 py-2 bg-[#0052ff] text-white rounded-[3px] hover:bg-[#0041cc] transition-colors leading-none"
                >
                  <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-white hover:bg-[#0041cc] rounded-[3px] transition-colors leading-none group"
                >
                  <Folder className="w-3.5 h-3.5 group-hover:text-white fill-current" strokeWidth={2.5} />
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tags"
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-white hover:bg-[#0041cc] rounded-[3px] transition-colors leading-none group"
                >
                  <Tag className="w-3.5 h-3.5 group-hover:text-white fill-current" strokeWidth={2.5} />
                  <span>Tags</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/actors"
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-white hover:bg-[#0041cc] rounded-[3px] transition-colors leading-none group"
                >
                  <Star className="w-3.5 h-3.5 group-hover:text-white fill-current" strokeWidth={2.5} />
                  <span>Actors</span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}