import styles from "./Home.module.css";
import Wordmark from "./Components/Wordmark";
import HeaderBar from "./Components/HeaderBar";
import VideoWithToolbar from "./Components/VideoWithToolbar";

export default function Home() {
  return (
    <>
      <div className={styles.videoPlayer}>
        <VideoWithToolbar src={"/orange.mp4"} />
      </div>

      <div className={`contentContainer`}>
        <div className="row">
          <div className="col">
            <Wordmark color={"black"} width={"500px"} />
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
          className={`d-flex justify-content-around align-items-center flex-wrap`}
        >
          <div className={styles.logoContainer} style={{ width: "175px" }}>
            <img
              src="/irc-logo.svg"
              alt="International Rescue Committee"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "250px" }}>
            <img
              src="/jacobspillowlogo.png"
              alt="Jacob's Pillow"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "225px" }}>
            <img
              src="/radcliffe-logo.svg"
              alt="Radcliffe Institute for Advanced Study"
              className={styles.logo}
            />
          </div>
          <div className={styles.logoContainer} style={{ width: "200px" }}>
            <img
              src="/NE-arts-logo.svg"
              alt="National Endowment for the Arts"
              className={styles.logo}
            />
          </div>
        </div>

        <div className={`row`} style={{ margin: "30px 20px 0 20px" }}>
          <p className={`col-12 col-lg-8`} style={{ marginBottom: "0" }}>
            Lorem ipsum dolor sit amet. Ad aliquam accusantium hic sequi fugiat
            et corporis facere hic ratione tempore a tenetur distinctio cum
            galisum quasi in dolor consequatur. Ut sint ipsum ut error nihil sed
            magnam tempore qui asperiores doloremque ut cupiditate voluptates et
            omnis enim. Non voluptatem nobis aut cupiditate doloremque ut
            voluptates dignissimos qui dolorem necessitatibus? Et esse
            laudantium qui perferendis assumenda quo odit quia est nihil iusto
            sit blanditiis doloremque in totam reprehenderit.
          </p>
          <div className="d-none d-lg-block col" />
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
