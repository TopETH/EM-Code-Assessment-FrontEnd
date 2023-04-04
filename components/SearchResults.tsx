import React from "react";

import GistCard from "components/GistCard";
import { gist } from "state/gist";
import { Gist } from "types/Gist";

function SearchResults() {
  const {
    username,
    gistsLoading,
    gists,
    gistsError,
  }: {
    username: string;
    gistsLoading: boolean;
    gists: Gist[];
    gistsError: string;
  } = gist.useContainer();

  if (gistsLoading) {
    return <div className='text-3xl'>Loading...</div>;
  }

  return (
    <div>
      {gists.length && !gistsError ? (
        <div>
          <div className='mb-5 border border-solid border-[#9a9a9a] bg-[#efefef] px-4 py-2'>
            <p className='text-xl'>
              <strong>{gists.length}</strong> results found for{" "}
              <strong>{username}</strong>
            </p>
          </div>
          <ul>
            {gists.map((gist: any) => {
              return <GistCard key={`gist-${gist.id}`} gistData={gist} />;
            })}
          </ul>
        </div>
      ) : (
        <div className='error-box'>
          <p className='text-danger'>{gistsError}</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
