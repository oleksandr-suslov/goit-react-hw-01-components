import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  const colors = ["#004a19", " #007a79", "#c7cedf", "#976f4f", "#4d4a16"];
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : ""}

      <ul className={styles.statList}>
        {stats.map((stat, index) => (
          <li
            className={styles.item}
            key={stat.id}
            style={{ backgroundColor: colors[index] }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  title: "",
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
