import { Link, NavLink } from "react-router-dom";
const Estate = ({ item }) => {
  const { image_url, price, estate_title, segment_name, id } = item;

  return (
    <>
      <div className="card card-compact flex flex-col justify-between bg-gray-dark shadow-xl">
        <figure data-aos="zoom-in" className="p-6 ">
          <img className="rounded-2xl" src={image_url} alt="image here" />
        </figure>
        <div className="card-body flex justify-between">
          <h2
            data-aos="fade-right"
            className="card-title"
          >
            {estate_title}
          </h2>
          <h2 className="text-lg">{segment_name}</h2>
         
         <div
            data-aos="fade-up"
            className="card-actions flex justify-between"
          >
            <Link to={`/details/${id}`} state={estate_title}>
              <button className="btn bg-black  text-white">
                View Property
              </button>
            </Link>
            <div>
              <button className="btn btn-outline">Price:{price}</button>
            </div>
          </div>
         </div>
        </div>
    </>
  );
};

export default Estate;
