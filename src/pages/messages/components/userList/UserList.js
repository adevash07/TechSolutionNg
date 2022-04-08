import UserCard from "../userCard/UserCard";
import "./userList.scss";

const users = [
  {
    id: 1,
    name: "Fabriozo Romana",
    time: "10mins ago",
    message: "When will the project be completed",
    messages: "",
    active:true
  },
  {
    id: 2,
    name: "Sadio Mane",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 3,
    name: "Joe Gomez",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 4,
    name: "Mary Peter",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 5,
    name: "Mary Peter",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 6,
    name: "Mary Peter",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 7,
    name: "Mary Peter",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
  {
    id: 8,
    name: "Mary Peter",
    time: "2 days ago",
    message:
      "This is a reminder on the project to be completed project be completed",
    messages: 2,
  },
];
const UserList = () => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
export default UserList;
