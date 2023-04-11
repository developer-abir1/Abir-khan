import { getProject } from "@/sanity/sanity.schema-utils";
import React from "react";
 import Image from "next/image";
 import {PortableText} from '@portabletext/react'

type Props = {
  params: { index: string };
};


async function SingleProjects({ params }: Props) {
  const slug = params.index;
  const project = await getProject(slug); 
  
  return (
    <section className=" max-w-3xl mx-auto py-20">
      <header className=" flex justify-between items-center">
      <h1 className="my-4 px-4 text-5xl drop-shadow  font-extrabold  bg-gradient-to-r  from-orange-500  via-red-400 to-purple-600   bg-clip-text text-transparent ">{project.name}</h1>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className=" bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition duration-75">
          View Project
        </a>
 
      </header>

      <div>
        <PortableText value={project.content}   />
      </div>
      <div>
        <Image src={project.image} alt={project.name} width={900} height={500} />
      </div>
     
    </section>
  );
}

export default SingleProjects;
