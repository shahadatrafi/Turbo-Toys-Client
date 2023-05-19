import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PoliceCarCard from './PoliceCarCard';
import RegularCarCard from './RegularCarCard';
import SportsCarCard from './SportsCarCard';

const ShopByCategory = () => {

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




    return (
        <div className='text-center mt-28'>
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
                    <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3'>
                    {
                        policeCars.map(policeCar => <PoliceCarCard
                            key={policeCar._id}
                            policeCar={policeCar}
                        >

                        </PoliceCarCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3'>
                    {
                        regularCars.map(regularCar => <RegularCarCard
                            key={regularCar._id}
                            regularCar={regularCar}
                        >

                        </RegularCarCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='mt-16 text-left grid grid-cols-1 md:grid-cols-3'>
                    {
                        sportsCars.map(sportsCar => <SportsCarCard
                            key={sportsCar._id}
                            sportsCar={sportsCar}
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