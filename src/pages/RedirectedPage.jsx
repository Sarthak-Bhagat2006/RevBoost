import { useLocation } from "react-router-dom";

import "../style/RedirectedPage.css";

function RedirectedPage() {
  const location = useLocation();

  const review = location.state?.review || "";

  async function handleSubmitReview() {
    try {
      await navigator.clipboard.writeText(review);

      alert("Review copied successfully!");

      window.location.href =
        ("https://www.google.com/search?sca_esv=3e027c27d603e6ff&sxsrf=ANbL-n5uYtnhDHkBpx3JiLvBZhq4U1t31g:1779469100829&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVLe8BRxjm4WywqacjjKWtArD9-3JAvaLBp1X8RwPrWH1Kc2DFHEseXqY37itOj7vpkwnm3zHF3narWVFrQPIYvgyBel&q=HOTEL+VEDAS+Reviews&sa=X&ved=2ahUKEwj_75L9rs2UAxULxzgGHWBOLDQQ0bkNegQIJBAF&biw=1440&bih=900&dpr=2#lrd=0x3bdd0160494fdf1b:0x8ef88c08566368c2,3,,,,",
        "_blank");
    } catch (error) {
      console.log(error);

      alert("Failed to copy review");
    }
  }

  return (
    <div className="preview-container">
      <div className="preview-card">
        <h2>Your Review</h2>

        <textarea defaultValue={review} className="review-textarea" />

        <button className="submit-btn" onClick={handleSubmitReview}>
          Submit Review
        </button>
      </div>
    </div>
  );
}

export default RedirectedPage;
