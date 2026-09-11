# Ek Chhoti Si Kahaani — Build Plan

## Goal
Build a fully navigable digital keepsake that behaves like a handcrafted Indian memory book, not a conventional website. All personal content remains clearly marked, centrally editable placeholder data.

## Experience
- Begin with a closed, cloth-bound maroon book with antique-gold linework, depth, spine, texture, and a quiet “Open the book” invitation.
- Animate the cover opening into warm ivory handmade pages, then move through the story with physical page turns.
- Use a two-page spread on desktop and one readable page on phones around 390px wide.
- Support edge taps, subtle previous/next controls, keyboard arrows, and mobile swipes.
- Include a discreet page counter and optional sound control; sound remains off by default.
- Respect reduced-motion preferences with restrained fades and slides instead of 3D page turns.

## Book Contents
1. Ceremonial blessing page with the supplied Sanskrit verse and translations.
2. शुरुआत — diary-style beginning with date, story, attached photo, and note placeholders.
3. बातें — uneven handwritten conversation slips.
4. यादें — photograph-led scrapbook composition with 3–5 replaceable photo placeholders.
5. पल — folded notes and small memory fragments.
6. मुस्कान — 5–7 lift-and-reveal memory cards.
7. एक याद खोलो — 4–6 animated envelopes with sliding notes and optional photos.
8. Mumbai — restrained vintage postcard page inspired by Marine Drive.
9. थोड़ा सा मज़ा — a tasteful 4–5 question memory quiz with retry feedback.
10. ख़ास — a quiet set of observation placeholders.
11. आगे... — spacious final letter page with the supplied gentle continuation language.
12. Secret page — “One last thing...” reveal, Chapter 02 message, and close-book action.

## Reusable Pieces
- Book shell, cover, paper page, spread, navigation, and page-turn layer.
- Printed photo with polaroid, taped, corner-mounted, and flip-over variants.
- Handmade envelope with opening flap and sliding note.
- Handwritten annotation, paper slip, reveal card, quiz, postcard, and final letter layouts.
- Central content file for chapters, memories, dates, photos, captions, quiz answers, and final messages.

## Visual Direction
- Deep burgundy cloth cover, muted wine, restrained antique gold, and a dark warm surrounding surface.
- Warm ivory handmade paper with subtle fibers, edge variation, gentle grain, and realistic shadows.
- Literary serif for English, readable Devanagari for Hindi/Sanskrit, and a restrained handwritten face for annotations.
- Small Indian stationery details through typography, bookbinding, lines, paper, and sparse ornaments—never wedding imagery or stereotypical motifs.
- Intentional scrapbook imperfections while preserving generous empty space and premium pacing.

## Technical Details
- Keep the single experience at `/` with route-specific title, description, Open Graph, and Twitter metadata.
- Use React state for `currentPage`, `totalPages`, `direction`, and `isBookOpen`, with touch gesture handling and keyboard controls.
- Use CSS transforms and transitions for GPU-friendly cover/page/photo/envelope movement; no heavy page-turn library.
- Keep images as explicit neutral placeholders such as “PHOTO 01” and “[UPLOAD MEMORY PHOTO]”; do not generate people or fictional memories.
- Add visible focus treatment, accessible labels, meaningful placeholder alt text, sufficient contrast, and large mobile tap areas.
- Validate the finished book on desktop and phone-sized viewports, including opening, turning, swiping, card reveals, envelopes, quiz states, secret reveal, and closing.

## Scope Boundary
- No authentication, database, uploads, music autoplay, conventional navigation, marketing sections, or invented personal details.