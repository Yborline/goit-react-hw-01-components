import PropTypes from 'prop-types';
import s from './task1.module.css';

const Profile = ({username, tag , location , avatar , stats}) =>{
return (
  <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt={username}
      className={s.avatar}
    />
    <p className="name">{username}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats:  PropTypes.object.isRequired,



}

export default Profile;

