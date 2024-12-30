import './App.css'
import Route from "./routes/Index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  )
}

export default App;
