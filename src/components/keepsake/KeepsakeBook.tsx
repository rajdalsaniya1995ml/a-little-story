import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookContent } from "@/data/book-content";
import { BeginningPage, BlessingPage, ConversationsPage, EnvelopesPage, FinalLetterPage, MemoriesPage, MomentsPage, MumbaiPage, ObservationsPage, QuizPage, SecretPage, SmilesPage } from "./BookPages";

const pageFactories = [BlessingPage, BeginningPage, ConversationsPage, MemoriesPage, MomentsPage, SmilesPage, EnvelopesPage, MumbaiPage, QuizPage, ObservationsPage, FinalLetterPage];

export function KeepsakeBook() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [soundOn, setSoundOn] = useState(false);
  const [isTurning, setIsTurning] = useState(false);
  const touchStart = useRef<number | null>(null);
  const totalPages = pageFactories.length + 1;

  const turn = useCallback((nextDirection: "next" | "previous") => {
    if (!isBookOpen || isTurning) return;
    setCurrentPage((page) => {
      const next = nextDirection === "next" ? Math.min(totalPages - 1, page + 1) : Math.max(0, page - 1);
      if (next === page) return page;
      setDirection(nextDirection); setIsTurning(true); window.setTimeout(() => setIsTurning(false), 720);
      return next;
    });
  }, [isBookOpen, isTurning, totalPages]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "ArrowRight") turn("next"); if (event.key === "ArrowLeft") turn("previous"); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [turn]);

  const closeBook = () => { setIsBookOpen(false); window.setTimeout(() => setCurrentPage(0), 800); };
  const pageElements = useMemo(() => pageFactories.map((Page, i) => <Page key={i} />).concat(<SecretPage key="secret" onClose={closeBook} />), []);
  const leftIndex = currentPage % 2 === 0 ? currentPage : currentPage - 1;

  return <main className={isBookOpen ? "keepsake-stage is-open" : "keepsake-stage"}>
    <div className="ambient-mark" aria-hidden="true">एक छोटी सी कहानी</div>
    <Button variant="ghost" size="icon" className="sound-toggle" onClick={() => setSoundOn(!soundOn)} aria-label={`${soundOn ? "Mute" : "Enable"} book sounds`} title="Optional book sounds">{soundOn ? <Volume2 /> : <VolumeX />}</Button>
    <section className="book-object" aria-label="Ek Chhoti Si Kahaani keepsake book" onTouchStart={(e) => { touchStart.current = e.changedTouches[0]?.clientX ?? null; }} onTouchEnd={(e) => { const end = e.changedTouches[0]?.clientX; if (touchStart.current === null || end === undefined) return; const delta = end - touchStart.current; if (Math.abs(delta) > 48) turn(delta < 0 ? "next" : "previous"); touchStart.current = null; }}>
      <div className="book-block" aria-hidden={isBookOpen}>
        <div className="cover-edge" />
        <div className="book-cover">
          <div className="cover-frame"><div className="cover-flourish">◇</div><h1>{bookContent.titleHindi}</h1><p>{bookContent.titleEnglish}</p><div className="cover-divider">— ◆ —</div><div className="cover-subtitle">{bookContent.subtitle.map((line) => <span key={line}>{line}</span>)}</div><small>{bookContent.coverNote}</small></div>
        </div>
        <button type="button" className="open-book" onClick={() => setIsBookOpen(true)}>Open the book <span>→</span></button>
      </div>
      <div className="open-book-shell" aria-hidden={!isBookOpen}>
        <div className="page-stack page-stack-left" /><div className="page-stack page-stack-right" /><div className="binding" />
        <div className={`spread ${isTurning ? `is-turning turn-${direction}` : ""}`}>
          <article className="paper-page left-page" onClick={(e) => { if (e.currentTarget === e.target) turn("previous"); }}>{pageElements[leftIndex]}</article>
          <article className="paper-page right-page" onClick={(e) => { if (e.currentTarget === e.target) turn("next"); }}>{pageElements[leftIndex + 1] ?? <div className="book-page blank-page" />}</article>
          <article className="paper-page mobile-page">{pageElements[currentPage]}</article>
        </div>
      </div>
    </section>
    <nav className="book-navigation" aria-label="Book pages">
      <Button variant="ghost" size="icon" onClick={() => turn("previous")} disabled={!isBookOpen || currentPage === 0} aria-label="Previous page"><ChevronLeft /></Button>
      <span>{String(currentPage + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}</span>
      <Button variant="ghost" size="icon" onClick={() => turn("next")} disabled={!isBookOpen || currentPage === totalPages - 1} aria-label="Next page"><ChevronRight /></Button>
    </nav>
  </main>;
}