import user from '../../data/user'
import data from '../../data/data'
import friends from '../../data/friends'
import transactionsList from '../../data/transactions'
import Profile from '../Profile/Profile'
import Statistics from '../Statistics/Statistics'
import FriendList from '../FriendList/FriendList'
import TransactionHistory from '../TransactionTable/TransactionTable'
import s from './App.module.css'


export default function App(){
  return (
    <div className={s.container}>
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats ={user.stats}
    />
    <Statistics title="Upload stats" stats={data}/>
    <FriendList friendsList={friends} />;
    <TransactionHistory items ={transactionsList} />;
    </div>
  );
}
