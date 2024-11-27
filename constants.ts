import { MdPerson, MdLocalPharmacy } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";

export const menuLinks = [
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Shareholders",
    href: "/shareholders",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const whatCustomersDo = [
  {
    icon: MdPerson,
    desc: "For patients and consumers, we offer remote and connected cardiac care services for the 99% of the time they aren’t in front of their physician.",
  },
  {
    icon: FaUserDoctor,
    desc: "For healthcare professionals, we provide deep, real-time analysis of heart rhythm data that seamlessly connects our technology to existing workflows.",
  },
  {
    icon: MdLocalPharmacy,
    desc: "For our biopharma partners, we are advancing disease and safety monitoring solutions to mitigate risk of potentially dangerous medication side effects.",
  },
  {
    icon: GiHealthNormal,
    desc: "For health systems, we offer an enterprise platform that allows practices to remotely track their patients' heart rhythm data.",
  },
  {
    icon: FaHeartbeat,
    desc: "For payers and employers, we offer a PEPM cardiac health solution to help manage the mounting costs of heart disease.",
  },
];

export const productsAndSolutions = [
  {
    name: "For Health Systems",
    href: "/list",
  },
  {
    name: "For BioPharma",
    href: "/list",
  },
  {
    name: "For Payers & Employers",
    href: "/list",
  },
  {
    name: "Data Integration Solutions",
    href: "/list",
  },
  {
    name: "For OEMs",
    href: "/list",
  },
  {
    name: "Pi-Sense",
    href: "/list",
  },
  {
    name: "Clinician Interface",
    href: "/list",
  },
];

export const heroLinks = [
  {
    image: "/video-call.jpg",
    heading: "monitor patients with pi-sense",
    btnText: "learn more",
  },
  {
    image: "/fitness.jpg",
    heading: "browse wearables for women",
    btnText: "shop",
  },
  {
    image: "/diabetes.jpg",
    heading: "Revolutionizing Diabetes Care with AI",
    btnText: "learn more",
  },
  {
    image: "/watch-product.jpg",
    heading: "Can’t decide? We’ve got you covered.",
    btnText: "learn more",
  },
  {
    image: "/watch.jpg",
    heading: "your custom smartwatch is waiting",
    btnText: "learn more",
  },
  {
    image: "/astro.jpg",
    heading: "Pioneering Health in Space",
    btnText: "learn more",
  },
];

export const products = [
  {
    id: "1",
    name: "Apex Pro Smartwatch",
    category: "Smartwatch",
    image: "/products/smart-watch-1.png",
    price: 199.99,
    features: ["Heart Rate Monitor", "GPS Tracking", "Bluetooth Connectivity"],
  },
  {
    id: "2",
    name: "LuxeFit Smart Ring",
    category: "Ring",
    image: "/products/smart-ring-1.webp",
    price: 149.99,
    features: ["Sleep Tracking", "Water-Resistant", "Fitness Insights"],
  },
  {
    id: "3",
    name: "PulseMax Fitness Watch",
    category: "Smartwatch",
    image: "/products/smart-watch-3.jpg",
    price: 179.99,
    features: ["Step Counter", "Calorie Tracker", "Waterproof"],
  },
];

export const productsPage = [
  {
    id: "1",
    name: "Apex Pro Smartwatch",
    category: "Smartwatch",
    image: "/products/bg-ring.jpg",
    price: 199.99,
    features: ["Heart Rate Monitor", "GPS Tracking", "Bluetooth Connectivity"],
  },
  {
    id: "2",
    name: "LuxeFit Smart Ring",
    category: "Ring",
    image: "/products/bg-watch.jpg",
    price: 149.99,
    features: ["Sleep Tracking", "Water-Resistant", "Fitness Insights"],
  },
  {
    id: "3",
    name: "PulseMax Fitness Watch",
    category: "Smartwatch",
    image: "/products/smart-watch-1.jpg",
    price: 179.99,
    features: ["Step Counter", "Calorie Tracker", "Waterproof"],
  },
  {
    id: "4",
    name: "PulseMax Fitness Watch",
    category: "Smartwatch",
    image: "/products/smart-watch-3.jpg",
    price: 179.99,
    features: ["Step Counter", "Calorie Tracker", "Waterproof"],
  },
  {
    id: "3",
    name: "PulseMax Fitness Watch",
    category: "Smartwatch",
    image: "/products/smart-belt-1.jpg",
    price: 179.99,
    features: ["Step Counter", "Calorie Tracker", "Waterproof"],
  },

  {
    id: "3",
    name: "PulseMax Fitness Watch",
    category: "Smartwatch",
    image: "/products/heart-rate-monitor.jpg",
    price: 179.99,
    features: ["Step Counter", "Calorie Tracker", "Waterproof"],
  },
];
