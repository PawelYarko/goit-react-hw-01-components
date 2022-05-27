import user from '../user'
import data from '../data'
import friends from '../friends'
import transactionsList from '../transactions'
import Profile from './Profile.js'
import Statistics from './Statistics'
import FriendList from './FriendList'
import TransactionHistory from './TransactionTable'


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
