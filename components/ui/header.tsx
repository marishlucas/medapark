import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import Banner from "../banner";

export default function Header({ mode = "dark" }: { mode?: string }) {
  return (
    <header className={`absolute w-full z-30 ${mode !== "light" && "dark"}`}>
      <Banner />
      <div className="max-w-screen-xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="/pricing"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/wall-of-love"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Wall of Love
                </Link>
              </li>
              {/* 1st level: hover */}
              {/* <Dropdown title="Resources"> */}
              {/*   {/* 2nd level: hover */}
              {/*   <li> */}
              {/*     <Link */}
              {/*       href="/404" */}
              {/*       className="font-medium text-sm text-black hover:text-orange-600 flex py-2 px-5 leading-tight" */}
              {/*     > */}
              {/*       404 */}
              {/*     </Link> */}
              {/*   </li> */}
              {/*   <li> */}
              {/*     <Link */}
              {/*       href="/support" */}
              {/*       className="font-medium text-sm text-black hover:text-orange-600 flex py-2 px-5 leading-tight" */}
              {/*     > */}
              {/*       Support */}
              {/*     </Link> */}
              {/*   </li> */}
              {/* </Dropdown> */}
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="font-medium text-black hover:text-orange-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                >
                  Request Demo{" "}
                  <span className="tracking-normal text-black group-hover:text-orange-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
