import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomAlphabet } from "../utils/helper";
import WatermarkedImage from "./WatermarkedImage";
import MagnifierImage from "./MagnifierImage";

export default function Home() {
  const [logo, setLogo] = useState([]);
  const [blackWight, setBlackWight] = useState(false);
  const [magnifier, setMagnifier] = useState(false);
  const [watermarkText, setWatermarkText] = useState("fardap");

  const fetchLogo = async () => {
    let randomChar = getRandomAlphabet();

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.api-ninjas.com/v1/logo?name=${randomChar}`,
      headers: {
        "X-Api-Key": "lgm57ELpNWDJI5xXgQC7Ig==2G3w2wbNH9Kjhqap",
      },
    };

    try {
      const response = await axios.request(config);
      if (response.data.length > 0) {
        setLogo(response.data[0]);
        setBlackWight(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-3">
      {magnifier ? (
        <MagnifierImage imageUrl={logo?.image} blackWight={blackWight} />
      ) : (
        <WatermarkedImage
          imageUrl={logo?.image}
          watermarkText={watermarkText}
          blackWight={blackWight}
        />
      )}

      <button className="px-3 py-1 bg-cyan-500 rounded-md" onClick={fetchLogo}>
        reload
      </button>
      <button
        className="px-3 py-1 bg-cyan-500 rounded-md"
        onClick={() => setBlackWight(!blackWight)}
      >
        Black & White
      </button>
      <button
        className="px-3 py-1 bg-cyan-500 rounded-md"
        onClick={() => setMagnifier(!magnifier)}
      >
        Magnifier
      </button>
      <input
        name="Watermark"
        type="text"
        onChange={(e) => setWatermarkText(e.target.value || "fardap")}
        placeholder="WatermarkText"
        className="p-1 border border-2 rounded-md"
      />
    </main>
  );
}
