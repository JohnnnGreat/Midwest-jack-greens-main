import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import axios from "axios";
import Instafeed from "instafeed.js";
import Link from "next/link";

function Wherearewe() {
  const [loading, setLoading] = useState(true);
  const [reels, setReels] = useState([]);

  // const access_token = process.env.INSTAGRAM_API;
  // console.log(process.env.INSTAGRAM_API);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        // const response = await fetch("/api/instagram");
        const response = await fetch("api/instagram", {
          method: "GET",
          // body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        setReels(data.data.data);
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };

    fetchReels();
  }, []);

  return (
    <>
      <Header text="Where are we" />
      <div className="food-wrapper">
        <div className="food-grid">
          {reels.map((reel) => (
            <div key={reel.id}>
              <Link href={reel.permalink}>
                {/* <h2>{reel.caption}</h2> */}
                {reel.media_type === "VIDEO" ? (
                  <video className="video-ctr" autoPlay muted>
                    <source src={reel.media_url} type="video/mp4" />
                    Your browser does support the video tag.
                  </video>
                ) : (
                  <Image
                    width={400}
                    height={400}
                    className="reel-img"
                    src={reel.media_url}
                    alt={reel.caption}
                  />
                )}

                {/* Add other reel details as needed */}
              </Link>
            </div>
          ))}
        </div>
        {/* <div id="instafeed"></div> */}
      </div>
    </>
  );
}

export default Wherearewe;
