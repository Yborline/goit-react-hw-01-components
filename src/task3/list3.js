import CardFriend from './task3'
import PropTypes from 'prop-types'

const CardList = ({friends}) => {
    return(


<ul className="friend-list">
    {friends.map(friend=>
    (<li key={friend.id}>
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
 

CardList.propTypes = {
    friend:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
        })
    )

}



export default CardList