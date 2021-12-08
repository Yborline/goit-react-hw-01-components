import PropTypes from 'prop-types'

const CardFriend = ({avatar,name,isOnline}) => {

    return (
    <div>
        {isOnline &&
<span className="status">online</span>}
<img className="avatar" src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</div>
)

}

CardFriend.propTypes={
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:PropTypes.bool,
}




export default CardFriend