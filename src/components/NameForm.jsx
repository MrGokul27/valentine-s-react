import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NameForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    navigate("/valentine", { state: { name } });
  };

  return (
    <div className="center">
      <h1>💌 Valentine Name</h1>
      <form onSubmit={handleSubmit} className="form-input">
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default NameForm;
