import BookListing from "./components/BookListing";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import BookProvider from "./context/BookContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#999", height: "100vh" }}>
      <BookProvider>
        <Router>
          <Header />
          <Route path="/" exact component={BookListing} />
          <Route path="/add-book" component={AddBook} />
        </Router>
      </BookProvider>
    </div>
  );
}

export default App;
