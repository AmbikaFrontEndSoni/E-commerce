import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Rating.css";

const Rating = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    // debugger;
    return (
      
      <span key={index} className="star">
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return <div>{ratingStar}</div>;
};

export default Rating;
