import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import axios from "axios";
import Instafeed from "instafeed.js";
require("dotenv").config();

function FoodTruck() {
  const [loading, setLoading] = useState(true);
  const [reels, setReels] = useState([]);

  const access_token = process.env.INSTAGRAM_API;

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${access_token}`
        );

        const data = await response.json();
        console.log(data);

        setReels(response.data.data);
      } catch (error) {
        console.error("Error fetching reels:", error);
      }
    };

    fetchReels();
  }, []);

  // useEffect(() => {
  //   const feed = new Instafeed({
  //     accessToken: process.env.INSTAGRAM_API,
  //     target: "instafeed",
  //     limit: 20,
  //     resolution: "standard_resolution",
  //     userId: "58744712810",
  //     template:
  //       '<a href="{{link}}" target="_blank" rel="noopener noreferrer"><img src="{{image}}" /><span class="cap">{{caption}}</span></a>',
  //     // <span class="cap">{{caption}}</span>

  //     after: () => {
  //       const images = document.querySelectorAll("#instafeed img");
  //       const urls = new Set();
  //       images.forEach((img) => {
  //         const src = img.getAttribute("src");
  //         if (urls.has(src)) {
  //           img.remove(); // Remove the duplicate image
  //           // captions[i].remove();
  //         } else {
  //           urls.add(src);
  //         }
  //       });
  //       setLoading(false);
  //       const captions = document.querySelectorAll("#instafeed span");
  //       captions.forEach((caption) => {
  //         const text = caption.textContent;
  //         const truncated = text.substring(0, 80) + "...";
  //         caption.textContent = truncated;
  //       });
  //     },
  //   });
  //   feed.run();
  // }, []);
  return (
    <>
      <Header text="Food Truck" />
      <div className="food-wrapper">
        {/* {loading && (
          <div className="p-loader">
            {" "}
            <p>Loading...</p>
          </div>
        )} */}
        {reels.map((reel) => (
          <div key={reel.id}>
            <h2>{reel.caption}</h2>
            <img src={reel.thumbnail_url} alt={reel.caption} />
            {/* Add other reel details as needed */}
          </div>
        ))}
        <div id="instafeed"></div>
      </div>
    </>
  );
}

export default FoodTruck;
