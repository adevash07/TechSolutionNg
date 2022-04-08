import React from "react";
import StatementView from "./statementSubmodules/statementView/StatementView";
import StatementRequest from "./statementSubmodules/statementRequest/StatementRequest";
import "./statementSection.scss";
// import StatementTable from '../statementTable/StatementTable';
import StatementTable from "./statementSubmodules/statementTable/StatementTable";

export default function StatementSection() {
  return (
    <div className='statementLayout'>
      <div className='statementTable'>
        <StatementTable
          allTransactionNumber={8}
          receivedNumber={3}
          withdrawalsNumber={5}
        />
      </div>
      <div className='flexContainer'>
        <StatementView
          activeMonth='January'
          monthOption1='Jan'
          monthOption2='Feb'
          currency='$'
          receivedBalance='150,000'
          sentBalance='400,000'
          totalBalance='500,000'
        />
        <StatementRequest />
      </div>
    </div>
  );
}
