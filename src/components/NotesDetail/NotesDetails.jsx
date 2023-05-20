import React from 'react'
import styled from 'styled-components';
import { TbMathGreater } from "react-icons/tb";

let Notes = {
    title: "Meeting Notes",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    date: "2023-05-11",
    createdBy: "Manish Yadav",
    lastModified: "2023-05-11",
    tags: ["Productivity", "JavaScript", "AngularJs"]
};

function NotesDetail() {

    return (
        <NoteDetailsContainer>
            <BreadCrumb>My Notes <TbMathGreater /> {Notes.title}</BreadCrumb>
            <NoteContent>
                <NoteMetaData>
                    <NoteTitle>{Notes.title}</NoteTitle>
                    <NoteCreatedBy>
                        <span>Created By :</span>
                        {/* <User bottomBorder={false} userName={Notes.createdBy} /> */}
                    </NoteCreatedBy>
                    <NoteLastModified>{Notes.lastModified}</NoteLastModified>
                    <NoteTagsContainer>
                        {Notes.tags && Notes.tags.map((tag, index) => (
                            <NoteTag key={index}>{tag}</NoteTag>
                        ))}
                    </NoteTagsContainer>
                </NoteMetaData>
                {Notes.description}
            </NoteContent>
        </NoteDetailsContainer>
    )
}

const Editor = styled.div`

`;

const NoteMetaData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 120xp
`;

const NoteDetailsContainer = styled.div`
    padding: 40px 50px;
    height: 100vh;
`;

const BreadCrumb = styled.div`
    color: rgb(80 80 80);
    font-weight: 400;
    margin-bottom: 40px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;

    svg {
        margin-bottom: -2px;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -30px;
        height: 1px;
        background: rgb(182 182 182);
        z-index: 1;
    }
`;

const NoteContent = styled.div`
    padding: 32px 0 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const NoteTitle = styled.h1`
    font-size: 36px;
`;

const NoteLastModified = styled.div`

`
const NoteTagsContainer = styled.div`
    display: flex;
    gap: 10px;
`
const NoteDescription = styled.div`

`
const NoteCreatedBy = styled.div`
    display: flex;
`;

const NoteTag = styled.div`
    padding: 5px 10px;
    background: rgb(242 242 242);
    width: fit-content;
    display: grid;
    place-items: center;
    font-weight: 600;
`

const CardTag = styled.div`
    padding: 5px 10px;
    background: rgb(242 242 242);
    width: fit-content;
    display: grid;
    place-items: center;
    font-weight: 600;
`;


export default NotesDetail;