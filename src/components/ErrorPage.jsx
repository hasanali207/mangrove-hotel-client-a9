import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for does not exist.</p>
      <div className="flex">
        <Link to='/'><button className="bg-blue hover:bg-blue text-white font-semibold px-6 py-3 rounded mr-4">
          Home
        </button></Link>
       <Link to="javascript:history.go(-1)"> <button className="bg-gray hover:bg-gray text-white font-semibold px-6 py-3 rounded">
          Return
          </button></Link>
      </div>
    </div>
    );
};


<a href="javascript:history.go(-1)">Return</a>
export default ErrorPage;