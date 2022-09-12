import PropTypes from 'prop-types';

const header = ({ title }) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

header.defaultProps = {
    title: 'Task Tracker'
}  

header.propTypes = {
    title: PropTypes.string.isRequired,
}   

//CSS in JS
// const headingStyle = {
//    color: 'red', backgroundColor: 'black'
// }

export default header
