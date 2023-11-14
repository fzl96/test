import Image from "next/image";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { buttonVariants } from "@/components/ui/button";
import { NavMenu } from "@/components/nav-menu";

export async function Navbar() {
  const session = await auth();
  // @ts-ignore
  const user = session?.user;

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold items-center gap-1">
            <Image
              src="/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="rounded-md"
            />
            <span>Zaid bin Tsabit</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <NavMenu />
              {!user ? (
                <Link
                  href="/login"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
              )}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
