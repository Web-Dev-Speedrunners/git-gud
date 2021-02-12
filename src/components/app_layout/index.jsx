import React from 'react'
import PropTypes from 'prop-types';
import Navbar from '../navbar';

const AppLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default AppLayout