import React, { useState } from "react";

//include images into your bundle

import ToDoList from "./ToDoList.jsx";
import Navbar from "./navbar.js";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<ToDoList />
		</>
	);
};

export default Home;
