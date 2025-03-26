import shelter from "../assets/shelter.png";
import find from "../assets/find.png";
import gov from "../assets/gov.png";
import styles from "./UserButtons.module.css";

function UserButtons() {
  return (
    <div className={styles.UserButtonsContainer}>
      <div className={styles.UserButtonsContent}>
        <div className={styles.UserButtonsContentUp}>
          <div className={styles.ContentUpBox}>
            <div className={styles.ContentUpBoxButtons}>
              <button className={styles.UserButtons}>
                <img src={shelter} alt="shelter" />
                <div className={styles.UserButtonsText}>Safe Shelter</div>
              </button>
              <button className={styles.UserButtons}>
                <img src={find} alt="find" />
                <div className={styles.UserButtonsText}>Find Missing</div>
              </button>
              <button className={styles.UserButtons}>
                <img src={gov} alt="Gove" />
                <div className={styles.UserButtonsText}>Goverment</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.UserButtonsContentDown}>
            <div className={styles.ContentDownBox}>
                <div className={styles.ContentDownBoxHeading}>-- Alerts --</div>
                <div className={styles.ContentDownBoxAlerts}></div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default UserButtons;
