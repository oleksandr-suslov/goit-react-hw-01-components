import PropTypes from "prop-types";

export default function Friends({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li class="item" key={id}>
          {isOnline ? (
            <span class="status online"></span>
          ) : (
            <span class="status"></span>
          )}
          <img class="avatar" src={avatar} alt="Avatar {name}" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.defaultProps = {
  friends: [],
};
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
