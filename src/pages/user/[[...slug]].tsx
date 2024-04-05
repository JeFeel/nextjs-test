import { useState } from "react";
import AddUser from "./addUser";

const SampleButton = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Press the Button{`${count}`}
    </button>
  );
};

let addId = 3;

const initialUser = [
  { id: 0, name: "Kim" },
  { id: 1, name: "Lee" },
  { id: 2, name: "Park" },
];

export default function User() {
  const [user, setUser] = useState(initialUser);

  function handleAddUser(name: string) {
    setUser([
      ...user,
      {
        id: addId++,
        name: name,
      },
    ]);
  }

  return (
    <>
      <AddUser onAddUser={handleAddUser} />

      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <SampleButton />
    </>
  );
}
