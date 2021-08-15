import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.titleHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.textBody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.stringBody}>
            <td className={styles.tdBody}>{type}</td>
            <td className={styles.tdBody}>{amount}</td>
            <td className={styles.tdBody}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.defaultProps = {
  friends: [],
};
TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
