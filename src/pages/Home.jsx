import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Estate from '../components/Estate';
import { useLoaderData } from "react-router-dom";
import Apartment from '../components/Apartment';
const Home = () => {
    
    const items = useLoaderData()
  
    return (
        <div>
           
            <Navbar />
            <Slider />
           <div className='py-12 p-4 lg:px-0'>

            <h2 className='text-center text-4xl font-bold text-black my-5'>Estate Property</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {items.map((item) => (
                <Estate key={item.id} item={item} />
            ))}
           </div>
           
           
           </div>
            <Apartment></Apartment>
          
            <Footer />
        </div>
    );
};

export default Home;
