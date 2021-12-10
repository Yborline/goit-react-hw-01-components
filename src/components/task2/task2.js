import PropTypes from 'prop-types'
import s from './task2.module.css'

const Statistic = ({key, label, percentage})=>{
  return (
   
    <div className={s.container}>

      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
      </div>
)
}

Statistic.propTypes = {
  label : PropTypes.string.isRequired,
  percentage : PropTypes.number.isRequired,


}

export default Statistic;


