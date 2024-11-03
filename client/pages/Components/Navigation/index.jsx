import { useEffect, useState } from "react";
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
        transition: "top 0.3s ease-in-out",
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
            href="/Team"
            className={`${styles.hoverMenuText} abolitionRegular`}
          >
            Team
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
          transition: "top 0.3s ease-in-out",
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

const ExpandedMenuMobile = ({
  isVisible,
  menuButtonFontSize,
  isXsScreen,
  isGalaxyFold,
  setMenuExpanded,
}) => {
  const handleCollapse = () => {
    setMenuExpanded(false);
  };
  return (
    <div
      className={`d-block d-lg-none ${styles.expandedMenuMobile} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.expandedMenuContent}>
        <div className={styles.flexContainerMobile}>
          <div className={`${styles.wordmarkContainerMobile}`}>
            {isXsScreen ? (
              <Link href="/" onClick={handleCollapse}>
                <Wordmark
                  color={"var(--temptress)"}
                  width={isGalaxyFold ? "200px" : "275px"}
                  height={isGalaxyFold ? "31.25px" : "42.96875px"}
                  style={{ zIndex: "10" }}
                />
              </Link>
            ) : (
              <Link href="/" onClick={handleCollapse}>
                <Wordmark
                  color={"var(--temptress)"}
                  width={"350px"}
                  height={"56.6875px"}
                  style={{ zIndex: "10" }}
                />
              </Link>
            )}
          </div>
          <div className={styles.menuLabelContainer}>
            <div
              style={{
                marginRight: "25px",
                color: "var(--cosmic-latte)",
                fontSize: `${menuButtonFontSize + 5}px`,
              }}
              onClick={handleCollapse}
            >
              -
            </div>
          </div>
        </div>
        <div className={`${styles.expandedMenuLabelsContainer}`}>
          <Link
            href="/Gallery"
            className={`${styles.expandedMenuText} abolitionRegular`}
            onClick={handleCollapse}
          >
            Portraits
          </Link>
          <Link
            href="/Team"
            className={`${styles.expandedMenuText} abolitionRegular`}
            onClick={handleCollapse}
          >
            Team
          </Link>
          <Link
            href="/Process"
            className={`${styles.expandedMenuText} abolitionRegular`}
            onClick={handleCollapse}
          >
            Process
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Navigation() {
  const [containerDisplacement, setContainerDisplacement] = useState(130);
  const [wordmarkDisplacement, setWordmarkDisplacement] = useState(-130);
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [isXsScreen, setIsXsScreen] = useState(false);
  const [isGalaxyFold, setIsGalaxyFold] = useState(false);

  let menuButtonFontSize = isXsScreen ? 45 : 55;
  menuButtonFontSize = isGalaxyFold ? 35 : menuButtonFontSize;

  const xsScreenQuery = useMediaQuery({ maxWidth: 500 });
  const galaxyFoldQuery = useMediaQuery({ maxWidth: 340 });
  useEffect(() => {
    setIsXsScreen(xsScreenQuery);
  }, [xsScreenQuery]);

  useEffect(() => {
    setIsGalaxyFold(galaxyFoldQuery);
  }, [galaxyFoldQuery]);

  const handleMouseEnter = () => {
    setContainerDisplacement(0);
    setWordmarkDisplacement(0);
  };

  const handleExpand = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <div>
      <div className={`${styles.container} d-none d-lg-block`}>
        <div className={styles.flexContainer} onMouseEnter={handleMouseEnter}>
          <div className={`${styles.wordmarkContainer} d-flex`}>
            <Link href="/">
              <Wordmark
                color={"var(--maize)"}
                width={"500px"}
                height={"78.125px"}
                style={{ zIndex: "10" }}
              />
            </Link>
          </div>
          <div className={styles.menuLabelContainer}>
            <h1 className={`${styles.menuLabel} abolitionRegular`}>Menu</h1>
          </div>
        </div>
        <HoverMenu
          containerDisplacement={containerDisplacement}
          setContainerDisplacement={setContainerDisplacement}
          wordmarkDisplacement={wordmarkDisplacement}
          setWordmarkDisplacement={setWordmarkDisplacement}
        />
      </div>
      <div className={`${styles.container} d-block d-lg-none`}>
        <div className={styles.flexContainer}>
          <div className={`${styles.wordmarkContainerMobile}`}>
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
            <div
              className="d-block d-lg-none"
              style={{
                marginRight: "20px",
                color: "white",
                fontSize: `${menuButtonFontSize}px`,
              }}
              onClick={handleExpand}
            >
              +
            </div>
          </div>
        </div>
      </div>
      <ExpandedMenuMobile
        isVisible={menuExpanded}
        menuButtonFontSize={menuButtonFontSize}
        isGalaxyFold={isGalaxyFold}
        isXsScreen={isXsScreen}
        setMenuExpanded={setMenuExpanded}
      />
    </div>
  );
}
