import React from 'react';

import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

const Home = () => {
    return (
      <div className="flex h-full bg-mainColor">
        <Sidebar />
        <Feed />
      </div>
    );
};

export default Home;
