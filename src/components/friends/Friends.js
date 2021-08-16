import MarkupCardFriend from "../markupcardfriend/MarkupCardFriend";
import styles from "./Friends.module.css";

export default function Friends({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => (
        <MarkupCardFriend friend={item} />
      ))}
    </ul>
  );
}
