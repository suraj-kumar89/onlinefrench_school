export type ModuleLevel = {
  id: "beginner" | "intermediate" | "advanced";
  heading: string;        // e.g., "Beginner (A1–A2)"
  title: string;          // short label for the row (Beginner / Intermediate / Advanced)
  description: string;
  image: string;          // path in /public (568×436 recommended)
  chips: string[];
  chipBg?: string; 
};

const LEVELS: ModuleLevel[] = [
  {
    id: "beginner",
    title: "Foundation Stage",
    heading: "Foundation Stage",
    description:
      "You’ll master the basics of French grammar, vocabulary, and pronunciation. Build your comfort with listening, reading, writing, and speaking through real-life contexts and beginner-level practice sets.",
    image: "https://media.onlinefrenchskool.com/assets/image1.svg",
    chips: ["Greetings", "Numbers", "Shopping", "Family", "Travel"],
    chipBg: "#70565633", 
  },
  {
    id: "intermediate",
    title: "Practice Stage",
    heading: "Practice Stage",
    description:
      "You’ll learn to handle all four sections of the TEF exam with clarity. Focus on structured writing, guided speaking practice, and comprehension accuracy with mock question sets and weekly reviews.",
    image: "https://media.onlinefrenchskool.com/assets/image2.svg",
    chips: ["Work", "Study", "Hobbies", "Expressing Opinions", "French Culture"],
    chipBg: "#70565633", 
  },
  {
    id: "advanced",
    title: "Mastery Stage",
    heading: "Mastery Stage",
    description:
      "You’ll develop advanced skills to achieve your target CLB score. Learn examiner strategies, manage time under pressure, and refine fluency through intensive mocks and personalised evaluations.",
    image: "https://media.onlinefrenchskool.com/assets/image3.svg",
    chips: ["Advanced Grammar", "Academic Writing", "Professional Communication"],
    chipBg: "#70565633", 
  },
];

export default function useCourseModules() {
  return {
    items: LEVELS,
    UI: {
      // colors pulled from your design tokens
      captionBorder: "#E0DFE3",
      captionBg: "#FBFCF2",
      captionText: "#4A3CF3",
      primaryText: "#242325",
      secondaryText: "#022850",
      brand: "#38400D",
      divider: "#D1D0D6",
    },
  };
}
