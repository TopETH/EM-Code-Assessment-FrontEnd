import Image from "next/image";
import PropTypes from "prop-types";

interface AvatarProps {
  avatarUrl: string;
  name: string;
}

function Avatar({ avatarUrl, name }: AvatarProps) {
  return (
    <div className='flex flex-row items-center pl-5 my-3'>
      <div className='w-[40px] h-[40px] rounded-full overflow-hidden mr-3'>
        <Image src={avatarUrl} alt={name} width={40} height={40} />
      </div>
      <span className='text-[#6c757d] underline'>{name}</span>
    </div>
  );
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Avatar;
