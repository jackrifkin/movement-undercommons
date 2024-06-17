import styles from "./VideoWithToolbar.module.css";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const VideoWithToolbar = ({ src, loops = true, hasToolbar = true }) => {
  const videoRef = useRef(null);
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !videoElement.muted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const videoElement = videoRef.current;
    videoElement.playsInline = false;
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen)
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false)
      videoRef.current.playsInline = true;
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

      setVideoDimensions({ width: videoWidth, height: videoHeight });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      setIsMuted(videoElement.muted)
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
        document.removeEventListener("fullscreenchange", handleFullScreenChange)
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
          loop={loops}
          playsInline
          disableRemotePlayback
          muted={!hasToolbar}
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

      {hasToolbar && (
        <div className={`${styles.videoToolBar}`}>
          <Image
            className={styles.icon}
            src={
              isPlaying
                ? "/movement-undercommons/Pause.svg"
                : "/movement-undercommons/Play.svg"
            }
            width={30}
            height={30}
            onClick={togglePlay}
          />
          <Image
            className={styles.icon}
            src={
              isMuted
                ? "/movement-undercommons/Muted.svg"
                : "/movement-undercommons/Volume.svg"
            }
            width={38}
            height={38}
            onClick={toggleMute}
          />
          <Image
            className={styles.icon}
            src={"/movement-undercommons/Full Screen.svg"}
            width={38}
            height={38}
            onClick={toggleFullscreen}
          />
        </div>
      )}
    </div>
  );
};

export default VideoWithToolbar;
