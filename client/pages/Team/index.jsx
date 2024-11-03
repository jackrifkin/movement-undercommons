import HeaderBar from "../Components/HeaderBar";
import styles from "./Team.module.css";
// TODO: fetch from DB
import team from "../../temp_data/team.json";

export default function Team() {
  return (
    <>
      <HeaderBar
        text="TEAMS AND COLLABORATORS"
        backgroundColors={["var(--dark-teal)"]}
        textColors={["var(--cosmic-latte)"]}
        underlineColors={["var(--lavender)"]}
      />
      <div className={styles.contentContainer}>
        {team.map((subTeam) => {
          return (
            <div className={styles.teamContainer}>
              <h2
                className={`abolitionRegular`}
                style={{ color: "var(--dark-teal)" }}
              >
                {subTeam.subTeamName}
              </h2>
              {subTeam.members?.map((member) => {
                return (
                  <>
                    <p
                      className={`inputMonoCondensed`}
                      style={{ marginBottom: "3px" }}
                    >
                      {member.name}
                      <span className="d-md-none">
                        <br />
                      </span>
                      {member.role && ` / ${member.role}`}
                      {member.link &&
                        (member.linkCopy ? (
                          <span
                            className={`${styles.teamLink} atramentSemiBoldItalic`}
                          >
                            {" "}
                            [
                            <a
                              className={`${styles.teamLink}`}
                              style={{ textDecoration: "none" }}
                              href={member.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {member.linkCopy}
                            </a>
                            ]
                          </span>
                        ) : (
                          <span
                            className={`${styles.teamLink} atramentSemiBoldItalic`}
                          >
                            {" "}
                            [
                            <a
                              className={`${styles.teamLink}`}
                              style={{ textDecoration: "none" }}
                              href={member.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              link
                            </a>
                            ]
                          </span>
                        ))}
                    </p>
                    <span className="d-md-none">
                      <br />
                    </span>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
