import { useCallback } from "react";
import { Line } from "react-chartjs-2";
import propTypes from "prop-types";
import { FaRegUser, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";
import { Badge } from "components/index";
import assets from "assets";
import "./balanceLineChart.scss";

const BalanceLineChart = ({ state, setState }) => {
  const myImage = new Image(15, 15);
  myImage.src = assets.DashboardPerson;

  const handleSetProfileData = useCallback(() => {
    const userData = [0, 40, 0, 40, 60, 80];
    const itSolutionData = [40, 80, 40, 80, 100];
    const currentData = "Profile";

    setState((state) => ({
      ...state,
      userData,
      itSolutionData,
      currentData,
      pointStyle: "circle",
    }));
  }, [state]);
  const handleSetBidData = useCallback(() => {
    const userData = [40, 0, 60, 40, 20, 60];
    const itSolutionData = [0, 80, 40, 80, 100];
    const currentData = "Bids";
    const pointStyle = myImage;

    setState((state) => ({
      ...state,
      userData,
      itSolutionData,
      currentData,
      pointStyle,
    }));
  }, [state]);
  const data = {
    labels:
      state.currentData === "Profile" ? state.profileLabel : state.bitLabel,
    datasets: [
      {
        label: "ee",
        fill: false,
        lineTension: 0.6,
        backgroundColor: "#1A9FFF",
        borderColor: "#1A9FFF",
        borderWidth: 2,
        pointStyle: "",
        data: state.itSolutionData,
      },
      {
        label: "dd",
        fill: false,
        lineTension: 0.6,
        backgroundColor: "#FFFFFF",
        borderColor: "#EE5783",
        borderWidth: 2,
        pointStyle: state.pointStyle,
        data: state.userData,
      },
    ],
  };

  return (
    <div className="bal-line-chart">
      <section>
        <div className="badges">
          <span>
            <Badge customBadgeClass="pink" />
            Your Score
          </span>
          <span>
            <Badge customBadgeClass="primary" />
            iT Solutions average
          </span>
        </div>

        <div className="div-end">
          <span>
            {state.currentData === "Profile" ? (
              <FaRegUser />
            ) : (
              <VscLocation />
            )}
          </span>
          <label>{state.currentData} </label>

          <div className="chart-nav">
            <button onClick={handleSetProfileData}>
              <FaChevronUp />
            </button>
            <button onClick={handleSetBidData}>
              <FaChevronDown />
            </button>
          </div>
        </div>
      </section>
      <section>
        <Line
          data={data}
          height={400}
          weight={400}
          options={{
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "#cccccc",
                    lineWidth: 0.2,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: true,
                    color: "#cccccc",
                    lineWidth: 0.2
                  },
                },
              ],
            },

            maintainAspectRatio: false,
            responsive: true,
            scaleShowHorizontalLines: true,
            scaleShowVerticalLines: true,
            title: {
              display: true,
              text: "",
              fontSize: 20,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </section>
    </div>
  );
};

export default BalanceLineChart;
BalanceLineChart.propTypes = {
  state: propTypes.object,
  setState: propTypes.func,
};
