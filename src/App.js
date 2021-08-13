import Profile from "./components/profile/Profile";
import "./App.css";
import user from "./components/profile/user.json";
import stats from "./components/statistics/statistics.json";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={stats.title} stats={stats.stats} />
    </div>
  );
}

export default App;
