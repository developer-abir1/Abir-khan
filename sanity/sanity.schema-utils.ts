import {    Blog, Projects } from "@/types/projects";
import { createClient, groq } from "next-sanity";

export function getProjects(): Promise<Projects[]> {
  const client = createClient({
    projectId: "f3cghhdg",
    dataset: "production", 

    apiVersion: "2023-04-09",

  });

  return client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt, 
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        
    } `);
}
export function getBlogs(): Promise<Blog[]> {
  const client = createClient({
    projectId: "f3cghhdg",
    dataset: "production",  
    apiVersion: "2023-04-09",

  });

  return client.fetch(groq`*[_type == "project"]{
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
  const client = createClient({
    projectId: "f3cghhdg",
    dataset: "production", 

    apiVersion: "2023-04-09",

  });

  return client.fetch(groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt, 
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
        
    } ` , { slug });
   

}