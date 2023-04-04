import React, { useState } from "react";

import { gist } from "state/gist";

function SearchBar() {
  const {
    fetchAllGistsByUsername,
  }: {
    fetchAllGistsByUsername: (username: string) => Promise<void>;
  } = gist.useContainer();

  const [username, setUsername] = useState("");
  const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      trySearch();
    }
  };
  const trySearch = () => {
    if (!username) {
      return;
    }
    fetchAllGistsByUsername(username);
  };
  return (
    <div className='w-full bg-gradient-to-r from-teal-500 to-blue-500 shadow-md p-5 flex justify-center fixed z-10'>
      <input
        className='w-full px-3 py-2 rounded-lg'
        placeholder='Search for a user, eg. TopETH.'
        value={username}
        onKeyDown={handleKeyDown}
        onChange={updateUsername}
      />
    </div>
  );
}

export default SearchBar;
