import { Image } from "@chakra-ui/react";
import Columned from "react-columned";
import { useEffect, useState } from "react";

export default function GalleryGrid() {
  const [thumbnails, setThumbnails] = useState([]);

  // Call API code block explained with mack
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
      };
      const result = await fetch("/api/opensea");
      const jsonResult = await result.json();
      if (typeof jsonResult !== "undefined") {
        setThumbnails(jsonResult.thumbnails);
      }
    }
    getData();
  }, []);
  return (
    <>
      <Columned>
        {thumbnails.length > 0 &&
          thumbnails.map((thumbnail, index) => {
            return (
              <Image
                src={thumbnail}
                alt={`TrashDAO Image #${index}`}
                key={index}
              />
            );
          })}
      </Columned>
    </>
  );
}
