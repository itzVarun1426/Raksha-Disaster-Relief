import ndrfImg from "../assets/ndrfImg.jpg";
import "./Section2.css";
function Section2() {
  return (
    <>
      <div className="page3">
        <div className="image-section">
          <img src={ndrfImg} alt="Rescue Operations" />
        </div>
        <div className="stats-section">
          {[
            { number: "1000+", text: "Lives saved and reestablished" },
            { number: "20000+", text: "Successful Rescued operations" },
            { number: "3000+", text: "Missions accomplished successfully" },
          ].map((stat, index) => (
            <div key={index} className="stat">
              <h2>{stat.number}</h2>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Section2;
