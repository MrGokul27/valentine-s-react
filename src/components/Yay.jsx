import { useNavigate } from "react-router-dom";

function Yay() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <h1>🎉 YAYYYYY!!! 🎉</h1>
      <h2>You said YES, let's go on a date! 💖</h2>
      <p>A promise for forever 💖💍🥰</p>

      {/* <button
        style={{
          marginTop: "20px",
          background: "hotpink",
          color: "white",
        }}
        onClick={() => navigate("/")}
      >
        Try Again 💌
      </button> */}
    </div>
  );
}

export default Yay;
