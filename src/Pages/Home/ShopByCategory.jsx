import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div>
            <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Content for Tab 1</h2>
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