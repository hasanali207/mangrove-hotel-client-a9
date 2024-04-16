import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img1 from '../assets/ig-1.jpg'
import img2 from '../assets/ig-2.jpg'
import img3 from '../assets/ig-3.jpg'


const Services = () => {
    return (
        <>
            <Navbar></Navbar>
            
            <section className="p-4 lg:p-8 bg-gray-800 text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img3} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={img1} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img2} alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
				<span className="text-xs uppercase text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>
            
            <Footer></Footer>
        </>
    );
};

export default Services;