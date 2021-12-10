import PropTypes from 'prop-types'
import s from './task3.module.css'


const CardFriend = ({avatar,name,isOnline}) => {

    return (
    <div className=''>
        {isOnline &&
<span className={s.status}>online</span>}
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<p className={s.name}>{name}</p>
</div>
)

}

CardFriend.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool,
}




export default CardFriend