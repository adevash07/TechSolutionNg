import { useState } from "react";
import { SideNav } from "../components";
import Header from "layouts/header/Header";
import Education from "../education/index";
import Employment from "../employment";
import Payment from "../payment";
import Profile from "../profile";
import Talent from "../talent";
import TitleOverview from "../titleOverview";
import "./userProfile.scss";

const UserProfile = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((currentState) => currentState + 1);
  };
  const handleBack = () => {
    setCurrent((currentState) => currentState - 1);
  };
  const renderComponents = () => {
    switch (current) {
      case 0:
        return <Talent onNext={handleNext} />;
      case 1:
        return <Education onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <Employment onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Payment onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <TitleOverview onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <Profile onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="user-profile">
        <header className="user-profile__header">
          <Header />
        </header>
        <div className="user-profile__container-lg">
          <aside>
            <SideNav active={current} />
          </aside>
          <main className="user-profile__container-main">{renderComponents()}</main>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
