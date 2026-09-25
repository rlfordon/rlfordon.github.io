/**
 * Media appearances for /media: podcasts I was a guest on and articles that quote me.
 * Hand-maintained, newest first. Talks and conference sessions are not listed here.
 */
export type MediaItem = {
  /** YYYY-MM-DD. */
  date: string;
  kind: 'Podcast' | 'Quoted';
  /** Show or publication. */
  outlet: string;
  /** Host for a podcast, author for an article. */
  by?: string;
  title: string;
  url: string;
  /** One line on what it covers. */
  note?: string;
  /** Other versions, e.g. a print edition. */
  links?: { label: string; url: string }[];
};

export const media: MediaItem[] = [
  {
    date: '2026-09-23',
    kind: 'Podcast',
    outlet: '501(ai)',
    by: 'Tara Herman',
    title: 'Class Is in Session: A Conversation with Rebecca Fordon',
    url: 'https://taraherman1.substack.com/p/class-is-in-session-a-conversation',
    note: 'Teaching law students about AI, building with agents, and a demo of a case-briefing tool for 1Ls. Video and audio.',
  },
  {
    date: '2026-05-21',
    kind: 'Podcast',
    outlet: 'Teaching in Higher Ed, episode 623',
    by: 'Bonni Stachowiak',
    title: 'Can’t Stop, Won’t Stop: Teaching with AI Tools',
    url: 'https://teachinginhighered.com/podcast/cant-stop-wont-stop-teaching-with-ai-tools-with-rebecca-fordon/',
    note: 'Vibe coding, and the eight teaching tools I built in one semester.',
  },
  {
    date: '2026-04-02',
    kind: 'Quoted',
    outlet: 'Court News Ohio',
    by: 'Kathleen Maloney',
    title: 'Ohio Legal Community Explores Benefits and Risks of AI',
    url: 'https://courtnewsohio.gov/happening/2026/AIBenefitsRisks_040226.asp',
    note: 'On why law students still need to build their own judgment before relying on AI.',
  },
  {
    date: '2026-01-12',
    kind: 'Quoted',
    outlet: 'ABA Journal',
    by: 'Amanda Robert',
    title: 'Law Librarians Are ‘at the Forefront’ of Using and Educating on Artificial Intelligence',
    url: 'https://www.abajournal.com/web/article/law-librarians-at-the-forefront-of-using-and-educating-on-ai',
    note: 'How law librarians are testing AI tools and teaching others to use them.',
    links: [
      {
        label: 'Print edition, Apr. 2026',
        url: 'https://www.abajournal.com/magazine/article/law-librarians-embrace-ai-and-vow-not-to-be-replaced-by-it',
      },
    ],
  },
  {
    date: '2025-10-11',
    kind: 'Podcast',
    outlet: 'Women Talkin’ ’Bout AI, episode 11',
    by: 'Kimberly Becker and Jessica Parker',
    title: 'Hallucinations in the Courtroom: Why We Can’t Trust AI with the Law',
    url: 'https://womentalkinboutai.buzzsprout.com/2411501/episodes/17993872',
    note: 'Why the legal system is especially exposed to AI hype, and what hallucinations mean in court.',
  },
];
