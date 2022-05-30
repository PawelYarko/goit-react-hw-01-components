import PropTypes from 'prop-types';
import s from '../FriendList.module.css';


const FriendListItem = ({items}) =>{
    return items.map(item => 
            <li className={s.item} key={item.id}>
            <span >{item.isOnline}</span>
            <img className={`s.avatar ${item.isOnline ? s.green : s.red}`} src={item.avatar} alt="User avatar" width="48" />
            <p className={s.name}>{item.name}</p>
        </li>
        );
        
    
}

FriendListItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
}

export default FriendListItem;