import PropTypes from 'prop-types'
import s from './Cell.module.css'

const Сell = ({key, label, percentage})=>{
  return (
   
    <div className={s.container}>
      

      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
      </div>
)
}

Сell.propTypes = {
  label : PropTypes.string.isRequired,
  percentage : PropTypes.number.isRequired,


}

export default Сell;


