import { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [location, setLocation] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Load existing safe zones (if needed in future)
    JSON.parse(localStorage.getItem("safeZones")) || [];
  }, []);

  const handleSubmit = () => {
    if (!location || !mapLink || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const newZone = {
      location,
      mapLink,
      image: URL.createObjectURL(image),
    };

    // Store safe zones in localStorage
    const storedZones = JSON.parse(localStorage.getItem("safeZones")) || [];
    const updatedZones = [...storedZones, newZone];
    localStorage.setItem("safeZones", JSON.stringify(updatedZones));

    // Reset form
    setLocation("");
    setMapLink("");
    setImage(null);
    setPreviewImage(null);
    setShowForm(false);
  };

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
              <button
                className={styles.AdminDashboardButton}
                onClick={() => setShowForm(true)}
              >
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

      {/* Floating Safe Zone Form */}
      {showForm && (
        <div className={styles.FormOverlay}>
          <div className={styles.FormContainer}>
            <h2>Add Safe Zone</h2>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.InputField}
            />
            <input
              type="text"
              placeholder="Google Maps Link"
              value={mapLink}
              onChange={(e) => setMapLink(e.target.value)}
              className={styles.InputField}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreviewImage(URL.createObjectURL(e.target.files[0]));
              }}
              className={styles.InputField}
            />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className={styles.PreviewImage}
              />
            )}
            <div className={styles.FormButtons}>
              <button onClick={handleSubmit} className={styles.SubmitButton}>
                Submit
              </button>
              <button
                onClick={() => setShowForm(false)}
                className={styles.CancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;
