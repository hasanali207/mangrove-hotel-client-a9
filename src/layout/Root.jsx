
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
        
    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `Home`
        }else{ document.title = `${location.pathname.replace('/', '')}`}
       if(location.state){
        document.title = location.state;
       }
    }, [location.pathname])

    return (
        <div className='max-w-7xl lg:px-0 px-4 mx-auto font-exo'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;