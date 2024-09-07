import React, { useState } from "react";

interface UserData {
  name: string;
  email: string;
  contact: string;
  password: string;
}

const App = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [dataArray, setDataArray] = useState<UserData[]>(() => {
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
    const updateData = [...dataArray, { ...userData }];
    setDataArray(updateData);
    localStorage.setItem("userData", JSON.stringify(updateData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-fit grid m-auto text-center capitalize mt-5"
      >
        <fieldset className="w-fit grid gap-4 p-4 shadow-md shadow-[#0000007a] rounded-lg ">
          <legend className="text-3xl capitalize">todo app</legend>
          <input
            type="text"
            placeholder="Type here name"
            name="name"
            className="input capitalize input-bordered w-full max-w-xs"
            value={userData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Type here email"
            name="email"
            className="input capitalize input-bordered w-full max-w-xs"
            value={userData.email}
            onChange={handleInputChange}
          />
          <input
            type="number"
            placeholder="Type here contact"
            name="contact"
            className="input capitalize input-bordered w-full max-w-xs"
            value={userData.contact}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Type here password"
            name="password"
            className="input capitalize input-bordered w-full max-w-xs"
            value={userData.password}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn capitalize">
            submit
          </button>
        </fieldset>
      </form>

      <div className="p-5 m-auto mt-5 shadow-md w-[50%]">
        <h1 className="flex gap-4 items-center justify-around text-md capitalize rounded-lg">
          <span>name</span>
          <span>email</span>
          <span>contact</span>
          <span>password</span>
        </h1>
        {dataArray.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center justify-around text-md capitalize rounded-lg"
          >
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span>{item.contact}</span>
            <span>{item.password}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
