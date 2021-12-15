// import PropTypes from 'prop-types'
import s from "./task4.module.css"




const TransactionHistory = ({items}) => {
return (

<div className={s.transTable}>
<table className={s.table}>
  <thead>
    <tr>
      <th className={s.th}>Type</th>
      <th className={s.th}>Amount</th>
      <th className={s.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(item => 
    <tr key={item.id}>
    <td className={s.td}>{item.type}</td>
    <td className={s.td}>{item.amount}</td>
    <td className={s.td}>{item.currency}</td>
  </tr>

    )}

  </tbody>
    </table>
    </div>
)
}



export default TransactionHistory