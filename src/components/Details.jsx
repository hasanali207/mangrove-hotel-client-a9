import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
const Details = () => {
  const items = useLoaderData();
  const { id } = useParams();
  const item = items.find((item) => item.id == id);

  const {
    image_url,
    price,
    estate_title,
    segment_name,
    description,
    facilities,
    location,
    Area,
    Status,
  } = item;

  return (
    <>
      <Navbar></Navbar>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[200px]"><LeftSidebar></LeftSidebar></div>

        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-3xl text-black font-bold md:tracking-tight md:text-4xl">{estate_title}</h1>
			<figure>
                <img src={image_url} alt="" />
            </figure>
		</div>
		<div className="dark:text-gray-800">
			<p>{description}</p>
		</div>

	</article>
	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
						
			{facilities.map((item) => (
						<a key={item.id} rel="noopener noreferrer" href="#" className=" bg-blue rounded-lg px-3 py-1 text-white hover:underline dark:bg-violet-600 dark:text-gray-50">{item}</a>
				))}

		</div>

	</div>
</div>


      <div className="w-full lg:w-[200px] p-4">
        <RightSidebar></RightSidebar>
      </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Details;
