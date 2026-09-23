---
title: "Can’t Stop, Won’t Stop: One Semester, Eight Vibe-Coded Teaching Tools"
description: "Eight custom interactive tools built for one semester of 21st Century Lawyering, from a token explorer to a hallucination game, and what building them taught me."
pubDate: "2026-03-04"
originalUrl: "https://www.ailawlibrarians.com/2026/03/04/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/"
originalSite: "AI Law Librarians"
categories: []
tags: []
---

Somewhere around tool number five, I realized I had a problem. The kind where you keep saying “almost done” and then it’s 2 AM and you’re finalizing a React app that lets your students act as bots and deploy hallucinations against one another.

I teach 21st Century Lawyering at The Ohio State University Moritz College of Law. It’s a 3-credit course on law and emerging technology — AI, cybersecurity, document tech, legal automation. And this semester, I built a custom interactive tool for nearly every class session. Eight tools (and counting) for a single course.

I won’t pretend to have come up with all of these ideas on my own. One of the best things about the legal tech education community is how generously people share. Someone demos an exercise at a conference, posts a tool on LinkedIn, or walks through a concept in a workshop, and it sparks something. Nearly every tool below started with an idea I saw someone else do and I thought, “I could build a version of that for my students.” AI-assisted development makes that possible in a way it never was before, totally collapsing the gap between “that’s a great idea” and “I’m using it in class tomorrow.” So this post is partly a show-and-tell, and partly a thank-you to the people whose work made me want to build.

Here’s what I made, who inspired it, and what I learned about what happens when a law professor with some Python experience and an AI coding assistant starts saying yes to every pedagogical impulse.

**A note on the live demos:** Many of these tools run on my personal API keys. I’ve put some money into keeping them live, but when it runs out I probably won’t re-up. If a demo isn’t working, you can always clone the repo and run it yourself, I’ve tried to keep everything open-source.

## The Tools

## 1. TokenExplorer (Week 2)

![The LLM Explorer web app showing a token-by-token probability visualization. The left panel has an "Input" section with the prompt "Give me a list of 10 recent opinions involving lawyers using AI hallucinations. They should have full citations." (estimated at 29 tokens), plus "Model Settings" with GPT-3.5 Turbo selected, temperature slider at 1.5, and max tokens at 712. A "Generate" button sits below. The right panel shows the model's output (505 completion tokens) with each token color-coded by prediction probability: green (90-100%), light green (70-89%), light blue (50-69%), yellow (30-49%), orange (10-29%), and pink (0-9%). The output is a hallucinated list of fake cases — "Smith v. Jones, 2021 WL 123 456 (District Court of California, Feb. 15, 2021)," "Brown v. Green, 2021-US-12345," etc. — with many tokens in yellow, orange, and pink, visually demonstrating that the model is generating low-confidence fabrications. The color pattern makes hallucination *visible*: students can see that case names, docket numbers, and dates are produced with notably low probability scores, revealing the model is essentially guessing.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-1024x593.png)

[Try it](https://rlfordon.github.io/TokenExplorer/) | [GitHub](https://github.com/rlfordon/TokenExplorer)

**Inspired by:** I saw someone demo something similar at a presentation a while back. I wish I could remember who, because it stuck with me. Making the probabilistic nature of an LLM visible rather than just explaining it conceptually was immediately compelling. Token visualizers aren’t new (OpenAI has one, several developers have built similar tools), but I hadn’t seen one built for a classroom context where the point is to emphasize the probabilities. If the original demo was yours, please reach out so I can credit you properly.

**The problem:** Students arrive thinking LLMs are databases that look up correct answers.

**What I built:** An interactive tool where students manipulate temperature settings and watch probability distributions shift in real time. They change context and see how a similar prompt produces different next-token predictions. They test factual questions and watch the probabilities change as more hallucinations arise.

**Why it matters:** Once students see that LLMs are statistical prediction engines generating *likely* text, not *true* text, everything else clicks. When they encounter hallucinations later in the semester, they already understand *why* they happen.

## 2. Prompt Coach (Week 5)

![The Prompt Coach split-panel web app. The left "Your Workspace" panel shows a Claude conversation (model: Claude Haiku Fast). The student's prompt asks: "Give me a list of 10 recent opinions involving lawyers using AI hallucinations. They should have full citations." Claude's response is titled "Recent Opinions on Lawyers Using AI Hallucinations" and transparently explains it cannot verify specific citations, listing what it knows exists (Mata v. Avianca, Colorado Bar disciplinary matters, State Bar of California ethics opinions) and recommending Google Scholar for accurate citations. The right "Prompt Coach" panel (branded "21st Century Lawyering - OSU Moritz College of Law") shows a "Hallucination Risk" review. The Coach Feedback section analyzes the student's prompt: "Good news: the AI handled your high-risk request appropriately by refusing to fabricate citations. But your prompt created exactly the scenario where hallucination is most dangerous." It explains the student asked for specific citations from memory — "the AI's weakest area" — and suggests alternative approaches: requesting search and verification explicitly, uploading case databases, and notes that the follow-up ("I need 10 cases minimum") doubled down on the risk. Footer: "Created by Rebecca Fordon | MIT License | GitHub."](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-1-1024x705.png)

[Try it](https://rlfordon.github.io/prompt-coach/) | [GitHub](https://github.com/rlfordon/prompt-coach)

**Inspired by:** [Sean Harrington](https://www.linkedin.com/in/sean-harrington/)‘s prompting workshops. I still haven’t had the pleasure of experiencing one in person (I’m looking forward to finally catching him at ABA TECHSHOW) but hearing about his approach to teaching prompting AI, with feedback from AI, made me want to build something that could coach students through it in real time.

**The problem:** Students need to practice prompting, but there’s no good way to give them feedback at scale. I can’t stand behind 30 (or even 11) laptops at once.

**What I built:** A split-panel web app. The left side is a blank Gemini chat where students draft and test prompts. The right side is an AI coaching interface that evaluates their technique across dimensions like context engineering, document selection, and confidentiality awareness. The coach doesn’t revise the AI’s output directly, but instead connects output problems back to what could be improved with the prompt.

**Why it matters:** Legal-specific coaching catches things generic prompt guides miss. It flags when a student uploads privileged documents. It notes when a prompt would work on Gemini but fail on CoCounsel’s structured skill system. It frames feedback in terms of professional judgment, not just technical optimization. This could be easily customized to track to different learning objectives (ironically, I rewrote the prompt so many times).

## 3. QnA Markup Unpaid Wages Client Screener (Week 6)

![The QnA Markup Editor at qnamarkup.org showing the complete Wage & Hour Claim Screener. The left panel displays the full QnA Markup source code with the decision tree logic visible: Q(status) checks W-2 status, Q(timely) checks the 2-year statute of limitations, Q(issue) branches into four claim types (minimum wage, overtime, final paycheck, tip theft), with sub-questions about hourly rate thresholds ($7.25, $10.99, $11.00) and salary thresholds ($684/week). GOTO:consult tags route qualifying claims to a consultation booking page; a Q(dol) endpoint directs users to the Department of Labor hotline (1-866-487-9243) and Ohio Legal Help. The right panel shows the interactive output in "Interactive" mode, displaying the first question as a blue speech bubble: "Were you a W-2 employee?" with "Yes" and "No (I was a contractor/1099)" answer buttons. Footer links include "credits | edit | code your own."](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-2-1024x701.png)

[Try it on QnA Markup](https://www.qnamarkup.org/?markup=Title%3A+Wage+%26+Hour+Claim+Screener%0D%0ADescription%3A+A+tool+to+help+Ohio+employees+determine+if+they+have+a+claim+for+unpaid+wages%2C+overtime%2C+or+minimum+wage+violations.%0D%0A%0D%0AQ%28status%29%3A+Were+you+a+W-2+employee%3F%0D%0AA%3A+Yes%0D%0A%09Q%28timely%29%3A+When+did+the+most+recent+missed+or+short+payment+occur%3F%0D%0A%09A%3A+Within+the+last+2+years%0D%0A%09%09Q%28issue%29%3A+What+happened+with+your+pay%3F%0D%0A%09%09A%3A+I+wasn%27t+paid+minimum+wage%0D%0A%09%09%09Q%28rate%29%3A+What+was+your+hourly+rate%3F%0D%0A%09%09%09A%3A+Below+%247.25%0D%0A%09%09%09%09Q%28rate-below%29%3A+This+appears+to+be+a+strong+claim+violating+both+federal+and+Ohio+law.+%3Cbr%3E%3Cbr%3EGOTO%3Aconsult%0D%0A%09%09%09A%3A+Between+%247.25+and+%2410.99%0D%0A%09%09%09%09Q%28rate-middle%29%3A+This+is+a+possible+Ohio+minimum+wage+violation.+%3Cbr%3E%3Cbr%3EGOTO%3Aconsult%0D%0A%09%09%09A%3A+%2411.00+or+above%0D%0A%09%09%09%09Q%28rate-above%29%3A+This+does+not+appear+to+be+a+clear+minimum+wage+case%2C+as+it+is+above+the+current+requirements.+GOTO%3Adol%0D%0A%09%09A%3A+I+wasn%27t+paid+overtime+%28over+40+hours%2Fweek%29%0D%0A%09%09%09Q%28salary%29%3A+Were+you+paid+a+salary+of+more+than+%24684+per+week%3F%0D%0A%09%09%09A%3A+No%0D%0A%09%09%09%09Q%28salary-below%29%3A+You+likely+have+a+strong+overtime+claim.+%3Cbr%3E%3Cbr%3EGOTO%3Aconsult%0D%0A%09%09%09A%3A+Yes%0D%0A%09%09%09%09Q%28salary-above%29%3A+Whether+you+are+owed+overtime+depends+on+your+specific+job+duties.+GOTO%3Aconsult%0D%0A%09%09A%3A+I+didn%27t+receive+my+final+paycheck%0D%0A%09%09%09Q%28final-paycheck%29%3A+Employers+must+provide+final+paychecks+in+a+timely+manner.+GOTO%3Aconsult%0D%0A%09%09A%3A+My+employer+took+my+tips%0D%0A%09%09%09Q%28tip-theft%29%3A+Tip+theft+is+a+serious+violation+of+wage+laws.+GOTO%3Aconsult%0D%0A%09A%3A+More+than+2+years+ago%0D%0A%09%09Q%28timely-no%29%3A+Because+the+incident+occurred+over+2+years+ago%2C+it+may+be+difficult+to+pursue+due+to+the+statute+of+limitations.+GOTO%3Adol%0D%0AA%3A+No+%28I+was+a+contractor%2F1099%29%0D%0A%09Q%28status-no%29%3A+Wage+laws+generally+cover+employees+rather+than+independent+contractors.+However%2C+you+may+be+misclassified.+GOTO%3Aconsult%0D%0A%0D%0AQ%28consult%29%3A+%3Cb%3ESchedule+a+Free+Consultation%3C%2Fb%3E%3Cbr%3E%3Cbr%3EPlease+contact+our+office+to+discuss+the+specifics+of+your+potential+claim.%0D%0AA%3A%5Bhttps%3A%2F%2Fsalahmed-ctrlz.github.io%2FBetterCallSaul%2F%23%2Fcontact%5D+Book+Appointment+Now%0D%0A%0D%0AQ%28dol%29%3A+%3Cb%3ENext+Steps%3C%2Fb%3E%3Cbr%3E%3Cbr%3EWe+recommend+contacting+the+Department+of+Labor+hotline+at+1-866-487-9243+or+visiting+Ohio+Legal+Help+for+further+assistance.%0D%0AA%3A%5Bhttps%3A%2F%2Fwww.ohiolegalhelp.org%5D+Visit+Ohio+Legal+Help&font_family=Verdana%2C+Geneva%2C+sans-serif&font_size=14&line_height=20&col_width=500&frame_pad=15&radius=15&comp_bg=5489eb&comp_txt=ffffff&comp_link=e3fbfc&usr_bg=eeeeee&usr_txt=000000&usr_link=0000ff&sharing=1)

**Inspired by:** For this I just directly used [David Colarusso](https://www.davidcolarusso.com/)‘s [QnA Markup](https://www.qnamarkup.org/), a brilliantly simple tool for building decision trees with plain text. [Gabe Tenenbaum](https://www.linkedin.com/in/gabriel-tenenbaum/) also very generously demoed QnA Markup in a prior version of my class, which planted the seed for continuing to build exercises around it.

**The problem:** I needed a low-tech entry point to teach decision trees and document assembly logic — something where the focus stays on legal reasoning, not the tool.

**What I built:** A client intake screener that triages potential wage-and-hour claims. Does the caller qualify? Should they book a consultation or contact the Department of Labor directly? Students see legal rules as logic: if/then branching based on employer size, hourly rate, and tipped status.

**Why it matters:** It forces students to confront the design choices embedded in any intake tool, such as what questions to ask, in what order, what to do with edge cases. It’s intentionally low-tech (just text in a browser) so nobody gets distracted by the interface.

## 4. Decision Tree to QnA Markup Translator Gem (Week 6)

![Gemini interface (dark mode) showing the QnA Markup Optimizer Gem in a conversation titled "QnA Markup Decision Tree Generation." The user's brief prompt says "put in a code block." The Gem responds with QnA Markup for an "Employment Intake & Consultation Screener" described as "Verifies W-2 status and routes to a consultation if ineligible." The code shows a linear intake flow: Q(employment_status): "Were you a W-2 Employee?" → Yes → Q(employer_name): "What was the name of your employer?" → X: (free text) → Q(job_title): "What was your job title at <x>employer_name</x>?" → X: → Q(years_worked): "How many years did you work there?" → X:number → Q(final_confirmation) partially visible. This demonstrates the Gem generating a simpler guided interview structure with variable interpolation.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-6.png)

[Try it](https://gemini.google.com/gem/1_GIi-Fpe8LCCNVsTSvUPQ2Dvv3LV0osX?usp=sharing)

**The problem:** Students understand decision tree logic but struggle with the syntax of turning it into working code.

**What I built:** A Gemini Gem that bridges the gap. Students describe their logic and it generates QnA Markup. It models the idea that AI assistants can serve as a bridge between domain knowledge and technical implementation.

**Why it matters:** It’s the same insight that powers the entire “building legal technology” unit (and extends from the prompting unit and into the agent unit): you don’t need to be a coder, you need to be able to describe what you want clearly enough for AI to build it.

## 5. Ohio Unpaid Wages Screener — The 3-Minute Version (Week 6, cliffhanger)

![A vibe-coded web app styled as a Better Call Saul parody — "BETTER CALL OHIO" in large red and yellow text on a black header bar, with "WAGE & HOUR CLAIM SCREENER" as a subtitle. A yellow badge in the upper right reads "YOUR RIGHTS PROTECTED!" with a scales-of-justice icon. Below, on a cream/yellow background, a white card labeled "OFFICIAL SCREENER" (in a red diagonal badge) shows the "CASE INTAKE" heading with the first question in italic: "Were you a W-2 employee?" Two answer buttons styled in black borders read "YES →" and "NO (I WAS A CONTRACTOR/1099) →". At the bottom, a disclaimer reads "ATTORNEY ADVERTISING - RESULTS NOT GUARANTEED" with small dollar sign, clock, and calendar icons. The design deliberately mimics the aesthetic of a late-night TV legal ad.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-3-1024x620.png)

[Try it](https://gemini.google.com/share/47c8616ea640)

**The problem:** I needed a dramatic way to introduce vibe coding.

**What I built:** A React app in Gemini Canvas, built on the QnA Markup decision tree we just made. It took roughly 1 minute to ctrl-C/ctrl-V the QnA Markup and generate the app.

**Why it matters:** I revealed it side-by-side at the end of class as a cliffhanger: “Same basic functionality, but it made a website out of it.” We then discussed, “So why wouldn’t you always vibe-code?” Students surfaced the hard questions themselves: Is the code correct on the law? Is it deterministic (will it always come out the same way)? Who hosts it? Would it be as good if I asked it to generate directly from the law, rather than creating the decision tree ahead of time? Why did it add “OFFICIAL”?¹ It set up the entire vibe-coding class the next day perfectly.

¹ (Eagle-eyed readers will notice that I was too much of a coward to share a direct link to the screenshotted version, and if you visit the link you’ll instead see prominent “parody” stamps).

## 6. Citation Extractor Gem (Week 7)

![Gemini interface (dark mode) showing the Citation Extractor custom Gem in action. The user's prompt reads "Extract citations from the attached PDF." The Gem's response begins with an analysis note explaining it extracted all legal case citations from the document, including those identified as "bogus" or "phony" AI-generated research by the Special Master. Below is a structured table with columns: Bluebook Citation, Core Citation, Court, Year, and Pinpoint Pages. Visible entries include Aetna Cas. & Surety Co. v. Superior Court (Cal. Ct. App., 1984), Arrowhead Capital Finance v. Picturepro (9th Cir., 2023), Boone v. Vanliner Ins. Co. (Ohio, 2001), Booth v. Allstate Ins. Co. marked as "(Flagged)" (Cal. Ct. App., 1989), and Braun ex rel Advanced Battery Techs. v. Zhiguo Fu (S.D.N.Y., 2015). The Gemini model selector shows "Thinking" mode.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-7.png)

[Try it](https://gemini.google.com/gem/1BYDV9gF0DbH0rQF9L2FqnCgOU0ju9oOT)

**The problem:** I needed a way for students to quickly pull all case citations out of a brief to feed into verification workflows.

**What I built:** A Gemini Gem that takes an uploaded brief and returns a structured table of all case citations, ready for Get & Print on Westlaw and Lexis.

**Why it matters:** It serves double duty. Practically, it supports the hallucination game (below). Pedagogically, it’s a concrete example of a custom AI assistant built for a specific legal task, connecting back to the Gems work from Week 6 and forward to agentic AI in Week 9. Students see that I practice what I teach: when you have a repetitive legal task, you build a tool for it.

## 7. Citation Hallucination Game (Week 7)

![The Citation Hallucination Game web app during the verification (Solo Practice) phase. Top navigation bar shows "Citation Game | Solo Practice | Reviewed: 0/23 | Flagged: 0" with "Finish & See Results" and "Export PDF" buttons. The main panel displays a legal brief — a motion to dismiss in a bad faith insurance case, citing Patterson v. State Farm Mut. Auto Ins. Co. and Ashcroft v. Iqbal. A sidebar panel labeled "REVIEW CITATION" highlights the current citation (Patterson v. State Farm, 2019 U.S. Dist. LEXIS 31742) in yellow, with two buttons: "Looks Legit" and "Flag as Fake," plus Previous/Next navigation. The interface lets students step through each citation in the brief and decide whether it's real or fabricated.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-8-1024x676.png)

[Try it](https://hallucination-game-ctgj.onrender.com/) | [GitHub](https://github.com/rlfordon/hallucination-game)

**Inspired by:** [David Colarusso](https://www.davidcolarusso.com/) again, specifically his [automation bias exercise](https://suffolklitlab.org/algos-bias-due-process-you/#automation-bias), which flips the typical classroom dynamic by making students experience bias rather than just learn about it. That “make them do the thing, not just hear about the thing” approach is exactly what I was looking for. And his hallucination checking frame was pretty handy too because I also wanted to explicitly teach a process for that.

**The problem:** Students (like many of us) think hallucinations will not happen to them, because they will always read the cases. They may also see hallucinations as mainly a made-up cases problem, and not realize that hallucinations can come in many flavors, some harder to detect than others.

**What I built:** A competitive team exercise. Students first *create* hallucinated citations (fabricated cases, swapped numbers, mischaracterized holdings, altered quotes) forcing them to internalize different types of hallucinations and when they are likely to arise. Then they try to catch another team’s fakes under time pressure, mirroring the real conditions lawyers may face when reviewing AI-generated work on deadline.

**Why it matters:** The key lesson isn’t “can you catch every error” but “given limited time, which errors do you prioritize?” Students independently discovered that no single verification tool is sufficient, that the easy hallucinations (fabricated cases) are solved relatively quickly, but that the dangerous ones (subtle mischaracterizations) slip through.

## 8. Document Tech Gallery (Week 8)

![Landing page of the Document Technology Gallery web app. Header reads "Document Technology Gallery" with subtitle "Beyond Word and Acrobat: The tools lawyers actually use." Introductory text explains that the gallery covers seven key document technology patterns. Three demo cards are visible, organized by category: under "CREATE," cards for Document Automation (~90 sec, "Watch a contract write itself as you answer questions") and Clause Library (~60 sec, "Assemble a contract from pre-approved building blocks"); under "EDIT," a card for AI-Assisted Document Editing (~90 sec, "Edit a legal document three ways: AI, rules, and consistency checking"). Two more cards are partially visible under a "REVIEW" heading. Each card has a "Try it →" link. Clean white background with subtle card borders.](/images/blog/cant-stop-wont-stop-one-semester-eight-vibe-coded-teaching-tools/image-9-1024x822.png)

[Try it](https://doc-tech-gallery.onrender.com/) | [GitHub](https://github.com/rlfordon/doc-tech-gallery)

**Inspired by:** [Barbora Obracajova](https://www.linkedin.com/in/barboraobracajova/)‘s [Legal Tech Gallery](https://legaltechgallery.lovable.app/), which she vibe-coded for her “Modern Lawyers” course and [shared on LinkedIn](https://www.linkedin.com/posts/barboraobracajova_i-vibecoded-an-app-that-changed-how-i-explain-activity-7432409625544724480-9wvm). She created a series of quick interactive demos, 60 seconds each, where students touch the technology instead of watching slides. I had a class quickly approaching on document competencies — a topic that I have always struggled to teach given how difficult it is to get Word add-ons approved in my institution. So the moment I saw her post I knew this would help me.

**The problem:** Students need hands-on exposure to core document technology competencies (I chose automation, clause libraries, editing, brief verification, metadata cleaning, redaction, and contract review) but there’s no time to go deep on all of them in one class.

**What I built:** Seven quick interactive demos, about 60 seconds each. Students touch each technology rather than just hear about it. The gallery format builds a shared baseline before diving into further exploration and case studies.

**Why it matters:** It surfaces the “I didn’t know that existed” moments.

## What I Learned from this Process

- **I can’t stop because the feedback loop is immediate.** I see a gap in my teaching, I build something that night, I use it in class the next day. That’s never been possible for me before. I’ve been writing little scripts for years, but AI-assisted development took me from utility scripts to deployed interactive applications. The jump from “I can automate this for myself” to “I can build this for my students” is huge.
- **Vibe-coding replaced the paper handout.** In other classes, when I want a students to work through a problem, my first instinct is a handout, whether a worksheet, fact pattern, checklist, or problem. In this class, my first instinct became “what if I built something they could interact with?” When the subject is technology, it made sense to me that the medium should be too.
- **Creating interactive apps make the class more hands-on.** Every one of these exists because I couldn’t find a way to give students a particular experience otherwise. You can lecture about how LLMs predict tokens. Or you can let students drag a temperature slider and watch the probability distribution change. You can tell students hallucinations are dangerous. Or you can have them *create* hallucinations and then fail to catch someone else’s.
- **Building is teaching.** When I vibe-code a tool in front of students, or reveal that I built something in 3 minutes that took an hour the traditional way, I’m modeling some of the ways they can use technology. The message isn’t always “look what I made,” but also “you could make this too, and you should, because the people who understand the problem best should be the ones building the solution.”

Eight tools. Week 8 of a 13-week semester. And I have no doubt there are more to come.

If you’re teaching legal technology and you’ve been thinking “I wish I had something that did X” — you probably have enough to build it. Pick the smallest version of the idea, open a vibe-coding tool, and see what happens. And then share it!
