import { getBlogs } from '@/sanity/sanity.schema-utils';
import React from 'react';

const BlogsPage = async () => {
    const blogs = await getBlogs()

    return (
        <div>
          {
            blogs.map((blog) =>  (
                <div key={blog._id}>
                    <h1>{blog.title}</h1>
                    <p>{blog.slug}</p>
                </div>))

          }
        </div>
    );
};

export default BlogsPage;