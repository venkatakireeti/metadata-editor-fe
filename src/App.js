import logo from "./logo.svg";
import "./App.css";

import { HotTable } from "@handsontable/react";
import { useEffect, useState } from "react";


function App() {
  
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://18.217.55.36:8081/api/metadatas")
      .then(res => res.json())
      .then(
        data => {
          setIsLoaded(true);
          const results =  data.map(element => ({ 'ListName': element.ListName, 'id' : element.id }));
          setItems(results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          // setError(error);
        }
      )
  }, [])
  return (
    <div className="App">
      <HotTable
        data={items}
        licenseKey={"non-commercial-and-evaluation"}
        rowHeaders={true}
        colHeaders={[ "ListName", "id"]}
        // nestedRows={true}
        contextMenu={true}
        rowHeaderWidth={120}
      />
    </div>
  );
}

export default App;
