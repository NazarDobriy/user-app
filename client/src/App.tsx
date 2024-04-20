import { FC } from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

const App: FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
