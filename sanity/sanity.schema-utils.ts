 import {    Blog,   Projects } from "@/types/projects";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";

export function getProjects(): Promise<Projects[]> {
   

  return createClient(clientConfig).fetch(groq`*[_type == "project"]{
        _id,
        _createdAt, 
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        
    } `);
}

export async function getProject(slug: string): Promise<Projects> {
  

  return createClient(clientConfig).fetch(groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt, 
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        
    } ` , { slug });
   

}


export function getBlogs(): Promise<Blog[]> {
 

  return createClient(clientConfig).fetch(groq`*[_type == "blog"]{
        _id,
        _createdAt, 
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        
    } `);
}
 
  