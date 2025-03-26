function UserButtons() {
  return (
    <div className="UserButtonsContainer">
      <div className="UserButtonsContent">
        <div className="UserButtonsContentLeft"></div>
        <div className="UserButtonsContentRight">
          <div className="ContentRightBox">
            <div className="ContentRightBoxButtons">
              <button className="UserButtons">
                <img src="../assets/shelter.png" alt="shelter" />
                <div className="UserButtonsText">Safe Shelter</div>
              </button>
              <button className="UserButtons">
                <img src="../assets/find.png" alt="shelter" />
                <div className="UserButtonsText">Safe Shelter</div>
              </button>
              <button className="UserButtons">
                <img src="../assets/gov.png" alt="shelter" />
                <div className="UserButtonsText">Safe Shelter</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserButtons;
