import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './categoryCard';

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
        <div>
            <Tabs>
                <TabList>
                    <Tab>Regular cars</Tab>
                    <Tab>Sports cars</Tab>
                    <Tab>Police cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                    {
                        policeCars.map(policeCar => <CategoryCard
                            key={policeCar._id}
                            policeCar={policeCar}
                        >

                        </CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Tab 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Content for Tab 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;