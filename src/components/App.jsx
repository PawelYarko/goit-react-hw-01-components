import user from '../user'
import data from '../data'
import Profile from './Profile.js'
import Statistics from './Statistics'


export default function App(){
  return (
    <Profile
    username = {user.username}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats ={user.stats}
    />
    // <Statistics title="Upload stats" stats={data} key={data.id}/>
  );
}
