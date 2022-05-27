import PropTypes from 'prop-types';

const FriendList = ({friendsList}) =>{
    return (<ul>
        {friendsList.map(friend => 
            <li className="item" key={friend.id}>
            <span className="status">{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
        )}
        
    </ul>);
}

FriendList.propTypes = {
    friendsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}

export default FriendList;