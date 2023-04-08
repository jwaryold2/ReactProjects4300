import UserItem from "./UserItem";


function Users(props) {
    return(
        props.user_list.map((v) =><UserItem name={v.name} image={v.image}> </UserItem>)
    )
};

export default Users;