import Image from "next/image";
import HeaderBar from "../Components/HeaderBar";
import styles from "./Process.module.css";
import HorizontalGallery from "../Components/HorizontalGallery";
import publications from "../../temp_data/publications.json";
import press from "../../temp_data/press.json";

export default function Process() {
  return (
    <>
      <HeaderBar
        text="THE PROCESS"
        backgroundColors={["var(--burnt-orange)"]}
        textColors={["var(--light-blue)"]}
        underlineColors={["var(--dark-teal)"]}
      />
      <div className={`contentContainer`}>
        <div className="row">
          <div className="col-12 col-lg-7">
            <h4 className={`${styles.headerText} abolitionRegular`}>
              MOVEMENT UNDERCOMMONS: TECHNOLOGY AS RESISTANCE | FUTURE ARCHIVES
            </h4>
            <br />
            <p>
              The Movement Undercommons (MU) explores possibilities latent in
              mobile motion capture (mocap) technologies to create a series of
              movement data portraits. The work aims to explore the expressive
              significance of an individual’s movement patterns – one’s dynamic
              movement fingerprint — with recent advances that allow this
              technology to be mobile. With this advancement, the project adopts
              an ethnographic framing; bringing the mocap tech into play in the
              field, reimagining its use to engage participation and
              collaboration with communities who would not typically have access
              to it. MU engages a wide range of individuals to reveal a movement
              vernacular1, with movement data gathered in situ to incorporate
              the cultural, socio-economic, and historical contexts in which
              human movement is inextricably embedded. The project imagines two
              distinct but interconnected streams of work: 1) a future archive;
              a repository/lexicon of vernacular movement data gathered outside
              of a lab or studio, and 2) a series of movement portraits;
              time-based vignettes created from movement data that is
              generative, animated, sonified, and choreographed. These portraits
              envision what it means to extend narrative forms to movement
              expression through the precision of data that derives from an
              individual’s movement ‘identity’.
            </p>
          </div>
          <div className="col-12 col-lg-5" />
        </div>

        <div className={`${styles.marginTop50} row d-none d-md-flex`}>
          <div className="col-12 col-lg-7" style={{ paddingRight: "0" }}>
            {/* top 2 images */}
            <div className="d-flex justify-content-between flex-wrap">
              <Image
                src={"/Process1.png"}
                height={250}
                width={250}
                alt="Image 1"
              />
              <Image
                src={"/Process2.png"}
                height={250}
                width={250}
                alt="Image 2"
              />
            </div>
          </div>
          <div
            className="d-none d-lg-block col-lg-5"
            style={{ paddingLeft: "0" }}
          >
            {/* image descriptions */}
            <div
              className="altText"
              style={{
                borderTop: "2px solid black",
                width: "250px",
                textAlign: "start",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              Image 1: Drawing a Dragon, South African Muralist in Phoenix, AZ
              (2022)
              <br />
              <br />
              Image 2: Portrait of Crossing Guard [still], Cambridge, MA (2023)
              <br />
              <br />
              Image 3: Untitled#2 (Dancing quadrant sketch), (2021)
            </div>
          </div>
        </div>
        <div className={`${styles.marginTop50} d-block d-md-none`}>
          <div className="d-flex justify-content-center">
            <Image
              src={"/Process1.png"}
              height={250}
              width={250}
              alt="Image 1"
            />
          </div>
        </div>
        <div className={`${styles.marginTop50} d-block d-md-none`}>
          <div className="d-flex justify-content-center">
            <Image
              src={"/Process2.png"}
              height={250}
              width={250}
              alt="Image 2"
            />
          </div>
        </div>
        <div className={`${styles.marginTop50} row`}>
          <div className="col-12 col-lg-7">
            <div className="d-flex justify-content-center align-items-center">
              {/* third middle image */}
              <div className="d-flex justify-content-center">
                <Image
                  src={"/Process3.png"}
                  height={250}
                  width={250}
                  alt="Image 3"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5" />
        </div>
        <div
          className="d-flex d-lg-none col-12 justify-content-center"
          style={{ paddingLeft: "0" }}
        >
          {/* image descriptions */}
          <div
            className="altText"
            style={{
              width: "250px",
              textAlign: "start",
              paddingTop: "10px",
              borderLeft: "2px solid black",
              paddingLeft: "15px",
            }}
          >
            Image 1: Drawing a Dragon, South African Muralist in Phoenix, AZ
            (2022)
            <br />
            <br />
            Image 2: Portrait of Crossing Guard [still], Cambridge, MA (2023)
            <br />
            <br />
            Image 3: Untitled#2 (Dancing quadrant sketch), (2021)
          </div>
        </div>

        <h4
          className={`${styles.headerText} ${styles.marginTop50} abolitionRegular`}
        >
          MOVEMENT PORTRAITS AND DIGITAL RESISTANCE
        </h4>
        <br />
        <div className={`row`}>
          <div className="col-12 col-lg-7">
            <p>
              What is conveyed through our movements? Can we speak of a movement
              identity, some  combination of biological, environmental, and
              embodied cultural experience that distinguishes an individual, or
              a people? And would such an identity be transplanted as we travel
              from one place to  another? During a trip to Marseille in 2016, I
              witnessed communities of former French West and North African
              colonies with distinct and recognizable patterns of movement
              expression, some of whom had lived in southern France for decades
              - or had never lived in the country of their elders.  This project
              centers questions of movement vernaculars; and particularly, with
              millions of people displaced every day, which ways of life are
              ‘carried along’ through expressions of the body? Which vernaculars
              persist? Which are vanishing? Human movement is intrinsically
              expressive, affective, intuitive, and meaning making. Personal
              ways of moving in the world reflect discernible patterns which
              reveal strategies and habits developed over a lifetime,
              articulated through posture, rhythm, gesture, tempo; a kinesthetic
              communication that does not rely on words. To collect data is a
              way of seeing. The process of digital data collection is
              explicitly reductive by nature, isolating and highlighting certain
              aspects to see more clearly emergent patterns, to derive meaning
              in order to generate knowledge. In this process of deduction and
              reduction, other facets of the individual are disappeared and
              recreated. This project asks; how do we collect data in a
              manner that resembles recognition, and not exposure? As
              ethnographer Dwight Conquergood articulates, "subordinate people
              do not have the privilege of explicitness," and “the visual/verbal
              bias of Western regimes of knowledge blinds researchers to
              meanings that are expressed forcefully through  intonation,
              silence, body tension, arched eyebrows, blank stares, ...the
              elocutionary experience of a fugitive communication.”2. By
              highlighting movement as formal and legible, this project
              spotlights and values alternative ways to tell stories, imagine
              documentation, and bring nuance and distinction to the portrait
              subjects. As an artist and researcher engaged with
              experimental/experiential uses of technology, I am  both invested
              in creative innovation and concerned with the societal impact of
              “datafication”3 (Viljoen) surveillance technologies, and advanced
              automation systems. This project emerges in a time when “borders
              and bodies are increasingly regulated by data-capturing mechanisms
              spread across the world through information and communication
              technologies”. With acute awareness of colonial legacies, this
              project makes explicit the processes of collecting, categorizing,
              using and  interpreting data in resistance to various modes of
              standardization and reduction imposed by increasingly data-driven
              cultural/knowledge systems. The project has joined with local
              individuals and communities building “community-driven archives”4
              along with developing a methodology responsive to issues of data
              ethics, surveillance, and property. I have focused on migratory
              and historically marginalized communities, transient laborers,
              nomadic and displaced peoples, refugees and invoke Harney and
              Moten’s5 concept of the “Undercommons” to foreground invisible
              (fugitive) agents. How might a movement identity be an emergent
              property of data analysis? This work looks  to imbue the movement
              data to reflect stories of a nuanced history of movement—creative,
              labor,  ritualized, coerced— and how that identity is or is not
              ‘of a place’.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className={`altText`} style={{ width: "250px" }}>
              <p>
                <sup>1</sup>I re-purpose Ivan Illich’s concept of vernacular
                work — defined as "unpaid activities which provide and improve 
                livelihood"— to refer to those everyday forms of movement that
                are informal and refractory (resistant to formal analysis  and
                commodification) yet socially reproduced and derived from a
                commons (Illich, 47-102).
                <br />
                <br />
                <sup>2</sup>Dwight Conquergood, “Performance Studies:
                Interventions and Radical Research”
                <br />
                <br />
                <sup>3</sup>Viljoen, S. (2020). Democratic Data: A relational
                theory for Data Governance. SSRN Electronic Journal. 
                https://doi.org/10.2139/ssrn.3727562 The Yale Law Journal
                <br />
                <br />
                <sup>4</sup>To date, MU has initiated data gathering sessions
                with a number of ‘local’ organizations: an example is the 
                community-driven archive projects. In Phoenix Arizona, my team
                partners with https://news.asu.edu/20171011-
                arizona-impact-asu-awarded-mellon-grant-develop-community-driven-archival-collections)
                and the International  Rescue Committee [IRC, Phoenix]
                <br />
                <br />
                <sup>5</sup>Stefano Harney and Fred Morten, The Undercommons:
                Fugitive Planning and Black Study (Wivenhoe: Minor 
                Compositions, 2013).
              </p>
            </div>
          </div>
        </div>

        <h4
          className={`${styles.headerText} ${styles.marginTop50} abolitionRegular`}
        >
          CHOREOGRAPHING AND SONIFYING THE DATA
        </h4>
        <br />
        <div className={`row`}>
          <div className="col-12 col-lg-7">
            <p>
              The nature of this work is expressive, qualitative, and
              quantitative; I look to create a ‘kinetic  haiku’ from movement
              data. Along with animating the data as visual material, I compose
              a ‘sonic portrait’ through the composition of participant
              interview, found sound, and sonification of the movement data. My
              practice here focuses on the expressive significance of an
              individual’s dynamic patterns of movement and story of movement
              and migration. The project emphasizes the embedded and situated,
              yet paradoxically as digital information, the movement portraits
              are not bound uniquely in the past or present of issues, but can
              be imagined in prospective, speculative futures.
              <br />
              While being supported by the Harvard Radcliffe Institute in
              (21/22)<sup>6</sup> I had the opportunity to create eleven
              movement portrait prototypes that highlight a diversity of
              participants ranging from Sudanese and Iraqi farmers in Arizona; a
              South African muralist working for the Welcome Center; a Black
              American crossing guard at a primary school; a Portuguese
              custodian for the university building in which I was working; a
              Mexican and Ecuadorian folkloric dance teacher at a community
              center in East Boston. Each ‘movement portrait’ is created as type
              of time-based collage made from the individuals’ motion data
              animated with a generative algorithmic process, along with a
              ‘sonic portrait’ (a musique concrete), the two media treatments
              making up a single portrait.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className={`altText`} style={{ width: "250px" }}>
              <p>
                <sup>6</sup>This series of portraits was presented as private
                work-in-progress showing at the Art Lab at Harvard University.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.marginTop50} row`}
          style={{ marginLeft: "0" }}
        >
          <div
            className="col-12 col-lg-7"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-start",
              overflow: "hidden",
              border: "4px solid black",
              padding: 0,
            }}
          >
            <img
              src={"/Process4.png"}
              alt="Image 1"
              width={"100%"}
            />
          </div>
          <div className="col-12 col-lg-5">
            <div
              className={`${styles.altText} altText`}
              style={{ width: "250px" }}
            >
              <p>Image 1: Untitled sketch#1, [still] Phoenix, Arizona (2021)</p>
            </div>
          </div>
        </div>

        <h4
          className={`${styles.headerText} ${styles.marginTop50} abolitionRegular`}
        >
          REPOSITORY DESIGN / EXISTING ARCHIVES
        </h4>
        <br />
        <div className={`row`}>
          <div className="col-12 col-lg-7">
            <p>
              While photography, video, and audio recording technologies have
              accelerated the means and  ways in which those media are produced
              and innovated, movement-as-digital-object is a relatively new
              phenomena because of its ephemeral nature, notwithstanding
              specialized forms of written movement notation. Current powerful
              motion capture technology enables the capture and  representation
              of complex human movement with a density of details in ways that
              have been impossible until relatively recently. Additionally, by
              investigating movement vernaculars through computational means,
              this project challenges the notion of digital neutrality;
              assumptions of  idealized human form that can be embedded in
              computational models and reductionist processes of understanding
              human movement.
              <br />
              Motion capture data is now available as open and unannotated{" "}
              <sup>(a-j)</sup>. Yet, we observe underlying ‘computational
              perspectives’ (i.e., human perspectives) typically coming from a
              culturally hegemonic technology class that is hardwired or
              algorithmically built into the machine. The movement  portraits
              focus on the everyday movements of people generally overlooked by
              ‘creatives’ in the field  (e.g., game developers, professional
              athletes/dancers). Thus, this project creates a platform for
              the development of a digital movement lexicon that considers
              cultural context along with data collection, archiving, and
              distribution.
            </p>
          </div>
          <div className="col-12 col-lg-5">
            <div className={`altText`} style={{ width: "250px" }}>
              <p>
                a. The Ohio State University, Advanced Center for Computation
                and Design [ACCAD] - Motion Capture Lab - Data and Downloads.
                "Open Motion Data Project”
                <br />
                <br />
                b. Motion Bank. http://motionlab.deakin.edu.au/dr-scott-
                delahunta/, Centre for Dance Research, Coventry University (UK)
                <br />
                <br />
                c. Carnegie Mellon University, Motion Capture Database,
                http://mocap.cs.cmu.edu/
                <br />
                <br />
                d. https://www.irishtimes.com/news/science/technology-
                pros-serve-tennis-ace-1.945491
                <br />
                <br />
                e. https://pdfs.semanticscholar.org/67d7/7d699a384a
                4a6912685ed579928daf4ad416.pdf
                <br />
                <br />
                f. http://ieeexplore.ieee.org/document/6127084/
                <br />
                <br />
                g. Project Tango -https://get.google.com/tango/ - for Mobile
                Based Kinetc
                <br />
                <br />
                h. Fit3d and others offer portable 3d scanning -
                https://www.fit3d.com
                <br />
                <br />
                i. Daniel Vlasic, Rolf Adelsberger, Giovanni Vannucci, John
                Barnwell, Markus Gross, Wojciech  Matusik, and Jovan Popović.
                2007. Practical motion capture in everyday surroundings. ACM
                Trans.  Graph. 26, 3, Article 35 (July 2007).
                DOI:https://doi.org/10.1145/1276377.1276421
                <br />
                <br />
                j. Ronit Slyper and Jessica K. Hodgins. 2008. Action capture
                with accelerometers. In Proceedings of  the 2008 ACM
                SIGGRAPH/Eurographics Symposium on Computer Animation (SCA
                '08).  Eurographics Association, Aire-la-Ville, Switzerland,
                Switzerland, 193-199.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HeaderBar
        text="PUBLICATIONS"
        backgroundColors={["var(--burnt-orange)"]}
        textColors={["var(--light-blue)"]}
        underlineColors={["var(--dark-teal)"]}
        alignTextLeft={true}
      />

      <div style={{ padding: "40px 10px" }}>
        <HorizontalGallery
          hasShadows
          defaultItemWidth={300}
          itemHeightFactor={1.333}
          items={publications.map((publication) => {
            return (
              <a
                className={styles.publicationContainer}
                href={`/Publications/${publication.filePath}`}
                target="_blank"
              >
                <img
                  src={`/Publications/Thumbnails/${publication.thumbnail}`}
                  style={{ width: "100%", height: "auto", maxHeight: "100%" }}
                  alt={publication.filePath}
                />
                <div className={styles.publicationCitation}>
                  <p className={`${styles.publicationCitationText} altText`}>
                    {publication.citation}
                  </p>
                </div>
              </a>
            );
          })}
        />
      </div>

      <HeaderBar
        text="PRESS"
        backgroundColors={["var(--burnt-orange)"]}
        textColors={["var(--light-blue)"]}
        underlineColors={["var(--dark-teal)"]}
        alignTextLeft={true}
      />

      <div style={{ padding: "40px 10px" }}>
        <HorizontalGallery
          defaultItemWidth={400}
          itemHeightFactor={0}
          items={press.map((item) => {
            return (
              <a href={item.link} target="_blank">
                <img
                  src={`/Press/${item.thumbnail}`}
                  style={{ width: "100%", height: "auto" }}
                  alt={item.link}
                />
                <h3 className={`${styles.pressTitle} abolitionRegular`}>
                  {item.title}
                </h3>
              </a>
            );
          })}
        />
      </div>
    </>
  );
}
