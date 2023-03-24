import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "./styles.css";

function Update() {
  const [fdata, setFdata] = useState({
    item_id: "",
    description: "",
    quantity: "",
    price: "",
  });


  const params = useParams(); //get id from url
  let id = params.id;

  //*****fetch data  */
  useEffect(() => {
    Axios.post("http://localhost:4000/get", { id: id }).then((res) => {
      let data = res.data;
      console.log(data);
      setFdata(...data);
    });
  }, [id]);

  //*************change handler */
  const ChangeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setFdata({ ...fdata, [name1]: val });
  };

  //*************submit handler */
  const UpdateHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/update", fdata).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("data inserted successfully");
      } else {
        alert("data not inserted");
      }
    });
  };
  return (
    <>
    <div class ="top">
    <center>
        <h2>Inventory Management System</h2>
      </center>
      <hr></hr>
      <ul class = "navbar">
        <li id>
          <div id="inv"><Link to={{ pathname: "/Inventory" }}>Inventory</Link></div>
        </li>
        <li>
          <Link to={{ pathname: "/About" }}>About</Link>
        </li>
      </ul>
      </div>
      <br></br>
      <div><center><h2>Update Item Details</h2></center></div>
      <div >
      <form class = "form" onSubmit={UpdateHandler}>
        <label>Item ID: </label>
        <input
          type="text"
          name="item_id"
          placeholder="enter Item ID"
          value={fdata.item_id}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={fdata.description}
          onChange={ChangeHandler}
        />
        <br></br>

        <label>Quantity: </label>
        <input
          type="number"
          name="quantity"
          value={fdata.quantity}
          onChange={ChangeHandler}
        />

         <label>Price: </label>
        <input
          type="text"
          name="price"
          value={fdata.price}
          onChange={ChangeHandler}
        />
        <br></br>

       <center><button type="submit">Update</button></center> 
      </form>
      </div>
    </>
  );
}

export default Update;
