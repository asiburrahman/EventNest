import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Ratting() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Rate this event:</h2>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5, 6].map((star) => (
          <FaStar
            key={star}
            onClick={() => {setRating(star)}}
            className={ star  <= rating ? "text-yellow-500" : "text-gray-400"}
            size={30}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
      <p className="mt-2">Your rating: {rating}</p>
    </div>
  );
}

export default Ratting;