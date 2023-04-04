import React from "react";

import SearchBar from "components/SearchBar";
import SearchResults from "components/SearchResults";

function Dashboard() {
  return (
    <div className='flex flex-col items-center'>
      <SearchBar />

      <div className='max-w-5xl pt-28'>
        <SearchResults />
      </div>
    </div>
  );
}

export default Dashboard;
