// src/components/package/usePackage.ts
export type Plan = {
  id: "one" | "super6";
  title: string;
  perks: string[];
  bg: string;
  lightText?: boolean;
  recommended?: boolean;
};

export default function usePackage() {
  const UI = {
    // caption pill
    captionBg: "#FBFCF2",
    captionBorder: "#E0DFE3",
    captionText: "#4A3CF3",

    // brand accents
    brand: "#984DDD",
    primary: "#D3E373",

    // text
    neutralPrimary: "#242325",
    neutralSecondary: "#47464A",

    // buttons
    btnTextOnPrimary: "#E4F1FE",
    btnTextOnWhite: "#FFFFFF",
  };

  const plans: Plan[] = [
    {
      id: "one",
      title: "Fast Track \n Programme",
      bg: "#151B1F", // soft purple block
      lightText: true,
      perks: [
        "7-8 Month",
        "1 Hour Daily",
        "Communication Practice",
        "Assignments & Mock Tests",
      ],
    },
    {
      id: "super6",
      title: "Super-Intensive \n Programme",
      bg: "#FFFFFF",
      recommended: true,
      perks: [
        "3-4 Month",
        "3 Hour Daily",
        "Communication Practice",
        "Assignments & Mock Tests",
      ],
    },
  ];

  return { UI, plans };
}
