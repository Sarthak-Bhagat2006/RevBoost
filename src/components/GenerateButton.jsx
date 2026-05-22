import "../style/GenerateButton.css";

function GenerateButton({ onClick }) {
  return (
    <button className="generate-btn" onClick={onClick}>
      Generate AI Review
    </button>
  );
}

export default GenerateButton;
