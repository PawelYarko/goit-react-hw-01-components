import PropTypes from 'prop-types';
import s from './Profile.module.css'


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
}) => {
    return(
    <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
    <p className="tag">{"@" + tag}</p>
    <p className="location">{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li className={s.item} style={{backgroundColor:"#804fa1"}}>
        <span className={s.label}>Followers</span>
    <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.item} style={{backgroundColor:"#32a85c"}}>
        <span className={s.label}>Views</span>
    <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.item} style={{backgroundColor:"#3298a8"}}>
        <span className={s.label}>Likes</span>
    <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>);    
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.objectOf(PropTypes.number),
}

export default Profile;

