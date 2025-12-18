import { featureData } from "@/types/feature";
import { footerlLinksData, socialLinksData } from "@/types/footer";
import { headerItem } from "@/types/menu";

export const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Seamless Integration',
    paragraph:
      'Connect with 100+ schools instantly. Direct integration with institutional systems. Enable payments in minutes, not months.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Real-Time Settlement',
    paragraph:
      'Instant payment reconciliation for institutions. Automated fee tracking and reporting. Complete transparency for all stakeholders.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Multi-Channel Support',
    paragraph:
      'Accept payments via UPI, cards, net banking, and wallets. One unified gateway for all payment methods. Maximum convenience for students.',
  },
]

export const FooterLinks: footerlLinksData[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Testimonial', href: '/#people' },
  { label: 'Features', href: '/#features ' },
  { label: 'Contact Us', href: '/#contact ' },
]

// export const SocialLinks: socialLinksData[] = [
//   {
//     imgSrc: 'fa-brands:facebook-f',
//     link: 'www.facebook.com',
//     width: 10,
//   },
//   {
//     imgSrc: 'fa6-brands:instagram',
//     link: 'www.instagram.com',
//     width: 14,
//   },
//   {
//     imgSrc: 'fa6-brands:twitter',
//     link: 'www.twitter.com',
//     width: 14,
//   },
// ]

export const HeaderData: headerItem[] = [
  { label: 'Home', href: '/#home' },
  { label: 'Testimonial', href: '/#people' },
  { label: 'Features', href: '/#features ' },
  { label: 'Contact Us', href: '/#contact ' },
]
