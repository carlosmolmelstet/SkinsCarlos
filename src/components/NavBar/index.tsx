import React from 'react';
import { Nav, Logos } from './styles';
import { Link } from 'react-router-dom';
import Riot from '../../images/riotLogo.svg';
import Lol from '../../images/lolLogo.svg';
import Search from '../Search';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Logos>
      <Link to="/">
        <img src={Riot} alt="" />
      </Link>
        <span></span>
      <Link to="/">
        <img src={Lol} alt="" />
      </Link>
      </Logos>
      <Search />
    </Nav>
  );
}

export default NavBar;