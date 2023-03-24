import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";

function Inventory() {
  const [fdata, setFData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000").then((res) => {
      console.log(res.data);
      setFData(res.data);
    });
  }, []);

  //******************delete db data */
  const deleteHandler = (e) => {
    console.log(e);
    Axios.post("http://localhost:4000/delete", { id: e }).then((res) => {
      let ack = res.data;
      if (ack === "success") {
        alert("item deleted not succesful");
      } else {
        alert("item deleted succesful");
      }
    });
  };

  return (
    <>
    <div class ="top">
    <center>
        <h2>Inventory Management System</h2>
      </center>
      <ul class = "navbar">
        <li>
          <Link to={{ pathname: "/Add" }}>Add items</Link>
        </li>
        <li>
          <Link to={{ pathname: "/About" }}>About</Link>
        </li>
      </ul>
      </div> 
      <br></br>
      <h2 class ="head"><center>Inventory</center></h2>
      
      <hr></hr><br></br>
      <table>
        <tr>
          <th id="il">Item ID</th>
          <th id = "des">Description</th>
          <th id = "idd">Quantity</th>
          <th id="iddd">Price</th>
        </tr>
      </table>
      <div>
        {fdata.map((sdata) => {
          return (
            <div class = "items" key={sdata._id}> 
            <table>
              <tr>
                  <td id = "i"><center>{sdata.item_id}</center></td>
                  <td id = "d"><center>{sdata.description}</center></td>
                  <td id = "i"><center>{sdata.quantity}</center></td>
                  <td id = "i"><center>₹ {sdata.price}</center></td>  
                  <td id = "del"><center><a href ={`/update/${sdata._id}` }><button>Update</button></a></center></td>
                  <td id = "del"><center> <button type="submit" onClick={() => deleteHandler(sdata._id)}>
                                            Delete
                                          </button></center></td>
              </tr>
            </table>
            </div>
          );
        })}
       <br></br><br></br>
      </div>
    </>
  );
}

export default Inventory;

