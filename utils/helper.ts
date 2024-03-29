import Dashboard from "../components/icons/Dashboard.vue";
import Repositories from "../components/icons/Repositories.vue";
import Findings from "../components/icons/Finding.vue";
import Conector from "../components/icons/Conector.vue";

// SIDEBAR ICONS TYPES
interface DropdownItem {
  title: string;
  content: { link: string; href: string }[];
  svg: any;
}

// SideBar Dropdown Values
export const dropdownSidebarList: DropdownItem[] = [
  {
    title: "Dashboards",
    content: [
      { link: "Reports", href: "#report" },
      { link: "SLSA", href: "#slsa" },
      { link: "Software Supply Chain", href: "#software" },
      { link: "OWASP ", href: "#owsap" },
    ],
    svg: Dashboard,
  },
  {
    title: "Repositories",
    content: [
      { link: "Reports", href: "#report" },
      { link: "SLSA", href: "#slsa" },
      { link: "Software Supply Chain", href: "#software" },
      { link: "OWASP ", href: "#owsap" },
    ],
    svg: Repositories,
  },
  {
    title: "Findings",
    content: [
      { link: "Reports", href: "#report" },
      { link: "SLSA", href: "#slsa" },
      { link: "Software Supply Chain", href: "#software" },
      { link: "OWASP ", href: "#owsap" },
    ],
    svg: Findings,
  },
  {
    title: "Conector Page",
    content: [
      { link: "Reports", href: "#report" },
      { link: "SLSA", href: "#slsa" },
      { link: "Software Supply Chain", href: "#software" },
      { link: "OWASP ", href: "#owsap" },
    ],
    svg: Conector,
  },
];

// Footer links data
export const footerLinks = [
  { href: "#", link: "Dashboard" },
  { href: "#", link: "Repositories" },
  { href: "#", link: "Findings" },
  { href: "#", link: "Connector Page" },
];

// Footer icon data
export const footerIcon = [
  { href: "https://www.linkedin.com/", icon: "/assets/Icons/linkedin.svg" },
  { href: "https://www.twitter.com/", icon: "/assets/Icons/twitter.svg" },
];
// Top rank data
export const topRank = [
  {
    title: "A01",
    description: "Broken Access Control",
    rank: 56,
  },
  {
    title: "A02",
    description: "Cryptographic Failures",
    rank: 32,
  },
  {
    title: "A03",
    description: "Injection",
    rank: 78,
  },
  {
    title: "A04",
    description: "Insecure Design",
    rank: 85,
  },
  {
    title: "A05",
    description: "Security Misconfiguration",
    rank: 45,
  },
  {
    title: "A06",
    description: "Vulnerable and Outdated Components",
    rank: 56,
  },
  {
    title: "A07",
    description: "Identification and Authentication Failures",
    rank: 64,
  },
  {
    title: "A08",
    description: "Software and Data Integrity Failures",
    rank: 23,
  },
  {
    title: "A09",
    description: "Security Logging and Monitoring Failures",
    rank: 87,
  },
  {
    title: "A10",
    description: "Server Side Request Forgery (SSRF)",
    rank: 50,
  },
];

// Radial chart data
export const supplyChainChart = [
  {
    percent: "100",
    title: "SAST",
  },
  {
    percent: "90",
    title: "Secrets / PII",
  },
  {
    percent: "100",
    title: "IaC security",
  },
  {
    percent: "100",
    title: "OpenSource Security (SCA)",
  },
  {
    percent: "100",
    title: "License compliance",
  },
  {
    percent: "75",
    title: "SBOM",
  },
  {
    percent: "20",
    title: "Cloud Security Posture Management (CSPM)",
  },
];

// Build Threats cards
export const buildThreats = [
  {
    title: "Compromise build process",
    rank: 43,
    type: "build",
    growth: "+31",
  },
  {
    title: "Upload modified package",
    rank: 81,
    type: "build",
    growth: "+35",
  },
  {
    title: "Compromise package registry",
    rank: 7,
    type: "build",
    growth: "+35",
  },
  {
    title: "Use compromised package",
    rank: 65,
    type: "build",
    growth: "+35",
  },
];
// Dependencies Threats cards
export const dependenciesThreats = [
  {
    title: "Use compromised package",
    rank: 15,
    type: "dependencies",
    growth: "+35",
  },
];

// Source Threats cards
export const sourceThreats = [
  {
    title: "Submit  unauthorized change",
    rank: 31,
    type: "source",
    growth: "+35",
  },
  {
    title: "Compromise  source repo",
    rank: 75,
    type: "source",
    growth: "+20",
  },
  {
    title: "Build from  modified source",
    rank: 40,
    type: "source",
    growth: "+1",
  },
];

// Chart progress bar data
export const chartProgressBar = [
  {
    title: "Findings",
    rank: 26,
    rankPercentage: (26 * 100) / 31,
  },
  {
    title: "Ready to remediate",
    rank: 5,
    rankPercentage: 100 - 83.87,
  },
  {
    title: "Total Findings",
    rank: 31,
    rankPercentage: 0,
  },
];

// Chart progress bar data
export const customDropdownIcon = [
  "/assets/Icons/email.svg",
  "/assets/Icons/notifications.svg",
];

// FINDINGS REPORT LINE CHART  DATA
export const findingsLineChartList = [
  {
    series: [
      {
        name: "Findings",
        data: [6000, 4400, 6200, 4000, 6400, 3500, 4500, 6000, 5500, 7000],
      },
      {
        name: "Ready to remediate",
        data: [1500, 4000, 5000, 9000, 6000, 4000, 6000],
      },
    ],
    categories: [
      "Jan 4",
      "Jan 5",
      "Jan 6",
      "Jan 7",
      "Jan 8",
      "Jan 9",
      "Jan 10",
      "Jan 11",
      "Jan 12",
    ],
    optionsData: {
      min: 0,
      max: 10000,
    },
  },
];

//FINDINGS CIRCULAR CHART DATA
export const findingCircularChartData = {
  series: [120, 110, 100, 90],
  labels: [
    "Vulnerabilities Priorizated",
    "Vulnerabilities Aggregated",
    "Total Findings",
    "--",
  ],
  colors: ["#8220FF", "#05CB0C", "#FD9B3D", "#E6D2FF"],
};
