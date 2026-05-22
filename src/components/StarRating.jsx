import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import "../style/StarRating.css";

function StarRating({ rating, setRating }) {
  return (
    <div className="star-rating-container">
      <h2 className="rating-title">Rate your experience</h2>

      <Stack spacing={1}>
        <Rating
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue || 0);
          }}
          sx={{
            fontSize: "4rem",
            color: "#FFC107",
          }}
        />
      </Stack>
    </div>
  );
}

export default StarRating;
