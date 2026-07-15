import { BookOpenCheck, CalendarDays, ClipboardCheck, GraduationCap, MapPin, Target, Users } from "lucide-react";

export const stats = [
  { label: "Students", value: "100+" },
  { label: "Courses", value: "03+" },
  { label: "Batches", value: "11+" },
  { label: "Success Rate", value: "100%" },
  { label: "Years of Experience", value: "12+" },
];

export const whyLearnItems = [
  {
    title: "12+ years of teaching experience",
    description: "Long-term classroom experience with HSC ICT learners and practical exam preparation.",
    icon: Users,
  },
  {
    title: "CSE graduate from CUET",
    description: "B.Sc in Computer Science and Engineering from Chittagong University of Engineering and Technology.",
    icon: GraduationCap,
  },
  {
    title: "ICT postgraduate from BUET",
    description: "M.Sc in Information and Communication Technology from Bangladesh University of Engineering and Technology.",
    icon: BookOpenCheck,
  },
];

export const exams = [
  "Daily Exams",
  "Weekly Exams",
  "Monthly Exams",
  "Chapter Closing Exams",
  "Final Mock Tests",
];

export const specialSessions = [
  {
    title: "For weak students",
    description: "Focused support sessions to rebuild confidence, revise fundamentals, and close learning gaps.",
    icon: Target,
  },
  {
    title: "For irregular students",
    description: "Recovery plans for missed classes, pending lecture sheets, and exam preparation continuity.",
    icon: CalendarDays,
  },
];

export const batches = [
  {
    title: "HSC-ICT Regular Batch",
    mode: "Offline & Online",
    schedule: "Friday & Saturday",
    items: [
      "10.00 AM to 11.00 AM (B-FRI-1)",
      "11.00 AM to 12.00 PM (B-FRI-2)",
      "03.00 PM to 4.00 PM (B-FRI-3)",
      "",
    ],
  },
   {
    title: "HSC-ICT Regular Batch",
    mode: "Offline & Online",
    schedule: "Saturday, Monday & Wednesday",
    items: [
      "7.00 AM to 8.00 AM (B-SAT-1)",
      "8.00 AM to 9.00 AM (B-SAT-2)",
      "4.00 PM to 5.00 PM (B-SAT-3)",
      "5.00 PM to 6.00 PM (B-SAT-4)",
    ],
  },
  {
    title: "HSC-ICT Regular Batch",
    mode: "Offline & Online",
    schedule: "Sunday, Tuesday & Thursday",
    items: [
      "7.00 AM to 8.00 AM (B-SUN-1)",
      "8.00 AM to 9.00 AM (B-SUN-2)",
      "4.00 PM to 5.00 PM (B-SUN-3)",
      "5.00 PM to 6.00 PM (B-SUN-4)", 
    ],
  },
 
];


export const learningSteps = [
  {
    title: "Join a suitable batch",
    description: "Choose an offline or future online batch based on schedule and learning need.",
    icon: MapPin,
  },
  {
    title: "Learn chapter by chapter",
    description: "Follow a clear ICT roadmap supported by class notes and exclusive lecture sheets.",
    icon: BookOpenCheck,
  },
  {
    title: "Practice with exams",
    description: "Build confidence through frequent tests and HSC-style final exam simulation.",
    icon: ClipboardCheck,
  },
];

export const faqs = [
  {
    question: "Where is LearnWithJayed located?",
    answer:
      "Our coaching center is located at Parthib Niloy Tower (1st Floor), opposite Rainbow School, Jhiltuli, Faridpur. You can easily reach us by heading to Rainbow School and crossing to the opposite side of the road.",
  },
  {
    question: "How can I get admitted?",
    answer:
      "You can complete your admission by calling our admission hotline to choose a suitable batch or by visiting our coaching center directly. Our team will assist you throughout the admission process.",
  },
  {
    question: "How are practical topics taught?",
    answer:
      "Practical lessons are conducted through interactive, hands-on sessions using multimedia projectors. Students practice each concept in class to build real understanding and confidence.",
  },
  {
    question: "Are classes available offline or online?",
    answer:
      "Yes. We offer both offline and online batches, allowing students to choose the learning mode that best suits their needs.",
  },
  {
    question: "Will students receive lecture sheets?",
    answer:
      "Yes. Students receive well-structured lecture sheets for every chapter, including concept summaries, important notes, and board-focused practice materials.",
  },
  {
    question: "Is admission currently open?",
    answer:
      "Yes. Admission is currently open. Seats are limited in each batch, so we recommend completing your admission as early as possible.",
  },
];
