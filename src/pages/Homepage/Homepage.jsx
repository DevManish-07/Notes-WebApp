import React from 'react';
import styled from 'styled-components';
import SideNav from '../../components/SideNav/SideNav';
import List from '../../components/List/List';
import NotesDetail from '../../components/NotesDetail/NotesDetails';

const NotesPage = () => {
    return (
        <HomePageContainer>
            {/*  Left side nav */}
            <SideNavContainer>
                <SideNav />
            </SideNavContainer>

            {/* Middle section */}
            <ListContainer>
                <List />
            </ListContainer>

            {/* Right Detail section */}
            <DetailContainer>
                <NotesDetail />
            </DetailContainer>
        </HomePageContainer>
    );
};

const HomePageContainer = styled.section`
    display: flex;
    height: 100vh;
    overflow: hidden;
`;

const SideNavContainer = styled.section`
    height: 100vh;
    flex-basis: 30%;
    max-width: 300px;
    border-right: 1px solid rgba(0,0,0,0.1);

`
const ListContainer = styled.section`
    height: 100vh;
    flex-basis: 30%;
    max-width: 400px;
    border-right: 1px solid rgba(0,0,0,0.1);
`
const DetailContainer = styled.section`
    flex: 1;
`

export default NotesPage;