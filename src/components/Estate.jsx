import { Link } from "react-router-dom"
import Details from "./Details";

const Estate = ({ item }) => {
        
    const {image_url, price, estate_title, segment_name, id} = item

  return (
    <>
    
      <div className="card card-compact  bg-gray-dark shadow-xl">
        <figure className="p-6 ">
          <img className="rounded-2xl"
            src={image_url}
            alt="image here"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
            <h2 className="text-lg">{segment_name}</h2>
          <div className="card-actions flex justify-between">
          <Link to={`/details/${id}`} onClick={Details} >
            <button className="btn bg-black  text-white">View Property</button>
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
