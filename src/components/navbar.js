import React from 'react';

const Navbar = (props)=>(
    <nav className="navbar" style={style.navbar}>
  <span className="navbar-brand mb-0 h1" style={style.h1}>{props.heading}</span>
  
</nav>
)

export default Navbar;

const style={
  navbar:{
    backgroundColor:'rgb(98, 116, 204)'
  },
  h1:{
    color:'white'
  },
  time:{
    float:'right',
    color:'white'
  }

}