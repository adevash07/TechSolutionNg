import { HiDocumentDuplicate } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { ReactComponent as DashboardIcon } from "assets/svgs/header/dashboard.svg";
import { ReactComponent as ProjectIcon } from "assets/svgs/header/projects.svg";
import { ReactComponent as InvoiceIcon } from "assets/svgs/header/invoice.svg";
import { ReactComponent as ReportIcon } from "assets/svgs/header/report.svg";
import { ReactComponent as WalletIcon } from "assets/svgs/header/wallet.svg";
import { ReactComponent as SettingsIcon } from "assets/svgs/header/settings.svg";
import { ReactComponent as LogoutIcon } from "assets/svgs/header/logout.svg";

export const data1 = [
  {
    key: 0,
    submenuHeader: "View Dashboard",
    submenuText: "This is a reminder on the project to be completed.",
    submenuLink: "/dashboard",
    submenuIcon: <DashboardIcon />,
  },
  {
    id: 1,
    submenuHeader: "View Projects",
    submenuText: "This is a reminder on the project to be completed.",
    submenuLink: "/dashboard/projects",
    submenuIcon: <ProjectIcon />,
  },
  {
    id: 2,
    submenuHeader: "View Invoices",
    submenuText: "This is a reminder on the project to be completed.",
    submenuLink: "/dashboard/invoices",
    submenuIcon: <InvoiceIcon />,
  },
  {
    id: 3,
    submenuHeader: "View Reports",
    submenuText: "This is a reminder on the project to be completed.",
    submenuLink: "/dashboard/reports",
    submenuIcon: <ReportIcon />,
  },
  {
    id: 4,
    submenuHeader: "View Wallets",
    submenuText: "This is a reminder on the project to be completed.",
    submenuLink: "/dashboard/wallets",
    submenuIcon: <WalletIcon />,
  },
];

export const data2 = [
  {
    id: 0,
    submenuHeader: "Fabrizio Romano",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <HiDocumentDuplicate />,
    submenuMsgs: "5",
  },
  {
    id: 1,
    submenuHeader: "Sadio Mane",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <HiDocumentDuplicate />,
    submenuMsgs: "2",
  },
  {
    id: 2,
    submenuHeader: "Selena Gomez",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <HiDocumentDuplicate />,
    submenuMsgs: "1",
  },
  {
    id: 3,
    submenuHeader: "Beyonce Styles",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <HiDocumentDuplicate />,
    submenuMsgs: "3",
  },
];

export const data3 = [
  {
    id: 0,
    submenuHeader: "Bid accepted",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <GoPrimitiveDot style={{ color: "red" }} />,
  },
  {
    id: 1,
    submenuHeader: "Bid accepted",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <GoPrimitiveDot style={{ color: "red" }} />,
  },
  {
    id: 2,
    submenuHeader: "Bid Rejected",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <GoPrimitiveDot style={{ color: "red" }} />,
  },
  {
    id: 3,
    submenuHeader: "Bid in Review",
    submenuText: "This is a reminder on the project to be completed.",
    submenuIcon: <GoPrimitiveDot style={{ color: "red" }} />,
  },
];

export const data4 = [
  {
    id: 0,
    submenuHeader: "Account Settings",
    submenuText: "This is where you see all your account details",
    submenuIcon: <SettingsIcon />,
  },
  {
    id: 1,
    submenuHeader: "Log out",
    submenuText: "Please log out your account",
    submenuIcon: <LogoutIcon />,
  },
];
