import PropTypes from "prop-types";
import styles from "./Friends.module.css";

export default function Friends({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
          {isOnline ? (
            <span className={styles.statusOnline}></span>
          ) : (
            <span className={styles.statusOffline}></span>
          )}
          <img
            className={styles.avatar}
            src={avatar}
            alt="Avatar {name}"
            width="48"
          />
          <p className={styles.name}>{name}</p>
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
