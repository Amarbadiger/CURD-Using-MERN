import React, { useEffect, useState } from "react";
import styles from "./Update.module.css";
import { useParams, useNavigate } from "react-router-dom";
const Update = () => {
  const [error, seterror] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const getSingleUser = async () => {
    const response = await fetch(`http://localhost:4000/${id}`);
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      seterror(result.error);
    }

    if (response.ok) {
      const { name, email, age } = result;
      console.log("updated user", result);

      seterror("");
      setname(name);
      setemail(email);
      setage(age);
    }
  };

  async function handleEdit(e) {
    e.preventDefault();

    const editUser = { name, email, age };

    const response = await fetch(`http://localhost:4000/${id}`, {
      method: "PATCH", // Specify the method
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(editUser),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      seterror(result.error);
    }
    if (response.ok) {
      console.log(result);
      seterror("");

      navigate("/all");
    }
  }
  useEffect(() => {
    getSingleUser();
  }, []);

  return (
    <div className={styles.main}>
      {error && <p>{error}</p>}
      <h2 className={styles.title}>Edit the data</h2>

      <form onSubmit={handleEdit}>
        <label htmlFor="name">Name</label> <br />
        <input
          className={styles.box}
          id="name"
          type="text"
          name="name"
          value={name}
          autoComplete="name"
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
          autoComplete="email"
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
          autoComplete="age"
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

export default Update;
