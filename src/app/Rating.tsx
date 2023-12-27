type RatingProps = {
  stars: number;
};

const Rating = ({ stars }: RatingProps) => {
  const starsDiv = [];
  const MAX_STARS = 5;

  for (let i = 0; i < stars; i++) {
    starsDiv.push(<div key={i}>😀</div>);
  }

  for (let i = 0; i < MAX_STARS - Math.ceil(stars); i++) {
    starsDiv.push(<div key={"bad" + i}>😒</div>);
  }

  return (
    <div className="flex flex-row gap-2">
      {stars < 0 || stars > 6 ? (
        <div>Incorrect number of stars</div>
      ) : (
        starsDiv.map((starDiv) => starDiv)
      )}
    </div>
  );
};

export default Rating;
