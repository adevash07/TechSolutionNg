import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Search from "components/search/Search";
import Header from "layouts/header/Header";
import { ACCOUNTSETTINGPAGE_ROUTE } from "navigations/CONSTANTS";
import "./accountView.scss";
import {
  AccountDetailsForm,
  AccountModal,
  CloseAccountForm,
} from "./components/index";
import { useHistory } from "react-router-dom";

const AccountView = () => {
  const [current, setCurrent] = useState(0);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const [solutionsProvider, setsolutionsProvider] = useState(false);
  const [projectNotification, setprojectNotification] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    switch (name) {
      case "solutionProviderFollow":
        setsolutionsProvider(!solutionsProvider);
        break;
      case "projectNotification":
        setprojectNotification(!projectNotification);
        break;
    }
  };

  const history = useHistory();

  const handleNext = () => {
    setCurrent((current) => current + 1);
  };
  const handlePrev = () => {
    setCurrent((current) => current - 1);
  };
  const handleSaveChanges = () => {
    setShowSaveModal(true);
  };
  const handleCloseAccunt = () => {
    setShowCloseModal(true);
  };

  const closeSaveModal = () => {
    setShowSaveModal(false);
    history.push(ACCOUNTSETTINGPAGE_ROUTE);
  };
  const closeCloseModal = () => {
    setShowCloseModal(false);
    history.push(ACCOUNTSETTINGPAGE_ROUTE);
  };
  return (
    <div className='account-view'>
      <Header dashboardPage />
      <div className='container-search-div'>
        <Search
          linkpathacct={`${ACCOUNTSETTINGPAGE_ROUTE}`}
          iconarrow={<FaLongArrowAltLeft />}
          ptext='Account'
        />
      </div>
      {current === 0 ? (
        <AccountDetailsForm
          closeHandler={handleNext}
          saveHandler={handleSaveChanges}
          onChange={(e) => handleChange(e)}
          solutionsValue={solutionsProvider}
          projectValue={projectNotification}
        />
      ) : (
        <CloseAccountForm
          cancelHandler={handlePrev}
          closeHandle={handleCloseAccunt}
        />
      )}
      {showSaveModal && (
        <AccountModal
          visible={showSaveModal}
          title='Changes Saved!'
          message='The changes selected has been saved'
          closeHandler={closeSaveModal}
          showCheckIcon={true}
        />
      )}
      {showCloseModal && (
        <AccountModal
          visible={showCloseModal}
          title='Your account has been closed!'
          message='You account has been closed. Please note that it will take 24hours to permanently delete your profile from our database and as well as removing your profile from client search.'
          closeHandler={closeCloseModal}
        />
      )}
    </div>
  );
};

export default AccountView;
