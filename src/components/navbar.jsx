import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = ({title, style}) => {
    return(
        <AppBar position="static" style={style}>
            <Toolbar>
                <Typography variant="title" color="inherit">
                <Link to="/" style={{color: 'white', textDecoration: 'none'}}>{title}</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
NavBar.propTypes = {
    title: PropTypes.string,
    style: PropTypes.object
}
NavBar.defaultTypes = {
    style: null,
}

export default NavBar;