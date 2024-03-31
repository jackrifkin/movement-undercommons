import { useState } from "react";
import styles from "./HeaderBar.module.css";

export default function HeaderBar({
  text,
  backgroundColors,
  textColors,
  underlineColors,
  link = null,
  alignTextLeft,
}) {
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState(
    backgroundColors[0],
  );
  const [currentTextColor, setCurrentTextColor] = useState(textColors[0]);
  const [currentUnderlineColor, setCurrentUnderlineColor] = useState(
    underlineColors[0],
  );

  const alignRightDivStyle = { justifyContent: "flex-end" };
  const alignLeftDivStyle = { justifyContent: "flex-start" };
  const alignRightTextStyle = { marginRight: "50px" };
  const alignLeftTextStyle = { marginLeft: "50px" };

  const handleOnMouseEnter = () => {
    if (link !== null) {
      setCurrentBackgroundColor(backgroundColors[1]);
      setCurrentTextColor(textColors[1]);
      setCurrentUnderlineColor(underlineColors[1]);
    }
  };

  const handleOnMouseLeave = () => {
    if (link !== null) {
      setCurrentBackgroundColor(backgroundColors[0]);
      setCurrentTextColor(textColors[0]);
      setCurrentUnderlineColor(underlineColors[0]);
    }
  };

  return (
    <div
      className={styles.headerBar}
      style={{
        ...{
          borderColor: currentUnderlineColor,
          backgroundColor: currentBackgroundColor,
        },
        ...(alignTextLeft ? alignLeftDivStyle : alignRightDivStyle),
      }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <h1
        className={`${styles.headerBarText} abolitionRegular`}
        style={{
          ...{ color: currentTextColor, transition: "color 0.5s ease" },
          ...(alignTextLeft ? alignLeftTextStyle : alignRightTextStyle),
        }}
      >
        {text}
      </h1>
    </div>
  );
}
