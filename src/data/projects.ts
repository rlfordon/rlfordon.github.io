/**
 * Curated project list for /projects. Hand-maintained on purpose: the GitHub
 * profile has ~35 public repos and a portfolio should not show all of them.
 * The home page shows the first three items of each group, so order matters.
 */
export type Project = {
  name: string;
  blurb: string;
  live?: string;
  repo?: string;
};

export type KindColor = 'yellow' | 'orange' | 'red';

export const groups: { title: string; color: KindColor; intro: string; items: Project[] }[] = [
  {
    title: 'Teaching tools',
    color: 'yellow',
    intro:
      'Small, single-purpose web apps built for my legal research and legal technology courses. Most were vibe-coded in an afternoon; several are described in the writing.',
    items: [
      {
        name: 'Citation Hallucination Game',
        blurb:
          'Classroom exercise where students read a brief and decide, citation by citation, which cases are real and which were fabricated by an AI.',
        live: 'https://hallucination-game.replit.app/',
        repo: 'https://github.com/rlfordon/hallucination-game',
      },
      {
        name: 'Prompt Coach',
        blurb:
          'Split-panel workspace: students chat with Claude on the left and get feedback on the prompt itself on the right, including a hallucination-risk review.',
        live: 'https://prompt-coach-21cl.replit.app/',
        repo: 'https://github.com/rlfordon/prompt-coach',
      },
      {
        name: 'Boolean Builder',
        blurb:
          'Walks a researcher through building a terms-and-connectors search step by step. The "Effortless Boolean" tool from the blog.',
        live: 'https://booleanbuilder.replit.app/',
        repo: 'https://github.com/rlfordon/BooleanBuilder',
      },
      {
        name: 'Token Explorer',
        blurb:
          'Token-by-token probability visualizer that makes model uncertainty visible. Low-confidence case names and docket numbers light up in orange and pink.',
        live: 'https://token-explorer-rlfordon.replit.app/',
        repo: 'https://github.com/rlfordon/TokenExplorer',
      },
      {
        name: 'Document Technology Gallery',
        blurb:
          'Seven short interactive demos of the document tools lawyers actually use: automation, clause libraries, AI-assisted editing, comparison, and more.',
        live: 'https://doc-tech-gallery.onrender.com/',
        repo: 'https://github.com/rlfordon/doc-tech-gallery',
      },
      {
        name: 'Spreadsheet Sandbox',
        blurb:
          'Interactive lessons on Excel text functions for law students who will spend more time in spreadsheets than they expect.',
        repo: 'https://github.com/rlfordon/spreadsheet-sandbox',
      },
      {
        name: 'Career Landscape',
        blurb:
          'Explorer for how AI is changing different legal career paths, for students deciding where to point themselves.',
        repo: 'https://github.com/rlfordon/career-landscape',
      },
      {
        name: 'DHS AI Explorer',
        blurb:
          'Interactive explorer for the Department of Homeland Security AI use-case inventory, with watchdog annotations and bias-taxonomy flags.',
        live: 'https://rlfordon.github.io/dhs-ai-explorer/',
        repo: 'https://github.com/rlfordon/dhs-ai-explorer',
      },
    ],
  },
  {
    title: 'Research tooling and side projects',
    color: 'orange',
    intro:
      'Open tools for legal research built on public data, mostly the Free Law Project’s CourtListener, plus things built for the fun of it, some of them with my kids.',
    items: [
      {
        name: 'The Missing Link',
        blurb:
          'Browser extension that finds the case an article mentioned but did not link, using Claude to identify it and CourtListener to fetch it.',
        repo: 'https://github.com/rlfordon/the-missing-link',
      },
      {
        name: 'Docket Q&A',
        blurb: 'Ask questions of bankruptcy case documents pulled from the RECAP Archive.',
        repo: 'https://github.com/rlfordon/docket-qna',
      },
      {
        name: 'Bankruptcy Canvas',
        blurb:
          'Spatial research canvas for Title 11. A former bankruptcy lawyer’s way of seeing the Code as a map rather than a list.',
        live: 'https://rlfordon.github.io/bankruptcy-canvas/',
        repo: 'https://github.com/rlfordon/bankruptcy-canvas',
      },
      {
        name: 'Caselaw Brief',
        blurb:
          'Skill trainer for briefing real cases with scaffolding, Socratic cold-calls, and AI feedback that never writes the brief for you.',
        live: 'https://caselaw-brief.onrender.com/',
      },
      {
        name: 'Biblioviewer',
        blurb:
          'Turns an annotated bibliography into one self-contained HTML file with a sidebar, reading pane, and cached article snapshots.',
        repo: 'https://github.com/rlfordon/biblioviewer',
      },
      {
        name: 'Teaching Explainer',
        blurb:
          'Claude skill that generates accessible, interactive HTML explainers for law school courses, with the pedagogy research behind it.',
        live: 'https://rlfordon.github.io/teaching-explainer/',
        repo: 'https://github.com/rlfordon/teaching-explainer',
      },
      {
        name: 'Bug Lab',
        blurb:
          'Creature-mixing ecosystem game: splice bug genes and release hybrids into a procedurally generated world.',
        live: 'https://rlfordon.github.io/bug-lab/',
        repo: 'https://github.com/rlfordon/bug-lab',
      },
      {
        name: 'Potato Simulator',
        blurb: 'A brave potato battles evil kitchen utensils across eight levels. Single HTML file, HTML5 canvas.',
        live: 'https://rlfordon.github.io/potato-simulator/',
        repo: 'https://github.com/rlfordon/potato-simulator',
      },
      {
        name: 'Draw-o-matic',
        blurb: 'Arcade-style drawing prompt generator with zero-repeat memory and a creepy-cute streak.',
        live: 'https://rlfordon.github.io/draw-o-matic/',
        repo: 'https://github.com/rlfordon/draw-o-matic',
      },
      {
        name: 'Bookshop Bingo',
        blurb: 'A bingo card for a field trip to the bookshop.',
        live: 'https://rlfordon.github.io/bookshop-bingo/',
        repo: 'https://github.com/rlfordon/bookshop-bingo',
      },
    ],
  },
];
