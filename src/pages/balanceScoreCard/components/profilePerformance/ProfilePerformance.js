import { useState } from "react";
import propTypes from "prop-types";
import BalanceDoughnutChart from "../balanceDoughnutChart/BalanceDoughnutChart";
import PerformanceCard from "../performanceCard/PerformanceCard";
import "./profilePerf.scss";

const ProfilePerformance = ({ state = {} }) => {
  const labels =
    state.currentData === "Profile" ? state.profileLabel : state.bitsLabel2;
  const [hoveredLabel, setHoveredLable] = useState(labels[0]);

  const handleHover = (label) => {
    setHoveredLable(label)
  }
  return ( 
    <div className="profile-perf">
      <h4 className="title">Your profile performance score</h4>
      <main>
        <section>
          <BalanceDoughnutChart state={state} onHover={handleHover} />
        </section>
        <section>
          <PerformanceCard
            title={hoveredLabel}
            content="You have to complete your verification process to score high in this grade"
            btnText={`Go to ${hoveredLabel}`}
          />
        </section>
        <section>
          <ul>
            {labels.map((label, index) => (
              <li key={index}>
                <div>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: state.backgroundColor[index],
                    }}
                  ></span>
                  <small> {label} </small>
                </div>

                <p>+3%</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ProfilePerformance;
ProfilePerformance.propTypes = {
  state: propTypes.object,
};
