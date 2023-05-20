import { useState } from 'react'
import Button from "../../shared/Button"
import styled from 'styled-components';
import NotesCard from '../NotesCard/NotesCard';

const notes = {
    data: [
        {
            title: "Meeting Notes",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "createSlice Notes",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "Reduxjs Notes",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "Toolkit Notes",
            description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "Meeting Notes",
            description: "Discussed project timelines.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "createSlice Notes",
            description: "Discussed project timelines.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "Reduxjs Notes",
            description: "Discussed project timelines.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
        {
            title: "Toolkit Notes",
            description: "Discussed project timelines.",
            date: "2023-05-11",
            createdBy: "Manish Yadav",
            lastModified: "2023-05-11",
            tags: ["Productivity", "JavaScript", "AngularJs"]
        },
    ],
    selected: {},
}

export default function List() {
    const [isActiveIndex, setIsActiveIndex] = useState(0);

    const handleClick = (index) => {
        setIsActiveIndex(index);
    }
    return (
        <>
            <ListTitle>Page Title {isActiveIndex} </ListTitle>
            <Button title="Add New Notes" style={{ margin: "0 20px" }}></Button>
            <ListContainer>
                {notes.data.map((cardDetails, index) => {
                    return (<NotesCard
                        customClickEvent={(e) => alert(index)}
                        key={index}
                        {...cardDetails}
                        active={index === isActiveIndex}
                        index={index}
                        handleClick={handleClick} />)
                })}
            </ListContainer>
        </>
    )
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-inline: 20px;
    padding-bottom: 5px;
    max-height: calc(100vh - 140px);
    overflow: scroll;
    margin-top: 10px;

    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 4px;
    }
      
    &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .5);
    box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    }
`;

const ListTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    padding: 45px 30px 20px;
    height: 92px;
`;