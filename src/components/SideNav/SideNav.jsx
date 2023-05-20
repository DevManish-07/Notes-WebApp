
import styled from 'styled-components';
import Button from '../../shared/Button';
import { TbNotes } from 'react-icons/tb';
import { FcTodoList } from "react-icons/fc"
import { MdNotes } from "react-icons/md";
import { AiOutlineSetting } from 'react-icons/ai'
import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


//Will make the navlist dynamic from db.
const navList = [
    {
        title: "My Notes",
        icon: <TbNotes />,
        url: '/notes',
    },
    {
        title: "To-do List",
        icon: <FcTodoList />,
        url: '/todo',
    },
    {
        title: "Affirmation",
        icon: <MdNotes />,
        url: '/affirmation'
    },
    {
        title: "Reading List",
        icon: <MdNotes />,
        url: "/reading-list"
    },
    {
        title: "New folder",
        icon: <MdNotes />,
        url: "/new-folder"
    }
]

function SideNav() {
    return (
        <LefNavContainer>
            <TopContainer>
                <LeftNavList>
                    {navList.map((item, index) => (
                        <ListItem key={index}>
                            <ItemContent {...item}></ItemContent>
                        </ListItem>
                    ))}
                </LeftNavList>
            </TopContainer>

            {/* Add new folder & settings bottons */}
            <BottomContainer>
                <Button title="Add New folder" icon={<FaPlus />}></Button>
                <Button title="Settings" icon={<AiOutlineSetting />}></Button>
            </BottomContainer>
        </LefNavContainer >
    )
}


const ItemContent = ({ title, icon }) => {
    return (
        <ItemContentContainer>
            <span>{icon} {title}</span> <BsThreeDots></BsThreeDots>
        </ItemContentContainer>
    );
}


const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

const BottomContainer = styled.div`
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemContentContainer = styled.div`
    min-height: 0px;
    width: 100%;
    font-size: 18px;
    display: flex;
    padding: 14px;
    align-items: center;
    gap: 20px;
    border-radius: 6px; 
    box-shadow: 0 .5px 1px 0px rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.01);
    cursor: pointer;
    justify-content: space-between;

    &:hover {
        background: #f3f0f087;
    }
`;

const LefNavContainer = styled.aside`
    width: 100%;
    height: 100%;
    background: rgb(251 251 251 / 68%);
    padding: 20px;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
`

const LeftNavList = styled.ul`
  list-style: none;
  padding: 0;
`;


const ListItem = styled.li`  
`;


export default SideNav;