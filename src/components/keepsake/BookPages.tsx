import { useState } from "react";
import { bookContent } from "@/data/book-content";
import { ChapterHeading, Envelope, FoldedNote, HandwrittenNote, MemoryPhoto, RevealCard } from "./KeepsakeParts";

export function BlessingPage() {
  return <div className="book-page page-blessing"><div className="om">ॐ</div><div className="shloka">ॐ सर्वे भवन्तु सुखिनः<br />सर्वे सन्तु निरामयाः।<br />सर्वे भद्राणि पश्यन्तु<br />मा कश्चिद् दुःखभाग्भवेत्॥</div><div className="ornament">— ◆ —</div><p>May everyone be happy,<br />may everyone be free from illness,<br />may everyone see goodness,<br />and may no one suffer.</p><blockquote>कुछ कहानियाँ लिखी नहीं जातीं,<br />बस धीरे-धीरे बनती हैं।<small>Some stories aren't written;<br />they simply unfold, little by little.</small></blockquote></div>;
}

export function BeginningPage() {
  const item = bookContent.beginning;
  return <div className="book-page"><ChapterHeading hindi="शुरुआत" english="The Beginning" /><div className="date-line">{item.date}</div><h3 className="story-title">{item.heading}</h3><p className="story-copy">{item.body}</p><MemoryPhoto label="PHOTO 01" caption="[Photo caption]" memory="[Memory behind this photo]" rotation="right" /><HandwrittenNote>{item.note}</HandwrittenNote></div>;
}

export function ConversationsPage() {
  return <div className="book-page"><ChapterHeading hindi="बातें" english="Our Conversations" /><div className="paper-slips">{bookContent.conversations.map((text, i) => <div className={`paper-slip slip-${i + 1}`} key={text}><small>0{i + 1}</small><p>{text}</p></div>)}</div><HandwrittenNote className="gujarati">આ એક યાદ રાખવા જેવી વાત છે</HandwrittenNote></div>;
}

export function MemoriesPage() {
  return <div className="book-page page-memories"><ChapterHeading hindi="यादें" english="Little Memories" /><div className="photo-collage">{bookContent.photos.slice(0, 4).map((photo, i) => <MemoryPhoto key={photo.label} label={photo.label} caption={photo.caption} memory={photo.memory} compact rotation={i % 2 ? "right" : "left"} />)}</div></div>;
}

export function MomentsPage() {
  return <div className="book-page"><ChapterHeading hindi="पल" english="Little Moments" /><p className="chapter-intro">The smallest things sometimes stay the longest.</p><div className="folded-grid">{bookContent.moments.map((text) => <FoldedNote key={text}>{text}</FoldedNote>)}</div><HandwrittenNote>keep this one</HandwrittenNote></div>;
}

export function SmilesPage() {
  return <div className="book-page"><ChapterHeading hindi="मुस्कान" english="Things That Made Me Smile" /><p className="chapter-intro">Tap a numbered card.</p><div className="reveal-grid">{bookContent.smiles.map((text, i) => <RevealCard key={i} number={i + 1}>{text}</RevealCard>)}</div></div>;
}

export function EnvelopesPage() {
  return <div className="book-page"><ChapterHeading hindi="एक याद खोलो" english="Open a Memory" /><div className="envelope-grid">{bookContent.envelopes.map((text, i) => <Envelope key={text} label={text} index={i} />)}</div></div>;
}

export function MumbaiPage() {
  return <div className="book-page page-postcard"><div className="postmark">BOMBAY<br /><small>[DATE]</small></div><div className="mumbai-scene" aria-label="Stylized placeholder for a Mumbai memory photograph"><div className="sea-line" /><div className="skyline">▁▂▃▅▃▂▁▃▅▂▁</div><span>MARINE DRIVE • MUMBAI</span></div><ChapterHeading hindi="मुंबई" english="Mumbai" /><p className="postcard-subtitle">A city that deserves a page of its own.</p><p className="postcard-message">{bookContent.mumbai}</p><HandwrittenNote>from the city of little stories</HandwrittenNote></div>;
}

export function QuizPage() {
  const [question, setQuestion] = useState(0); const [result, setResult] = useState<string | null>(null);
  const item = bookContent.quiz[question]; const complete = question >= bookContent.quiz.length;
  if (complete) return <div className="book-page page-quiz"><ChapterHeading hindi="थोड़ा सा मज़ा" english="A Little Fun" /><div className="quiz-complete">Okay...<br />you actually remember<br /><em>quite a lot.</em></div></div>;
  return <div className="book-page page-quiz"><ChapterHeading hindi="थोड़ा सा मज़ा" english="A Little Fun" /><div className="quiz-number">QUESTION {question + 1} / {bookContent.quiz.length}</div><h3>Do you remember...?</h3><p>{item.question}</p><div className="quiz-options">{item.choices.map((choice, i) => <button type="button" key={choice} onClick={() => setResult(i === item.answer ? "You remembered!" : "Not quite... try again.")}>{choice}</button>)}</div>{result && <button type="button" className="quiz-result" onClick={() => { if (result === "You remembered!") setQuestion(question + 1); setResult(null); }}>{result}<small>{result === "You remembered!" ? "continue →" : "choose again"}</small></button>}</div>;
}

export function ObservationsPage() {
  return <div className="book-page page-observations"><ChapterHeading hindi="ख़ास" english="Things I Remember About You" /><div className="observation-list">{bookContent.observations.map((text, i) => <p key={i}><span>{String(i + 1).padStart(2, "0")}</span>{text}</p>)}</div><HandwrittenNote>I paid attention.</HandwrittenNote></div>;
}

export function FinalLetterPage() {
  return <div className="book-page page-letter"><ChapterHeading hindi="आगे..." english="What's Next..." /><h3>अभी कहानी बाकी है...</h3><p className="translation">There's still more of the story to write...</p><div className="letter-copy">{bookContent.finalLetter}</div><div className="letter-end"><span>Chapter 01 — Complete</span><HandwrittenNote>Maybe there will be more pages.</HandwrittenNote></div></div>;
}

export function SecretPage({ onClose }: { onClose: () => void }) {
  const [revealed, setRevealed] = useState(false);
  return <div className="book-page page-secret"><div className={revealed ? "secret-copy is-visible" : "secret-copy"}><span>अभी कहानी बाकी है...</span><h2>Chapter 02</h2><p>To be written.</p><HandwrittenNote>{bookContent.finalSurprise}</HandwrittenNote></div><button type="button" className="secret-trigger" onClick={() => setRevealed(true)} disabled={revealed}>One last thing...</button>{revealed && <button type="button" className="close-book" onClick={onClose}>Close the book</button>}</div>;
}