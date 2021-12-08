import Statistic from './task2'
import PropTypes from 'prop-types';


const  Task2 =  ({items,title}) =>
{
  return(
  <div>
    {title && <h2>{title}</h2>}
            <ul>
            {items.map(item=>(
              <li  key = {item.id}>
    <Statistic 
      label = {item.label}
      percentage = {item.percentage}
    />
              </li>
    
            ))}
          </ul>
          </div>
          )
}

Task2.propTypes = {
  title: PropTypes.string,
items: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
  })
)
  
}


export default Task2;
