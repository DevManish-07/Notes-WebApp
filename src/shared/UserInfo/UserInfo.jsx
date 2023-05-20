export default function User({ userName }) {
    return (
        <UserInfoContainer >
            <UserImage src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/400.jpg" alt="" />
            <UserName>{userName ? userName : "User Name"}</UserName>
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding: 12px;
    border-bottom: ${(props) => !!props.border ? '1px solid rgba(0,0,0,.1)' : "none"};
    height: 60px;
`;

const UserImage = styled.img`
    height: 100%;
    border-radius: 10px;
`;

const UserName = styled.span`
    font-weight: 500;
    font-size: 20px;
`;