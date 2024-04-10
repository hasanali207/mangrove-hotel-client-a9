import React from 'react';

const RightSidebar = () => {
    return (
        <section className="py-6">
            <h2 className="text-sm font-semibold tracking-widest mb-4 uppercase ">Tourist Place</h2>
        <div className="container space-y-5">
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
        </div>
    </section>
    );
};

export default RightSidebar;