import styles from "./Gallery.module.css";
// TODO: should be fetched from db + stored in redux store
import portraits from "./../../temp_data/portraits.json";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

// TODO: fetched from db (?)
const filters = ["Poetic", "Mundane", "Labor", "Functional", "Virtuosic"];

const PORTRAITS_PER_PAGE = 12;
const NO_MATCHING_FILTERS_MESSAGE =
  "It looks like there isn't a portrait that matches those filters...yet.\nHave an idea? Contact GrishaColeman@Example.com";

// TODO: add 'float' hover animation + shadow
const Thumbnail = ({ filePath, id, handlePageResize }) => {
  return (
    <img
      className={styles.thumbnail}
      id={id}
      src={filePath}
      alt={`thumbnail ${id}`}
      height={"100%"}
      onLoad={handlePageResize}
    />
  );
};

export default function Gallery() {
  const [hasMultiplePages, setHasMultiplePages] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [currentFilters, setCurrentFilters] = useState([]);
  const [currentPortraits, setCurrentPortraits] = useState(portraits);
  const [labelWidths, setLabelWidths] = useState({});

  const router = useRouter();

  const GalleryNav = () => {
    return <div className={styles.galleryNavContainer}></div>;
  };

  useEffect(() => {
    setCurrentPortraits(portraits);
    const needsMultiplePages = portraits?.length > PORTRAITS_PER_PAGE;
    setHasMultiplePages(needsMultiplePages);

    const height = `calc(100vh - 130px - 70px${needsMultiplePages ? " - 30px" : ""})`;
    setBodyHeight(height);
  }, [portraits]);

  useEffect(() => {
    const filteredPortraits = portraits.filter((portrait) =>
      currentFilters.every((filter) => portrait.filters?.includes(filter)),
    );
    setCurrentPortraits(filteredPortraits);
  }, [currentFilters]);

  const handlePageResize = useCallback(() => {
    currentPortraits.forEach((_portrait, index) => {
      const thumbnailElement = document.getElementById(`thumbnail_${index}`);
      const containerElement = document.getElementById(`container_${index}`);

      if (thumbnailElement && containerElement) {
        const thumbnailWidth = thumbnailElement.offsetWidth;
        const containerWidth = containerElement.offsetWidth - 40; // minus horizontal padding

        if (thumbnailWidth < containerWidth) {
          setLabelWidths((prevMap) => ({
            ...prevMap,
            [`label_${index}`]: thumbnailWidth,
          }));
        } else {
          setLabelWidths((prevMap) => ({
            ...prevMap,
            [`label_${index}`]: containerWidth,
          }));
        }
      }
    });
  }, [currentPortraits]);

  useEffect(() => {
    handlePageResize();

    window.addEventListener("resize", handlePageResize);

    return () => {
      window.removeEventListener("resize", handlePageResize);
    };
  }, [currentPortraits, currentFilters, handlePageResize]);

  const isFilterSelected = (filter) => {
    return currentFilters.includes(filter);
  };

  const handleFilterSelect = (filter) => {
    if (isFilterSelected(filter)) {
      setCurrentFilters(currentFilters.filter((f) => f !== filter));
    } else {
      setCurrentFilters(currentFilters.concat(filter));
    }
  };

  return (
    <>
      {hasMultiplePages && <GalleryNav />}
      <div className={`${styles.filterContainer}`}>
        <h5 className={`${styles.filterLabel} abolitionRegular`}>Filter</h5>
        {filters.map((filter) => (
          <div
            className={styles.filterButton}
            onClick={(e) => handleFilterSelect(filter)}
            style={
              isFilterSelected(filter)
                ? {
                    border: "3px solid var(--burnt-orange)",
                    padding: "3px 7px",
                  }
                : {}
            }
          >
            <h5 className={`${styles.filterText} abolitionRegular`}>
              {filter}
            </h5>
          </div>
        ))}
      </div>
      <div className={`${styles.portraitsContainer} row justify-content-start`}>
        {currentPortraits?.map((portrait, index) => {
          const isVisible = currentFilters.every((filter) =>
            portrait.filters?.includes(filter),
          );

          const handleClick = () => {
            router.push(`/Portrait/${portrait.id}`);
          };

          return (
            isVisible && (
              <div
                id={`container_${index}`}
                className={`${styles.portraitContainer} col-12 col-md-6 col-xl-4`}
              >
                <div
                  className={`${styles.portraitThumbnailContainer}`}
                  onClick={handleClick}
                >
                  <Thumbnail
                    id={`thumbnail_${index}`}
                    filePath={`/movement-undercommons/Thumbnails/${portrait.thumbnailFilePath}`}
                    handlePageResize={handlePageResize}
                  />
                </div>
                <h3
                  className={`${styles.portraitLabel} abolitionRegular`}
                  style={{
                    marginTop: "15px",
                    width: labelWidths[`label_${index}`],
                  }}
                >
                  <span
                    onClick={handleClick}
                    className={styles.portraitLabelText}
                  >
                    {portrait.title}
                  </span>
                  <br />
                  <span style={{ fontSize: "x-large" }}>{portrait.year}</span>
                </h3>
              </div>
            )
          );
        })}
        {portraits.length > 0 &&
          currentPortraits.every((portrait) => {
            const isVisible = currentFilters.every((filter) =>
              portrait.filters?.includes(filter),
            );
            return !isVisible;
          }) && (
            <div
              className={`d-flex justify-content-center`}
              style={{ width: "100%" }}
            >
              <h2
                className={`abolitionRegular text-center`}
                style={{ whiteSpace: "pre-line", lineHeight: "1.5" }}
              >
                {NO_MATCHING_FILTERS_MESSAGE}
              </h2>
            </div>
          )}
      </div>
    </>
  );
}
