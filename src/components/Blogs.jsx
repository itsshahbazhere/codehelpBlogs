import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="mt-16 mb-12 w-full flex justify-center items-center">
      <div className="w-[670px] p-4 m-2">

      {
        loading ? <Spinner/> :
      
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm">{post.title}</p>
            <p className="text-sm">
              By <span className="italic ">{post.author}</span> or{" "}
              <span className="font-bold underline">{post.category}</span>{" "}
            </p>
            <p className="text-sm">Posted on {post.date}</p>
            <p className="mt-4">{post.content}</p>
            <div className="flex flex-wrap mb-7">
              {post.tags &&
                post.tags.map((tag, index) => (
                  <p
                    className="text-xs text-blue-700 font-semibold mr-2"
                    key={index}
                  >
                    #{tag}
                  </p>
                ))}
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Blogs;
