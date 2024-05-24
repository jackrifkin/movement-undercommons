import { useRouter } from "next/router";
import styles from "./Portrait.module.css";
import { useEffect, useState } from "react";
// TODO: should be fetched from redux store
import portraits from "./../../temp_data/portraits.json";
import VideoWithToolbar from "../Components/VideoWithToolbar";

const VideoDescription = ({ portrait }) => {
  return (
    <div style={{ padding: "35px" }}>
      <h1 className={`abolitionRegular`}>{portrait?.title}</h1>
      <h4 className={`newFrankBold`}>{portrait?.year}</h4>
      <h6 className={`newFrankBold`}>{portrait?.location}</h6>
      <p className={`newFrankRegular`}>{portrait?.description}</p>
    </div>
  );
};

export default function Portrait() {
  const router = useRouter();
  const { portraitId } = router.query;
  const [currentPortrait, setCurrentPortrait] = useState();

  useEffect(() => {
    const portrait = portraits.find((p) => p.id == portraitId);
    setCurrentPortrait(portrait);
  }, [portraitId]);

  return (
    <>
      <div className={`${styles.videoPlayerContainer}`}>
        <div className={`${styles.videoPlayer}`}>
          <VideoWithToolbar src={`/movement-undercommons/Portraits/${currentPortrait?.filePath}`} />
        </div>
      </div>
      <div className={`${styles.videoDescriptionContainer}`}>
        <VideoDescription portrait={currentPortrait} />
      </div>
    </>
  );
}
