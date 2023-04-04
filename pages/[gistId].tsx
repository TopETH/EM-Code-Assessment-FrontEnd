import React, { useEffect } from "react";
import { NextPageContext } from "next";

import Forks from "components/Forks";
import { gist } from "state/gist";
import { GistDetail } from "types/GistDetail";

interface GistDetailsProps {
  gistId: string;
}

function GistDetails({ gistId }: GistDetailsProps) {
  const {
    detailLoading,
    detail,
    detailError,
    fetchSingleGist,
  }: {
    detailLoading: boolean;
    detail: GistDetail | undefined;
    detailError: string;
    fetchSingleGist: (gistId: string) => Promise<void>;
  } = gist.useContainer();

  useEffect(() => {
    fetchSingleGist(gistId);
  }, [gistId]);

  if (detailLoading) {
    return (
      <div className='flex flex-col items-center mt-32'>
        <div className='text-3xl'>Loading...</div>
      </div>
    );
  }

  const renderForks = () => {
    if (!detail) return;
    const { forks } = detail;
    if (forks.length) {
      return <Forks forks={forks.slice(-3).reverse()} />;
    } else {
      return <div className='ml-5 text-[#6c757d]'>No forks</div>;
    }
  };

  return (
    <div className='flex flex-col items-center'>
      {detail && !detailError ? (
        <div className='w-full max-w-5xl pt-28'>
          <div className='border border-solid border-[#9a9a9a] px-4 py-2'>
            <p className='text-xl mb-5'>
              {detail.description || "No Description"}
            </p>
            <div className='mb-5'>
              <p className='text-lg text-blue-700'>Files:</p>
              <ul className='pl-5'>
                {Object.values(detail.files).map((file, index) => {
                  return (
                    <li key={index} className='text-[#6c757d]'>
                      <a
                        href={file.raw_url}
                        target='_blank'
                        rel='noreferrer'
                        className='text-[#6c757d] underline'
                      >
                        {file.filename}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className='text-lg text-blue-700'>Forks:</p>
              {renderForks()}
            </div>
          </div>
        </div>
      ) : (
        <div className='mt-32'>
          <p className='text-3xl text-red-700'>{detailError}</p>
        </div>
      )}
    </div>
  );
}

GistDetails.getInitialProps = async ({
  query,
}: NextPageContext): Promise<GistDetailsProps> => {
  const { gistId } = query;
  return { gistId: gistId as string };
};

export default GistDetails;
