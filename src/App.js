import "./App.css";
import { Route, Switch } from "react-router";
import MetadataList from "./pages/metadata-list";
import AddMetadata from "./pages/add-metadata";
import MetadataAppBar from "./pages/app-bar";
import EditMetadata from "./pages/edit-metadata";

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          { props.user ? <div><MetadataAppBar url={props.url} user={props.user} />
          <AddMetadata/>
          <MetadataList></MetadataList></div> : <MetadataAppBar url={props.url}/>}
        </Route>
        <Route path="/edit/:id" exact>
          <EditMetadata></EditMetadata>
        </Route>
        <Route>
          <p>404 Not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

