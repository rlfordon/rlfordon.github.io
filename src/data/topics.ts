/**
 * Controlled vocabulary for chapter topics. Chapters in resource records carry
 * `topics: [id, ...]`; the build rejects any id not listed here, so the
 * vocabulary cannot drift into near-duplicates. Whole-work `topics` on a record
 * are for items with no chapter list, such as an article or a course site.
 *
 * Scope notes are the tagging rules. When two terms could apply, the note says
 * which one wins, or that both belong.
 */
export type Topic = { id: string; label: string; scope?: string };

export const TOPIC_GROUPS: { label: string; topics: Topic[] }[] = [
  {
    label: 'Foundations',
    topics: [
      { id: 'ai-fundamentals', label: 'AI fundamentals', scope: 'What AI is, its history, machine learning and other non-LLM techniques, definitions and taxonomies.' },
      { id: 'how-llms-work', label: 'How LLMs work', scope: 'Transformers, training data, RLHF, tokens, context windows, embeddings, fine-tuning, retrieval-augmented generation as a mechanism.' },
      { id: 'tools-and-platforms', label: 'Tools and platforms', scope: 'Surveys and comparisons of specific products: ChatGPT, Claude, Gemini, legal vendors, custom assistants.' },
      { id: 'prompting', label: 'Prompting', scope: 'Prompt and context engineering, frameworks and techniques, teaching people to prompt.' },
      { id: 'ai-agents', label: 'AI agents', scope: 'Tool-using and autonomous systems, workflow automation, agent design and governance.' },
      { id: 'accuracy-and-verification', label: 'Accuracy and verification', scope: 'Hallucination and confabulation as a phenomenon, and fabricated citations as a legal event: Mata v. Avianca, sanctions, standing orders, cite-checking.' },
      { id: 'evaluating-and-procuring-ai-tools', label: 'Evaluating and procuring AI tools', scope: 'How to tell whether a tool works: benchmarks, empirical studies, vendor claims, pilots, RFPs, vendor contracts and due diligence.' },
    ],
  },
  {
    label: 'Practice',
    topics: [
      { id: 'legal-research', label: 'Legal research', scope: 'AI in research tools and workflows. Excludes litigation analytics.' },
      { id: 'drafting-and-contracts', label: 'Drafting and contracts', scope: 'Using AI to draft, review, and manage documents and contracts. Not contracting for AI, which is evaluating-and-procuring-ai-tools.' },
      { id: 'ediscovery-and-document-review', label: 'E-discovery and document review', scope: 'Technology-assisted review, predictive coding, review workflows, discovery planning.' },
      { id: 'litigation-analytics', label: 'Litigation analytics', scope: 'Predicting outcomes, judge and docket analytics, data-driven litigation strategy.' },
      { id: 'law-firm-business', label: 'Law firm business', scope: 'Pricing, the billable hour, staffing, knowledge management, adoption strategy, training, change management in firms.' },
      { id: 'in-house-and-compliance', label: 'In-house and compliance', scope: 'Corporate legal departments, compliance functions, developer and deployer obligations as an organizational matter.' },
      { id: 'courts-and-judicial-use', label: 'Courts and judicial use', scope: 'Judges using AI, court administration, disclosure and certification rules, AI in the courtroom.' },
      { id: 'access-to-justice', label: 'Access to justice', scope: 'Self-help tools, legal aid, pro bono, unauthorized practice by nonlawyers, regulatory sandboxes.' },
      { id: 'professional-responsibility', label: 'Professional responsibility', scope: 'The Model Rules generally: competence, diligence, supervision, candor, fees, advertising, UPL by lawyers, bar guidance. Confidentiality has its own term.' },
      { id: 'confidentiality-and-client-data', label: 'Confidentiality and client data', scope: 'Rule 1.6, client information in prompts and tools, vendor data terms, training on client data, informed consent, privilege.' },
    ],
  },
  {
    label: 'Legal education',
    topics: [
      { id: 'teaching-with-ai', label: 'Teaching with AI', scope: 'Course and assignment design, assessment, faculty use, evidence on learning with AI, scholarship and tenure policies.' },
      { id: 'academic-integrity-and-student-use', label: 'Academic integrity and student use', scope: 'Permitted-use policies, cheating and detection, guidance to students on how to learn with AI.' },
      { id: 'careers-and-licensure', label: 'Careers and licensure', scope: 'The bar exam, competencies, entry-level work, what students should do to be practice-ready, the future of legal jobs.' },
    ],
  },
  {
    label: 'Law and regulation',
    topics: [
      { id: 'ai-regulation', label: 'AI regulation', scope: 'External law binding on developers and deployers: the EU AI Act, state statutes, executive orders, agency rules, legislative proposals, China.' },
      { id: 'ai-governance-and-risk-management', label: 'AI governance and risk management', scope: 'What an organization builds internally: NIST AI RMF, ISO 42001, policies, inventories, impact assessments, audits, responsible-AI principles.' },
      { id: 'bias-and-discrimination', label: 'Bias and discrimination', scope: 'Algorithmic bias, fairness definitions, disparate impact, antidiscrimination law.' },
      { id: 'privacy-law', label: 'Privacy law', scope: 'Data protection and privacy as bodies of law: GDPR, BIPA, state privacy acts, surveillance, inference from big data. Client confidentiality has its own term.' },
      { id: 'copyright-and-training-data', label: 'Copyright and training data', scope: 'Authorship of AI output, fair use and model training, infringement, publicity rights.' },
      { id: 'patents-and-trade-secrets', label: 'Patents and trade secrets', scope: 'Inventorship, patentability, trade secret protection, trademark.' },
      { id: 'liability-and-torts', label: 'Liability and torts', scope: 'Products liability, negligence, defamation by AI, speech harms, Section 230, malpractice.' },
      { id: 'evidence-and-deepfakes', label: 'Evidence and deepfakes', scope: 'Authentication, synthetic media, expert testimony, evidentiary rules for AI output.' },
      { id: 'criminal-justice-and-policing', label: 'Criminal justice and policing', scope: 'Risk assessment tools, predictive policing, facial recognition, Fourth Amendment limits, AI-enabled crime.' },
      { id: 'government-and-administrative-use', label: 'Government and administrative use', scope: 'Agencies using AI: benefits adjudication, due process, immigration, public procurement, federal AI inventories.' },
      { id: 'consumer-protection-and-competition', label: 'Consumer protection and competition', scope: 'FTC and state UDAP enforcement, algorithmic pricing, antitrust, platform and model marketplaces.' },
      { id: 'employment-and-labor', label: 'Employment and labor', scope: 'Hiring and workplace tools, algorithmic management, worker displacement, unions.' },
      { id: 'national-security', label: 'National security', scope: 'Military and intelligence uses, autonomous weapons, export controls, the law of armed conflict.' },
      { id: 'international-and-comparative', label: 'International and comparative', scope: 'Non-US regimes and international bodies where the chapter is primarily comparative rather than about one body of law.' },
      { id: 'ai-personhood', label: 'AI personhood', scope: 'Legal status and rights of AI systems, citizenship, personhood debates.' },
    ],
  },
  {
    label: 'Horizon',
    topics: [
      { id: 'ai-safety-and-agi', label: 'AI safety and AGI', scope: 'Alignment, existential risk, superintelligence, long-term scenarios.' },
      { id: 'computational-law-and-analytics', label: 'Computational law and analytics', scope: 'Pre-LLM and non-LLM approaches: expert systems, argumentation models, legal informatics, data science on legal data, knowledge graphs.' },
    ],
  },
];

export const TOPICS: Topic[] = TOPIC_GROUPS.flatMap((g) => g.topics);
export const TOPIC_IDS = new Set(TOPICS.map((t) => t.id));
export const TOPIC_LABELS: Record<string, string> = Object.fromEntries(TOPICS.map((t) => [t.id, t.label]));
