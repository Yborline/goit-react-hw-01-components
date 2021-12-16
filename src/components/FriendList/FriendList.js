import CardFriend from './CardFriend'
import PropTypes from 'prop-types'
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (


        <ul className={s.list}>
    {friends.map(friend=>
    (<li className={s.container} key={friend.id}>
        <CardFriend
        avatar= {friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id}
        />
    </li>
    )
    )}
</ul>
)
}
 

FriendList.propTypes = {
    friend:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
        })
    )

}



export default FriendList