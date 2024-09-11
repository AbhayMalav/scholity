import { BotMessageSquare, CodeXml } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { ChartLine } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Scale } from "lucide-react";
import { Store } from "lucide-react";
import { User } from "lucide-react";
import Social from "../components/Social";
import SocialLinks from "../components/SocialLinks";




import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// src/constants.js

export const navItems = [

  { label: "Idea", href: "/Idea" },
  { label: "About Us", href: "/AboutUs" },
  { label: "Our Future", href: "/OurFuture" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Technical Support and Maintenance",
    description:
      "Providing robust technical support and maintenance services to ensure continuous, reliable operation of our systems.",
  },
  {
    icon: <Store />,
    text: "Market Adoption and Awareness",
    description:
      "Educating healthcare providers and emergency services on the benefits of adopting our technology, and overcoming resistance to change.",
  },
  {
    icon: <DollarSign />,
    text: "Funding and Resource Allocation",
    description:
      " Securing adequate funding to support R&D, operations, and market expansion while efficiently managing resources.",
  },
  {
    icon: <Scale />,
    text: "Regulatory Compliance",
    description:
      "Navigating the complex regulatory landscape in healthcare technology, ensuring all devices and systems meet local and international standards.",
  },
  {
    icon: <ChartLine />,
    text: "Scalability of IoT Devices",
    description:
      "Developing and manufacturing IoT devices that are scalable and reliable across different environments and geographies.",
  },
  {
    icon: <User />,
    text: "Training and User Adoption",
    description:
      "Developing effective training programs to ensure healthcare professionals can easily adopt and utilize our technology in high-pressure situations.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Investors",
    price: "",
    features: [
      "Marketing",
      "Fundings and Grants",
      "Suggestions",
      "Give us a limelight",
    ],
  },
  {
    title: "Guests",
    price: "",
    features: [
      "Promotion",
      "Informatics",
      "Surveys",
      "Feedbacks",
    ],
  },

];

export const team = [
  {
    title: "Founder",
    designation: "Naman Sharma",
    photo: "../assets/naman.jpg", // Add photo URL
    features: [
      <Social />
     
    ],
  },
  {
    title: "Developer",
    designation: "Kashish Gour",
    photo: "../assets/kashish.jpg", // Add photo URL
    features: [
      <Social />

    ],
  },
  {
    title: "Consultant",
    designation: "Abhay Malav",
    photo: "../assets/kashish.jpg", // Add photo URL
    features: [
      <Social />

    ],
  },
];

  export const statement = [
    {
      title: "Problem",
      price: "",
      features: [
        "Delay in Critical Medical Interventions: In remote and suburban areas, healthcare systems often face delays in providing timely medical care.",
        "Lack of Real-Time Data Transmission: There is no real-time transmission of patient data between ambulances and hospitals.",
        "Worsened Patient Outcomes: Delays in receiving essential information limit doctors' preparedness, potentially leading to worse patient outcomes."
      ],
    },
    {
      title: "Solution",
      price: "",
      features: [
        "Cloud-Based IoT Devices: Scholity Technologies develops IoT devices that transmit live patient data from ambulances to hospitals.",
        "Real-Time Access for Doctors: Doctors receive real-time vital signs and medical information, allowing them to prepare for procedures before the patient arrives.",
        "Smart Healthcare Tools: Features like wireless stethoscopes sync with mobile apps, enhancing efficiency and accuracy.",
        
      ],
    }
  
];



