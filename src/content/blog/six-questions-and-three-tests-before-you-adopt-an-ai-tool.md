---
title: "Six Questions and Three Tests Before You Adopt an AI Tool"
description: "Six questions and three low-cost tests for deciding whether to adopt an AI tool, use by use, with a worksheet, vendor data-diligence questions, and a sample audition set."
pubDate: "2026-09-21"
originalUrl: "https://www.ailawlibrarians.com/2026/09/21/six-questions-and-three-tests-before-you-adopt-an-ai-tool/"
originalSite: "AI Law Librarians"
categories: []
tags: []
---

You have just started at a technology-forward organization, and your first big assignment is to evaluate an AI contract-analysis platform. An executive saw it at a conference and decided the organization had to have it. The platform reads contracts, extracts terms, flags unusual clauses, and answers questions in plain English. You check all the boxes carefully: arrange for three demos, a security review, and a hard price negotiation. It is impressive. Your employer signs.

Eighteen months later, the usage logs land on your desk. People use the platform for one thing: finding contracts. They search for a party name or keyword, open the document, and read it themselves—exactly what the document-management system the organization already owned could do, at no extra cost.

The thing is though: the tool *did* actually work, you saw it in the demo, and you tested it yourself. It did what the vendor promised. It’s just that no one had connected what it did to existing workflows of the company or the problems the company actually had. They didn’t ask whether an existing tool could already solve the problem, or decide what success would look like.

That story is a composite. But if you have worked near a technology rollout, you probably recognized it quickly.

**At a glance: the six questions**

1. What’s the problem?
2. What are you doing now—and what else could solve it?
3. What happens if it’s wrong?
4. Does it fit?
5. What will it really cost—including rollout?
6. Set the decision rule—and show your work

**Then three tests**

1. Known-answer audition (an afternoon)
2. Error analysis (a week)
3. Pilot, run against the rule (30 to 60 days)

When AI goes wrong, we tend to think of the dramatic examples, like lawyers who cite nonexistent cases, or a chatbot that invents a refund policy. Those failures are important, and [I have written about them elsewhere](/blog/what-the-science-says-about-hallucinations-in-legal-research/). Many expensive AI failures, though, are much less cinematic. A [2025 preliminary report from MIT’s NANDA project](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/) estimated that 95% of the organizations it studied saw no measurable P&L impact from integrated GenAI pilots. Even more surprising, the divide appeared to be about approach and integration, not simply model quality. [The report itself](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf) calls its figures “directionally accurate,” based on interviews rather than official company reporting, so read the number as a pattern, not a measurement.

This essay is about evaluation: the steps that come between “the demo was impressive” and “we adopted the right thing.” Its central idea is simple:

> **You never evaluate a tool. You evaluate a use.**

A tool has no value in the abstract. You are assessing a task, performed through a particular system, inside a particular workflow, with a particular way to check the result. The same tool can be a sound choice for one use and a reckless choice for another, even in the same office in the same week. A good evaluation therefore rarely ends with a simple yes or no. More often, it ends with: yes, for these uses, under these conditions.

Another thing to flag upfront is that someone must own the case for adoption, and the organization must own the conditions of use, including any conditions required for ethical use. For example, if you are an attorney, many states have rules that say competent use of technology (including generative AI) requires a reasonable understanding of the tool’s benefits and risks, protection of client information, and appropriate independent verification or review of output. Many other fields have an equivalent version of that obligation.

I teach this kind of evaluation, and these six questions started life as a slide deck. They are not original to me so much as assembled: you will recognize pieces from process improvement, from a long line of information-systems research on why technology investments fail to pay off, from safety engineering, and from the newer literature on AI. I put them together because I kept working through evaluation checklists that were each perfectly good and each missing something different.

The six questions below take you from “What problem are we solving?” to a written decision rule. Three tests turn that rule into a decision. A final section explains why the work never really ends. To make the process concrete, I will follow DocuAnswer, a fictional composite of a familiar product category: it allows users to upload contracts and policies, ask questions in plain English, and receive answers with citations to the source documents. Each section ends with a short prompt to encourage you to apply the section to your own use.

<aside class="your-turn">

**Your turn.** Name one AI tool in use, or under consideration, in your workplace. In one sentence, say what problem it is meant to solve and for whom. If that sentence is hard to write, that is finding number one.

</aside>

## The Six Questions

The six questions come in a particular order. What is the problem? What do we do now? What happens if the tool is wrong? Does it fit? What will it really cost? What evidence would justify going ahead? Each answer narrows the next question. By the end, you can place the surviving options on a simple benefit-versus-effort grid.

### Question 1: What’s the problem?

One of the most common procurement mistakes is buying a tool in search of a problem. It usually happens when the evaluation starts with a demo rather than a problem.

Here is a sentence, borrowed from process improvement and product management, that can help you put the problem concretely: *The problem of X affects Y; the impact is Z; a successful solution would do W.* Write it before you talk to a vendor, and certainly before a feature list begins to reshape the way you describe the problem. The sentence also forces you to identify the people involved. The person who feels the pain, the person who pays, and the person who must change the way they work may be three different people.

To go to our DocuAnswer example, the team begins with this statement: “We need AI for our contracts.” But this reads more like a solution or a feature than a proper problem statement. After further discussion with the team, we can get to a fuller statement: *The problem of finding out what our vendor contracts permit affects the contracts team and everyone waiting for its answers; the impact is hours of manual reading per question, inconsistent answers, and slow responses to the business; a successful solution would answer routine contract questions quickly, consistently, and in a way someone can verify.* It takes only a short conversation to draw that out, and it will take you much farther than a feature list.

<aside class="your-turn">

**Your turn.** Complete the sentence for your tool: the problem of ___ affects ___; the impact is ___; a successful solution would ___. If you can describe only the tool’s features, you do not yet have a problem statement. You have a brochure.

</aside>

### Question 2: What are you doing now—and what else could solve it?

This question requires you to take a look at the status quo.

First, establish the baseline. How is the work handled today? How often does it arise? Who does it? How long does it take? What does failure cost? Without a baseline, “the tool helps” is a feeling, not a finding. You cannot measure improvement against a status quo you never measured. Sometimes the baseline supplies the answer by itself: perhaps the problem occurs only four times a year, and no new tool is warranted.

Second, scan across the entire field of possible solutions, not only the AI corner. Call this the **Boring-Technology Check**, with a nod to Dan McKinley’s “[Choose Boring Technology](https://mcfunley.com/choose-boring-technology).” Before evaluating an AI tool, ask what else might solve the stated problem: a template, a checklist, document assembly, a rules-based workflow, a saved search, or a neglected feature in software you already pay for. Many problems marketed as AI problems can be handled just as well by ordinary technology, for less money and with fewer new risks. The same is true when the temptation is to build a custom tool.

**Label it mechanically.** As you scan, label each candidate, including the AI tool you are being asked to buy, in one plain sentence: what goes in, what comes out, and who has to bridge the gap when the machine stops. Use mechanical verbs, not marketing ones. An hour with vendor materials, a recorded demonstration, and an independent review may be enough for this labeling and triage; it is not the diligence itself.

For the contracts team, the scan produces three candidates: a clause playbook with saved searches in the document-management system—the boring option, and nearly the winner; a partly owned contract-lifecycle platform with unused features; and DocuAnswer, which takes in contracts and questions and produces answers and summaries. Three real options, one of them almost free.

<aside class="your-turn">

**Your turn.** Describe the current process and its cost. Then name two non-AI candidates—a template, workflow rule, or existing feature—that could plausibly address the same problem. If none comes to mind, ask the longest-tenured person on the team.

</aside>

### Question 3: What happens if it’s wrong?

Before spending another minute on what the tool can do, get specific about how it can fail. How could things go wrong, and what are the consequences?

“Wrong how” is easier to answer than it first appears. A tool’s likely failures follow from what it mechanically does—the label you wrote during the scan. Take that label, “it takes in X and produces Y,” and add the consequential clause: “and Y feeds decision Z.” Then start with the failure most likely to escape notice:

| **If the tool mainly…** | **The failure easiest to overlook is…** |
| --- | --- |
| Generates text or answers | A plausible fabrication: confident, persuasive wrongness |
| Summarizes or extracts | An omission: the material point it did not surface |
| Ranks, searches, or prioritizes | A miss: what never reaches the reviewer |
| Automates or acts | A mishandled exception, or an action no one clearly owns |

This is just a starting point, not a complete taxonomy. Real systems often do several of these things at once; a summarizer can fabricate or misattribute, not merely omit. The table is meant to stop you from focusing only on the errors a system displays. A fabricated answer at least appears on the page, where an alert reader has a chance to catch it. An omission may never appear anywhere. The failures in the right-hand column are united by that invisibility.

**A note on scope.** This essay is mostly about tools that advise a person. Tools that act on their own, such as scheduling agents, auto-filers, and workflow bots, need the same six questions plus a hard look at permissions and exceptions: what the system may do without a human, and what happens when it meets a case it does not recognize. That deserves its own essay. Evaluating an agent only on the accuracy of its output is like evaluating a new hire only on their typing.

Now ask about consequences. For each intended use, what harm follows if the output is wrong or incomplete, and who bears it? How quickly would anyone notice? Can the action be reversed? Does the system advise a person or act on its own? What legal, professional, or institutional duties attach to that use?

This question doesn’t turn only on whether the output goes to someone important. An internal recommendation—whom to interview, whose claim receives extra scrutiny, whose file is flagged—can be enormously consequential to the person who never sees it and cannot object. Meanwhile, a client-facing draft that passes through two thoughtful reviewers may be one of the safer places to use AI, because it will be reconsidered and rewritten before it leaves the organization.

The result from this question should be a short list of intended uses, each with a defensible stakes level.

Taking a look at DocuAnswer, it belongs in two rows of the above table: it generates and summarizes, so fabrication and omission are the failures to hunt. The team then defines three uses: looking up what the standard template says (low stakes, because an error is caught at the next step); summarizing obligations for internal planning (medium stakes); and answering “What exactly do we owe this vendor?” as an input to a payment decision (high stakes). The tool is the same. The uses are not.

<aside class="your-turn">

**Your turn.** List two or three ways you would actually use the tool. For each, identify the harm, detectability, reversibility, whether it advises or acts, and the stakes level you could defend to a supervisor or regulator.

</aside>

### Question 4: Does it fit?

Fit exists between a tool and a use, not inside the tool. [Information-systems researchers](https://open.ncl.ac.uk/theories/3/task-technology-fit/) have made this point for decades: performance gains come from the match between what a task requires and what a technology supplies. For AI, that fit can be broken up into three parts. Think of each as having a floor, set by the stakes you assigned in Question 3. A use that falls through any floor is out, regardless of how the other two look.

**Capability fit** asks whether the tool has demonstrated that it can perform this specific task, not merely tasks that sound similar. AI makes this distinction unusually treacherous. In a [preregistered field experiment involving 758 BCG consultants](https://doi.org/10.1287/orsc.2025.21838), people using GPT-4 on tasks within the system’s capability frontier completed work about 25% faster and with significantly higher quality. On a deliberately similar task beyond that frontier, the AI groups were, on average, 19 percentage points less likely than the control group to reach the correct answer. The researchers called the boundary the “jagged technological frontier.” You cannot see that boundary from apparent task difficulty, and it can move as models change. A demonstration can suggest capability fit; only testing on your task can establish it. Until then, capability claims are provisional.

**Verification fit** asks whether you can get—and continue to get—enough confidence in the output at the intended volume and stakes. Verification is broader than reading every answer. It can include item-by-item review, sampling, exception review, and monitoring aggregate results. The acceptable method depends on the stakes you identified earlier. The demo shows gross time saved. What you take home is net time saved: what remains after checking, rework, and exception handling. The sharpest version of this problem has been called the [verification-value paradox](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5621550): for some legal uses, rigorous verification costs nearly as much as doing the task unaided. Grounding an answer in your own documents can reduce that burden, sometimes substantially; [it does not eliminate it](/blog/rag-systems-can-still-hallucinate/). The decisive question is simple: for this use, at this volume, can you sustain an acceptable checking method? If the answer is no, reject the use, not necessarily the tool.

**Workflow fit** asks whether the use will become part of real work or be worked around. Picture day 30, not day one. Where does the output land? Who touches it next? [Research on clinical information systems](https://pmc.ncbi.nlm.nih.gov/articles/PMC8965666/) has documented the importance of workarounds: when a technically capable system does not fit actual work, people often create informal paths around it, reintroducing risks the system was meant to control. Borrow this diagnostic: if the tool does not fit perfectly, what workaround will people build, and will it be safe? An unsafe workaround is a floor failure, not a minor demerit. And if you can predict the workaround, plan for it: the rollout you cost out in Question 5 should change the workflow at the same time it introduces the tool. Drafting assistants illustrate the problem. Their capability fit may be strong, and their output is easy to read, but the human-review step can erode under deadline pressure when the workflow treats it as a speed bump rather than a station.

One practical defense applies across all three fits: do not let the vendor write the demonstration. Write your own script—two or three scenarios from actual work, chosen before the vendor shows anything. Use sanitized or synthetic stand-ins until Question 5 resolves the data questions. Then, under an appropriate agreement, test on real materials.

For DocuAnswer, template lookup and obligation summaries provisionally clear all three floors. The high-stakes question, “What exactly do we owe this vendor?”, fails verification fit for now. At the intended volume, the team cannot devise a sustainable checking regime short of rereading the contract—the task the tool was meant to replace. That use remains behind a gate pending the tests below. The team also logs a workflow warning: answers arrive in a separate application, and the easiest workaround is to paste them into email, losing the citations along the way.

<aside class="your-turn">

**Your turn.** Take your highest-stakes use and answer the three questions in order: is capability demonstrated on this task or only on similar ones; what checking method can you sustain at real volume; and what workaround will people build if the fit is imperfect? If any answer falls below the floor, write down what would need to change.

</aside>

### Question 5: What will it really cost—including rollout?

When considering cost, we’re tempted to consider only the price quoted by the vendor. But there can be additional costs that are less visible: implementation, integration with existing systems, training, the productivity dip while habits change, and exit costs that are hard to price. Ask early what it costs to leave. Can you export the data in a usable format? How much retraining would a replacement require? What happens to documents and history when the contract ends? These questions are easier to ask before the sale than after it.

This question requires widening the frame. You are not buying a tool; you are buying a tool-plus-rollout. AI initiatives often founder in rollout: workflows never change, training ends with the vendor onboarding, or the internal champion leaves. Treat the rollout as part of the product. Who must change daily behavior, and do they know it? Who owns training when the vendor is gone? Who is the champion, and what happens if that person moves on?

Data risk falls within this question too. Ask the vendor whether data is retained, where it is stored, who can access it, and whether it is used to train or improve models. Then ask the same questions about the underlying model provider, because many AI products are built on another provider’s model and data may pass through both layers. Good answers about the vendor’s own practices and vague answers about the underlying provider are a red flag, not a reassurance. Appendix B has a short list; the depth of your diligence should match the stakes from Question 3.

For DocuAnswer, the license is modest. The expensive parts are rollout—the contracts team must change how questions arrive or the tool will sit unused beside the old inbox—and exit: three years of accumulated Q&A history would currently be exportable only in DocuAnswer’s proprietary format.

<aside class="your-turn">

**Your turn.** Price the exit while you are still friendly with the vendor. What leaves with you, in what format, and what would a replacement cost in retraining? If the contract does not answer, put it on the agenda for the next call.

</aside>

### Question 6: Set the decision rule—and show your work

Finally, our last question asks you to state a rule that you will use to decide whether to adopt.

The rule has three parts. First, define success metrics against the Question 2 baseline: efficiency (time per question), quality (error rate and rework), money, and adoption (does anyone still use it in week six?). If you did not measure a baseline, go back; you cannot define improvement over a number you do not have. Second, commit thresholds to writing: we adopt uses A and B if the tests show X; we walk away if Y; use C stays gated unless Z. Write them now, because afterward every threshold has a mysterious tendency to move just below the result. Researchers call this preregistration, and it works here for the same reason. Third, assemble a one-page memo: the problem statement, baseline, alternatives, stakes per use, passed and failed fits, costs, and decision rule.

Now place the product and any boring alternative on the benefit-versus-effort grid mentioned earlier. It can distinguish quick wins, strategic investments, and things not worth doing. The placement is provisional, because the pilot may move the dots. Keep one rule in view: the grid compares options that have already cleared the floors. It does not decide acceptability. A high-benefit, low-effort use that fails verification fit remains gated, whatever quadrant it occupies.

If your organization uses a formal evaluation form—[Korin Munsterman’s recent book on AI in law practice](https://www.amazon.com/Practice-Law-Nutshell-Korin-Munsterman/dp/B0FR5M58LP) includes one of the stronger examples—the memo is what makes the form useful. Forms record your answers; but these six questions will force you to come up with better answers.

For DocuAnswer, the contracts team writes: “Adopt for template lookup and obligation summaries if the audition shows no fabricated answers, the pilot reduces time per question to half of baseline, and week-six use holds above 60% of the pilot group. Walk away if fabrication appears in the audition at any stakes level. Keep ‘What do we owe?’ gated until a sampling-based check exists and passes.”

<aside class="your-turn">

**Your turn.** Draft your rule in three sentences: adopt if ___; walk away if ___; stay gated unless ___. If you cannot fill in a blank, identify the question you skipped.

</aside>

## Three Tests—and Then the Decision

So far, you have been thinking. Now comes testing. The tests below do not require code or a large budget, but they do require permission to use appropriate materials and access to the tool. Design them around the failure modes and stakes from Question 3, and run them on your own work. That last point is important. In medicine, a diagnostic method validated on one hospital population must be assessed again on another; performance does not automatically transfer. A vendor benchmark uses someone else’s documents, questions, and definition of a good answer. The most useful benchmark for your decision looks like your work.

Keep in mind that a small test can disqualify a tool, but it cannot establish reliability. Ten or fifteen questions may expose a fatal problem in an afternoon; passing them establishes little. Thirty logged outputs can reveal the kinds of errors the tool makes; they cannot produce a defensible error rate. Treat the first two tests as ways to find trouble. Reserve claims of reliability for evidence from the pilot.

**Test one: the known-answer audition.** Set aside an afternoon. Assemble ten to fifteen questions whose answers you have fixed in advance. Run them through the tool on your own documents, cleared under Question 5, or on sanitized stand-ins. Score the results against those prewritten answers. Design the set around the failure-mode table. For a generative tool, add two or three false-premise traps: questions built on an untrue assumption. For a summarizer or extractor, score against a known list of material points, because omissions are the point. For a ranking or triage system, plant items you know should surface and see whether they do. For an agent, use the weird cases—the malformed invoice, the amendment chain, the exception to the exception—and observe what it does without being asked.

Here is the contracts team’s audition set:

1. What is the payment term in the Acme master services agreement? *(Known answer: net 45.)*
2. Which of our ten largest vendor contracts auto-renew, and on what dates? *(Known list; score what is missing, not only what is returned.)*
3. Summarize the termination-for-convenience clause in the Birchwood agreement. *(Trap: Birchwood has no such clause. Does the tool say so or invent one?)*
4. Can we share Coreline’s pricing with an outside consultant under the current NDA? *(Known answer: no; the confidentiality definition covers pricing.)*
5. What late-payment penalties do we face across active vendor contracts? *(Hard case: an Acme amendment added the penalty. Does the tool read the amendment or only the original?)*
6. Does the Delta agreement permit subcontracting? *(Known answer: yes, but only with written consent; full credit requires the qualifier.)*
7. What changed in the March amendment to the Acme agreement? *(Freshness check.)*

The third audition question is the one to watch. A tool that invents a termination clause when asked has revealed something a benchmark score cannot: it complies with a false premise rather than correcting it. That single result may be enough to gate a use.

**Test two: error analysis.** During a week of normal use, log the outputs—aim for around thirty—and sort the failures into named piles. Do not settle for “good” and “bad.” Give the recurring failures actual labels. For the contracts team, the labels were: relied on the template rather than the executed contract; missed an amendment; paraphrased so loosely that the answer was defensible but unhelpful. This [approach comes from AI evaluation practice](https://hamel.dev/blog/posts/evals-faq/): you cannot reliably check for a failure you have not named. Once the piles exist, turn the three largest into standing spot checks. You will also have an empirical answer to the question Question 4 could only estimate: what verification costs for this use at real volume. If that burden is not sustainable, the demo did not establish verification fit after all.

**Test three: the pilot, run against the rule.** Run a 30- to 60-day pilot with a small group of real users. Keep the decision rule from Question 6 fixed. Track actual outcomes: time per task against the baseline, errors caught, and rework. Separately, ask the pilot group how useful the tool feels. The difference between those measures is evidence. A tool people love but that does not help measurably invites over-reliance. A tool that helps but that people hate is likely to be abandoned within months. Track adoption, too. The pilot is a dress rehearsal for rollout, and low use in a hand-picked group of volunteers is a finding, not noise to explain away.

Only then make the decision, use by use, against the pre-committed rule: adopt, adopt with restrictions, keep gated, or walk away. Update the grid with pilot results. Add a final section to the memo: what we tested, what we found, what we decided, and for which uses.

In the DocuAnswer example, the audition catches no fabrications but flags the fifth audition question: the system reads the original Acme term and misses the amendment. Error analysis puts missed amendments at the top of the pile. The proposed remedy—a standing spot check for answers involving dates or dollars—proves sustainable. The pilot clears the thresholds for template lookup and obligation summaries: time per question falls to 40% of baseline and week-six use reaches 70%. Both uses are adopted, conditioned on the date-and-dollar spot check. The payment-decision use stays gated because the team still cannot design sampling-based verification strong enough for the stakes it set. On the final grid, DocuAnswer’s surviving uses land in the quick-win quadrant. The clause playbook gets built anyway, because the audition makes clear that much of the question traffic is really template lookup by another name.

<aside class="your-turn">

**Your turn.** Build an audition for your highest-stakes use: ten questions, answers fixed in advance, at least one false-premise trap, and at least one answer buried in an amendment, appendix, or exception. Define “pass” before you run it. Then run it. That afternoon can replace a year of wondering.

</aside>

## Evaluation Never Ends

The tool you tested is not necessarily the tool you will have six months from now. Models can change, terms of service can be revised, and new features can reset the risk analysis. The capability frontier moves, too: a use that failed in March may pass in September, and the reverse is equally possible. Adoption turns evaluation into maintenance.

The good news is that you have already built the maintenance instrument. The audition set exists and its answers are fixed. Rerunning it is a bounded task: schedule it quarterly, and repeat it whenever the vendor announces a meaningful change. The DocuAnswer team sees the value in month eight, when the vendor changes the underlying model. A rerun catches a new failure pattern in date questions within half an hour, before anyone relies on a wrong answer. That half hour is what the discipline buys. Recheck data-handling terms annually as well; vendor and model-provider policies change.

There is one more maintenance task that is easy to neglect and costly to neglect for long: keep doing some of the work by hand. The judgment required to check output is a skill, and skills fade without practice. A team that has not read a contract cold in a year may no longer be able to assess the quality of its summaries. At that point, the verification fit established in Question 4 has expired, whatever the audit calendar says.

This returns us to the expensive search box. When someone finally asked why the organization had purchased it, no one could give an answer. If you have followed the six questions and three tests, you can: a problem statement, a baseline, the alternatives considered, the stakes assigned, the fits assessed, the rule committed to, and the evidence that supported the decision. The tool may still disappoint you; no evaluation prevents that. But your organization will know what it believed, what it tested, and why it proceeded. That is accountability in practice, and it fits on about three pages.

<aside class="your-turn">

**Your turn.** Put a 30-minute hold on your calendar three months from now: rerun the audition set.

</aside>

## Appendix A: The Worksheet

*One page. Complete it as you go; by the end, it is most of your memo.*

1. **The problem.** The problem of ___ affects ___; the impact is ___; a successful solution would ___.
2. **The status quo and scan.** Current process and cost: ___. Two non-AI candidates: ___. Each candidate labeled: takes in ___, produces ___.
3. **What happens if it is wrong.** For each intended use: dominant failure mode; harm and who bears it; detectability; reversibility; advises or acts; duties. Stakes level per use: ___.
4. **The three fits, per use.** Is capability demonstrated on this task or merely on similar tasks? Sustainable checking method at real volume: ___. Likely workaround if fit is imperfect, and is it safe?
5. **Cost, including rollout and exit.** Total first-year cost: ___. Who changes behavior: ___. Training owner: ___. Exit: what leaves with us, in what format?
6. **The decision rule.** Adopt for uses ___ if ___. Walk away if ___. Gated unless ___.
7. **Test design.** Ten known-answer questions, including a false-premise trap and a buried-answer question. “Pass” means: ___.
8. **The recheck.** Calendar date for audition rerun: ___. Annual date for terms recheck: ___.

## Appendix B: Vendor Data Diligence—Two Layers

*Ask each question twice: once about the vendor and once about the AI model provider on which it relies. A vendor that cannot answer the second layer has not finished answering the first.*

1. Is our data retained after processing, and for how long?
2. Is our data used to train or improve any model? Can the contract, rather than a settings page, secure an opt-out?
3. Where is our data stored and processed, and under what jurisdiction?
4. Who at the vendor can access our content, and under what controls?
5. What current certifications can the vendor show (for example, SOC 2 Type II or an equivalent)?
6. What breach-notification commitment, in hours, does the contract provide?
7. Which subprocessors touch our data, and will the vendor notify us when that list changes?
8. Can we export all data and history, in a documented format, at termination?
9. What happens to data, including embeddings and caches, when we leave?
10. Will the vendor give advance notice before it changes the underlying model?

*For a comprehensive institutional form that covers more ground, see the appendix to Korin Munsterman’s* Artificial Intelligence and the Practice of Law in a Nutshell. *This is deliberately the short version.*

## Appendix C: The DocuAnswer Audition Set

*Use the seven questions in the testing section as a template. Substitute your own documents but retain the structure: several known-answer questions, a false-premise trap, an answer buried in an amendment, a freshness check, and a nuance question for which partial credit is not full credit. Fix the answers in writing before you run the test.*

## Further Reading

**On how often and how badly legal AI tools get things wrong:** Stanford’s studies of hallucination in [general-purpose models](https://arxiv.org/abs/2401.01301) and [commercial legal research tools](https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries) are essential starting points, both for their results and their careful definitions. A citation to a real case for a proposition it does not support is a subtler failure than an invented case, and potentially a more dangerous one. I have written a [separate series](/blog/what-the-science-says-about-hallucinations-in-legal-research/) about this research and its implications for legal research practice.

**On where AI helps and where it hurts:** the [Harvard/BCG jagged-frontier experiment](https://doi.org/10.1287/orsc.2025.21838) is worth reading in full. The [randomized studies of law students working with AI](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5162111), which report substantial gains from newer tools grounded in real sources, show both how fast the picture can improve and how quickly any snapshot can become stale. Ethan Mollick’s [“15 Times to Use AI, and 5 Not To”](https://www.oneusefulthing.org/p/15-times-to-use-ai-and-5-not-to) is a friendly entry point to the fit question.

**On evaluation frameworks and forms:** the [community-built framework at legalbenchmarks.ai](https://www.legalbenchmarks.ai/framework) is a rigorous procurement-scale instrument for organizations running a formal selection process. Munsterman’s evaluation form is one of the stronger institutional checklists. Both complement this essay rather than replace it: they structure and record an evaluation; the six questions help produce the answers.

**On why humans struggle to catch machine errors:** human-factors research has mapped this territory since before generative AI. Lisanne Bainbridge’s [“Ironies of Automation”](https://en.wikipedia.org/wiki/Ironies_of_Automation) (1983) explains why better automation can make the remaining human role harder. Research on automation bias and skill fade explains why “a human will review it” is a plan that needs maintenance, not a fact that can be assumed.
