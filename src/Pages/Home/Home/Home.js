import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../About/About';
import ChooseUs from '../../ChooseUs/ChooseUs';
import FeaturesProjects from '../../FeaturesProjects/FeaturesProjects';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <div className="text-center m-8">
                <Link>
                    <button className="btn btn-outline btn-secondary text-2xl px-20">See All</button>
                </Link>
            </div>
            <ChooseUs></ChooseUs>
            <FeaturesProjects></FeaturesProjects>
        </div>
    );
};

export default Home;