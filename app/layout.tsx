import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "MD Abir Khan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



 

  return (
    <html lang="en">
      <body className="flex  min-h-screen  justify-between flex-col">
        <header>
          <nav className=" flex items-center px-4">
            <Link
              href={"/"}
              className=" text-4xl  font-extrabold flex-1  bg-gradient-to-b from-orange-500  via-red-400 to-purple-600  bg-clip-text text-transparent transition"
            >
              Abir Khan
            </Link>
            <ul className=" flex justify-between space-x-4">
              <Link href={"/"}>
                {" "}
                <li className="  text-2xl    border-b-2 cursor-pointer   border-red-400 hover:text-blue-500 hover:scale-75 transition-all">
                  Home
                </li>
              </Link>
              <Link href={"/resume"}>
                {" "}
                <li className="  text-2xl hover:border-b cursor-pointer  hover:border-red-400 hover:text-blue-500 hover:scale-75 transition-all">
                  Resume
                </li>
              </Link>
              <Link href={"/blogs"}>
                {" "}
                <li className="  text-2xl hover:border-b cursor-pointer  hover:border-red-400 hover:text-blue-500 hover:scale-75 transition-all">
                  Blogs
                </li>
              </Link>
              <Link href={"/contact"}>
                {" "}
                <li className="  text-2xl hover:border-b cursor-pointer  hover:border-red-400 hover:text-blue-500 hover:scale-75 transition-all">
                  Contact Us
                </li>
              </Link>
              <Link href="/about">
                {" "}
                <li className="  text-2xl hover:border-b  cursor-pointer hover:border-red-400 hover:text-blue-500 hover:scale-75 transition-all">
                  About
                </li>
              </Link>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className=" flex justify-center ">
          <h2>Abir Khan {new Date().getFullYear()}</h2>
        </footer>
      </body>
    </html>
  );
}
