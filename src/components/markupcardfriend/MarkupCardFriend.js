import PropTypes from "prop-types";
import styles from "./MarkupCardFriend.module.css";

export default function MarkupCardFriend({ friend }) {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li className={styles.item} key={id}>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="Avatar {name}"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

MarkupCardFriend.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
