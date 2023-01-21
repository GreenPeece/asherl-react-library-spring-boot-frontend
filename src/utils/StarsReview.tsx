import { ImStarEmpty, ImStarFull, ImStarHalf } from 'react-icons/im';

export const StarsReview: React.FC<{ rating: number; size: number }> = (
  props
) => {
  let { rating } = props;
  let fullStars: number = 0;
  let halfStars: number = 0;
  let emptyStars: number = 0;

  // create a type guard
  if (rating !== undefined && rating > 0 && rating <= 5) {
    for (let i = 0; i <= 4; i += 1) {
      if (rating - 1 >= 0) {
        fullStars += 1;
        rating -= 1;
      } else if (rating - (1 % 1) !== 0) {
        halfStars = 1;
      }
      if (rating < 1) {
        emptyStars += 1;
        rating -= 1;
      }
      console.log(`value of i: ${i}`);
    }
    console.log('Called once only');
  } else {
    emptyStars = 5;
  }

  console.log('Called again second time!');
  return (
    <div>
      {Array.from({ length: fullStars }, (_, i) => (
        <ImStarFull color="gold" size={props.size} key={i} />
      ))}
      {Array.from({ length: halfStars }, (_, i) => (
        <ImStarHalf color="gold" size={props.size} key={i} />
      ))}
      {Array.from({ length: emptyStars }, (_, i) => (
        <ImStarEmpty color="gold" size={props.size} key={i} />
      ))}
    </div>
  );
};
