import React, { useEffect, useRef } from "react";

const WatermarkedImage = ({ imageUrl, watermarkText, blackWight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 0; // Set initial width
    canvas.height = 0; // Set initial height

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = "5rem Arial";
      ctx.fillStyle = "#9ca3af";
      ctx.textAlign = "center";

      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      ctx.fillText(watermarkText, textX, textY);
    };
  }, [imageUrl, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-2/3 ${blackWight ? "grayscale" : null}`}
      id="imagess"
    />
  );
};

export default WatermarkedImage;
