import React, { useContext, useState } from "react";
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { HeaderLogo } from "./styles";

interface HeaderProps {
  toogleTheme: () => void;
  show: boolean;
}

const Header: React.FC<HeaderProps> = ({ toogleTheme, show }) => {
  const { title } = useContext(ThemeContext);

  return (
    <HeaderLogo>
      <img src={title === 'light' ? logoLight : logoDark} alt="Github Explorer" />
        
      <div>
        <Switch 
          onChange={toogleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor='#313134'
          onColor='#F2F2FA'
        />

        {show ? (
          <Link to='/'>
            <FiChevronLeft size={16}/>
            Voltar
          </Link>
        ): false}
        
      </div>
    </HeaderLogo>
  )
}

export default Header;