import styles from "./Gallery.module.css";
// TODO: should be fetched from db + stored in redux store
import portraits from "./../../temp_data/portraits.json"
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// TODO: fetched from db (?)
const filters = ['Poetic', 'Mundane', 'Labor', 'Functional', 'Virtuosic'];

const PORTRAITS_PER_PAGE = 12;
const NO_MATCHING_FILTERS_MESSAGE = "It looks like there isn't a portrait that matches those filters...yet.\nHave an idea? Contact GrishaColeman@Example.com";

const Thumbnail = ({ filePath, canPlayCallback }) => {
  const videoRef = useRef(null)
  const [startTime, setStartTime] = useState(0)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  const handleMouseExit = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime
      videoRef.current.pause()
    }
  }

  const setVideoPlaybackTime = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      const halfDuration = videoElement.duration / 2;

      if (!isNaN(halfDuration) && isFinite(halfDuration)) {
        console.log('video start time set')
        videoElement.currentTime = halfDuration;
        setStartTime(halfDuration)
      }
    }
  };

  useEffect(() => {
    console.log(filePath)
    if (videoRef.current) {
      console.log('video loaded')
      videoRef.current.addEventListener('loadedmetadata', setVideoPlaybackTime);

      setVideoPlaybackTime();

      return () => {
        videoRef.current?.removeEventListener('loadedmetadata', setVideoPlaybackTime);
      }
    }
  }, [filePath])

  return (
    <video height={'100%'} ref={videoRef} controls={false} autoPlay={false} muted src={filePath} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} />
  )
}

export default function Gallery() {
  const [hasMultiplePages, setHasMultiplePages] = useState(false)
  const [bodyHeight, setBodyHeight] = useState(0)
  const [currentFilters, setCurrentFilters] = useState([])
  const [currentPortraits, setCurrentPortraits] = useState(portraits)

  const router = useRouter()

  const GalleryNav = () => {
    return (
      <div className={styles.galleryNavContainer}>

      </div>
    );
  }

  useEffect(() => {
    setCurrentPortraits(portraits)
    const needsMultiplePages = portraits?.length > PORTRAITS_PER_PAGE;
    setHasMultiplePages(needsMultiplePages)

    const height = `calc(100vh - 130px${needsMultiplePages ? ' - 30px' : ''})`;
    setBodyHeight(height)
  }, [portraits])

  useEffect(() => {
    const filteredPortraits = portraits.filter((portrait) => currentFilters.every((filter) => portrait.filters?.includes(filter)))
    setCurrentPortraits(filteredPortraits)
  }, [currentFilters])

  const isFilterSelected = (filter) => {
    return currentFilters.includes(filter);
  }

  const handleFilterSelect = (filter) => {
    if (isFilterSelected(filter)) {
      setCurrentFilters(currentFilters.filter((f) => f !== filter))
    } else {
      setCurrentFilters(currentFilters.concat(filter))
    }
  }

  return (
    <>
      {hasMultiplePages && <GalleryNav />}
      <div className={`${styles.galleryContainer} row`} style={{ height: bodyHeight }}>
        <div className={`${styles.filterContainer} col-2`}>
          {filters.map((filter) =>
            <div className={styles.filterButton} onClick={(e) => handleFilterSelect(filter)} style={isFilterSelected(filter) ? { backgroundColor: 'var(--blue)', borderRight: '10px solid var(--burnt-orange)' } : {}}>
              <h4 className={`${styles.filterText} abolitionRegular`}>{filter}</h4>
            </div>
          )}
        </div>
        <div className={`${styles.portraitsContainer} col`}>
          {currentPortraits?.map((portrait, index) => {
            console.log(`portrait #${index}: ${portrait.filePath}`)
            const isVisible = currentFilters.every((filter) => portrait.filters?.includes(filter))

            const handleClick = () => {
              router.push(`/Portrait/${portrait.id}`)
            }

            return (
              isVisible &&
              <div className={`${styles.portraitContainer}`}>
                <div className={`${styles.portraitThumbnailContainer}`} onClick={handleClick}>
                  <Thumbnail filePath={portrait.filePath} />
                </div>
                <h3  onClick={handleClick} className={`${styles.portraitLabel} abolitionRegular`} style={{ margin: '15px 0 0 5px' }}>{portrait.title}<br/><span style={{fontSize: 'x-large'}}>{portrait.year}</span></h3>
              </div>
            )
          })}
          {portraits.length > 0 &&
            currentPortraits.every((portrait) => {
              const isVisible = currentFilters.every((filter) => portrait.filters?.includes(filter));
              return !isVisible;
            }) && (
              <div className={`d-flex justify-content-center`} style={{ width: '100%' }}>
                <h2 className={`abolitionRegular text-center`} style={{ whiteSpace: 'pre-line', lineHeight: '1.5' }}>{NO_MATCHING_FILTERS_MESSAGE}</h2>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
