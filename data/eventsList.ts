type Speaker = {
  img: string;
  name: string;
  role: string;
};

type event = {
  slug: string;
  date: string;
  location: string;
  title: string;
  description: string;
  img: string;
  time: string;
  organizer: string;
  phone: string;
  address: string;
  speakers: Speaker[];
};

export const events: event[] = [
  {
    slug: "2026 budget preparation",
    date: "January 1, 2025",
    location: "Government House, Owerri, Imo State",
    title: "2026 Budget Preparation",
    description: "The Ministry of Budget & Economic Planning is currently preparing the 2026 budget, which will be presented to the State House of Assembly in the first quarter of 2025.",
    img: "/images/events/budget-signing-2025.webp",
    time: "10:00 am",
    organizer: "Imo State Government / Ministry of Budget & Economic Planning",
    phone: "",
    address: "Government House, Owerri",
    speakers: [
      { name: "Sen. Hope Uzodimma", img: "/images/events/Hope-Uzodinma.png", role: "Governor of Imo State (Signer)" },
      { name: "Anselm Anyanwu-Ezechinyere", img: "/images/commissioner.jpg", role: "Commissioner, Budget & Economic Planning" }
    ],
  },
  {
    slug: "budget-signing-2025-law",
    date: "January 1, 2025",
    location: "Government House, Owerri, Imo State",
    title: "Signing of the ₦807 Billion 2025 Appropriation Bill into Law",
    description: "Governor Hope Uzodimma formally signed the revised 2025 Appropriation Bill—now ₦807.08 billion—into law, pledging full and faithful implementation and reinforcing alignment between the executive and legislature to drive infrastructure, industrialization, and economic transformation.",
    img: "/images/events/budget-signing-2025.webp",
    time: "10:00 am",
    organizer: "Imo State Government / Ministry of Budget & Economic Planning",
    phone: "",
    address: "New Exco Chambers, Government House, Owerri",
    speakers: [
      { name: "Sen. Hope Uzodimma", img: "/images/events/Hope-Uzodinma.png", role: "Governor of Imo State (Signer)" },
      { name: "Rt. Hon. Chike Olemgbe", img: "/images/events/chike.png", role: "Speaker, Imo State House of Assembly" }
    ],
  },
  {
    slug: "budget-presentation-2025",
    date: "December 23, 2024",
    location: "Imo State House of Assembly, Owerri, Imo State",
    title: "Presentation of the 2025 ‘Budget of Expanded Economic Opportunities’",
    description: "Governor Hope Uzodimma presented the 2025 budget estimate of ₦756 billion to the State House of Assembly, outlining plans to promote economic development, including rural road expansion, 24/7 electricity (ISED), dredging water bodies, education reforms, agriculture, and digital economy initiatives.",
    img: "/images/events/Governor-Hope-Uzodimma-presenting-Imos-2025-budget-to-the-state-Assembly.jpg",
    time: "10:00 am",
    organizer: "Imo State Government / Ministry of Budget & Economic Planning",
    phone: "",
    address: "Imo State House of Assembly, Owerri",
    speakers: [
      { name: "Sen. Hope Uzodimma", img: "/images/events/Hope-Uzodinma.png", role: "Governor of Imo State (Budget Presenter)" },
      { name: "Anselm Anyanwu-Ezechinyere", img: "/images/commissioner.jpg", role: "Commissioner, Budget & Economic Planning" }
    ],
  }
];


export default events;