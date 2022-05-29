import randomColor from 'randomcolor'
import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'


const TransactionHistory = ({items}) =>{
    return (
        <table className={s.table}>
        <thead className={s.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item =>
                <tr key={item.id} style={{backgroundColor:randomColor()}}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
                
            )}
        </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,  
    }).isRequired)    
}

export default TransactionHistory;