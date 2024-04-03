import React, { useState } from "react";
import BlogPage from "./BlogPage";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import useDocumentTitle from "../../hooks/useDocumentTitle"; 
const Blog = () => {
  useDocumentTitle("HEPİSTE - Blog");
  const posts = useSelector((state) => state.post.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div id="blog" className="blog container mx-auto flex flex-col items-center justify-center  pb-5">
      <div className="bg-[#CD2147] mb-6 text-center text-white text-2xl py-3 px-6 w-full font-bold rounded">
        Blog Yazıları
      </div>

      <div className="container mx-auto">
        <div className=" blog-container p-3 lg:p-0 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
          {currentPosts?.map((post) => (
            <BlogPage
              key={post._id}
              title={post.BlogTitle}
              content={post.content}
              coverImageUrl={post.ImageUrl}
              author={post.UserName}
              SlugUrl={post.SlugUrl}
              createdAt={post.createdAt}
            />
          ))}
        </div>
        <div className="pagination-container text-center mt-5">
          <Pagination
            current={currentPage}
            total={posts?.length}
            pageSize={postsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
