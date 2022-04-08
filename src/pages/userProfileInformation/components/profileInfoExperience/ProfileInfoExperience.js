import React from "react";
import EditIcon from "../../components/editIcon";
import AddIcon from "../../components/addIcon";
import { ReactComponent as Rings } from "assets/svgs/rings.svg";
import "./profileInfoExperience.scss";
import { IoLocationOutline } from "react-icons/io5";

const ProfileInfoExperience = () => {
  return (
    //   <div className="experience background--dashed">
    //     <header className="experience__header">
    //       <h1 className="header--title">Your accomplishments</h1>
    //       <span className="label--small">
    //         Information on all your professional certifications
    //       </span>
    //     </header>
    //     <div className="experienceInformation">
    //       <div className="experienceInformation--logo">
    //         <img
    //           src="https://tse2.mm.bing.net/th?id=OIP.FtqqM5mWlVO54JPjFlS1GwHaFj&pid=Api&P=0&w=250&h=188"
    //           alt="employerLogo"
    //         />
    //       </div>
    //       <div className="experienceInformation__details">
    //         <span>Product design certificate</span>
    //         <span>Google</span>
    //         <span className="experienceInformation__employer label--medium">
    //           <span>Feb 2021</span>
    //           <span className="dot">&#128280;</span>
    //           <span className="experienceInformation__staffStatus">
    //             No expiration date
    //           </span>
    //         </span>

    //         <div className="positionAbsolute--topRight moreActions">
    //           <span className="addIcon hasMarginBottom">
    //             <AddIcon size={30} />
    //           </span>
    //           <span className="editIcon">
    //             <EditIcon size={15} />
    //           </span>
    //           <span className="ringsPositionBottom">
    //             <Rings />
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <div className="experience background--dashed">
      <header className="experience__header">
        <h1 className="header--title">Your experience</h1>
        <span className="label--small">
          Information on all your work experience
        </span>
      </header>
      <div className="experienceInformation">
        <div className="experienceInformation--logo">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.7TDk2eIgNwNDV7Hd1PW2JwHaFP&pid=Api&rs=1&c=1&qlt=95&w=128&h=90"
            alt="employerLogo"
          />
        </div>
        <div className="experienceInformation__details">
          <span>Product Designer</span>
          <span className="experienceInformation__employer">
            <span>Sterling</span>
            <span className="dot">⚫</span>
            <span className="experienceInformation__staffStatus">
              Full Time
            </span>
          </span>
          <span>
            <span className="workDuration text-grey">Oct 2019 - Present</span>
          </span>
          <span className="label--small experienceInformation__jobLocation">
            <IoLocationOutline />
            <span>
              <span>Lagos</span>, &nbsp;
              <span>NG</span>
            </span>
          </span>
          <p className="experienceInformation__jobResponsibilities">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            cumque itaque at laudantium illo voluptates libero, dolor, esse
            repellendus saepe sequi facere necessitatibus! Labore deserunt
            soluta maiores inventore voluptatibus totam aliquam quisquam.
            Adipisci molestiae ea nobis iusto praesentium dicta recusandae,
            ullam asperiores pariatur deleniti nostrum amet, voluptate ab
            eveniet architecto accusamus alias autem maiores. Voluptate, velit
            praesentium.
          </p>
          <div className="positionAbsolute--topRight moreActions">
            <span className="addIcon hasMarginBottom">
              <AddIcon size={30} />
            </span>
            <span className="editIcon">
              <EditIcon size={15} />
            </span>
            <span className="ringsPositionBottom">
              <Rings />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoExperience;
