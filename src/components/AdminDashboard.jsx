import AdminNavbar from "./AdminNavbar";
import styles from "./AdminDashboard.module.css";
function AdminDashboard() {
  return (
    <>
      <div className={styles.AdminDashboardContainer}>
        <AdminNavbar />
        <div className={styles.AdminDashboardContent}>
          <div className={styles.AdminDashboardContentLeft}>
            <div className={styles.AdminDashboardContentLeftHeading}>
              Dashboard
            </div>
            <div className={styles.AdminDashboardContentLeftButtons}>
              <button className={styles.AdminDashboardButton}>
                Create Alerts
              </button>
              <button className={styles.AdminDashboardButton}>
                Add Safe Zone
              </button>
              <button className={styles.AdminDashboardButton}>
                Track News
              </button>
            </div>
          </div>
          <div className={styles.AdminDashboardContentRight}>
            <div className={styles.AdminDashboardContentRightHeading}>
              Forum
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminDashboard;
