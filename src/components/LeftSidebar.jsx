import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
	
	const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json()) 
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  
    return (
        <aside className="w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Categories Name:</h2>
			
			<div className="flex flex-col">
				
				{items.map((item) => (
						<a className='text-lg' key={item.id}>{item.segment_name}</a>
				))}
				
				
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">Pages:</h2>
			<div className="flex flex-col space-y-1">
			<li className="bg-white">
        <NavLink to="/" className="text-lg" href="">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-lg" href="">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-lg" href="">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="text-lg" href="">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="text-lg" href="">
          Profile
        </NavLink>
      </li>
			</div>
		</div>
		
		
	</nav>
</aside>
    );
};

export default LeftSidebar;