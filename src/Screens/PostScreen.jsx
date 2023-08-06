import { useState } from "react";
import { data } from "../components/data";

const PostScreen = () => {
  const [posts, setPosts] = useState(data);

  const filterType = (category) => {
    setPosts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // const filterPrice = (price) => {
  //   setPosts(
  //     data.filter((item) => {
  //       return item.price === price;
  //     })
  //   );
  // };

  return (
    <div className="max-w-[1640px] m-auto  px-3 py-12">
      <h1 className="text-orange-600 text-center text-3xl font-bold">
        Top Rated Postie
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-2xl text-gray-800 my-1">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              className="px-4 bg-orange-400"
              onClick={() => setPosts(data)}
            >
              All
            </button>
            <button
              className="px-4 bg-orange-400"
              onClick={() => filterType("News")}
            >
              News
            </button>
            <button
              className="px-4 bg-orange-400"
              onClick={() => filterType("Sports")}
            >
              {" "}
              Sports
            </button>
            <button
              className="px-4 bg-orange-400"
              onClick={() => filterType("Education")}
            >
              Education
            </button>
            <button
              className="px-4 bg-orange-400"
              onClick={() => filterType("New")}
            >
              New
            </button>
            <button
              className="px-4 bg-orange-400"
              onClick={() => filterType("International")}
            >
              International
            </button>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl text-gray-800 my-1">Filter Price</p>
          <div>
            <button className="px-7 bg-green-600">$</button>
            <button className="px-7 bg-green-600">$$$</button>
            <button className="px-7 bg-green-600">$$$$</button>
            <button className="px-7 bg-green-600"> $$$$$</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        <h1>All postie</h1>
        {posts.map((post, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg  duration-300"
          >
            <h3>
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used{" "}
              <button className="bg-violet-500 px-4 ml-2 ">See More</button>
            </h3>
            <img
              src={post.image}
              alt={post.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <div className="flex items-center space-x-2 text-sm">
                <img src={post.image} className="w-8 rounded-full" />
                <div>
                  <p className="font-bold">{post.name}</p>
                  <p>yesterday - 5:45 </p>
                </div>
              </div>

              {/* <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {post.price}
                </span>
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostScreen;
