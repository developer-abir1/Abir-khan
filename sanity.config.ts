import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
 import schemas from "./sanity/schemas";
 
 export const config = defineConfig({
   projectId: "f3cghhdg",
    dataset: "production",
    title: "My Sanity Studio",
    apiVersion: "2021-03-25",
    basePath:'/admin',
    plugins: [deskTool()],
    schema: {types: schemas} 
     
 })