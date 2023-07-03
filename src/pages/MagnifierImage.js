import Magnifier from "react-magnifier";

const MagnifierImage = ({ imageUrl, blackWhite }) => {
  return (
    <Magnifier
      src={imageUrl}
      width={"w-2/3"}
      className={`w-2/3 ${blackWhite ? "grayscale" : null}`}
    />
  );
};

export default MagnifierImage;
