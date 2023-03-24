import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function about() {
  return (
    <>
      <div class ="top">
      <center>
          <h2>Inventory Management System</h2>
        </center>
        <hr></hr>
        <ul class = "navbar">
        
          <li>
            <Link to={{ pathname: "/Inventory" }}>Inventory</Link>
          </li>
          <li>
            <Link to={{ pathname: "/Add" }}>Add items</Link>
          </li>
        </ul>
        </div>
        <div><h2><center>About this Project</center></h2></div><hr></hr><br></br>
          <div class = "abo">
          <div class = "qwe"><center><img src="https://www.investopedia.com/thmb/__fFYykFeBtgHks2OVJ-eyM4W-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/inventory-management-8595e839c2884128997ca77f00a8da2b.jpg" alt="img"></img></center></div>
          
          <div class ="content">
          <h3>Creator</h3>
          <p>Name: <i>Vishesh Hadimani</i><br></br>
          USN: <i>4SF21AD060</i><br></br>
          College: <i>Sahyadri College of Engineering and Management</i><br></br>
          </p><br></br>
          <h3>Problem statement</h3>
          <p>IM (Inventory Management): Develop a web platform to help small businesses manage their inventory.  </p></div>

          <div class = "content"><h3>Problem Statement Brief</h3>
          <p>Manufacturing companies that sell physical goods need a place to store items, whether that’s a warehouse or your own store. Inventory management is crucial to prevent loss of items, quickly fulfil customer orders and know when you need to buy more of a given product. It contributes directly to profitability, and no business can successfully scale without an inventory management application which contains details of inventory such as number of items available, needed to by end of month , items sold in previous month etc.</p>  
          </div>

          <div class = "content"><h3>Technology stack:</h3>
          <p>The MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS) was used to develop this system. MongoDB is used as the database to store inventory data, ExpressJS is used as the server-side framework, ReactJS is used for the front-end interface, and NodeJS is used as the runtime environment.</p>
          </div>

          <div class = "content"><h3>Architecture:</h3>
          <p>The inventory management system follows a client-server architecture. The client-side is built using ReactJS and communicates with the server-side API built using ExpressJS. The server-side API interacts with the MongoDB database to perform CRUD (Create, Read, Update, Delete) operations on inventory data.</p>
          </div>
          <div class = "content">
          <h3>Features</h3>
          <p>1. Adding new products to the inventory<br></br>
            2. Editing product details such as name, price, and quantity<br></br>
            3. Deleting products from the inventory<br></br>
            4. Viewing the entire inventory list</p>
          
        </div>
        </div>
        
      </>
  );
}
