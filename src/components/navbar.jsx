import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = ({style}) => {
    return(
        <AppBar position="static" style={style}>
            <Toolbar>
                <Typography variant="title" color="inherit" style={{marginRight: '30px'}}>
                <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Gatsby Blog in with Material UI</Link>
                </Typography>
                <Typography variant="title" color="inherit">
                <Link to="/courses/" style={{color: 'white', textDecoration: 'none'}}>Courses</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
NavBar.propTypes = {
    style: PropTypes.object
}
NavBar.defaultTypes = {
    style: null,
}

export default NavBar;