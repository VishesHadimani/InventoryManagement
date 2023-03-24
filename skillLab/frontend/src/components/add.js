import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import Axios from "axios";

function Home() {
  const [fdata, setFdata] = useState({
    item_id: "",
    description: "",
    quantity: "",
    price: ""
  });
  const [msg, setMsg] = useState();

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const SubmitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/ins", { fdata }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        setMsg("Item inserted successful");
        console.log(msg);
        alert("Item inserted successfully");
      } else {
        setMsg("Item not inserted ");
        console.log(msg);
        alert("Item not inserted");
      }
    });
  };
  return (
    <>
    <div class ="top">
    <center>
        <h2>Inventory Management System</h2>
      </center><hr></hr>
      <ul class = "navbar">  
        <li>
          <Link to={{ pathname: "/Inventory" }}>Inventory</Link>
        </li>
        <li>
          <Link to={{ pathname: "/About" }}>About</Link>
        </li>
      </ul>
      </div>
      <br></br>
      <div><h2><center>Enter New item details:</center></h2></div>

      <div class = "form"><form  onSubmit={SubmitHandler}>
        <label>Item ID: </label>
        <input
          type="text"
          name="item_id"
          value={fdata.item_id}
          onChange={ChangeHandler}
          placeholder="Enter Item ID"
        />
        <br></br>

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={fdata.description}
          onChange={ChangeHandler}
          placeholder="Enter Description"
        />
        <br></br>

        <label>Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={fdata.quantity}
          onChange={ChangeHandler}
          placeholder="Enter Quantity"
        />
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={fdata.price}
          onChange={ChangeHandler}
          placeholder="Enter Price"
        />


        <br></br>

        <center><button type="submit" id ="but">Insert</button></center>
        </form></div> 
    </>
  );
}

export default Home;
