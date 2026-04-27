import CLink from "@/components/cLink";
import ChartLineIcon from "@/components/icons/animated/chartLineIcon";
import ShieldCheckIcon from "@/components/icons/animated/shieldCheckIcon";
import { BookOpenIcon, CalendarDaysIcon, GlobeIcon, LinkIcon, ShuffleIcon } from "lucide-react";

export const projects = [
  {
    title: "Tracker Tryout UTBK",
    icon: <ChartLineIcon className="w-5 h-5" />,
    link: "https://tracker.learnlagoon.my.id",
    description: "A dashboard for tracking UTBK tryout scores with benchmarking against target universities.",
    content: (
      <>
        <CLink href="https://tracker.learnlagoon.my.id" value="Tracker Tryout UTBK" /> helps students turn raw tryout results into
        structured insights, with OCR support for input from images or PDFs, progress tracking over time, and benchmarking against
        target university scores.
      </>
    ),
  },
  {
    title: "Student Council E-Voting",
    icon: <ShieldCheckIcon className="w-5 h-5" />,
    link: "",
    description: "A web based e voting system with single use vote tokens.",
    content: (
      <>
        Designed for real world usage, this system was used by <strong>400+ users</strong> during election day, using a token
        based mechanism to prevent duplicate votes and ensure each submission is valid.
      </>
    ),
  },
  {
    title: "Haziq",
    icon: <BookOpenIcon className="w-5 h-5" />,
    link: "https://haziq.mgkusumaputra.me",
    description: "A web app for reading and exploring the Qur’an in Indonesian.",
    content: (
      <>
        <CLink href="https://haziq.mgkusumaputra.me" value="Haziq" /> presents Qur’anic verses and Indonesian interpretation in a
        clean, distraction free interface focused on readability and ease of access.
      </>
    ),
  },
  {
    title: "SnapHive",
    icon: "https://res.cloudinary.com/dspkhqhkv/image/upload/v1740327688/SnapHive/Logo/Logo_Logo_Only-Dark.png",
    link: "https://snaphive.mgkusumaputra.me",
    description: "A browser based photobooth with custom frames and filters.",
    content: (
      <>
        <CLink href="https://snaphive.mgkusumaputra.me" value="SnapHive" /> provides a complete photobooth experience directly in
        the browser, with customizable frames and filters for instant capture and share ready results.
      </>
    ),
  },
  {
    title: "Linktion",
    icon: <LinkIcon className="w-5 h-5" />,
    link: "https://linktion.mgkusumaputra.me",
    description: "A self hosted link in bio platform powered by Notion as a CMS.",
    content: (
      <>
        <CLink href="https://linktion.mgkusumaputra.me" value="Linktion" /> uses Notion as a content source, allowing links and
        sections to be updated without code while maintaining full control through self hosting.
      </>
    ),
  },
  {
    title: "Huffle",
    icon: <ShuffleIcon className="w-5 h-5" />,
    link: "https://huffle.mgkusumaputra.me/",
    description: "A simple tool for generating random groups.",
    content: (
      <>
        Huffle quickly shuffles people into groups, making it useful for classrooms, team activities, or any situation that
        requires fair and fast grouping.
      </>
    ),
  },
  {
    title: "Harli",
    icon: <CalendarDaysIcon className="w-5 h-5" />,
    link: "https://harli.mgkusumaputra.me/",
    description: "A public holiday reference for Indonesia.",
    content: <>Harli provides structured and easy to access information on Indonesian public holidays for everyday planning.</>,
  },
  {
    title: "Linktion",
    icon: <GlobeIcon className="w-5 h-5" />,
    link: "https://github.com/Mgkusumaputra/Linktion",
    description: "A personal link in bio page powered by Notion.",
    content: (
      <>
        Social Media Link uses Notion as a lightweight CMS, allowing content updates without touching code while keeping the setup
        simple and flexible.
      </>
    ),
  },
];
