import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, toggleAddTask, toggleAddBtn }) => {
   const location = useLocation()
   return (
      <header className='header'>
         <h1>{title}</h1>
         {location.pathname === '/' && <Button color={toggleAddBtn ? 'steelblue' : 'green'} text={toggleAddBtn ? 'Close' : 'Add'} onClick={toggleAddTask}/>}
      </header>
   )
}

Header.defaultProps = {
   title: 'Task Tracker'
}

Header.propTypes = {
   title: PropTypes.string.isRequired
}

// CSS IN JS
/* const headingStyle = {
   color: '#ddd',
   backgroundColor: '#000'
} */

export default Header
