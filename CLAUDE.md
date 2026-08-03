# Project: R.I.P. Studio

Web design agency site for "Rip" (Michael Kennedy's studio identity). Sells website design/build + ongoing management to small businesses, and showcases the MK Soap brand as a parallel "small batch, hand-made" product line. Static site, no build step, no framework — same approach as mikewkennedy.com, deliberately different visual identity.

## Stack

Plain HTML/CSS/JS. No React, no bundler, no dependencies. Fonts via Google Fonts CDN link tags in each HTML file's `<head>`.

## Relationship to other sites in this "portfolio of sites"

* **mikewkennedy.com** — Michael's personal UX research portfolio (separate repo, hacker/terminal theme). RIP Studio links to it once, quietly, in the footer ("UX research portfolio"). It is not in the main nav and mikewkennedy.com does not reciprocally link back here (one-directional, deliberately).
* **mksoap.com** — existing Bigcartel-hosted soap storefront. RIP Studio's `/work/mk-soap.html` page is a front-end redesign concept for how the soap brand could be presented; the actual "buy" flow stays on Bigcartel. Do not attempt to migrate checkout off Bigcartel without being asked.
* **SMB client sites** (Iroquois Lanes, the arboretum, Village Restaurant, Keep Right Cafe, High Wheeler Coffee) each get their own separate repo when built for real. This repo only shows them as portfolio/showcase entries under `/work/`, not the live client sites themselves.

## Design system

* **This is a deliberately different visual identity from mikewkennedy.com** — do not reuse its cyan/magenta/near-black hacker theme, its `--cds-` token names, or its VT323/Fraunces/Inter/Plex Mono font stack. Any resemblance between the two sites should be structural (static HTML, token-driven CSS, no build step), never visual.
* **Theme**: inspired by traditional tattoo flash sheets and skate/screen-print art, filtered through a restrained, gallery-style presentation (the "Brian Jones Design" reference point: sparse copy, minimal promotional language, work speaks for itself). Inspiration is drawn from the *genre* (flash-sheet conventions, bold linework, limited fluorescent-accented palettes, screen-print grain), not from any specific living artist's actual artwork or shop branding — do not copy or closely trace tallboy666 / Beer Money Shop's specific illustrations or logo.
* **Colors** (`:root` in styles.css): `--paper` (#EFE6D3, warm cream/bone, like flash-sheet paper) and `--paper-raised` (a shade darker, for card surfaces) as the base; `--ink` (#16130F, warm near-black) for text/linework; `--flash` (#FF2F5E, fluorescent coral-red) as the single primary accent; `--flash-2` (#C6FF3D, acid green) as a secondary accent used sparingly (currently only in the contact section's secondary button). Do not introduce additional accent colors.
* **Type**: `--font-tombstone` (UnifrakturCook, a blackletter face) is used *only* for the "R.I.P. Studio" wordmark and the hero tombstone graphic — never for body copy or headings, it doesn't hold up at small sizes or in long strings. `--font-display` (Anton, bold condensed) handles all headings/section titles for poster/flyer energy. `--font-body` (Inter) handles all body copy. `--font-mono` (IBM Plex Mono) handles labels, nav links, eyebrows, flash-sheet numbering ("No. 001"), and status tags.
* **The R.I.P. / tombstone motif is the core brand device**, not just wordplay: traditional tattoo flash sheets already use tombstones as a standard motif (alongside roses, daggers, banners, swallows), so the name and the visual language are meant to reinforce each other. The hero's `.tombstone` element ("R.I.P. — Here lies your old website") is built in pure CSS (no image asset yet) — a real illustrated version could replace it later but should keep the same "epitaph for your old site" framing.
* **Work section uses flash-sheet numbering** (`.flash-number`, "No. 001", "No. 002"...) as the organizing device for the showcase/case-study grid. This is the mechanism for "a collection that updates as we go" — adding a new client project is adding the next numbered card plus its detail page under `/work/`, not a redesign.
* **Buttons**: flat fill only, no outline/ghost style, matching the same convention validated on mikewkennedy.com. `.btn-primary` is `--flash` fill, `.btn-secondary` is `--ink` fill; the dark `.contact` section swaps to `--flash`/`--flash-2` fills since the background is already dark.
* **No dark-mode/light-mode toggle** — this site's whole identity (cream flash-sheet paper background) doesn't have an inverse "dark theme" the way the hacker-themed personal site does. Don't add one without being asked.
* Pricing numbers are deliberately kept off this page (services section describes the flat-fee/flat-monthly model in words, not digits) — the sell is through the work and a direct conversation, not a price table. Don't add specific dollar amounts to the homepage without being asked.

## Content status — what's real vs. placeholder

Real:

* Iroquois Lanes & Pro Shop facts on `/work/iroquois-lanes.html` (address, phone, offerings) — pulled from public directory listings (Yelp, Yellow Pages, Yahoo Local) since the business has no site of its own yet. Marked with an explicit placeholder-note on the page since it's directory data, not owner-supplied.
* MK Soap's current storefront link (mksoap.com) on `/work/mk-soap.html` — real, live link.
* The contact email (mikewkennedy@gmail.com) — real, but likely a placeholder until a studio-specific address (e.g. hello@rip-studio.com) exists once the domain is registered.

Placeholder / pending:

* The arboretum project (`/work/arboretum.html`) — name, location, and all details are placeholder text pending the site owner's decisions. Don't invent a name for it.
* All photography — no real photos yet anywhere on this site; the tombstone hero is pure CSS, no image assets exist in `images/` yet.
* Domain: **rip-studio.com** (primary) and **rip-studios.com** (secondary/redirect) have been decided on but not yet purchased. Site currently deploys to a `*.vercel.app` preview URL only. Don't reference the custom domain as live anywhere in copy until it's actually purchased and connected.

## Decisions already made — don't relitigate

* Separate repo per site is the standing rule for this whole line of business — this repo (RIP Studio) is the agency/showcase site only; each real SMB client build gets its own repo, not a folder in this one.
* The link to mikewkennedy.com is one-directional and minor (footer only) — don't promote it to the main nav or add a reciprocal link from mikewkennedy.com without being asked.
* Soap checkout stays on Bigcartel for now — a full commerce rebuild is a separate future decision, not in scope here.
