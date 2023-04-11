import {   getProjects } from "@/sanity/sanity.schema-utils";
 import Image from "next/image";
import Link from "next/link";
 
export default async function Home() {
  const projects = await getProjects(); 
 

  return (
    <div className="max-w-5xl mx-auto py-20 ">
      <h1 className=" text-7xl  font-extrabold  ">
        Hello I&apos;m &nbsp;
        <span className="  bg-gradient-to-r from-orange-500  via-red-400 to-purple-600  bg-clip-text text-transparent transition-all">
          Abir Khan
        </span>
      </h1>

      <div className="grid grid-cols-2">
        <div></div>
        <div>
          
        </div>
      </div>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects </h2>
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className=" border border-gray-500  rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition "
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={780}
                height={300}
                className=" rounded-md"
              />
            )}
            <h1 className="my-4 px-4 font-bold bg-gradient-to-r  from-orange-400  via-red-500 to-purple-600   bg-clip-text text-transparent ">
              {project.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
