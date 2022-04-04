import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import BoardList from "./components/BoardList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BoardCreate from "./components/BoardCreate";
import { Container } from "react-bootstrap";
import "./App.css";
import Error from "./components/Error";
import BoardRead from "./components/BoardRead";
import BoardModify from "./components/BoardModify";
import PwCheck from "./components/PwCheck";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid="sm" className="pt-5">
        <Switch>
          <Route path="/" component={BoardList} exact />
          <Route path="/create" component={BoardCreate} />
          <Route path="/read/:id" component={BoardRead} />
          <Route path="/modify" component={BoardModify} />
          <Route path="/check" component={PwCheck} />
          <Route component={Error} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
