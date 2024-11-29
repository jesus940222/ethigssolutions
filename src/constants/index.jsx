import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/raul_blanco.jpg";
import user2 from "../assets/profile-pictures/andrea_ayala.jpg";
import user3 from "../assets/profile-pictures/edmundo_acevedo.jpg";
import user4 from "../assets/profile-pictures/sylvain_edelberg.jpg";
import user5 from "../assets/profile-pictures/edith_gonzalez.jpg";
import user6 from "../assets/profile-pictures/cesar_vilchis.jpg";

export const navItems = [
  { label: "Home", href: "#HeroSection" },
  { label: "Features", href: "#FutureSection" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
  { label: "Contact us", href: "#Workflow" },
];

export const testimonials = [
  {
    user: "Raúl Blanco García",
    company: "Grupo Bimbo",
    image: user1,
    text: "Great technical knowledge and ability to adopt new technologies and challenging scenarios. Robust results and great attention to detail achieved in record time.",
  },
  {
    user: "Pilar Andrea Ayala Torres",
    company: "Bruria Alta Costura",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "Edmundo Acevedo ",
    company: "Moldex",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Sylvain Edelberg",
    company: "Grupo Bimbo",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Edith Gonzalez",
    company: "Nestlé",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "César Vilchis",
    company: "EDDA",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Chatbots on all platforms",
    description:
      "We build chatbots for your business on all platforms like Messenger, Whatsapp, Telegram, SMS, Calls, Instagram, Teams.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Mobile Compatibility",
    description:
      "We create multi-Platform mobile applications because we know that your business needs to be everywhere.",
  },
  {
    icon: <ShieldHalf />,
    text: "Web Page",
    description:
      "We create the website you need for your business, with the functionalities you need most.",
  },
  {
    icon: <BatteryCharging />,
    text: "VR, AR and mixed reality application",
    description:
      "We can build augmented reality, virtual reality or mixed reality applications that you need",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration",
    description:
      "We collaborate with your teams to achieve the rapid completion of your projects",
  },
  {
    icon: <GlobeLock />,
    text: "Data analyst, AI or Data science solutions",
    description:
      "We can help you with advice or tasks of a data scientist, data analyst or AI engineer.",
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
    title: "Quick MVP",
    price: "$2000-10000",
    features: [
      "Have meetings (until 3) about the product",
      "Build an example of the project",
      "Provide the project plan by dates and deliverables",
      "Get a quote for the project or by parts",
      "keep the price for 15 days",
    ],
  },
  {
    title: "Project",
    price: "depending on the project",
    features: [
      "Hold meetings about the product and project deliverables.",
      "Provide user manual and code if specified",
      "Provide the project plan by dates and deliverables",
      "cash on delivery",
      "12 month warranty",
    ],
  },
  {
    title: "Hours of service",
    price: "$1000/8 hours",
    features: [
      "Focus on service hours",
      "Presentations and meetings",
      "hours of service reports",
      "Focus on results",
      "Private Mode",
      "cash on delivery",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.facebook.com/ethigssolutions/", text: "Facebook" },
  { href: "https://www.instagram.com/ethigssolutions/", text: "Instagram" },
  { href: "https://api.whatsapp.com/send/?phone=527297123275&text&type=phone_number&app_absent=0", text: "Whatsapp" },
  { href: "https://www.linkedin.com/in/jesusehernandezmendoza/", text: "Linkedin" },
 // { href: "", text: "Youtube" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "http://www.google.com.mx", text: "Jobs" },
];
export const headers_text = [
  { header: "Ethigs solutions", text: "Transform the Future of Your Business with Innovative and Sustainable Technology", text2:"At Ethigs Solutions, we help businesses of all sizes evolve towards a more connected and efficient future. \nWe offer advanced technological solutions, designed to optimize your processes, improve your customers' \nexperience and support your growth in a sustainable way.", text3: "Get a quote" , text4:""  },
  { header: "Features", text: "Easily build your project", text2:"", text3: "" , text4:"" },
  { header: "Pricing", text: "", text2:"", text3: "" , text4:"" },
  { header: "What People are saying", text: "", text2:"", text3: "", text4:"" },
  { header: "Fill out our contact form to receive a quote.", text: "Name", text2:"Email", text3: "Mesagge", text4:"Send" },
];