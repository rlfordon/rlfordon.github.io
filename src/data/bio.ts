/**
 * Bios for /bio, for conference organizers. Hand-maintained.
 * Each length comes in a plain version and one with a little more personality.
 * Write `{name}` wherever the bio refers to me again after the opening; the page swaps in
 * "Professor Fordon", "Fordon", or "Rebecca" to match the house style of an event.
 * Each string is one paragraph.
 */
export type BioLength = {
  id: string;
  label: string;
  /** What the length is usually for. */
  use: string;
  standard: string[];
  lively: string[];
};

export const NAME_STYLES = ['Professor Fordon', 'Fordon', 'Rebecca'] as const;

export const bios: BioLength[] = [
  {
    id: 'line',
    label: 'One line',
    use: 'Name tags, panel listings, social posts',
    standard: [
      'Rebecca Fordon is an Assistant Professor of Practice at the Ohio State University Moritz Law Library, where she teaches legal research, writing, and technology and writes about AI and the law.',
    ],
    lively: [
      'Rebecca Fordon is a bankruptcy partner turned law librarian at the Ohio State University Moritz Law Library, where she teaches legal research and technology and builds small AI tools for her classes.',
    ],
  },
  {
    id: 'short',
    label: 'Short',
    use: 'Printed programs, ~50 words',
    standard: [
      'Rebecca Fordon is an Assistant Professor of Practice and the Assistant Director of Innovation, Research & Instruction at the Ohio State University Moritz Law Library, where she teaches legal research, writing, and technology. A former corporate bankruptcy partner, she speaks frequently on AI and the law and co-founded the blog AI Law Librarians.',
    ],
    lively: [
      'Rebecca Fordon spent a decade as a corporate bankruptcy lawyer before trading her partnership for a law library. Now an Assistant Professor of Practice at the Ohio State University Moritz Law Library, she teaches legal research, writing, and technology, co-founded the blog AI Law Librarians, and builds small AI teaching tools on evenings and weekends.',
    ],
  },
  {
    id: 'medium',
    label: 'Medium',
    use: 'Session pages, introductions, ~100 words',
    standard: [
      'Rebecca Fordon is an Assistant Professor of Practice and the Assistant Director of Innovation, Research & Instruction at the Ohio State University Moritz Law Library. Before becoming a law librarian, she practiced corporate bankruptcy law for a decade at a Boston law firm, eventually becoming a partner there. At Moritz, {name} teaches legal writing, legal research, and legal technology, regularly integrating AI tools into her courses. She speaks frequently on AI and the law, co-founded the blog AI Law Librarians, and serves on the board of the Free Law Project. In 2026, she received the AALL Emerging Leader Award.',
    ],
    lively: [
      'Rebecca Fordon is an Assistant Professor of Practice and the Assistant Director of Innovation, Research & Instruction at the Ohio State University Moritz Law Library. Before she was a librarian, she spent ten years as a corporate bankruptcy lawyer in Boston, making partner along the way. At Moritz, {name} teaches legal writing, research, and technology, and AI tools turn up throughout her courses, sometimes ones she built herself over a weekend. She co-founded the blog AI Law Librarians, serves on the board of the Free Law Project, and received the 2026 AALL Emerging Leader Award.',
    ],
  },
  {
    id: 'full',
    label: 'Full',
    use: 'Websites and longer profiles, ~180 words',
    standard: [
      'Rebecca Fordon is an Assistant Professor of Practice and the Assistant Director of Innovation, Research & Instruction at the Ohio State University Moritz Law Library.',
      'She earned her BA from Ohio Wesleyan University, her JD from Boston University School of Law, and her MLIS from UCLA. Before entering law librarianship, she practiced corporate bankruptcy law for a decade at a Boston law firm, eventually becoming a partner there.',
      'At Moritz, {name} teaches legal writing, legal research, and legal technology, regularly integrating AI tools into her courses. She frequently speaks on the intersection of AI and the law and is co-founder of the blog AI Law Librarians. She also serves on the board of the Free Law Project, a nonprofit dedicated to improving public access to legal information and supporting research on the legal system. In 2024, she was named a member of the vLex Fastcase 50 and, in 2026, received the Emerging Leader Award from the American Association of Law Libraries (AALL).',
    ],
    lively: [
      'Rebecca Fordon is an Assistant Professor of Practice and the Assistant Director of Innovation, Research & Instruction at the Ohio State University Moritz Law Library.',
      'She earned her BA from Ohio Wesleyan University, her JD from Boston University School of Law, and her MLIS from UCLA. Before entering law librarianship, she spent a decade untangling corporate bankruptcies at a Boston law firm, eventually becoming a partner there.',
      'At Moritz, {name} teaches legal writing, legal research, and legal technology, regularly integrating AI tools into her courses. She frequently speaks on the intersection of AI and the law and is co-founder of the blog AI Law Librarians. She also serves on the board of the Free Law Project, a nonprofit dedicated to improving public access to legal information and supporting research on the legal system. In 2024, she was named a member of the vLex Fastcase 50 and, in 2026, received the Emerging Leader Award from the American Association of Law Libraries (AALL).',
      'In her spare time she builds small, single-purpose legal research tools, including a Boolean search minigame, and the occasional game just for fun.',
    ],
  },
];
