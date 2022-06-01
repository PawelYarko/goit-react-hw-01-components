import PropTypes from 'prop-types';
import s from '../FriendList.module.css';


const FriendListItem = ({id, avatar, isOnline, name}) =>{
    return (<li className={s.item} key={id}>
                <span >{isOnline}</span>
                <img className={`s.avatar ${isOnline ? s.green : s.red}`} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
            </li>);  
    
}

FriendListItem.propTypes = {
        key: PropTypes.number,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
}

export default FriendListItem;