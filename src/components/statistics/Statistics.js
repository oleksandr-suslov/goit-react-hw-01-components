import PropTypes from "prop-types";

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title ? <h2>{title}</h2> : ""}

      <ul class="stat-list">
        {stats.map((stat) => (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
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
