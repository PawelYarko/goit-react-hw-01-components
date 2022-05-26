import PropTypes from 'prop-types'

const Statistics = ({title, stats}) =>{
    <section>
  <h2>{title}</h2>
    <ul>
     {stats.map(el => 
       (<li key={el.id}>
        <span>{el.label}</span>
        <span>{el.percentage}</span>
      </li>)
    )}
         
  </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,

}


export default Statistics;