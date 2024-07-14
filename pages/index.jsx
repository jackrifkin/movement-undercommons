import styles from "./Home.module.css";
import Wordmark from "./Components/Wordmark";
import HeaderBar from "./Components/HeaderBar";
import VideoWithToolbar from "./Components/VideoWithToolbar";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Home() {
  const [isXsScreen, setIsXsScreen] = useState(false);
  const [isGalaxyFold, setIsGalaxyFold] = useState(false);
  const xsScreenQuery = useMediaQuery({ maxWidth: 500 });
  const galaxyFoldQuery = useMediaQuery({ maxWidth: 340 });

  useEffect(() => {
    setIsXsScreen(xsScreenQuery);
  }, [xsScreenQuery]);

  useEffect(() => {
    setIsGalaxyFold(galaxyFoldQuery);
  }, [galaxyFoldQuery]);

  return (
    <>
      <div className={styles.videoPlayer}>
        <VideoWithToolbar
          src={"/movement-undercommons/orange.mp4"}
          hasToolbar={false}
        />
      </div>

      <div className={`contentContainer`}>
        <div className="row">
          <div className="col">
            <div className={`d-none d-lg-flex`}>
              <Wordmark
                color={"var(--temptress)"}
                width={"500px"}
                style={{ zIndex: "10" }}
              />
            </div>
            <div className={`d-lg-none`}>
              {isXsScreen ? (
                <Wordmark
                  color={"var(--temptress)"}
                  width={isGalaxyFold ? "200px" : "275px"}
                  style={{ zIndex: "10" }}
                />
              ) : (
                <Wordmark
                  color={"var(--temptress)"}
                  width={"400px"}
                  style={{ zIndex: "10" }}
                />
              )}
            </div>
            <p style={{ marginTop: "10px" }}>
              The Movement Undercommons explores human movement vernaculars -
              everyday narratives, songs, and bodies – through the gathering and
              creative use of motion capture data to create unique ‘movement
              portraits’; a ‘kinetic haiku’ from movement data. The nature of
              this work is expressive, qualitative, and quantitative; through
              exploring possibilities latent in mobile motion capture (mocap)
              technologies, the project envisions two distinct but
              interconnected outcomes: 1] a future archive: a lexicon-repository
              of vernacular movement data gathered outside of a lab or studio,
              and 2] a series of movement portraits: animated and sonified
              vignettes created from movement data. This project brings custom
              built, mobile, mocap technology out of the lab and into ‘the
              field’ to engage and portray a vernacular of often overlooked
              narratives including migratory and historically marginalized
              communities, transient laborers, nomadic and displaced peoples. By
              centering vernaculars of movement, this project opens unexplored
              trajectories of research and study, artmaking and observation,
              raising questions that technologies of text, still image and video
              cannot explore, and addressing which ways of life are ‘carried
              along’ through expressions of the body? Which vernaculars persist?
              Which are vanishing?
            </p>
          </div>
          <div className="col-lg-3" />
        </div>
      </div>

      <HeaderBar
        text={"SUPPORT"}
        backgroundColors={["var(--burnt-orange)", "var(--light-blue)"]}
        textColors={["var(--light-blue)", "var(--dark-teal)"]}
        underlineColors={["var(--dark-teal)", "var(--burnt-orange)"]}
        link={"#"}
      />
      <HeaderBar
        text={"CONTACT"}
        backgroundColors={["var(--temptress)", "var(--lavender)"]}
        textColors={["var(--maize)", "var(--temptress)"]}
        underlineColors={["var(--lavender)", "var(--maize)"]}
        link={"#"}
      />

      <div className={`contentContainer`}>
        <div
          className={`row d-block d-lg-none`}
          style={{ margin: "30px 20px 0 20px" }}
        >
          <h1
            className={`abolitionRegular col-lg-2 col-12`}
            style={{
              alignSelf: "flex-start",
              paddingRight: "20px",
              marginBottom: "30px",
              color: "var(--temptress)",
            }}
          >
            FUNDERS
          </h1>
        </div>
        <div
          className={`d-flex justify-content-around align-items-center flex-wrap`}
        >
          <div className={styles.logoContainer} style={{ width: "175px" }}>
            <img
              src="/movement-undercommons/irc-logo.svg"
              alt="International Rescue Committee"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "250px" }}>
            <img
              src="/movement-undercommons/jacobspillowlogo.png"
              alt="Jacob's Pillow"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "225px" }}>
            <img
              src="/movement-undercommons/radcliffe-logo.svg"
              alt="Radcliffe Institute for Advanced Study"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "200px" }}>
            <img
              src="/movement-undercommons/NE-arts-logo.svg"
              alt="National Endowment for the Arts"
              className={styles.logo}
            />
          </div>
        </div>

        <div
          className={`row d-none d-lg-flex`}
          style={{ margin: "30px 20px 0 20px" }}
        >
          <div className="col" />
          <h1
            className={`abolitionRegular col-lg-2 col-12`}
            style={{
              textAlign: "end",
              alignSelf: "flex-end",
              paddingRight: "20px",
              marginTop: "30px",
              color: "var(--temptress)",
            }}
          >
            FUNDERS
          </h1>
        </div>
      </div>
    </>
  );
}
