import ListUsers from "./ListUsers";
import { useState } from "react";
const Data = () => {
  const [data, setData] = useState([
    { id: 122, username: "Xanvier Karlos", date: "12-04-1997" },
    { id: 1400, username: "Gold Stone", date: "20-07-2002" },
    { id: 132, username: "Bisimwa Grace", date: "30-04-1990" },
    { id: 132, username: "Diane Uwase", date: "30-04-1990" },
    { id: 102, username: "Nathasha Lutonde", date: "29-05-2006" },
    { id: 152, username: "Esther Bisimwa", date: "30-04-1990" },
    { id: 172, username: "Blaise Wa Bonifasse", date: "30-04-1990" },
  ]);

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
      <div className="container">
        <div className="box">
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
        </div>
        <div className="box">
          <ListUsers users={data} />
        </div>
      </div>
    </>
  );
};

export default Data;
