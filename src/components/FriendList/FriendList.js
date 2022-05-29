import FriendListItem from './FriendListItem/FriendListItem'
import s from './FriendList.module.css';


const FriendList = ({friendsList}) =>{
    return (<ul className={s.list}>
                <FriendListItem items ={friendsList}/>
            </ul>);
}

export default FriendList;