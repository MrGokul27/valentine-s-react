import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const generateId = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const id = generateId();

    // store mapping
    localStorage.setItem(`valentine_${id}`, name);

    const generatedLink = `${window.location.origin}/love/${id}`;
    setLink(generatedLink);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied 💖");
  };

  return (
    <div className="center">
      <h1>💌 Valentine's Name</h1>
      <form
        onSubmit={handleSubmit}
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <input
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="generate-link-btn">
          Generate Link
        </button>
      </form>

      {link && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ marginBottom: "10px" }}>Share this link 💕</p>
          <input value={link} readOnly style={{ width: "300px" }} />
          <br />
          <button onClick={copyLink} style={{ marginTop: "10px" }}>
            Copy Link 🔗
          </button>
        </div>
      )}
    </div>
  );
}

export default NameForm;
