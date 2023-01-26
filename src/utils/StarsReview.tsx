import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';

export const StarsReview: React.FC<{ rating: number; size: number }> = (
  props
) => {
  let { rating } = props;
  const ratingOrigVal: number = rating;
  let fullStars: number = 0;
  let halfStars: number = 0;
  let emptyStars: number = 0;

  // create a type guard
  // chatgpt refactoring isn't working well
  if (rating !== undefined && rating > 0 && rating <= 5) {
    for (let i = 0; i <= 4; i += 1) {
      // Skip if rating is not a whole number
      if (rating >= 1) {
        fullStars += 1;
      }
      // Execute on positive decimals numbers to create one halfstar between 1 and 0 on last iteration
      if (rating < 1 && rating >= 0 && rating % 2 !== 0) {
        halfStars = 1;
      }
      // if rating is between 4 and 5 then empty will be 0
      if (rating > 4 && rating < 5) {
        emptyStars = 0;
      }
      // Check if ratingOrigVal is below 4 and current rating less than 1 (empty)
      if (ratingOrigVal < 4 && rating < 1) {
        emptyStars += 1;
      }
      rating -= 1;
    }
  } else {
    emptyStars = 5;
  }

  return (
    <div>
      {Array.from({ length: fullStars }, (_, i) => (
        <ImStarFull color="gold" size={props.size} key={i} />
      ))}
      {Array.from({ length: halfStars }, (_, i) => (
        <ImStarHalf color="gold" size={props.size} key={i} />
      ))}

      {emptyStars === 5 &&
        Array.from({ length: emptyStars }, (_, i) => (
          <ImStarEmpty color="gold" size={props.size} key={i} />
        ))}

      {emptyStars !== 5 &&
        Array.from({ length: emptyStars - 1 }, (_, i) => (
          <ImStarEmpty color="gold" size={props.size} key={i} />
        ))}
    </div>
  );
};
