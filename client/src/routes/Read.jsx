import React, { useEffect, useState } from "react";
import styles from "./Read.module.css";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:4000");
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      seterror(result.error);
    }
    if (response.ok) {
      console.log(result);
      setData(result);
    }
  }
  async function handleDelete(id) {
    const response = await fetch(`http://localhost:4000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result.error);
      seterror(result.error);
    }
    if (response.ok) {
      seterror("Deleted succesfully");

      setTimeout(() => {
        seterror("");
        fetchData();
      }, 2000);
    }
  }
  return (
    <>
      {error && <p>{error}</p>}
      <div className={styles.main}>
        {data?.map((ele) => (
          <div key={ele._id} className={styles.box}>
            <h3>{ele.name}</h3>
            <h4>{ele.email}</h4>
            <h5>{ele.age}</h5>
            <div className={styles.inbox}>
              <a href="#" onClick={() => handleDelete(ele._id)}>
                Delete
              </a>
              <Link to={`/${ele._id}`}>Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Read;
