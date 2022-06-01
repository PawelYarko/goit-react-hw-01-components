import PropTypes from 'prop-types'
import randomColor from 'randomcolor'
import s from './Statistics.module.css'


const Statistics = ({title, stats}) =>{
return  <section>
            {title && <h2 className={s.title}>{title}</h2>}
                <ul className={s.list}>
                {stats.map(el => 
                    <li key={el.id} className={s.item} style={{backgroundColor:randomColor()}}>
                        <span className={s.label}>{el.label}</span>
                        <span className={s.interest}>{el.percentage}%</span>
                    </li>
                )}
                    
            </ul>
        </section>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),

}


export default Statistics;