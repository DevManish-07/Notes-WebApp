import styled from "styled-components";

export default function NotesCard({ title, description, date, active, tags }) {
    let tagsContent = null;

    if (!!tags) {
        tagsContent = (<TagsContainer>
            {tags.map((tag) => <CardTag>Productivity</CardTag>)}
        </TagsContainer>);
    }

    return (
        <CarContainer isActive={active}>
            <TitleContainer>
                <CardTitle>{title}</CardTitle>
                <div style={{ color: "#b9b9b9" }}>{date}</div>
            </TitleContainer>
            <CarDescription>{description.slice(0, 60)}...</CarDescription>
            {tagsContent}
        </CarContainer>
    )
};

const CarContainer = styled.div`    
    width: 100%;
    padding: 20px;
    background: ${(props) => props.isActive ? "rgb(244 244 244)" : "rgb(232 232 232 / 47%)"};
    border-radius: 4px;
    cursor: pointer;
    max-width: 400px;
    height: fit-content;
    border-radius: 10px;

    &:hover{
        box-shadow: 0 .5px 4px 0px rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06);
        background: rgb(244 244 244);
    }
`;

const CarDescription = styled.p`
    margin-bottom: 12px;
    color: rgb(108 107 107);
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
`;

const CardTitle = styled.h4`
    color: rgb(0 0 0);
`;

const CardTag = styled.div`
    padding: 5px 10px;
    background: rgb(216 216 216 / 85%);
    width: fit-content;
    display: grid;
    place-items: center;
    font-weight: 600;
`;

const TagsContainer = styled.section`
    display: flex;
    gap: 10px;
    color: rgb(89 89 89);
    border-radius: 10px;
`;