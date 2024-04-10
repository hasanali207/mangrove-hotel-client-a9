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

      <div className="flex justify-between">
        <div className="w-[200px]"><LeftSidebar></LeftSidebar></div>

        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{estate_title}</h1>
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
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
</div>


      <div className="w-[200px]">
        <RightSidebar></RightSidebar>
      </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Details;
