import CLink from "@/components/cLink";
import ChartLineIcon from "@/components/icons/animated/chartLineIcon";
import ShieldCheckIcon from "@/components/icons/animated/shieldCheckIcon";

export const projects = [
  {
    title: "Snaphive",
    icon: "https://res.cloudinary.com/dspkhqhkv/image/upload/v1740327688/SnapHive/Logo/Logo_Logo_Only-Dark.png",
    link: "https://snaphive.mgkusumaputra.me",
    description: "SnapHive is instant online photobooth.",
    content: (
      <>
        I created an instant online photobooth called{" "}
        <CLink href="https://snaphive.mgkusumaputra.me" value="SnapHive" />.
      </>
    ),
  },
  {
    title: "Tracker Tryout UTBK",
    icon: <ChartLineIcon className="w-7 h-7" />,
    link: "https://tracker.learnlagoon.my.id",
    description:
      "Web-based tool that helps high school students store, analyze, and visualize UTBK tryout results.",
    content: (
      <>
        I built{" "}
        <CLink
          href="https://tracker.learnlagoon.my.id"
          value="Tracker Tryout UTBK"
        />{" "}
        a web - based tool that helps high school students store, analyze, and
        visualize UTBK tryout results.
      </>
    ),
  },
  {
    title: "Student Council E-Voting",
    icon: <ShieldCheckIcon className="w-7 h-7" />,
    description:
      "Web-based tool that helps high school students store, analyze, and visualize election results.",
    content: (
      <>
        I created a web - based e - voting system for SMA Unggulan Darul
        Hikam.Used by <strong>400 + users </strong> on election day with
        real-time vote tracking and zero errors.
      </>
    ),
  },
];

