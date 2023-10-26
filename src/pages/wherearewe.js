import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import axios from "axios";
import Instafeed from "instafeed.js";
import Link from "next/link";
import Head from "next/head";

function Wherearewe({ truck }) {
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
      <Head>
        <title>Where are we | Midwest Jerk & Green</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header truck={true} text="Where are we ?" />
      <div className="food-wrapper">
        <div className="food-grid">
          {reels.map((reel) => (
            <div key={reel.id}>
              <Link target="_blank" href={reel.permalink}>
                {/* <h2>{reel.caption}</h2> */}
                {reel.media_type === "VIDEO" ? (
                  <video className="video-ctr" autoPlay muted controls>
                    <source src={reel.media_url} type="video/mp4" />
                    Your browser does support the video tag.
                  </video>
                ) : (
                  <img
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
