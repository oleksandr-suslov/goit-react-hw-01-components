import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import Friends from "./components/friends/Friends";
import TransactionHistory from "./components/transactions/TransactionHistory";
import "./App.css";
import user from "./components/profile/user.json";
import friends from "./components/friends/friends.json";
import statistics from "./components/statistics/statistics.json";
import items from "./components/transactions/transactions.json";

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
      <Statistics title="Upload stats" stats={statistics} />
      <Friends friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
}

export default App;
