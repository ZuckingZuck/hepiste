import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Parser } from "html-to-react";
import useDocumentTitle from "../hooks/useDocumentTitle";
const PostDetail = () => {
  const { slugUrl } = useParams();
  const [postDetail, setPostDetail] = useState({});
  useDocumentTitle(`HEPİSTE - ${postDetail.BlogTitle}`)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/client/blog/${slugUrl}`
      );
      const json = await response.json();
      if (response.ok) {
        setPostDetail(json);
      }
    };

    fetchPosts();
  }, [slugUrl]);

  return (
    
    <div className="container mb-10 mx-auto mt-5 max-w-6xl">
      <div className="flex">
        <div className="container mx-auto my-8 p-8 bg-gray-400 bg-opacity-70 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">{postDetail.BlogTitle}</h1>
          <div className="flex flex-wrap mb-4">
            <span className="bg-[#CD2147] cursor-pointer text-gray-300 py-1 px-2 rounded mr-2">@{postDetail.UserName}</span>
          </div>
          <div className="mb-4 text-lg">{Parser().parse(postDetail.content)}</div>
          
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
