---
title: "The Truth About Hallucinations in Legal Research AI: How to Avoid Them and Trust Your Sources"
description: "What hallucinations are, why language models produce them, how vendors are trying to contain them, and which legal tasks carry less risk."
pubDate: "2023-09-14"
originalUrl: "https://www.ailawlibrarians.com/2023/09/14/the-truth-about-hallucinations-in-legal-research-ai-how-to-avoid-them-and-trust-your-sources/"
originalSite: "AI Law Librarians"
categories: ["AI Critiques"]
tags: ["AI", "Hallucinations", "RAG", "legal research"]
---

Hallucinations in generative AI are not a new topic. If you watch the news at all (or read the [front page of the New York Times](https://www.nytimes.com/2023/05/27/nyregion/avianca-airline-lawsuit-chatgpt.html)), you’ve heard of the two New York attorneys who used ChatGPT to create fake cases entire cases and then submitted them to the court.

After that case, which resulted in a media frenzy and ([somewhat mild) court sanctions](https://www.courtlistener.com/docket/63107798/54/mata-v-avianca-inc/ "somewhat mild court sanctions"), many attorneys are wary of using generative AI for legal research. But vendors are working to limit hallucinations and increase trust. And some legal tasks are less affected by hallucinations. Understanding how and why hallucinations occur can help us evaluate new products and identify lower-risk uses.

* A brief aside on the term “hallucinations”.  Some commentators have [cautioned against this term](https://arstechnica.com/information-technology/2023/04/why-ai-chatbots-are-the-ultimate-bs-machines-and-how-people-hope-to-fix-them/), arguing that it [lets corporations shift the blame to the AI](https://www.bloomberg.com/news/newsletters/2023-04-03/chatgpt-bing-and-bard-don-t-hallucinate-they-fabricate) for the choices they’ve made about their models. They argue that AI isn’t hallucinating, it’s [making things up](https://www.bloomberg.com/news/newsletters/2023-04-03/chatgpt-bing-and-bard-don-t-hallucinate-they-fabricate), or producing errors or mistakes, or even just [bullshitting](https://undark.org/2023/04/06/chatgpt-isnt-hallucinating-its-bullshitting/). I’ll use the word hallucinations here, as the term is common in computer science, but I recognize it does minimize the issue.

With that all in mind, let’s dive in.

## **What are hallucinations and why do they happen?**

Hallucinations are outputs from LLMs and generative AI that look coherent but are wrong or absurd. They may come from errors or gaps in the training data (that “garbage in, garbage out” saw). For example, a model may be trained on internet sources like Quora posts or Reddit, which may have inaccuracies. (Check out [this Washington Post article](https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/) to see how both of those sources were used to develop Google’s C4, which was used to train many models including GPT-3.5).

But just as importantly, hallucinations may arise from the nature of the task we are giving to the model. The objective during text generation is to produce human-like, coherent and contextually relevant responses, but the model does not check responses for truth. And simply asking the model if its responses are accurate is not sufficient.

In the legal research context, we see a few different types of hallucinations:

- **Citation hallucinations.** Generative AI citations to authority typically look extremely convincing, following the citation conventions fairly well, and sometimes even including papers from known authors. This presents a challenge for legal readers, as they might evaluate the usefulness of a citation based on its appearance—assuming that a correctly formatted citation from a journal or court they recognize is likely to be valid.
- **Hallucinations about the facts of cases.** Even when a citation is correct, the model might not correctly describe the facts of the case or its legal principles. Sometimes, it may present a plausible but incorrect summary or mix up details from different cases. This type of hallucination poses a risk to legal professionals who rely on accurate case summaries for their research and arguments.
- **Hallucinations about legal doctrine.** In some instances, the model may generate inaccurate or outdated legal doctrines or principles, which can mislead users who rely on the AI-generated content for legal research.

In my own experience, I’ve found that hallucinations are most likely to occur when the model does not have much in its training data that is useful to answer the question. Rather than telling me the training data cannot help answer the question (similar to a “0 results” message in Westlaw or Lexis), the generative AI chatbots seem to just do their best to produce a plausible-looking answer.

This does seem to be what happened to the attorneys in Mata v. Avianca. They did not ask the model to answer a legal question, but instead asked it to craft an argument for their side of the issue. Rather than saying that argument would be unsupported, the model dutifully crafted an argument, and used fictional law since no real law existed.

## How are vendors and law firms addressing hallucinations?

Several vendors have released specialized legal research products based on generative AI, such as [LawDroid’s CoPilot](https://lawdroid.com/copilot/), [Casetext’s CoCounsel](https://casetext.com/cocounsel/) (since [acquired by Thomson Reuters](https://www.thomsonreuters.com/en/press-releases/2023/august/thomson-reuters-completes-acquisition-of-casetext-inc.html)), and the mysterious (at least to academic librarians like me who do not have access) [Harvey](https://www.harvey.ai/). Additionally, an [increasing number of law firms](https://www.law.com/2023/09/07/forget-chatgpt-law-firms-are-launching-their-own-gen-ai-chatbots/), including Dentons, Troutman Pepper Hamilton Sanders, Davis Wright Tremaine, and [Gunderson Dettmer Stough Villeneuve Franklin & Hachigian](https://www.law.com/legaltechnews/2023/08/09/gunderson-launches-homegrown-generative-ai-app-to-accelerate-subject-matter-expertise-397-75948/)) have developed their own chatbots that allow their internal users to query the knowledge of the firm to answer questions.

Although vendors and firms are often close-lipped about how they have built their products, we can observe a few techniques that they are likely using to limit hallucinations and increase accuracy.

First, most vendors and firms appear to be using some form of **retrieval-augmented generation** (RAG). RAG combines two processes: information retrieval and text generation. The model takes the user’s question and passes it (perhaps with some modification) to a database. The database results are fed to the model, and the model identifies relevant passages or snippets from the results, and again sends them back into the model as “context” along with the user’s question.

This reduces hallucinations, because the model receives instructions to limit its responses to the source documents it has received from the database. Several vendors and firms have said they are using retrieval-augmented generation to ground their models in real legal sources, including [Gunderson](https://www.law.com/legaltechnews/2023/08/09/gunderson-launches-homegrown-generative-ai-app-to-accelerate-subject-matter-expertise-397-75948/), [Westlaw](https://www.legalcurrent.com/generative-ai-in-action-product-demos-for-thomson-reuters-suite-of-legal-solutions/), and [Casetext](https://casetext.com/blog/prompt-engineering-best-ai-output/).

To enhance the precision of the retrieved documents, some products may also use **vector embedding**. Vector embedding is a way of representing words, phrases, or even entire documents as numerical vectors. The beauty of this method lies in its ability to identify semantic similarities. So, a query about “contract termination due to breach” might yield results related to “agreement dissolution because of violations”, thanks to the semantic nuances captured in the embeddings. Using vector embedding along with RAG can provide relevant results, while reducing hallucinations.

Another approach vendors can take is to develop **specialized models** trained on narrower, domain-specific datasets. This can help improve the accuracy and relevance of the AI-generated content, as the models would be better equipped to handle specific legal queries and issues. Focusing on narrower domains can also enable models to develop a deeper understanding of the relevant legal concepts and terminology. [This does not appear to be what law firms](https://legaltechtrends.substack.com/p/legal-tech-trends-newsletter-14) or vendors are doing at this point, based on the way they are talking about their products, but [there are law-specific data pools becoming available](https://www.linkedin.com/feed/update/urn:li:activity:7103461617832525824/) so we may see this soon.

Finally, vendors may fine-tune their models by providing human feedback on responses, either in-house or through user feedback. By providing users with the ability to flag and report hallucinations, vendors can collect valuable information to refine and retrain their models. This constant feedback mechanism can help the AI learn from its mistakes and improve over time, ultimately reducing the occurrence of hallucinations.

## **So, hallucinations are fixed?**

Even though vendors and firms are addressing hallucinations with technical solutions, it does not necessarily mean that the problem is solved. Rather, it may be that our our quality control methods will shift.

For example, instead of wasting time checking each citation to see if it exists, we can be fairly sure that the cases produced by legal research generative AI tools do exist, since they are found in the vendor’s existing database of case law. We can also be fairly sure that the language they quote from the case is accurate. What may be less certain is whether the quoted portions are the best portions of the case and whether the summary reflects all relevant information from the case. This will require some assessment of the various vendor tools.

We will also need to pay close attention to the databases results that are fed into retrieval augmented generation. If those results don’t reflect the full universe of relevant cases, or contain material that is not authoritative, then the answer generated from those results will be incomplete. Think of running an initial Westlaw search, getting 20 pretty good results, and then basing your answer only on those 20 results. For some questions (and searches), that would be sufficient, but for more complicated issues, you may need to run multiple searches, with different strategies, to get what you want.

To be fair, the products do appear to be running multiple searches. When I attended the rash of AI presentations at AALL over the summer, I asked Jeff Pfeiffer of Lexis how he could be sure that the model had all relevant results, and he mentioned that the model sends many, many searches to the database not just one. Which does give some comfort, but leads me to the next point of quality control.

We will want to have some insight into the searches that are being run, so that we can verify that they are asking the right questions. From the demos I’ve seen of CoCounsel and Lexis+ AI, this is not currently a feature. But it could be. For example, the AI assistant from scite (an academic research tool) sends searches to academic research databases and (seemingly using RAG and other techniques to analyze the search results) produces an answer. They also give a mini-research trail, showing the searches that are being run against the database and then allowing you to adjust if that’s not what you wanted.

![](/images/blog/the-truth-about-hallucinations-in-legal-research-ai-how-to-avoid-them-and-trust-your-sources/image004-1024x293.jpg)

*scite AI Assistant Sample Results*

![](/images/blog/the-truth-about-hallucinations-in-legal-research-ai-how-to-avoid-them-and-trust-your-sources/image005-1024x909.jpg)

*sCcite AI Assistant Settings*

## **Are there uses for generative AI where the risks presented by hallucinations are lessened?**

The other good news is that there are plenty of tasks we can give generative AI for which hallucinations are less of an issue. For example, CoCounsel has several other “skills” that do not depend upon accuracy of legal research, but are instead ways of working with and transforming documents that you provide to the tool.

Similarly, even working with a generally applicable tool such as ChatGPT, there are many applications that do not require precise legal accuracy. There are two rules of thumb I like to keep in mind when thinking about tasks to give to ChatGPT: (1) could this information be found via Google? and (2) is a somewhat average answer ok? (As [one commentator memorably put it](https://www.washingtonpost.com/technology/2023/06/02/ai-taking-jobs/) “Because [LLMs] work by predicting the most statistically likely word in a sentence, they churn out average content by design.”)

For most legal research questions, we could not find an answer using Google, which is why we turn to Westlaw or Lexis. But if we just need someone to explain the elements of breach of contract to us, or come up with hypotheticals to test our knowledge, it’s quite likely that content like that has appeared on the internet, and ChatGPT can generate something helpful.

Similarly, for many legal research questions, an average answer would not work, and we may need to be more in-depth in our answers. But for other tasks, an average answer is just fine. For example, if you need help coming up with an outline or an initial draft for a paper, there are likely hundreds of samples in the data set, and there is no need to reinvent the wheel, so ChatGPT or a similar product would work well.

## What’s next?

In the coming months, as legal research generative AI products become increasingly available, librarians will need to adapt to develop methods for assessing accuracy. Currently, there appear to be no benchmarks to compare hallucinations across platforms. Knowing librarians, that won’t be the case for long, at least with respect to legal research.

**Further reading**

If you want to learn more about how retrieval augmented generation and vector embedding work within the context of generative AI, check out some of these sources:

- Ken Crutchfield, [How Generative AI Works (Part IV)](https://abovethelaw.com/2023/08/how-generative-ai-works-part), Above the Law (Aug. 31, 2023).
- Sean Harrington, [The Case for Large Language Model Optimism in Legal Research](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4492121), SSRN (June 26, 2023).
- [How Do Domain-Specific Chatbots Work? An Overview of Retrieval Augmented Generation (RAG)](https://scriv.ai/guides/retrieval-augmented-generation-overview/), Scriv.AI (Aug. 25, 2023).
