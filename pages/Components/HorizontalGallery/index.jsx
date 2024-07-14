import { useEffect, useRef, useState } from "react";
import styles from "./HorizontalGallery.module.css";
import Image from "next/image";

export default function HorizontalGallery({
  items,
  hasShadows,
  defaultItemWidth,
  itemHeightFactor = 1,
}) {
  const galleryRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [isCenterAligned, setIsCenterAligned] = useState(false);
  const [itemMargin, setItemMargin] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const checkOverflow = () => {
    const { scrollWidth, clientWidth } = galleryRef.current;
    const width = galleryRef.current.children[0].children[0].offsetWidth;
    setCanScroll(scrollWidth > clientWidth);
    setIsCenterAligned(clientWidth < width + 120);

    if (clientWidth && width && clientWidth < width + 120) {
      let margin = Math.floor((clientWidth - width) / 2);
      if (margin <= 20) {
        setItemMargin(20);
        if (itemWidth == 0 || itemWidth > clientWidth) {
          setItemWidth(clientWidth - 40);
        }
      } else {
        setItemWidth(0);
        setItemMargin(margin);
      }
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [checkOverflow]);

  const scroll = (direction) => {
    let width = galleryRef.current.children[0].children[0].offsetWidth;

    if (isCenterAligned) {
      width += itemMargin;
    }

    if (direction === "left") {
      galleryRef.current.scrollLeft -= width;
    } else {
      galleryRef.current.scrollLeft += width;
    }
  };

  return (
    <div className={styles.galleryContainer}>
      {canScroll && (
        <button
          className={`${styles.galleryButton} left`}
          onClick={() => scroll("left")}
          style={{ paddingRight: "15px" }}
        >
          <Image src={"/movement-undercommons/chevronLeft.png"} width={25} height={75} />
        </button>
      )}
      <div
        className={canScroll ? styles.gallery : styles.nonScrollGallery}
        ref={galleryRef}
      >
        {items && items.map((item, index) => {
          const width = itemWidth != 0 ? itemWidth : defaultItemWidth;
          const height =
            itemHeightFactor == 0 ? "auto" : `${width * itemHeightFactor}px`;

          return (
            <div
              key={index}
              className={styles.galleryItemContainer}
              style={
                isCenterAligned
                  ? { padding: `10px ${itemMargin}px` }
                  : { padding: "10px 50px 10px 0px" }
              }
            >
              <div
                key={index}
                className={`${styles.galleryItem} ${hasShadows ? styles.boxShadow : ""}`}
                style={{ width: `${width}px`, height: `${height}` }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
      {canScroll && (
        <button
          className={`${styles.galleryButton} right`}
          onClick={() => scroll("right")}
          style={{ paddingLeft: "15px" }}
        >
          <Image src={"/movment-undercommons/chevronRight.png"} width={25} height={75} />
        </button>
      )}
    </div>
  );
}
