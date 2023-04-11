import { getBlogs } from "@/sanity/sanity.schema-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return (
    <div className=" container m-auto">
      <h2 className=" my-8 uppercase text-center bg-gradient-to-t from-orange-400 via-red-500 to-purple-500 bg-clip-text  text-transparent transition  font-bold text-6xl">
        Blogs
      </h2>
      <div className="grid  grid-cols-3 gap-8 ">
        {blogs.map((blog) => (
          <Link
          href={`/blogs/${blog.slug}`}
            key={blog._id}
            className=" border-2 border-gray-300 p-1 rounded-md
            
            
            hover:scale-105 hover:border-blue-300 transition
            "
          >
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                width={750}
                height={300}
                className=" rounded-lg"
              />
            )}
            <h2 className=" py-4   bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text  text-transparent transition  font-bold  ">
              {blog.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
