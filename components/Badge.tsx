import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

interface BadgeProps {
  files: Record<string, any>;
}

function Badge({ files }: BadgeProps) {
  const [fileArr, setFileArr] = useState<string[]>([]);

  useEffect(() => {
    const arr: string[] = [];
    for (let file in files) {
      let language = files[file].language;
      // remove duplicate file types
      if (arr.indexOf(language) === -1) {
        arr.push(language);
        arr.push(language);
        arr.push(language);
      }
    }
    setFileArr(arr);
  }, [files]);

  return (
    <ul>
      {fileArr.map((language, index) => (
        <li
          className='bg-[#37b0b2] text-white p-1 rounded mr-1 inline-block whitespace-nowrap align-baseline text-xs font-bold'
          key={`language-badge-${index}`}
        >
          {language}
        </li>
      ))}
    </ul>
  );
}

Badge.propTypes = {
  files: PropTypes.object.isRequired,
};

export default Badge;
