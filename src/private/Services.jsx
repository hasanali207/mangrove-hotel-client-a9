import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Services = () => {
    return (
        <div>
            <Helmet><title>Services</title></Helmet>
            <Navbar></Navbar>
            <h1>This is Services Page</h1>
            <Footer></Footer>
        </div>
    );
};

export default Services;