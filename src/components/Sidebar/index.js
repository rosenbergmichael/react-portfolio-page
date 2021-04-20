import React from 'react';
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='/'>
            Home
          </SidebarLink>
          <SidebarLink to='about'>
            About
          </SidebarLink>
          <SidebarLink to='skills'>
            Skills
          </SidebarLink>
          <SidebarLink to='portfolio'>
            Portfolio
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/contact'>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar
