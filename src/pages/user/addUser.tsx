import { ChangeEvent, useState } from "react";
import React from "react";

interface UserProps {
  onAddUser: (name: string) => void;
}

const AddUser: React.FC<UserProps> = ({ onAddUser }: UserProps) => {
  const [name, setName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (name.trim() === "") {
      alert("Empty Value!");
      return;
    }
    onAddUser(name);
    setName("");
  };

  return (
    <>
      <input placeholder="Add user" value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddUser;
