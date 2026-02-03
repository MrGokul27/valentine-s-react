import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Valentine() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const name = state?.name || "Friend";

  const [noPos, setNoPos] = useState({ top: "50%", left: "55%" });
  const [yesScale, setYesScale] = useState(1);

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    setYesScale((prev) => prev + 0.1);
  };

  return (
    <div className="card">
      <div className="cat">🐱💖</div>
      <h2>{name} will you be my valentine?</h2>

      <div className="buttons">
        <button
          className="yes"
          style={{ transform: `scale(${yesScale})` }}
          onClick={() => navigate("/yay")}
        >
          Yes
        </button>

        <button
          className="no"
          style={{ top: noPos.top, left: noPos.left }}
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>

      <p className="hint">"No" seems a bit shy 😼</p>
    </div>
  );
}

export default Valentine;
