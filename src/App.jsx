import "./style.css";
import { useState, useEffect } from "react";
import RegistrationForm from "./components/RegistrationForm";
// import ListUsers from "./components/ListUsers";
import ValidtionReact from "./components/ValidtionReact";

const App = () => {
  const [data, setData] = useState([
    { id: 122, name: "Xanvier Karlos", date: "12-04-1997" },
    { id: 1400, name: "Gold Stone", date: "20-07-2002" },
    { id: 132, name: "Bisimwa Grace", date: "30-04-1990" },
    { id: 132, name: "Diane Uwase", date: "30-04-1990" },
    { id: 102, name: "Nathasha Lutonde", date: "29-05-2006" },
    { id: 152, name: "Esther Bisimwa", date: "30-04-1990" },
    { id: 172, name: "Blaise Wa Bonifasse", date: "30-04-1990" },
  ]);

  useEffect(() => {
    console.log("re-renderig...");
    selectAll();
  }, []);

  const url = "http://localhost:7000/";
  const [FetchDate, setFetchDate] = useState([]);

  const selectAll = async () => {
    await fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const onchangeKey = (e) => {
    let value = e.target.value;
    let txt = value.trim();

    if (!txt) {
      // console.log("Empty");
    } else {
      // console.log("text: " + txt);
    }
  };

  return (
    <>
      <ValidtionReact />
      <div className="container">
        {/* <div className="box">
          <form action="#" method="post">
            <input
              type="search"
              name="search"
              id="search"
              onChange={onchangeKey}
              placeholder="Search..."
              className="form-control"
            />
          </form>
        </div> */}
        <div className="box">
          {/* Users */}
          {/* <ListUsers users={data} /> */}
        </div>
      </div>
      {/* <div className="footer">
        <button className="button">Add</button>
      </div> */}
      {/* <div className="container">
        <div className="box">
          <RegistrationForm />
        </div>
      </div> */}
    </>
  );
};

export default App;
