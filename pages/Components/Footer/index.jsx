import Image from "next/image";
import styles from "./Footer.module.css";
import { useState } from "react";
import Link from "next/link";

const contactEmail = "GRISHACOLEMAN@EXAMPLE.COM";
const socialTag = "@MOVEMENTUNDERCOMMONS";

const HoverFooter = ({
    containerDisplacement,
    setContainerDisplacement,
    contentDisplacement,
    setContentDisplacement,
}) => {
    const handleMouseLeave = () => {
        setContainerDisplacement(0);
        setContentDisplacement(-130);
    };

    return (
        <div
            className={styles.hoverFooterContainer}
            style={{
                height: `${containerDisplacement}px`,
                top: `-${containerDisplacement}px`,
                transition:
                    "height 0.45s ease-in-out, top 0.45s ease-in-out, border-top 0.45s ease-out",
            }}
        >
            <div
                className={`d-flex justify-content-around flex-column align-items-center ${styles.hoverFooterFlexContainer}`}
                style={{
                    top: `${contentDisplacement}px`,
                    transition: "top 0.45s ease-in-out",
                }}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`d-flex justify-content-around`}
                    style={{ width: "100%" }}
                >
                    <h4 className={`abolitionRegular`} style={{ color: "var(--lime)" }}>
                        A PROJECT BY GRISHA COLEMAN
                    </h4>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--lime)" }}>
                        {contactEmail}
                    </h4>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--lime)" }}>
                        {socialTag}
                    </h4>
                </div>
                <h4
                    className={`abolitionRegular`}
                    style={{ color: "var(--lime)", height: "25px" }}
                >
                    DESIGN BY FAILSPACE
                </h4>
            </div>
        </div>
    );
};

export default function Footer() {
    const [containerDisplacement, setContainerDisplacement] = useState(0);
    const [contentDisplacement, setContentDisplacement] = useState(-130);

    const handleMouseEnter = () => {
        setContainerDisplacement(130);
        setContentDisplacement(0);
    };

    return (
        <>
            <div className={`${styles.container} d-none d-md-block`}>
                <div
                    className={`d-flex justify-content-around flex-column align-items-center`}
                    style={{
                        height: "100%",
                        padding: "15px 0",
                        borderTop: "3px solid var(--temptress)",
                    }}
                    onMouseEnter={handleMouseEnter}
                >
                    <div
                        className={`d-flex justify-content-around`}
                        style={{ width: "100%" }}
                    >
                        <h4
                            className={`abolitionRegular`}
                            style={{ color: "var(--temptress)" }}
                        >
                            A PROJECT BY GRISHA COLEMAN
                        </h4>
                        <h4
                            className={`abolitionRegular`}
                            style={{ color: "var(--temptress)" }}
                        >
                            {contactEmail}
                        </h4>
                        <h4
                            className={`abolitionRegular`}
                            style={{ color: "var(--temptress)" }}
                        >
                            {socialTag}
                        </h4>
                    </div>
                    <Image src="/FAILSPACE_logo.png" width={25} height={25} />
                </div>
                <HoverFooter
                    containerDisplacement={containerDisplacement}
                    setContainerDisplacement={setContainerDisplacement}
                    contentDisplacement={contentDisplacement}
                    setContentDisplacement={setContentDisplacement}
                />
            </div>
            <div className={`d-block d-md-none ${styles.mobileContainer}`}>
                <div className={`d-flex flex-column justify-content-around ${styles.mobileLabelsContainer}`}>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--temptress)" }}>
                        A PROJECT BY GRISHA COLEMAN
                    </h4>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--temptress)" }}>
                        {contactEmail}
                    </h4>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--temptress)" }}>
                        {socialTag}
                    </h4>
                </div>
                <div className={`d-flex justify-content-center ${styles.mobileFailspaceContainer}`}>
                    <h4 className={`abolitionRegular`} style={{ color: "var(--lime)", alignSelf: "center", marginBottom: '0' }}>
                        DESIGN BY FAILSPACE
                    </h4>
                </div>
            </div>
        </>
    );
}
