import { useState } from "react";
import "./Menu.css";

function Menu(props) {
  let [kelas, setClass] = useState();
  const clickHandler = () => {
    setClass(!false);
  };
  return (
    <div className="menu">
      <h1>{kelas ? "FSW 2 Hore" : "FSW 2 Hore Hore"}</h1>
      <button onClick={clickHandler}>Ganti Judul</button>
      <ul>
        <li>
          <a href="#">menu 1</a>{" "}
        </li>
        <li>
          <a href="#">menu 2</a>{" "}
        </li>
        <li>
          <a href="#">menu 3</a>{" "}
        </li>
        <li>
          <a href="#">menu 4</a>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Menu;
