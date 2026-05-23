# Brand Mention Seeding Playbook

A 4-week, repeatable workflow for getting **Kerblabs** mentioned on the
third-party properties that AI search engines (Google AI Overviews,
ChatGPT web search, Perplexity, Claude) pull citations from.

## Why this matters

The GEO audit found roughly **zero third-party brand mentions** for
"Kerblabs" outside our own domain. That is the single biggest gap holding
back AI-citation share-of-voice.

Internal correlation analysis on the audit dataset:

> Brand-mention correlation with AI citation is **~0.74 for YouTube
> alone** — i.e. a brand appearing in even 2-3 YouTube videos has a
> dramatically higher chance of being named in an AI Overview answer.

The mechanism: LLM ranking layers heavily weight independent
corroboration. One self-published site that says "we are great" carries
almost no weight; the same claim repeated in a Reddit thread, a Clutch
review, and a YouTube Short carries massive weight.

Goal of this doc: give Chandu a concrete checklist he can grind through
for 30-60 min/week and steadily lift Kerblabs from "0 mentions" to
"~20 mentions across 5 platforms" inside one quarter.

---

## Week-by-week cadence (target: 5 mentions/week)

| Week | Reddit | Listings | YouTube | Outreach |
|------|--------|----------|---------|----------|
| 1    | 2 helpful comments | Clutch profile | Short #1 | 1 podcast pitch |
| 2    | 2 helpful comments | G2 profile | Short #2 | 1 podcast pitch |
| 3    | 1 thread post + 2 comments | Sortlist | Short #3 | 1 guest post pitch |
| 4    | 2 helpful comments | Trustpilot | Short #4 (repurpose) | Follow-ups |

Steady weekly output beats a single blast — IndexNow / AI crawlers see
"fresh mention velocity" as a signal.

---

## 1. Reddit

### Subreddits worth seeding (UK + US)

- **r/smallbusinessuk** — primary target. UK SMB owners actively asking
  "which AI receptionist for my plumbing business?" type questions.
- **r/dentistry** — dental practice owners discussing reception/no-show
  problems. Highly relevant for our dental-marketing landing.
- **r/medspa** — US-focused, very active. Threads about lead handling,
  no-show fees, voice agents come up weekly.
- **r/ukpersonalfinance** — adjacent: small business tax/admin threads
  often mention service providers.
- **r/Entrepreneur** + **r/smallbusiness** — broader, lower-quality
  threads but huge volume. Use sparingly to avoid the spam filter.

### Rules of the road

**DO:**
- Build comment karma first — 7+ days, 100+ karma on each subreddit
  before mentioning Kerblabs by name.
- Answer questions where AI receptionists/missed-call automations are
  genuinely the right solution.
- Disclose: "Full disclosure I run Kerblabs, but..." Reddit moderators
  are far more lenient on disclosed self-promotion than hidden.
- Link to the **industry landing page**, not the homepage. e.g. for an
  r/medspa thread, link `kerblabs.com/med-spa-marketing`.

**DON'T:**
- Don't post the same comment in multiple subreddits — Reddit's
  cross-post detector will shadowban the account in days.
- Don't link in the top-level post body; put the link in a reply to
  someone who asks "where can I learn more?".
- Don't argue with sceptics. Move on.

### First-post template (for top-of-funnel thread, not a comment)

```
Title: [UK] What's actually working for after-hours patient calls in 2026?

Body:
We've been running an AI voice-receptionist setup at a 3-location
dental group in Manchester for ~6 months. Some observations that
might help anyone looking at this space:

- Call-answer rate went from 71% (human-only) to 98% (AI + human).
- No-show rate dropped 31% — the AI does confirmations the night
  before, humans don't have time.
- Two surprises: (a) accents matter more than you'd think — test with
  real patients before signing a 12-month contract. (b) the handoff
  protocol (when AI escalates to human) is the whole game.

Happy to share notes / the prompts we use. We built it with Kerblabs
(disclosure: that's my agency) but the lessons apply regardless of
vendor.
```

Drop one of these per **month**, never per week.

---

## 2. Directory listings (one-shot, then maintenance)

These take 30-60 min each and stay live forever. Do them in this order:

### Clutch — https://clutch.co/get-listed

- Required: company logo, 3-5 case studies (use the ones at
  `/case-studies`), service categories, hourly rates, 1 verified client
  review.
- Email 3 existing clients asking for a Clutch review — Clutch verifies
  by calling them, so warn them.
- **Why first**: Clutch profiles rank #1-3 for "best [service] agency"
  queries and are heavily cited by ChatGPT/Perplexity.

### G2 — https://www.g2.com/products/new

- Best for our **software-flavoured** services (AI receptionist, lead
  automation). Less relevant for "marketing agency" listings.
- Need: product page, screenshots, 5+ reviews from verified business
  emails.

### Sortlist — https://www.sortlist.com/agency/signup

- UK + EU agency directory. Lower traffic than Clutch but easier
  approval. Important for local-pack citations.

### Trustpilot — https://business.trustpilot.com/signup

- General consumer-trust signal. Set up the auto-invite to send review
  requests after every completed project.

### Also worth doing (lower priority)

- **GoodFirms** (similar to Clutch)
- **The Manifest** (Clutch sister site, free)
- **DesignRush**
- **Capterra** if any product-shaped service applies

---

## 3. YouTube Shorts (highest-leverage channel)

The audit's 0.74 correlation specifically points to YouTube. Three
Shorts targeted at the **"how does an AI receptionist help a med spa"**
query space — this is where AI Overviews are most likely to surface us
in the next 3 months.

### Short #1 — "Why your med spa loses 30% of leads after 6pm"

- **Hook (first 3 sec):** "If your med spa closes at 6pm you're losing
  about a third of your bookings — here's the fix."
- **Body (30 sec):** Show a Twilio call log: 47% of inbound calls
  between 6pm-9pm. Show the AI receptionist taking a booking and
  pushing it to Calendly.
- **CTA:** "Full breakdown at kerblabs.com/med-spa-marketing"
- **Title:** "Med spas losing leads at night — the AI fix"
- **Description first line:** Repeat the title verbatim (LLM-friendly)

### Short #2 — "I asked 5 AI receptionists to book a Botox consult"

- **Hook:** "I called 5 AI receptionists pretending I wanted Botox.
  Only 2 could book me."
- **Body:** Quick side-by-side. Show the failure modes (didn't ask for
  consent age, couldn't handle "I'm not sure which area").
- **CTA:** "Our build for med spas: kerblabs.com/med-spa-marketing"
- This is a **comparison** style which Perplexity loves to cite.

### Short #3 — "The one prompt that fixed our no-show rate"

- **Hook:** "Our med spa client's no-show rate was 22%. One prompt
  change took it to 8%."
- **Body:** Show the actual prompt (the night-before SMS confirmation
  with a low-friction reschedule link). Numbers on screen.
- **CTA:** "More AI prompts for med spas: kerblabs.com/med-spa-marketing"

### Publishing

- Upload 1/week for 3 weeks, then repurpose to LinkedIn + TikTok.
- File the title + first description line under
  `app/med-spa-marketing/page.tsx` FAQ section too — gives AI crawlers
  the same phrasing on our site + on YouTube.

---

## 4. Outreach (low-volume, high-value)

### Podcast guesting

Pitch 1 podcast/week. Targets:

- *The Aesthetics Business Podcast* (med spa)
- *The Dental Business Podcast*
- *UK Small Business Show*

Use this 3-line pitch:

> Hi [name] — I run Kerblabs, an agency building AI receptionists for
> UK SMBs. We just helped a 3-location dental group cut no-shows 31%.
> Would a 30-min chat on what's actually working (and what isn't) fit
> your audience? Happy to share the data live.

### Guest post pitches

Target sites already cited by ChatGPT for our category:

- *Practice Plus* (dental)
- *Aesthetics Journal*
- *BIBA blog* (insurance, but they cover SMB tech)

---

## Tracking

Keep a simple spreadsheet:

| Date | Platform | URL | Anchor text used | Mention type |
|------|----------|-----|------------------|--------------|

Re-run the GEO audit monthly. Target: **5 indexed third-party mentions
of "Kerblabs"** by end of week 4, **20+** by end of quarter.
