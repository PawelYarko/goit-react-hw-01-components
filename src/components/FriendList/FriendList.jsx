import FriendListItem from './FriendListItem/FriendListItem'
import s from './FriendList.module.css';


const FriendList = ({friendsList}) =>{
    return (<ul className={s.list}>
        {friendsList.map(friend => {
            return <FriendListItem 
                        id={friend.id} 
                        isOnline={friend.isOnline}
                        name={friend.name}
                        avatar={friend.avatar}
            />
            
        })}
                
            </ul>);
}

export default FriendList;