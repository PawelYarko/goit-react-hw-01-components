import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({friendsList}) =>{
    return (<ul className={s.list}>
        {friendsList.map(friend => 
            <li className={s.item} key={friend.id}>
            <span >{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" style={friend.isOnline ? {backgroundColor:"green"} : {backgroundColor:"red"} }/>
            <p className="name">{friend.name}</p>
        </li>
        )}
        
    </ul>);
}
// style=backgroundColor:"green" : style=backgroundColor:"red"

FriendList.propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}

export default FriendList;