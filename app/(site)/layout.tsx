 
import Link from "next/link";
import "../globals.css";
 
export const metadata = {
  title: "MD Abir Khan",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  

  const activeStyle = 'bg-gradient-to-tr from-red-700 to-blue-400   text-tr text-white font-bold bg-transparent'

  const lsitItem = [
    <>
     <Link href={"/"}>
     <li className="     ">
        <a className={`  rounded-md h-8  ${activeStyle} `}>Home</a>
      </li>
      </Link> 
      <Link href={"/resume"}>
      <li className="     ">
        <a className={`  rounded-md h-8  `}>Resume</a>
      </li>
      </Link>
      <Link href={"/blogs"}>
      <li className="     ">
        <a className={`  rounded-md h-8  `}>Blogs</a>
      </li>
      </Link>
      <Link href={"/contact"}>
      <li className="     ">
        <a className={`  rounded-md h-8  `}>Contact Us </a>
      </li>
      </Link>
      <Link href={"/about"}>
      <li className="     ">
        <a className={`  rounded-md h-8  `}>About </a>
      </li>
      </Link>

      
    
    </>,
  ];

  return (
    <html lang="en">
      <body className="flex  min-h-screen  justify-between flex-col">
        <header>
          <div className="navbar   container m-auto  ">
            <div className="    w-full ">
              <span className="text-lg font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                MD Abir Khan
              </span>
            </div>
            <div className="navbar-end  ">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn bg-gradient-to-tr from-orange-400 via-red-500 to-pink-500  border-none text-white lg:hidden hover:scale-95 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu   menu-compact dropdown-content mt-3 p-2 shadow   rounded-box w-52  space-y-2  bg-white"
                >
                  {lsitItem}
                </ul>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1  space-x-2 ">
                {lsitItem}
              </ul>
            </div>
          </div>
        </header>
        <main className="px-4 py-4">{children}</main>
        <footer className=" flex justify-center ">
          <h2>Abir Khan {new Date().getFullYear()}</h2>
        </footer>
      </body>
    </html>
  );
}
