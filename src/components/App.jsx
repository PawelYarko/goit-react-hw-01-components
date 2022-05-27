import user from './Profile/user'
import data from './Statistics/data'
import friends from './FriendList/friends'
import transactionsList from './TransactionTable/transactions'
import Profile from './Profile/Profile.js'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionTable/TransactionTable'


export default function App(){
  return (
    <div>
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats ={user.stats}
    />

    <Statistics title="Upload stats" stats={data}/>
    <Statistics stats={data} />

    <FriendList friendsList={friends} />;
    <TransactionHistory items ={transactionsList} />;
    </div>
  );
}
