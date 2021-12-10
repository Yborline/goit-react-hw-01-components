import Statistic from './task2'
import PropTypes from 'prop-types';
import s from './section.module.css'

const color = item => {
  const colorArray = ['#E74C3C', '#8E44AD', '#3498DB', '#27AE60', '#F39C12'];
  return `${colorArray[Number(item.id.replace(/[^0-9]/g, '')) % 5]}`;
};

const  Task2 =  ({items,title}) =>
{
  return(
    
  <div className={s.container}>
    {title && <h2>{title}</h2>}
            <ul className={s.list}>
            {items.map(item=>(
              <li className={s.elem} style={{ backgroundColor: color(item) }} key = {item.id}>
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
