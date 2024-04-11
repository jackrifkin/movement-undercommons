import { useRouter } from "next/router";
import styles from "./Portrait.module.css";
import { useEffect, useState } from "react";
// TODO: should be fetched from redux store
import portraits from "./../../temp_data/portraits.json";
import SubMenu from "../Components/SubMenu";
import Link from "next/link";
import VideoWithToolbar from "../Components/VideoWithToolbar";

const VideoDescription = ({ portrait }) => {
  return (
    <div style={{ padding: "35px" }}>
      <h1 className={`abolitionRegular`}>{portrait?.title}</h1>
      <h4 className={`newFrankBold`}>{portrait?.year}</h4>
      <h6 className={`newFrankBold`}>{portrait?.funder}</h6>
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
      <SubMenu />
      <div className={`${styles.videoPlayerContainer} row`}>
        <div className={`${styles.videoPlayer} d-block col-lg-8`}>
          <VideoWithToolbar src={currentPortrait?.filePath} />
        </div>
        <div
          className={`${styles.videoDescriptionContainer} d-none d-lg-block col-lg-4`}
        >
          <VideoDescription portrait={currentPortrait} />
        </div>
      </div>
      <div className={`${styles.videoDescriptionContainer} d-block d-lg-none`}>
        <VideoDescription portrait={currentPortrait} />
      </div>
      <div className={`${styles.teamContainer}`}>
        <h3
          className={`abolitionRegular`}
          style={{ color: "var(--light-maize)" }}
        >
          {currentPortrait?.teamName}
        </h3>
        {currentPortrait?.teamMembers.map((member) => {
          return (
            <div className={styles.teamMemberContainer}>
              <p className={`${styles.teamMember} inputMonoCondensedItalic`}>
                {member.name} /<br className="d-lg-none"/> {member.role}{" "}
              </p>
              {member.link ? (
                <Link
                  href={member.link}
                  className={`${styles.teamMemberLink} atramentSemiBoldItalic`}
                >
                  [ASU faculty]
                </Link>
              ) : (
                <></>
              )}
              <br />
            </div>
          );
        })}
      </div>
    </>
  );
}
