import PropTypes from "prop-types";

import Avatar from "components/Avatar";

interface ForksProps {
  forks: any[];
}

function Forks({ forks }: ForksProps) {
  return (
    <ul className='indent-left'>
      {forks.map((fork, index) => (
        <li key={index}>
          <a
            href={`https://gist.github.com/${fork.id}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
          </a>
        </li>
      ))}
    </ul>
  );
}

Forks.propTypes = {
  forks: PropTypes.array.isRequired,
};

export default Forks;
