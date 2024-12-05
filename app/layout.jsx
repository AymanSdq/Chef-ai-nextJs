import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cook Ai",
  description: "Generate Recipe using only your ingredient",
};

// Here you can all the public items or components that you want to repeat it self in evey page : Ex . Header , Footer


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header className="w-full px-12 py-4 flex items-center justify-between border-b-2">
        
          <Link href="/">
            <div className="flex gap-2 items-center font-bold">
              
                <img className="w-12" src="/chef-claud.svg" alt="Chef Claud Ai image" />
                <h1 className="text-xl">Cook Ai</h1>
              
            </div>
          </Link>

          {/* Mobile Header */}
          <div className="">
            <img className="w-10 sm:hidden" src="/burger-menu.svg" alt="Burger" />

            <nav className="gap-5 hidden sm:flex">
              <Link href="/Register" >About</Link>
              <Link href="/Register" >Pricing</Link>
              <Link href="/Register" >Contact</Link>
              <Link href="/Register" >Register</Link>
              <Link href="/Login"><p className="bg-red">Login</p></Link>
            </nav>
          </div>
        </header>


        {children}
      </body>
    </html>
  );
}


