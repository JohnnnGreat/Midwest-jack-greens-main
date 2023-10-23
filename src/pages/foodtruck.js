import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Instafeed from "instafeed.js";

function FoodTruck() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const feed = new Instafeed({
      accessToken:
        "IGQWRNY09QQkk4bU9lMW1rSmJxZA25SejdlSFk5UVJld0Q4M2RKb2hFd0dJTlZAuWTNUTlZApRDRjT1FCdTU1dkZAwUjU2bGV5ZA0tVdmgxRWRKZAU9FWjVoNG5xMTBOWmIzSFVVMHhIc0JCYjNlZAkFETkJrakJBUFVqNGMZD",
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
