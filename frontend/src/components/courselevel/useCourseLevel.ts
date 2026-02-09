export const COLORS = {
  textPrimary: "#242325",
  textSecondary: "#47464A",
  tertiary: "#6B6A70",

  // backgrounds
  blueLite: "#EDF3C6",   // Beginner
  lavender: "#D5E47A",   // Intermediate
  purple: "#97A257",     // Advanced
};

export type CourseTier = {
  tier: "Beginner" | "Intermediate" | "Advanced";
  label: string;        // A1 & A2, etc
  description: string;
  bg: string;
  lightText?: boolean;  // Advanced uses light text on purple
};

export const LEVELS: CourseTier[] = [
  {
    tier: "Beginner",
    label: "Foundation \n Level",
    description:
      "Build your base in French grammar, pronunciation, and vocabulary. Learn to listen, read, speak, and write confidently in everyday situations.",
    bg: COLORS.blueLite,
  },
  {
    tier: "Intermediate",
    label: "Skill \n Enhancement",
    description:
      "Develop fluency, improve comprehension, and start practising exam-style tasks for listening, reading, writing, and speaking sections of TEF.",
    bg: COLORS.lavender,
  },
  {
    tier: "Advanced",
    label: "TEF Exam \n Mastery",
    description:
      "Perfect your performance through mock tests, personalised evaluations, and advanced strategies to achieve your target CLB score for Canada PR.",
    bg: COLORS.purple,
    lightText: true,
  },
];

export default function useCourseLevel() {
  return { COLORS, items: LEVELS };
}
