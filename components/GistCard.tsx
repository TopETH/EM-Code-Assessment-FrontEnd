import Link from "next/link";
import PropTypes from "prop-types";

import Badge from "components/Badge";
import { Gist } from "types/Gist";

interface GistCardProps {
  gistData: Gist;
}

function GistCard({ gistData }: GistCardProps) {
  const filesLength = Object.keys(gistData.files).length;

  return (
    <Link href={`/${gistData.id}`} passHref>
      <li className='p-5 mb-5 border border-solid border-[#ddd] cursor-pointer no-underline'>
        <p className='text-xl text-blue-700'>
          {gistData.description || "No Description"}
        </p>
        <p className='text-[#6c757d]'>
          {filesLength} {filesLength > 1 ? "Files" : "File"}
        </p>
        <Badge files={gistData.files} />
      </li>
    </Link>
  );
}

GistCard.propTypes = {
  gistData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    files: PropTypes.object.isRequired,
  }).isRequired,
};

export default GistCard;
