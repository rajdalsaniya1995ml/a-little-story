import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChapterHeading({ hindi, english }: { hindi: string; english: string }) {
  return (
    <header className="chapter-heading">
      <span>{hindi}</span>
      <h2>{english}</h2>
      <i aria-hidden="true">◆</i>
    </header>
  );
}

export function HandwrittenNote({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("handwritten-note", className)}>{children}</span>;
}

export function MemoryPhoto({
  label,
  caption,
  memory,
  rotation = "left",
  compact = false,
}: {
  label: string;
  caption: string;
  memory: string;
  rotation?: "left" | "right" | "none";
  compact?: boolean;
}) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className={cn("memory-photo", `photo-${rotation}`, compact && "photo-compact", flipped && "is-flipped")}
      onClick={() => setFlipped((value) => !value)}
      aria-label={`${label}. Tap to ${flipped ? "see photo placeholder" : "read memory"}`}
    >
      <span className="photo-inner">
        <span className="photo-front">
          <span className="photo-image" role="img" aria-label={`${label} upload placeholder`}>
            <small>[UPLOAD MEMORY PHOTO]</small>
            <b>{label}</b>
          </span>
          <em>{caption}</em>
        </span>
        <span className="photo-back">{memory}</span>
      </span>
    </button>
  );
}

export function Envelope({ label, index }: { label: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      className={cn("envelope", open && "is-open")}
      onClick={() => setOpen((value) => !value)}
      aria-expanded={open}
      aria-label={`${open ? "Close" : "Open"} envelope: ${label}`}
    >
      <span className="envelope-note">
        <small>[DATE]</small>
        <b>[Memory {index + 1}]</b>
        <em>[Write this little memory here.]</em>
      </span>
      <span className="envelope-body"><span>{label}</span></span>
      <span className="envelope-flap" />
    </button>
  );
}

export function RevealCard({ children, number }: { children: ReactNode; number: number }) {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" className={cn("reveal-card", open && "is-open")} onClick={() => setOpen(!open)} aria-expanded={open}>
      <span className="reveal-front">{String(number).padStart(2, "0")}</span>
      <span className="reveal-back">{children}</span>
    </button>
  );
}

export function FoldedNote({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <button type="button" className={cn("folded-note", open && "is-open")} onClick={() => setOpen(!open)} aria-expanded={open}>
      <ChevronDown aria-hidden="true" />
      <span>{children}</span>
    </button>
  );
}