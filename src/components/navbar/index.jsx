import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

const Navbar = () => (
  <div class="text-center">
    <div>
      Pretend this is navbar
    </div>
    <Link to="/"><Button>Home</Button></Link>
    <Link to="/facts"><Button>Facts</Button></Link>
    <Link to="/donate"><Button>Donate</Button></Link>
  </div>
)

export default Navbar