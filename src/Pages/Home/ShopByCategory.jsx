import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PoliceCarCard from './PoliceCarCard';
import RegularCarCard from './RegularCarCard';
import SportsCarCard from './SportsCarCard';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'aos/dist/aos.css'; 
import Aos from "aos";

const ShopByCategory = () => {

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
        })
    },[])

    const { user, loading } = useContext(AuthContext);
    console.log(user);

    const [regularCars, setRegularCars] = useState([]);
    const [sportsCars, setSportsCars] = useState([]);
    const [policeCars, setPoliceCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys/regular-car')
            .then(res => res.json())
            .then(data => setRegularCars(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/toys/sports-car')
            .then(res => res.json())
            .then(data => setSportsCars(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/toys/police-car')
            .then(res => res.json())
            .then(data => setPoliceCars(data))
    }, []);

    const handleViewDetails = () => {
        if (!user) {
            return Swal.fire('You have to log in first to view details')
        }
    }



    return (
        <div className='text-center my-28' data-aos="fade-right">
            <div className='text-center'>
                <h1 className="text-5xl font-bold mb-12">Shop By Category</h1>
            </div>
            <Tabs>
                <TabList className='text-xl font-semibold'>
                    <Tab>Police cars</Tab>
                    <Tab>Regular cars</Tab>
                    <Tab>Sports cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3' data-aos="zoom-in">
                        {
                            policeCars.map(policeCar => <PoliceCarCard
                                key={policeCar._id}
                                policeCar={policeCar}
                                handleViewDetails={handleViewDetails}
                            >

                            </PoliceCarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3' data-aos="zoom-in">
                        {
                            regularCars.map(regularCar => <RegularCarCard
                                key={regularCar._id}
                                regularCar={regularCar}
                                handleViewDetails={handleViewDetails}
                            >

                            </RegularCarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3' data-aos="zoom-in">
                        {
                            sportsCars.map(sportsCar => <SportsCarCard
                                key={sportsCar._id}
                                sportsCar={sportsCar}
                                handleViewDetails={handleViewDetails}
                            >

                            </SportsCarCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;