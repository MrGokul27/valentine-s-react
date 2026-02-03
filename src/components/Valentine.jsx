import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Valentine() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem(`valentine_${id}`);
    if (storedName) {
      setName(storedName);
    } else {
      setName("My Love");
    }
  }, [id]);

  const [noPos, setNoPos] = useState({ top: "50%", left: "55%" });
  const [yesScale, setYesScale] = useState(1);

  const moveNoButton = () => {
    setNoPos({
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
    });
    setYesScale((prev) => prev + 0.1);
  };

  return (
    <div className="card">
      <div className="cat">🐱💖</div>
      <h2>{name}, will you be my Valentine?</h2>

      <div className="buttons">
        <button
          className="yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={() => navigate(`/love/${id}/yay`)}
        >
          Yes
        </button>

        <button
          className="no"
          style={{ top: noPos.top, left: noPos.left }}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
        >
          No
        </button>
      </div>

      <p className="hint">"No" seems a bit shy 😼</p>
    </div>
  );
}

export default Valentine;
