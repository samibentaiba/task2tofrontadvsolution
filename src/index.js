import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/sections/Header.jsx"
import Menu from "./components/sections/Menu.jsx"
import Footer from "./components/sections/Footer.jsx"


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}



// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
