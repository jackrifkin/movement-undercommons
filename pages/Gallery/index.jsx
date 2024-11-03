import styles from "./Gallery.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import usePortraitGallery from "../Hooks/usePortraitGallery";

// TODO: fetched from db (?)
const filters = ["Poetic", "Mundane", "Labor", "Functional", "Virtuosic"];

const NO_MATCHING_FILTERS_MESSAGE =
  "It looks like there isn't a portrait that matches those filters...yet.\nHave an idea? Contact GrishaColeman@Example.com";

const Thumbnail = ({ filePath, id }) => {
  return (
    <Image
      className={styles.thumbnail}
      id={id}
      src={filePath}
      alt={`thumbnail ${filePath}`}
      fill
      loading="lazy"
    />
  );
};

export default function Gallery() {
  const [
    hasMultiplePages,
    currentPortraits,
    handleFilterSelect,
    isFilterSelected,
    isPortraitVisible,
  ] = usePortraitGallery();
  const router = useRouter();

  const GalleryNav = () => {
    return <div className={styles.galleryNavContainer}></div>;
  };

  return (
    <>
      {hasMultiplePages && <GalleryNav />}
      <div className={`${styles.filterContainer}`}>
        <h5 className={`${styles.filterLabel} abolitionRegular`}>Filter</h5>
        {filters.map((filter, key) => (
          <div
            key={key}
            className={styles.filterButton}
            onClick={(_e) => handleFilterSelect(filter)}
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
          const isVisible = isPortraitVisible(portrait);

          const handleClick = () => {
            router.push(`/Portrait/${portrait.id}`);
          };

          return (
            isVisible && (
              <div
                key={index}
                className={`${styles.portraitContainer} col-12 col-md-6 col-xl-4`}
              >
                <div
                  id={`container_${index}`}
                  className={`${styles.portraitThumbnailContainer}`}
                  onClick={handleClick}
                >
                  <Thumbnail
                    id={`thumbnail_${index}`}
                    filePath={`/Thumbnails${portrait.thumbnailFilePath}`}
                  />
                </div>
                <h3 className={`${styles.portraitLabel} abolitionRegular`}>
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
        {currentPortraits.every((portrait) => !isPortraitVisible(portrait)) && (
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
