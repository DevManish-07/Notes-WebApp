import React from 'react';
import styled from 'styled-components';
import SideNav from '../../components/SideNav/SideNav';

const NotesPage = () => {
    return (
        <SideNavContainer>
            <SideNav />
        </SideNavContainer>
    )
}

const SideNavContainer = styled.section`
    height: 100vh;
    flex-basis: 30%;
    max-width: 300px;
`

export default NotesPage;