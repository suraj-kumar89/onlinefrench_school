export default function useFreeClass() {
  // Colors centralised so you can theme quickly
  const UI = {
    panelBg: '#EDF3C6',            // left purple panel
    title: '#022850',
    subtitle: '#47464A',
    // badge
    badgeText: '#4A3CF3',
    badgeBorder: '#4A3CF3',
    badgeBg: 'transparent',
    // CTA
    ctaBg: '#38400D',
    ctaText: '#D3E373',
  };

  const content = {
    badge: 'Free Class Offer',
    titleLine1: 'Experience Before',
    titleLine2: 'You Commit',
    subtitle:
      'Book a free trial class and discover how structured, interactive, and confidence-building French learning can be. See exactly how we help students prepare for the TEF Canada PR exam step by step.',
    cta: 'Explore Courses',
    image:
      'https://media.onlinefrenchskool.com/assets/freeoffer.svg', // replace with your asset
    imageAlt: 'Learner taking an online French trial class',
  };

  // Wire to your router / modal / analytics
  const onCta = () => {
    // e.g., router.push('/book') or open modal
    // console.log('Book Free Trial Class');
  };

  return { UI, content, onCta };
}
