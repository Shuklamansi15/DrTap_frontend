import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Devi Prasad Shetty",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS, MS, FRCS",
    experience: "40+ Years",
    about:
      "Founder of Narayana Health, Dr. Shetty is globally acclaimed for revolutionizing affordable healthcare in India.",
    fees: 100,
    address: {
      line1: "Narayana Health City",
      line2: "Bangalore, India",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Prathima Reddy",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MD (OBG)",
    experience: "30+ Years",
    about:
      "Dr. Reddy is a leading consultant in high-risk obstetrics and gynecology at Fortis La Femme, Bengaluru.",
    fees: 80,
    address: {
      line1: "Fortis La Femme",
      line2: "Richmond Road, Bangalore",
    },
  },
  {
    _id: "doc3",
    name: "Dr. B Nandini",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "20 Years",
    about:
      "Dr. Nandini is a reputed dermatologist in India, known for clinical dermatology and cosmetic treatments.",
    fees: 70,
    address: {
      line1: "Dermacare Skin Clinic",
      line2: "Chennai, India",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Alok Sharma",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, MD (Pediatrics)",
    experience: "35+ Years",
    about:
      "Dr. Sharma is a senior pediatrician and expert in pediatric neurology at NeuroGen Brain & Spine Institute, Mumbai.",
    fees: 90,
    address: {
      line1: "NeuroGen Hospital",
      line2: "Navi Mumbai, India",
    },
  },
  {
    _id: "doc5",
    name: "Dr. B S Singhal",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, MD, DM (Neurology)",
    experience: "50+ Years",
    about:
      "Padma Shri awardee, Dr. Singhal is a pioneer in Indian neurology and founder of the Neurology Foundation.",
    fees: 120,
    address: {
      line1: "Bombay Hospital",
      line2: "Mumbai, India",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Sanjay Pandey",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastroenterology)",
    experience: "22 Years",
    about:
      "Dr. Pandey is a reputed gastroenterologist practicing at Kokilaben Hospital with expertise in advanced endoscopy.",
    fees: 100,
    address: {
      line1: "Kokilaben Dhirubhai Ambani Hospital",
      line2: "Mumbai, India",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Anthony Fauci",
    image: doc7,
    speciality: "General physician",
    degree: "MD",
    experience: "50+ Years",
    about:
      "Dr. Fauci is a globally renowned physician-scientist and served as director of NIAID in the US.",
    fees: 200,
    address: {
      line1: "National Institutes of Health",
      line2: "Bethesda, Maryland, USA",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Jennifer Ashton",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MD, OB/GYN",
    experience: "25+ Years",
    about:
      "Dr. Ashton is the Chief Medical Correspondent at ABC News and a respected OB/GYN in the US.",
    fees: 180,
    address: {
      line1: "Englewood Health",
      line2: "New Jersey, USA",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Sandra Lee (Dr. Pimple Popper)",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MD, FAAD",
    experience: "20+ Years",
    about:
      "Dr. Lee is a famous American dermatologist and YouTube personality known for skin procedures.",
    fees: 150,
    address: {
      line1: "Skin Physicians & Surgeons",
      line2: "California, USA",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Benjamin Hoffman",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MD",
    experience: "30+ Years",
    about:
      "Dr. Hoffman is a professor of pediatrics at OHSU and leader in child health policy in the US.",
    fees: 160,
    address: {
      line1: "Oregon Health & Science University",
      line2: "Portland, Oregon, USA",
    },
  },
  {
    _id: "doc11",
    name: "Dr. W. Curt LaFrance Jr.",
    image: doc11,
    speciality: "Neurologist",
    degree: "MD, MPH",
    experience: "25+ Years",
    about:
      "Renowned for research on neuropsychiatric disorders, Dr. LaFrance works at Brown University.",
    fees: 180,
    address: {
      line1: "Rhode Island Hospital",
      line2: "Providence, USA",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Richard L. Guerrant",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MD",
    experience: "40+ Years",
    about:
      "Dr. Guerrant is a pioneer in gastrointestinal disease research and global health initiatives.",
    fees: 200,
    address: {
      line1: "University of Virginia",
      line2: "Virginia, USA",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Naresh Trehan",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS, Diplomate (USA)",
    experience: "40+ Years",
    about:
      "Founder of Medanta Hospital, Dr. Trehan is one of India’s most respected physicians and surgeons.",
    fees: 120,
    address: {
      line1: "Medanta - The Medicity",
      line2: "Gurugram, India",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Hrishikesh Pai",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, MD, FRCOG",
    experience: "35+ Years",
    about:
      "One of India’s top fertility and gynecology experts, Dr. Pai is the past president of FOGSI.",
    fees: 150,
    address: {
      line1: "Bloom IVF Centre",
      line2: "Mumbai, India",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Rashmi Sarkar",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Skin)",
    experience: "25+ Years",
    about:
      "Dr. Sarkar is a professor of dermatology and a globally recognized leader in pigmentation disorders.",
    fees: 100,
    address: {
      line1: "Maulana Azad Medical College",
      line2: "New Delhi, India",
    },
  },
];
