import Magnifier from "react-magnifier";

const MagnifierImage = ({ imageUrl, blackWight }) => {
  return (
    <Magnifier
      src={imageUrl}
      width={"w-2/3"}
      className={`w-2/3 ${blackWight ? "grayscale" : null}`}
    />
  );
};

export default MagnifierImage;
