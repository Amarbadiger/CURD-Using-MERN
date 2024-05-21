import React, { useState } from "react";
import styles from "./Create.module.css";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [error, seterror] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { name, email, age };

    const respond = await fetch("http://localhost:4000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await respond.json();
    if (!respond.ok) {
      console.log(result.error);
      seterror(result.error);
    }
    if (respond.ok) {
      console.log(result);
      seterror("");
      setage(0);
      setname("");
      setemail("");
      navigate("/all");
    }
  };

  return (
    <div className={styles.main}>
      {error && <p>{error}</p>}

      <h2 className={styles.title}>Enter the data</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
          className={styles.box}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Email</label> <br />
        <input
          className={styles.box}
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="age">Age</label> <br />
        <input
          className={styles.box}
          id="age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Create;
