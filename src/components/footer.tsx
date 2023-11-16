import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import {
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center text-sm gap-1 leading-loose">
            <p className="flex items-center gap-1">
              Copyrights
              <Icons.copyright className="w-4 h-5" />
              2023.
            </p>
            <p>All Rights Reserved by Zaid Bin Tsabit</p>
          </div>
        </div>
        <div className="flex ">
          {/* <p>Ikuti kami di </p> */}
          <div className="flex items-center gap-2">
            <a href={siteConfig.links.facebook} target="_blank" className=" ">
              <FaFacebookSquare className="w-6 h-6" />
            </a>
            <a href={siteConfig.links.youtube} target="_blank">
              <FaYoutube className="w-8 h-8" />
            </a>
            <a href={siteConfig.links.instagram} target="_blank">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
