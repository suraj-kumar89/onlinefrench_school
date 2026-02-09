'use client';

export type SegmentItem = {
  text: string;
};

export default function useSegmentation() {
  const UI = {
    // keep typography consistent with LearnMode
    primary: '#242325',
    secondary: '#47464A',
    tertiary: '#4A3CF3',

    // caption pill
    captionBg: '#FBFCF2',
    captionBorder: '#E0DFE3',

    // success/check accent (green)
    success: '#4A3CF3', // tweak if you need closer to your design
    successBg: '#EAF8F1',

    // CTA (same family as header/salebanner vibe)
    ctaBg: '#D3E373',
    ctaText: '#38400D',
  };

  const image = {
    src: 'https://media.onlinefrenchskool.com/assets/image5.svg', // place in /public or update path
    alt: 'Smiling learner studying in a cozy setting',
  };

  const items: SegmentItem[] = [
    { text: 'For those preparing for TEF Canada PR and seeking a structured study plan.' },
    { text: 'For professionals aiming to boost their French score for better CRS points.' },
    { text: 'For students planning to study or settle in Canada with an official \n certification.' },
    { text: 'For learners with basic French who want to master TEF-style speaking, \n writing, and listening.' },
  ];

  const cta = {
    label: 'Book Free Trial Class →',
    href: '/contact_us',
  };

  return { UI, image, items, cta };
}
