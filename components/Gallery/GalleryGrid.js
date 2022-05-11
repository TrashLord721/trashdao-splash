import { Image } from "@chakra-ui/react";
import next from "next";
import { useEffect, useState } from "react";
import styles from "./GalleryGrid.module.scss";
import { useHeight } from "../../contexts/heightContext";

export default function GalleryGrid() {
  const [assets, setAssets] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const { refreshHeight } = useHeight();

  // Call API code block explained with mack
  useEffect(() => {
    async function getData() {
      const options = {
        method: "GET",
        headers: { Accept: "application/json" },
      };
      const result = await fetch("/api/opensea", options);
      const jsonResult = await result.json();
      if (typeof jsonResult !== "undefined") {
        setAssets(jsonResult.assets);
        setNextCursor(jsonResult?.next);
        refreshHeight();
      }
    }
    getData();
  }, []);

  const getNextData = async () => {
    const body = JSON.stringify({ cursor: `${nextCursor}` });
    const options = {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
    };
    const result = await fetch("/api/opensea-cursor", options);
    const jsonResult = await result.json();
    if (typeof jsonResult !== "undefined") {
      setAssets((v) => {
        return [...v, ...jsonResult.assets];
      });
      setNextCursor(jsonResult?.next);
      refreshHeight();
    }
  };

  return (
    <>
      <div className={styles.galleryGrid}>
        {assets?.length > 0 &&
          assets.map((asset, index) => {
            const data = {};
            data.thumbnail = asset?.image_url;
            data.index = index;
            data.asset = asset;
            return <GridItem key={index} data={data} />;
          })}
      </div>
      {nextCursor !== null && (
        <>
          <div className={styles.loadMoreButton} onClick={() => getNextData()}>
            Load More
          </div>
        </>
      )}
    </>
  );
}

const GridItem = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const thumbnail = props?.data?.thumbnail;
  const index = props?.data?.index;
  const asset = props?.data?.asset;

  return (
    <div
      className={styles.gridItem}
      onMouseEnter={() => setDisplayModal(true)}
      onMouseLeave={() => setDisplayModal(false)}
    >
      <a href={asset?.permalink} target="_blank" rel="noreferrer">
        <Image
          src={thumbnail}
          alt={`TrashDAO Image #${index}`}
          className={styles.gridImage}
        />
        {displayModal && (
          <div className={styles.gridModal}>
            <h3>
              Collection: <br />
              <strong>{asset?.collection?.name}</strong>
            </h3>
            <h4>
              ID: <br />
              <strong>{asset?.token_id}</strong>
            </h4>
          </div>
        )}
      </a>
    </div>
  );
};
