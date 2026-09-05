/**
 * Query expansion for the Resources search. When a query contains any term in a
 * group, the other terms in that group are searched too, so "cheating" finds
 * academic integrity and "hallucination" finds fabricated citations. Matched
 * words are still highlighted where they actually occur, so the reader can see
 * why a result appeared. Multi-word entries are matched as phrases in the query
 * and searched as their individual words.
 *
 * Keep entries lowercase. Add a group when a search you expect to work misses.
 */
export const SYNONYMS: string[][] = [
  ['hallucination', 'hallucinations', 'fabricated citations', 'fake cases', 'sanctions', 'mata'],
  ['ethics', 'ethical', 'professional responsibility', 'professional conduct', 'model rules', 'formal opinion 512'],
  ['academic integrity', 'cheating', 'plagiarism', 'honor code'],
  ['governance', 'compliance', 'risk management', 'policies', 'vendor'],
  ['regulation', 'regulatory', 'legislation', 'statutes', 'eu ai act', 'executive orders'],
  ['prompting', 'prompt engineering', 'prompts', 'context engineering'],
  ['llm', 'llms', 'large language models', 'generative ai', 'genai', 'chatgpt'],
  ['agents', 'agentic', 'mcp'],
  ['rag', 'retrieval-augmented generation', 'retrieval'],
  ['bias', 'discrimination', 'disparate impact', 'fairness', 'algorithmic discrimination'],
  ['privacy', 'data protection', 'surveillance', 'cybersecurity'],
  ['copyright', 'fair use', 'intellectual property', 'training data', 'trade secrets', 'patent'],
  ['deepfakes', 'synthetic media', 'evidence', 'authentication'],
  ['liability', 'torts', 'negligence', 'product liability', 'defamation'],
  ['legal research', 'research', 'westlaw', 'lexis', 'citations'],
  ['drafting', 'document automation', 'contracts', 'writing'],
  ['open access', 'oer', 'open textbook', 'creative commons', 'free'],
  ['msl', 'mls', 'non-jd', 'masters', 'compliance students'],
  ['study aid', 'nutshell', 'short and happy'],
  ['casebook', 'coursebook', 'textbook'],
  ['legal education', 'law school', 'teaching', 'pedagogy', 'assignments', 'syllabus'],
  ['law firm', 'legal practice', 'practice of law', 'legal services', 'delivery of legal services'],
  ['machine learning', 'predictive analytics', 'legal analytics', 'data-driven'],
];
