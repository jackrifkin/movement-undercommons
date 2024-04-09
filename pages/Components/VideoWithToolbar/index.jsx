import styles from "./VideoWithToolbar.module.css";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const VideoWithToolbar = ({ src }) => {
  const videoRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !videoElement.muted;
  };

  const toggleFullscreen = () => {
    const videoElement = videoRef.current;
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      calculateVideoDimensions();
    }
  };

  const calculateVideoDimensions = () => {
    const videoElement = videoRef.current;
    if (videoElement?.videoWidth > 0 && videoElement?.videoHeight > 0) {
      const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
      const parentContainer = videoElement.parentElement;
      const parentWidth = parentContainer.clientWidth;
      const parentHeight = parentContainer.clientHeight;

      let videoWidth = parentWidth;
      let videoHeight = parentWidth / aspectRatio;

      if (videoHeight > parentHeight) {
        videoHeight = parentHeight;
        videoWidth = videoHeight * aspectRatio;
      }

      console.log(parentHeight);
      console.log(parentWidth);
      console.log(
        "aspectRatio: " +
          aspectRatio +
          " from: " +
          videoElement.videoWidth +
          " " +
          videoElement.videoHeight,
      );
      console.log("width: " + videoWidth + " height: " + videoHeight);

      setVideoDimensions({ width: videoWidth, height: videoHeight });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", calculateVideoDimensions);
      window.addEventListener("resize", calculateVideoDimensions);
      document.addEventListener("fullscreenchange", handleFullScreenChange);

      calculateVideoDimensions();

      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          calculateVideoDimensions,
        );
        window.removeEventListener("resize", calculateVideoDimensions);
      };
    }
  }, [src]);

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src={src}
          controls={false}
          autoPlay
          disableRemotePlayback
          muted
          onClick={togglePlay}
          className={styles.video}
          disablePictureInPicture
          style={{
            width: videoDimensions.width,
            height: videoDimensions.height,
            zIndex: 100,
          }}
        />
      </div>

      <div className={`${styles.videoToolBar}`}>
        <Image
          className={styles.icon}
          src={"/Play.svg"}
          width={30}
          height={30}
          onClick={togglePlay}
        />
        <Image
          className={styles.icon}
          src={"/Volume.svg"}
          width={38}
          height={38}
          onClick={toggleMute}
        />
        <Image
          className={styles.icon}
          src={"/Full Screen.svg"}
          width={38}
          height={38}
          onClick={toggleFullscreen}
        />
      </div>
    </div>
  );
};

export default VideoWithToolbar;
