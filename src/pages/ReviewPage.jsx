import { useState } from "react";
import Header from "../components/Header.jsx";
import StarRating from "../components/StarRating.jsx";
import TagSelector from "../components/TagSelector.jsx";
import GenerateButton from "../components/GenerateButton.jsx";
import { generateReview } from "../utils/generateReview";
import { useNavigate } from "react-router-dom";

import "../style/ReviewPage.css";

function ReviewPage() {
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  const tagsByRating = {
    1: ["Bad Service", "Poor Taste", "Dirty Tables", "Too Expensive"],

    2: ["Slow Service", "Average Food", "Not Clean", "Cold Food"],

    3: ["Good Food", "Okay Service", "Nice Place", "Average Experience"],

    4: ["Tasty Food", "Friendly Staff", "Quick Service", "Nice Ambience"],

    5: [
      "Amazing Food",

      "Excellent Service",

      "Very Clean",

      "Highly Recommended",
    ],
  };

  return (
    <div className="app-container">
      <div className="review-card">
        <Header />
        <StarRating
          rating={rating}
          setRating={(value) => {
            setRating(value);

            // reset tags when rating changes

            setSelectedTags([]);
          }}
        />

        {rating > 0 && tagsByRating[rating] && (
          <TagSelector
            tags={tagsByRating[rating]}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        )}

        <GenerateButton
          onClick={async () => {
            const review = await generateReview(
              rating,

              selectedTags
            );

            navigate("/review-preview", {
              state: {
                review,
              },
            });
          }}
        />
      </div>
    </div>
  );
}

export default ReviewPage;
