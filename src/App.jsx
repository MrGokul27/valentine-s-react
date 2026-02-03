import { Routes, Route } from "react-router-dom";
import NameForm from "./components/NameForm";
import Valentine from "./components/Valentine";
import Yay from "./components/Yay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NameForm />} />
      <Route path="/love/:id" element={<Valentine />} />
      <Route path="/love/:id/yay" element={<Yay />} />
    </Routes>
  );
}

export default App;
