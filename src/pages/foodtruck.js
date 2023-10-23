import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Instafeed from "instafeed.js";

function FoodTruck() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const feed = new Instafeed({
      accessToken:
        "IGQWRQS0o3QkRaVnhoN3BiSHptN0VMaUZAPQlFyU3pjYzhMYkhuaW9SOHNRMnRFWjFyaWdhVDVQeHNYV2M3Q3RWdHpfV3ZAyVDZAka1FVb29sb0RWMnFhY0wyb3IyRzJ2ZAWZA0a19VWDZADRlBTLW1MVzJ1ZAV9waGJsalkZD",
      target: "instafeed",
      limit: 20,
      resolution: "standard_resolution",
      userId: "58744712810",
      template:
        '<a href="{{link}}" target="_blank" rel="noopener noreferrer"><img src="{{image}}" /><span class="cap">{{caption}}</span></a>',
      // <span class="cap">{{caption}}</span>

      after: () => {
        const images = document.querySelectorAll("#instafeed img");
        const urls = new Set();
        images.forEach((img) => {
          const src = img.getAttribute("src");
          if (urls.has(src)) {
            img.remove(); // Remove the duplicate image
            // captions[i].remove();
          } else {
            urls.add(src);
          }
        });
        setLoading(false);
        const captions = document.querySelectorAll("#instafeed span");
        captions.forEach((caption) => {
          const text = caption.textContent;
          const truncated = text.substring(0, 80) + "...";
          caption.textContent = truncated;
        });
      },
    });
    feed.run();
  }, []);
  return (
    <>
      <Header text="Food Truck" />
      <div className="food-wrapper">
        {loading && (
          <div className="p-loader">
            {" "}
            <p>Loading...</p>
          </div>
        )}

        <div id="instafeed"></div>
      </div>
    </>
  );
}

export default FoodTruck;
