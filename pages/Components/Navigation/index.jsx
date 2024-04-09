import { useState } from "react";
import styles from "./Navigation.module.css";
import Wordmark from "../Wordmark";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const HoverMenu = ({
  containerDisplacement,
  setContainerDisplacement,
  wordmarkDisplacement,
  setWordmarkDisplacement,
}) => {
  const handleMouseLeave = () => {
    setContainerDisplacement(130);
    setWordmarkDisplacement(-130);
  };

  return (
    <div
      className={`${styles.hoverFlexContainer} d-none d-lg-flex`}
      style={{
        top: `${containerDisplacement}px`,
        transition: "top 0.45s ease-in-out",
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="d-flex flex-column justify-content-end align-items-end"
        style={{ margin: "0 50px", width: "30%" }}
      >
        <div className={styles.hoverMenuTextContainer}>
          <Link
            href="/Gallery"
            className={`${styles.hoverMenuText} abolitionRegular`}
          >
            Portraits
          </Link>
          <Link
            href="/Process"
            className={`${styles.hoverMenuText} abolitionRegular`}
            style={{ paddingRight: "20px" }}
          >
            Process
          </Link>
        </div>
      </div>
      <div
        className={styles.wordmarkContainer}
        style={{
          position: "absolute",
          left: "0",
          top: `${wordmarkDisplacement}px`,
          transition: "top 0.45s ease-in-out",
          flex: "1",
        }}
      >
        <Link href="/">
          <Wordmark
            color={"var(--temptress)"}
            width={"500px"}
            height={"78.125px"}
          />
        </Link>
      </div>
    </div>
  );
};

export default function Navigation() {
  const [containerDisplacement, setContainerDisplacement] = useState(130);
  const [wordmarkDisplacement, setWordmarkDisplacement] = useState(-130);

  const isXsScreen = useMediaQuery({ maxWidth: 500 });
  const isGalaxyFold = useMediaQuery({ maxWidth: 340 });
  let menuIconSize = isXsScreen ? 14 : 17;
  menuIconSize = isGalaxyFold ? 12 : menuIconSize;

  const handleMouseEnter = () => {
    setContainerDisplacement(0);
    setWordmarkDisplacement(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer} onMouseEnter={handleMouseEnter}>
        <div className={`${styles.wordmarkContainer} d-none d-lg-flex`}>
          <Link href="/">
            <Wordmark
              color={"var(--maize)"}
              width={"500px"}
              height={"78.125px"}
              style={{ zIndex: "10" }}
            />
          </Link>
        </div>
        <div className={`${styles.wordmarkContainerMobile} d-lg-none`}>
          {isXsScreen ? (
            <Link href="/">
              <Wordmark
                color={"var(--maize)"}
                width={isGalaxyFold ? "200px" : "275px"}
                height={isGalaxyFold ? "31.25px" : "42.96875px"}
                style={{ zIndex: "10" }}
              />
            </Link>
          ) : (
            <Link href="/">
              <Wordmark
                color={"var(--maize)"}
                width={"350px"}
                height={"56.6875px"}
                style={{ zIndex: "10" }}
              />
            </Link>
          )}
        </div>
        <div className={styles.menuLabelContainer}>
          <h1
            className={`${styles.menuLabel} abolitionRegular d-none d-lg-block`}
          >
            Menu
          </h1>
          <div
            className="d-block d-lg-none"
            style={{
              border: `${menuIconSize}px solid white`,
              borderRadius: `${menuIconSize}px`,
              marginBottom: "25px",
              marginRight: "20px",
            }}
          ></div>
        </div>
      </div>
      <HoverMenu
        containerDisplacement={containerDisplacement}
        setContainerDisplacement={setContainerDisplacement}
        wordmarkDisplacement={wordmarkDisplacement}
        setWordmarkDisplacement={setWordmarkDisplacement}
      />
    </div>
  );
}
