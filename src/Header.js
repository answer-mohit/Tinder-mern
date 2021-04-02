import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
    return (
        <div className="header">
          <IconButton>
          <PersonIcon fontSize="large"/>
          </IconButton> 
<IconButton>
<WhatshotIcon fontSize="large" className="dark-red"/>
</IconButton>       

<IconButton>
<ForumIcon fontSize="large"/>
</IconButton>       
        </div>
    )
}

export default Header
