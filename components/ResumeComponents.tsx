 import React  from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPrinter,
  AiOutlineBuild,
  AiOutlineLink,
} from "react-icons/ai";
 
const ResumeComponets = () => {
    return (
        <div> 
        <div className=" container m-auto">
        <div className="flex justify-end">
              <button><AiFillPrinter size={30}/> Print </button>
          </div>
          <header className="flex   justify-center flex-col items-center ">
            <h2 className="text-4xl font-extrabold uppercase">MD Abir Khan</h2>
            <h2 className="text-2xl font-semibold">Web Developer</h2>
            <p>Call:01752103786 </p>
            <p className="text-xl">Email:abirk2day@gmail.com</p>
            <div className=" flex justify-between items-center space-x-4 mt-2">
              <span className="flex items-center">
                <AiFillLinkedin size={30} className=" text-red-500" />
  
                <a href="https://www.linkedin.com/in/developer-abir/">
                  https://www.linkedin.com/in/developer-abir
                </a>
              </span>
              <span className="flex items-center">
                <AiFillGithub size={30} className=" text-red-500" />{" "}
                <a href="https://github.com/developer-abir1">
                  https://github.com/developer-abir1
                </a>
              </span>
              <span className="flex items-center">
                <AiOutlineLink size={30} className=" text-red-500" />
                Portfolio
              </span>
            </div>
            <div>
              <p>112house Barisal, Bangladesh </p>
            </div>
          </header>
          <hr />
  
          <div className="mt-2">
            <h2 className="text-2xl font-bold uppercase">Summary</h2>
  
            <ul className=" list-disc	 ml-12  ">
              <li className=" ">
                Strong command in Javascript, Typescript, React, NextJS, SCSS,
                NodeJS
              </li>
              <li>
                Working Experience with NextJS, TypeScript, Redux, Node, MongoDB
              </li>
              <li>Comfortable with Git version control</li>
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text-2xl font-bold uppercase">Skills</h2>
            <ul className=" list-disc ml-12	">
              <li>
                <span className="  font-semibold">Language</span> - Javascript,
                Typescript
              </li>
              <li>
                {" "}
                <span className="font-semibold">Frontend</span> - ReactJS, NextJS,
                Redux, Styled Component
              </li>
              <li>
                {" "}
                <span className="font-semibold">Backend</span> - ExpressJS,
                MongoDB(CRUD), NodeJS,{" "}
              </li>
              <li  >
                <span className="font-semibold">Tools</span> - Git, Github,
                Heroku, Vercel, Figma, VS Code, Walletmix
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h2 className="text-2xl font-bold uppercase">Work Experience</h2>
            <div className=" grid gap-4 mt-4">
              <section>
                <h2 className=" flex items-center space-x-2">
              <AiOutlineBuild size={20}/>   <span  className="text-xl"> Building a E-commrce Website Amazone</span>
                  <a href="" className="   underline">
                    Live Site
                  </a>
                </h2>
                <ul className="list-disc ml-12">
                  <li>
                    This is an users can Sell used product and review. User and
                    Admin dashboard with custom authentication
                  </li>
                  <li>
                    Technologies- React, ReactQuery, TailwindCss, Typescript,
                    MongoDB,JWT
                  </li>
                  <li>Here I learnt to implement ReactQuery</li>
                </ul>
              </section>
              <section>
                <h2 className="flex items-center space-x-2">
                <AiOutlineBuild size={20}/>  <span className="text-xl">
                Create a Doctor portal - (Patient Appointment website ) 
                </span>
                  <a href="" className="underline">Live Site</a>
                </h2>
                <ul className="list-disc ml-12">
                  <li>
                    Get Appointment , pay with stripes, and review. User and Admin
                    dashboard with custom authentication.
                  </li>
                  <li>
                    I used React, tailwindCss,react icons, ExpressJS, MongoDB,
                    Stripe
                  </li>
                  <li>Here I learnt to implement Stripe Payment</li>
                </ul>
              </section>
  
              <section>
                <h2 className=" flex items-center space-x-2">
                <AiOutlineBuild size={20}/>  
                 <span className="text-xl"> Make a Stay Caction - (Hotel Booking website){" "}</span>
                  <a href="" className="underline">Live Site</a>
                </h2>
                <ul className="list-disc ml-12">
                  <li>
                    This is an users can Booked hotel room and review. User and
                    Admin dashboard with custom authentication
                  </li>
                  <li>
                    {" "}
                    Technologies- React, ReactQuery, TailwindCss, MongoDB,JWT
                  </li>
                  <li>
                    Here I learnt to implement JWT server side authentication
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase mt-2">Education &  award</h2>
            <ul className="list-disc ml-12">
              <li>
                <span className="font-semibold">Bachelor of Arts (B.A.) </span> -
                National University (section-2017-2018)
              </li>
              <li>
                <span className="font-semibold">Web Development Course</span>-{" "}
                Programming Hero - 2022
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold uppercase  mt-2">Hobbies</h2>
            <ul className="list-disc ml-12">
              <li>
                <span className="font-semibold">Reading</span> - I love to read
                books
              </li>
              <li>
                <span className="font-semibold">Travelling</span>- I love to
                travel
              </li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-2xl font-bold uppercase  mt-2">Languages</h2>
            <ul className="list-disc ml-12">
              <li>
                <span className="font-semibold">Bangla</span> - Native
              </li>
              <li>
                <span className="font-semibold">English</span>- Fluent in reading
                and writing, comfortable in speaking
              </li>
              <li>
                <span className="font-semibold">Hindi</span>- Fluent
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default ResumeComponets;