import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Search from "../../components/search/Search";
import Header from "layouts/header/Header";
import { BalanceLineChart, ProfilePerformance } from "./components/index";
import "./balanceScoreCardView.scss"

const BalanceScoreCardView = () => {
  const [state, setState] = useState({
    userData: [0, 40, 0, 40, 60, 80],
    itSolutionData: [40, 80, 40, 80, 100],
    profileLabel: ["Verification", "Payment", "Profile", "Phone number"],
    bitLabel: [
      "Bid sent",
      "Bid accepted",
      "Others sent",
      "offers accepted",
      "Completed projects",
    ],
    bitsLabel2: [
      "Projects",
      "Instant offers",
      "Completed bids",
      "Completed offers",
    ],
    pointStyle: "circle",
    currentData: "Profile",
    backgroundColor: ["#A65DE6", "#00EDFF", "#004CFF", "#FF264C"],
  });
  return (
    <div className="bal-score-card">
      <Header dashboardPage />
      <main>
        <div className="container-search-div">
          <Search
            linkpathacct="/accountsettingpage"
            iconarrow={<FaLongArrowAltLeft />}
            ptext="Balance Score Card"
            icon={<BiSearch />}
            inputype="search"
            placetext="search"
            inputname="search"
            icons={<FaTimesCircle />}
          />
        </div>
        <BalanceLineChart state={state} setState={setState} />
        <ProfilePerformance state={state} />
      </main>
    </div>
  );
};

export default BalanceScoreCardView;
