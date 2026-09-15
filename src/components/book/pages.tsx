import { useState, type ReactNode } from "react";
import {
  Coffee,
  Cake,
  Gift,
  House,
  Heart,
  Leaf,
  Paperclip,
} from "lucide-react";
import {
  ChapterMark,
  CuteDoodle,
  FlipPhoto,
  FoldedNote,
  OrnamentDivider,
  PageBorder,
  Placeholder,
  Polaroid,
  WashiTape,
} from "./ornaments";

import firstMeetingPlace from "@/assets/First_Meeting_Place.jpg";
import ccdAfternoon from "@/assets/CCD_Afternoon.jpeg";
import birthdayWebsite from "@/assets/Birthday_Website.png";
import ganpatiBlessing from "@/assets/ganpati-blessing.png";
import friendshipDay from "@/assets/friendship-day.jpg";

const CHAPTERS = [
  { n: "01", deva: "शुरुआत", en: "The beginning" },
  { n: "02", deva: "बातें", en: "Our conversations" },
  { n: "03", deva: "यादें", en: "Little memories" },
  { n: "04", deva: "पल", en: "Little moments" },
  { n: "05", deva: "तुम्हारा जन्मदिन", en: "Your Birthday" },
  { n: "06", deva: "दोस्ती का दिन", en: "Friendship Day" },
  { n: "07", deva: "तुम्हारे घर की मुलाक़ात", en: "A visit to your home" },
  { n: "08", deva: "मुस्कान", en: "Things that made me smile" },
  { n: "09", deva: "ख़ास", en: "Things I remember about you" },
  { n: "10", deva: "एक चिट्ठी", en: "A letter" },
  { n: "11", deva: "आगे...", en: "To be continued..." },
];

function markProps(i: number) {
  const c = CHAPTERS[i]!;

  return { number: c.n, deva: c.deva, english: c.en };
}

const stop = (e: React.MouseEvent) => e.stopPropagation();

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-imperfections deckle-edge relative h-full w-full px-5 py-8 sm:px-6">
      <div className="relative z-10 h-full min-h-0">
        {children}
      </div>
    </div>
  );
}

/* ---------------- cover ---------------- */

function CoverPage() {
  return (
    <div className="cover-surface relative flex h-full flex-col items-center justify-center px-10 text-center">
      <div className="cloth-grain pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-5 border border-gold/30" />
      <div className="pointer-events-none absolute inset-[27px] border border-gold/14" />

    <h1 className="gold-foil font-deva relative mt-10 text-[2.1rem] leading-[1.35] sm:text-[2.6rem]">
      <span className="block whitespace-nowrap">एक छोटी सी</span>
      <span className="block whitespace-nowrap">कहानी</span>
    </h1>

      <p className="gold-foil font-display relative mt-6 text-[0.82rem] leading-relaxed tracking-[0.28em] uppercase sm:text-[0.95rem]">
        <span className="block whitespace-nowrap">EK CHHOTI SI</span>
        <span className="block whitespace-nowrap">KAHAANI</span>
      </p>

      <div className="relative mt-8 flex flex-col items-center">
      <div className="mb-7 opacity-90">
        <OrnamentDivider width="w-44" />
      </div>
    
      <p className="font-display max-w-[22ch] text-[0.82rem] leading-[1.8] tracking-[0.04em] text-gold-soft/60 italic">
        Four months. A few conversations. Many little memories.
      </p>

      <p className="font-hand mt-5 text-[0.92rem] leading-relaxed text-gold/90 max-sm:text-[0.78rem]">
        for <span className="font-display not-italic tracking-[0.12em]">Urvi</span>
      </p>
      <p className="font-hand mt-0.5 text-[0.78rem] italic text-gold/60 max-sm:text-[0.68rem]">
        from Raj
      </p>
    
      <p className="gold-foil font-guj mt-8 text-[0.72rem] tracking-[0.16em] opacity-80 max-sm:mt-6">
        એક નાની યાદોની ડાયરી
      </p>
    </div>
    </div>
  );
}

/* ---------------- front matter ---------------- */


function BlessingPage() {
  return (
    <PageShell>
      <PageBorder tone="gold" />

      <div className="flex h-full min-h-10 flex-col items-center justify-center px-2 text-center">
        <p
          className="font-deva text-[2rem] leading-none text-maroon max-sm:text-[1.6rem]"
          aria-label="Om"
        >
          ॐ
        </p>
        
        <div className="relative mt-3 max-sm:mt-1.5">
          <img
            src={ganpatiBlessing}
            alt="Illustration of Lord Ganesha in antique gold line art, blessing the beginning of the book"
            className="mx-auto h-36 w-auto max-sm:h-28"
          />

          <div
            className="absolute -inset-3 rounded-full border border-gold/20 max-sm:-inset-2"
            aria-hidden="true"
          />
        </div>

        <OrnamentDivider
          className="my-6 max-sm:my-3"
          width="w-36 max-sm:w-24"
          tone="gold"
        />

        <p
          className="font-deva max-w-[24ch] text-[1.15rem] leading-[1.9] text-ink
                     max-sm:text-[0.88rem] max-sm:leading-[1.55]"
        >
          ॐ सर्वे भवन्तु सुखिनः
          सर्वे सन्तु निरामयाः।
          सर्वे भद्राणि पश्यन्तु
          मा कश्चिद् दुःखभाग्भवेत्॥
        </p>
        
        <OrnamentDivider
          className="my-6 max-sm:my-3"
          width="w-28 max-sm:w-20"
          tone="gold"
        />

        <p
          className="font-hand max-w-[26ch] text-lg leading-relaxed text-ink/90
                     max-sm:text-[0.95rem] max-sm:leading-snug"
        >
          Some stories aren&apos;t written; they simply unfold, little by little.
        </p>
      </div>
    </PageShell>
  );
}

function ContentsPage() {
  return (
    <PageShell>
      <PageBorder tone="maroon" />

      <div className="flex h-full min-h-0 flex-col justify-center px-4 sm:px-7">
        <h2 className="font-display text-center text-2xl tracking-[0.28em] text-maroon uppercase max-sm:text-xl">
          Contents
        </h2>

        <OrnamentDivider
          className="mt-4 mb-7 max-sm:mt-3 max-sm:mb-5"
          width="w-32 max-sm:w-24"
        />

        <ol className="mx-auto w-full max-w-[34rem] space-y-4 max-sm:space-y-2.5">
          {CHAPTERS.map((c) => (
            <li
              key={c.n}
              className="flex min-w-0 items-baseline gap-3 max-sm:gap-2"
            >
              {/* Chapter number */}
              <span className="w-7 shrink-0 text-center font-sans text-[0.65rem] tracking-[0.15em] text-gold max-sm:w-6 max-sm:text-[0.5rem]">
                {c.n}
              </span>

              {/* Hindi chapter name */}
              <span className="font-deva shrink-0 text-lg leading-none text-maroon max-sm:w-[5.5rem] max-sm:text-[0.82rem]">
                {c.deva}
              </span>

              {/* Flexible divider */}
              <span className="h-px min-w-[1.5rem] flex-1 border-t border-dotted border-paper-edge" />

              {/* English chapter name */}
              <span className="font-display shrink-0 text-sm text-ink-soft italic max-sm:text-[0.62rem]">
                {c.en}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </PageShell>
  );
}

/* ---------------- 01 शुरुआत — developing polaroid ---------------- */

function BeginningPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col justify-start pt-4 sm:pt-6">
        <ChapterMark {...markProps(0)} />

        <div className="mx-auto mt-2 max-w-[38ch] text-center max-sm:mt-1">
          <p className="font-display text-[0.72rem] tracking-[0.22em] text-gold uppercase">
            For you
          </p>

          <OrnamentDivider
            className="my-4 max-sm:my-2.5"
            width="w-24 max-sm:w-20"
          />

          <div className="font-display text-[0.82rem] leading-[1.8] text-ink/90 max-sm:text-[0.7rem] max-sm:leading-[1.6]">
            <p>
              I still remember how unexpectedly our story began.
            </p>

            <p className="mt-2 max-sm:mt-1">
              It wasn&apos;t a movie-like meeting or some extraordinary moment.
              It started with something as simple as biodata.
            </p>

            <p className="mt-2 max-sm:mt-1">
              One of my relatives shared your biodata with my parents, and mine
              was shared with your parents. My parents already knew your family
              quite well, but I didn&apos;t know you.
            </p>

            <p className="mt-2 max-sm:mt-1">
              At that time, you were just a name on a biodata.
            </p>

            <p className="mt-2 max-sm:mt-1">
              I had no idea who you were, what you were like, or what it would
              feel like to actually meet you.
            </p>

            <p className="mt-2 max-sm:mt-1 font-hand text-base leading-relaxed text-maroon max-sm:text-[0.9rem]">
              Then came <span className="font-display">17 May 2026.</span>
            </p>

            <p className="mt-2 max-sm:mt-1">
              You and your parents came to Pune, and we met at your
              relative&apos;s place.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function BeginningPhotosPage() {
  return (
    <PageShell>
      <div className="flex h-full min-h-0 max-w-full flex-col items-center justify-center overflow-hidden px-2">
        {/* Date */}
        <p className="font-display text-[0.68rem] tracking-[0.28em] text-gold uppercase max-sm:text-[0.58rem]">
          17 May 2026 · Pune
        </p>

        {/* Place photo */}
        <div className="relative mt-3 w-[68%] shrink-0 max-sm:mt-2 max-sm:w-[72%]">
          <WashiTape
            className="-top-2 left-1/2 -translate-x-1/2"
            tone="saffron"
          />

          <div className="rotate-[-1.5deg] bg-paper p-2 pb-4 shadow-[0_10px_24px_-14px_oklch(0_0_0/0.5)] max-sm:p-1.5 max-sm:pb-3">
            <img
              src={firstMeetingPlace}
              alt="The place where we first met"
              className="aspect-[4/3] w-full object-cover"
            />

            <p className="font-hand mt-2 text-center text-base text-ink max-sm:mt-1.5 max-sm:text-sm">
              The place where we first met.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mt-3 max-w-[34ch] break-words text-center max-sm:mt-2">
          <p className="font-hand text-base leading-snug text-ink max-sm:text-sm">
            You came with your parents, and I came knowing almost nothing
            about the person I was about to meet.
          </p>

          <p className="font-display mt-2 text-[0.64rem] leading-relaxed text-ink-soft max-sm:mt-1.5 max-sm:text-[0.58rem]">
            Until that day, we were just two names connected by a biodata.
            That afternoon, for the first time, we became two people sitting
            across from each other.
          </p>
        </div>

        {/* Ending */}
        <div className="mt-2 shrink-0 text-center max-sm:mt-1.5">
          <p className="font-hand text-sm leading-snug text-maroon max-sm:text-xs">
            Two strangers.
          </p>

          <p className="font-hand text-sm leading-snug text-maroon max-sm:text-xs">
            One meeting.
          </p>

          <p className="font-display mt-1 max-w-full text-[0.54rem] leading-snug tracking-[0.14em] text-gold uppercase max-sm:text-[0.48rem]">
            And somehow, our story began here.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 02 बातें — folded notes ---------------- */
function ConversationsPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col">
        {/* Chapter title */}
        <div className="shrink-0">
          <ChapterMark {...markProps(1)} />
        </div>

        {/* Story */}
        <div className="mx-auto mt-5 min-h-0 max-w-[37ch] overflow-hidden px-6 max-sm:mt-3 max-sm:px-3">
          <div className="space-y-3 max-sm:space-y-2">
            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              I still remember that first meeting.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              I was a little nervous.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              After all, we were meeting for the first time, and neither of us
              really knew what to expect.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              But somehow, you made those first few conversations feel
              effortless.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              There was something easy about talking to you.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              We talked, we asked each other questions, and slowly, that
              initial nervousness began to fade.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              I remember leaving that meeting with a genuinely good feeling.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-ink max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              Nothing dramatic had happened. It was simply a good conversation
              with someone I had just met.
            </p>

            <p className="font-hand text-[1.02rem] leading-[1.55] text-maroon max-sm:text-[0.86rem] max-sm:leading-[1.4]">
              But somehow, it felt like things had gone well.
            </p>

            <div className="pt-1 text-center">
              <OrnamentDivider
                width="w-20 max-sm:w-16"
                tone="gold"
              />

              <p className="font-hand mt-2 text-base text-maroon max-sm:mt-1.5 max-sm:text-sm">
                Maybe that was the first little sign —
              </p>

              <p className="font-hand text-base leading-snug text-ink max-sm:text-sm">
                that getting to know you might not be as difficult
                as I had imagined.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}


function ConversationsQuotePage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col px-1 sm:px-2">
        {/* Page heading */}
        <div className="shrink-0 text-center">
          <p className="font-display text-[0.68rem] tracking-[0.28em] text-gold uppercase max-sm:text-[0.58rem]">
            20 May onward
          </p>

          <OrnamentDivider
            className="mt-4 mb-6 max-sm:mt-3 max-sm:mb-4"
            width="w-24 max-sm:w-20"
            tone="gold"
          />
        </div>

        {/* Story */}
        <div className="mx-auto min-h-0 max-w-[36ch] flex-1">
          <div className="space-y-4 max-sm:space-y-3">
            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              A few days later, on 20 May, our conversation continued.
            </p>

            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              From that day onward, we started talking on WhatsApp.
            </p>

            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              A few days later, our conversations slowly moved to phone calls
              too.
            </p>

            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              Sometimes it was just a few messages.
              Sometimes we ended up talking a little longer on a call.
              Sometimes it was simply a conversation about how our day had been.
            </p>

            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              We didn&apos;t talk for hours every day, and we didn&apos;t always
              have something important to say.
            </p>

            <p className="font-hand text-[1.05rem] leading-[1.6] text-ink max-sm:text-[0.9rem] max-sm:leading-[1.45]">
              We were simply getting to know each other, one conversation at a
              time.
            </p>
          </div>

          {/* Closing thought */}
          <div className="mt-4 text-center max-sm:mt-3">
            <OrnamentDivider
              className="mb-2 max-sm:mb-1"
              width="w-20 max-sm:w-16"
              tone="gold"
            />

            <p className="font-hand text-[1.05rem] leading-relaxed text-maroon max-sm:text-[0.9rem]">
              And little by little,
              <br />
              you became less of a stranger.
            </p>

            <p className="font-hand mt-4 text-[1.05rem] leading-relaxed text-ink max-sm:mt-3 max-sm:text-[0.9rem]">
              And I think that&apos;s where our conversations really began.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------------things we offen say -------------- */
function LittleThingsPage() {
  const phrases = [
    "Good morning 😊☀️",
    "Good morning 😊😊",
    "How did your day go?",
    "Acha tha , and yours?",
    "Had dinner?",
  ];

  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col px-1 sm:px-2">
        {/* Page heading */}
        <div className="shrink-0 text-center">
          <p className="font-display text-[0.68rem] tracking-[0.28em] text-gold uppercase max-sm:text-[0.58rem]">
            The little things we said
          </p>

          <p className="font-deva mt-2 text-base text-maroon max-sm:mt-1.5 max-sm:text-sm">
            छोटी छोटी बातें
          </p>

          <OrnamentDivider
            className="mt-4 mb-6 max-sm:mt-3 max-sm:mb-5"
            width="w-24 max-sm:w-20"
            tone="gold"
          />
        </div>

        {/* Intro */}
        <div className="mx-auto max-w-[34ch] text-center">
          <p className="font-hand text-lg leading-relaxed text-ink max-sm:text-base">
            Some conversations are remembered in the smallest things.
          </p>

          <p className="font-display mt-2 text-[0.68rem] leading-relaxed text-ink-soft max-sm:mt-1.5 max-sm:text-[0.6rem]">
            A few words, repeated often, somehow become familiar.
          </p>
        </div>

        {/* Little message fragments */}
        <div className="mx-auto mt-7 w-full max-w-[34ch] flex-1 max-sm:mt-5">
          <div className="space-y-3 max-sm:space-y-2.5">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[78%] px-4 py-2.5 shadow-[0_3px_10px_-7px_oklch(0_0_0/0.45)]
                    max-sm:px-3 max-sm:py-2 ${
                    index % 2 === 0
                      ? "rounded-t-xl rounded-br-xl bg-paper-deep"
                      : "rounded-t-xl rounded-bl-xl bg-maroon/10"
                  }`}
                >
                  <p className="font-hand text-base leading-snug text-ink max-sm:text-sm">
                    “{phrase}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="shrink-0 pb-1 pt-6 text-center max-sm:pt-5">
          <OrnamentDivider
            className="mb-1.5 max-sm:mb-1"
            width="w-20 max-sm:w-16"
            tone="gold"
          />

          <p className="font-hand text-base leading-relaxed text-maroon max-sm:text-sm">
            Funny how the smallest things
            <br />
            can become part of a story.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 03 यादें — flip photos ---------------- */
function MemoriesPage() {
  const memories = [
    {
      date: "23 May 2026 · 2:00 PM",
      title: "Our First Meet at Mumbai",
      place: "Café Coffee Day, Navi Mumbai",
      image: ccdAfternoon,
      text: "Almost two hours together. So many thoughts shared, so many things spoken. Time moved so quietly that it didn't feel like two hours at all.",
      rotate: "-1.5deg",
    },
    {
      date: "4th July 2026",
      title: "Made just for you",
      place: "A small website, made with a lot of thought",
      image: birthdayWebsite,
      text: "For your birthday, I wanted to do something a little different. So I made a little website especially for you. And knowing that you loved it made it all worth it.",
      rotate: "1.5deg",
    },
  ];

  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col">
        {/* Chapter heading */}
        <div className="shrink-0">
          <ChapterMark {...markProps(2)} />
        </div>

        {/* Memories */}
        <div className="mx-auto mt-5 grid min-h-0 w-full max-w-[38rem] flex-1 grid-cols-2 items-center gap-5 px-1 max-sm:mt-4 max-sm:gap-3">
          {memories.map((memory, index) => (
            <article
              key={index}
              className="flex min-h-0 flex-col"
              style={{ transform: `rotate(${memory.rotate})` }}
            >
              {/* Photo / visual */}
              <div className="bg-paper p-2 pb-3 shadow-[0_10px_24px_-14px_oklch(0_0_0/0.5)] max-sm:p-1.5 max-sm:pb-2.5">
                {memory.image ? (
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center bg-paper-deep">
                    <p className="px-3 text-center font-hand text-sm text-ink-soft max-sm:text-xs">
                      Photo / website screenshot
                    </p>
                  </div>
                )}

                <p className="font-hand mt-2 text-center text-base text-maroon max-sm:mt-1.5 max-sm:text-sm">
                  {memory.title}
                </p>
              </div>

              {/* Memory text */}
              <div className="mt-4 text-center max-sm:mt-3">
                <p className="font-display text-[0.58rem] tracking-[0.16em] text-gold uppercase max-sm:text-[0.5rem]">
                  {memory.date}
                </p>

                <p className="font-display mt-1 text-[0.62rem] italic text-ink-soft max-sm:text-[0.55rem]">
                  {memory.place}
                </p>

                <p className="font-hand mt-2 text-sm leading-relaxed text-ink max-sm:mt-1.5 max-sm:text-[0.78rem] max-sm:leading-snug">
                  {memory.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 04 पल — timeline ---------------- */
function MomentsPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="relative flex h-full min-h-0 flex-col overflow-hidden">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className="relative z-10 shrink-0 text-center">

          <ChapterMark {...markProps(3)} />

          <p
            className="
              mx-auto
              mt-1
              max-w-[40ch]
              font-hand
              text-[0.82rem]
              leading-[1.25]
              text-ink-soft
              max-sm:mt-0.5
              max-sm:text-[0.62rem]
            "
          >
            Some moments are small,
            <br />
            but they stay with you forever.
          </p>

          <OrnamentDivider
            className="mt-1.5"
            width="w-20 max-sm:w-14"
            tone="gold"
          />

        </header>


        {/* =====================================================
            SCRAPBOOK AREA
        ====================================================== */}
        <main
          className="
            relative
            min-h-0
            flex-1
            overflow-hidden
            px-2
            py-2
            max-sm:px-1
            max-sm:py-1.5
          "
        >

          {/* =================================================
              TOP LEFT DECORATION
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              left-2
              top-3
              z-0
              font-hand
              text-2xl
              text-gold/45
              max-sm:left-0
              max-sm:top-2
              max-sm:text-lg
            "
          >
            ❋
          </div>


          {/* =================================================
              MAIN CCD PAPER
          ================================================== */}
          <article
            className="
              absolute
              inset-2
              z-20
              max-sm:inset-1
            "
            style={{
              transform: "rotate(-1.2deg)",
            }}
          >

            {/* =================================================
                WHITE PAPER
            ================================================== */}
            <div
              className="
                relative
                flex
                h-full
                w-full
                flex-col
                overflow-hidden
                border
                border-paper-edge/70
                bg-paper
                px-9
                py-7
                shadow-[4px_9px_20px_-10px_rgba(60,40,20,0.6)]
                max-sm:px-5
                max-sm:py-4
              "
            >

              {/* =================================================
                  TAPE
              ================================================== */}
              <span
                className="
                  absolute
                  -top-3
                  left-1/2
                  z-30
                  h-6
                  w-[80px]
                  -translate-x-1/2
                  rotate-[1deg]
                  bg-saffron/25
                  shadow-[0_1px_2px_rgba(0,0,0,0.08)]
                  max-sm:-top-2
                  max-sm:h-5
                  max-sm:w-14
                "
              />


              {/* =================================================
                  HEADER INSIDE PAPER
              ================================================== */}
              <div className="shrink-0">

                {/* Coffee icon */}
                <Coffee
                  className="
                    h-9
                    w-9
                    stroke-[1.25]
                    text-maroon
                    max-sm:h-7
                    max-sm:w-7
                  "
                />

                {/* Date */}
                <p
                  className="
                    mt-2
                    font-display
                    text-[0.55rem]
                    tracking-[0.2em]
                    text-gold
                    uppercase
                    max-sm:mt-1.5
                    max-sm:text-[0.42rem]
                  "
                >
                  23 MAY 2026
                </p>

                {/* Title */}
                <h2
                  className="
                    mt-1
                    font-hand
                    text-[2rem]
                    leading-none
                    text-maroon
                    max-sm:mt-0.5
                    max-sm:text-[1.45rem]
                  "
                >
                  The CCD Meet
                </h2>

                {/* Underline */}
                <div
                  className="
                    mt-1
                    h-px
                    w-12
                    bg-gold/70
                    max-sm:mt-0.5
                    max-sm:w-9
                  "
                />

              </div>


              {/* =================================================
                  MEMORY TEXT
              ================================================== */}
              <div className="mt-1 shrink-0 max-sm:mt-1.5">
                  <p
                    className="
                      max-w-[52ch]
                      font-display
                      text-[0.78rem]
                      leading-[1.7]
                      text-ink-soft
                      max-sm:text-[0.58rem]
                      max-sm:leading-[1.6]
                    "
                  >
                  23 May 2026 was one of those simple days that didn't seem very
                  important while it was happening, but somehow stayed with me
                  afterwards. When I came to Mumbai for my company's annual meet,
                  we planned to meet. We met at CCD and spent some time together,
                  talking, laughing, and simply enjoying the afternoon.
                  <br />
                  There was nothing extraordinary about it, and maybe that's
                  what made it special. It was comfortable, easy, and genuinely
                  nice to spend that little time together. Looking back, I think
                  these are the moments that quietly become part of a story
                </p>

              </div>


              {/* =================================================
                  BOTTOM NOTE
              ================================================== */}
              <div
                className="
                  mt-4
                  shrink-0
                  border-t
                  border-paper-edge/70
                  pt-3
                  max-sm:mt-3
                  max-sm:pt-2
                "
              >

                <p
                  className="
                    font-hand
                    text-[1.05rem]
                    italic
                    leading-tight
                    text-ink
                    max-sm:text-[0.72rem]
                  "
                >
                  A little time together.
                </p>

              </div>


              {/* =================================================
                  HEART
              ================================================== */}
              <Heart
                className="
                  absolute
                  bottom-5
                  right-6
                  h-7
                  w-7
                  stroke-[1.15]
                  text-maroon/70
                  max-sm:bottom-3
                  max-sm:right-3
                  max-sm:h-5
                  max-sm:w-5
                "
              />


              {/* =================================================
                  SMALL BOTANICAL
              ================================================== */}
              <span
                className="
                  absolute
                  bottom-4
                  left-5
                  rotate-[-12deg]
                  font-hand
                  text-xl
                  text-leafgreen/45
                  max-sm:bottom-2
                  max-sm:left-2.5
                  max-sm:text-sm
                "
              >
                ❧
              </span>

            </div>
          </article>


          {/* =================================================
              SMALL GOLD DECORATION
          ================================================== */}
          <span
            className="
              pointer-events-none
              absolute
              bottom-4
              right-5
              z-30
              font-hand
              text-xl
              text-gold/60
              max-sm:bottom-2
              max-sm:right-2
              max-sm:text-base
            "
          >
            ✦
          </span>

        </main>


        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer
          className="
            relative
            z-10
            shrink-0
            pb-1
            pt-0.5
            text-center
          "
        >

          <OrnamentDivider
            className="mb-0.5"
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <p
            className="
              font-hand
              text-[0.68rem]
              text-maroon
              max-sm:text-[0.52rem]
            "
          >
            Little moments. Part of our story.
          </p>

        </footer>

      </div>
    </PageShell>
  );
}

/* ---------------- 04 पल — little moments ---------------- */
function BirthdayPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="relative flex h-full min-h-0 flex-col overflow-hidden">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className="relative z-10 shrink-0 text-center">
          <ChapterMark {...markProps(4)} />

          <p
            className="
              mx-auto
              mt-1
              max-w-[40ch]
              font-hand
              text-[0.82rem]
              leading-[1.25]
              text-ink-soft
              max-sm:mt-0.5
              max-sm:text-[0.62rem]
            "
          >
            Some days are special,
            <br />
            simply because of the person.
          </p>

          <OrnamentDivider
            className="mt-1.5"
            width="w-20 max-sm:w-14"
            tone="gold"
          />
        </header>

        {/* =====================================================
            SCRAPBOOK AREA
        ====================================================== */}
        <main
          className="
            relative
            min-h-0
            flex-1
            overflow-hidden
            px-2
            py-2
            max-sm:px-1
            max-sm:py-1.5
          "
        >

          {/* =================================================
              TOP LEFT DECORATION
          ================================================== */}
          <div
            className="
              pointer-events-none
              absolute
              left-2
              top-3
              z-10
              font-hand
              text-2xl
              text-gold/45
              max-sm:left-0
              max-sm:top-2
              max-sm:text-lg
            "
          >
            ✿
          </div>

          {/* =================================================
              BIRTHDAY PAPER
          ================================================== */}
          <article
            className="
              absolute
              inset-x-2
              top-1
              bottom-1
              z-20
              max-sm:inset-x-1
              max-sm:top-1
              max-sm:bottom-1
            "
            style={{
              transform: "rotate(1.1deg)",
            }}
          >

            <div
              className="
                relative
                flex
                min-h-full
                w-full
                flex-col
                overflow-visible
                border
                border-paper-edge/70
                bg-paper
                px-9
                py-7
                shadow-[4px_9px_20px_-10px_rgba(60,40,20,0.6)]
                max-sm:px-5
                max-sm:py-4
              "
            >

              {/* =================================================
                  TAPE
              ================================================== */}
              <span
                className="
                  absolute
                  -top-3
                  left-1/2
                  z-30
                  h-6
                  w-[80px]
                  -translate-x-1/2
                  rotate-[-2deg]
                  bg-saffron/25
                  shadow-[0_1px_2px_rgba(0,0,0,0.08)]
                  max-sm:-top-2
                  max-sm:h-5
                  max-sm:w-14
                "
              />

              {/* =================================================
                  BIRTHDAY HEADER
              ================================================== */}
              <div className="shrink-0">

                {/* Heart / birthday decoration */}
                <div
                  className="
                    font-hand
                    text-3xl
                    leading-none
                    text-maroon
                    max-sm:text-2xl
                  "
                >
                  ♡
                </div>

                {/* Date */}
                <p
                  className="
                    mt-2
                    font-display
                    text-[0.55rem]
                    tracking-[0.2em]
                    text-gold
                    uppercase
                    max-sm:mt-1.5
                    max-sm:text-[0.42rem]
                  "
                >
                  04 JULY 2026
                </p>

                {/* Title */}
                <h2
                  className="
                    mt-1
                    font-hand
                    text-[2rem]
                    leading-none
                    text-maroon
                    max-sm:text-[1.45rem]
                  "
                >
                  Your Birthday
                </h2>

                {/* Underline */}
                <div
                  className="
                    mt-1.5
                    h-px
                    w-14
                    bg-gold/70
                    max-sm:mt-1
                    max-sm:w-10
                  "
                />

              </div>

              {/* =================================================
                  BIRTHDAY STORY
              ================================================== */}
              <div
                className="
                  mt-2
                  shrink-0
                  max-sm:mt-1.5
                "
              >
                <p
                  className="
                    max-w-[52ch]
                    font-display
                    text-[0.78rem]
                    leading-[1.6]
                    text-ink-soft
                    max-sm:text-[0.58rem]
                    max-sm:leading-[1.5]
                  "
                >
                  We had only met a few days earlier, in the middle
                  of May, and your birthday came just 15–20 days
                  later. At that point, we didn't even know each
                  other very well. We were still getting to know
                  each other, so I wasn't really sure what to do
                  for your birthday. But I still wanted to do
                  something a little different for you, something
                  that would make your day feel special.

                  <br />

                  When I shared the website I had created for your
                  birthday, seeing your reaction and knowing that
                  you loved the surprise really put a smile on my
                  face.
                </p>
              </div>

            </div>
          </article>

          {/* =================================================
              OUTSIDE DECORATION
          ================================================== */}
          <span
            className="
              pointer-events-none
              absolute
              bottom-4
              right-5
              z-30
              font-hand
              text-xl
              text-gold/60
              max-sm:bottom-2
              max-sm:right-2
              max-sm:text-base
            "
          >
            ✦
          </span>

        </main>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer
          className="
            relative
            z-10
            shrink-0
            pb-1
            pt-0.5
            text-center
          "
        >

          <OrnamentDivider
            className="mb-0.5"
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <p
            className="
              font-hand
              text-[0.68rem]
              text-maroon
              max-sm:text-[0.52rem]
            "
          >
            Another little memory worth keeping.
          </p>

        </footer>

      </div>
    </PageShell>
  );
}

/* -------------------  Friendship day page  --------------------------*/
function FriendshipDayPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="relative flex h-full min-h-0 flex-col overflow-hidden">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className="relative z-10 shrink-0 text-center">
          <ChapterMark {...markProps(5)} />

          <p
            className="
              mx-auto
              mt-1
              max-w-[40ch]
              font-hand
              text-[0.82rem]
              leading-[1.25]
              text-ink-soft
              max-sm:mt-0.5
              max-sm:text-[0.62rem]
            "
          >
            Some friendships are built
            <br />
            through little moments.
          </p>

          <OrnamentDivider
            className="mt-1.5"
            width="w-20 max-sm:w-14"
            tone="gold"
          />
        </header>

        {/* =====================================================
            SCRAPBOOK AREA
        ====================================================== */}
        <main
          className="
            relative
            min-h-0
            flex-1
            overflow-hidden
            px-2
            py-2
            max-sm:px-1
            max-sm:py-1.5
          "
        >

          {/* TOP LEFT DECORATION */}
          <div
            className="
              pointer-events-none
              absolute
              left-2
              top-3
              z-10
              font-hand
              text-2xl
              text-gold/45
              max-sm:left-0
              max-sm:top-2
              max-sm:text-lg
            "
          >
            ❋
          </div>

          {/* =================================================
              MAIN MEMORY PAPER
          ================================================== */}
          <article
            className="
              absolute
              inset-x-2
              top-1
              bottom-1
              z-20
              max-sm:inset-x-1
              max-sm:top-1
              max-sm:bottom-1
            "
            style={{
              transform: "rotate(-1deg)",
            }}
          >
            <div
              className="
                relative
                flex
                min-h-full
                w-full
                flex-col
                overflow-visible
                border
                border-paper-edge/70
                bg-paper
                px-9
                py-7
                shadow-[4px_9px_20px_-10px_rgba(60,40,20,0.6)]
                max-sm:px-5
                max-sm:py-4
              "
            >

              {/* TAPE ON TOP */}
              <span
                className="
                  absolute
                  -top-3
                  left-1/2
                  z-30
                  h-6
                  w-[80px]
                  -translate-x-1/2
                  rotate-[2deg]
                  bg-saffron/25
                  shadow-[0_1px_2px_rgba(0,0,0,0.08)]
                  max-sm:-top-2
                  max-sm:h-5
                  max-sm:w-14
                "
              />

              {/* =================================================
                  FRIENDSHIP HEADER
              ================================================== */}
              <div className="shrink-0">

                <div
                  className="
                    font-hand
                    text-3xl
                    leading-none
                    text-maroon
                    max-sm:text-2xl
                  "
                >
                  ♡
                </div>

                {/* Date */}
                <p
                  className="
                    mt-2
                    font-display
                    text-[0.55rem]
                    tracking-[0.2em]
                    text-gold
                    uppercase
                    max-sm:mt-1.5
                    max-sm:text-[0.42rem]
                  "
                >
                  FRIENDSHIP DAY
                </p>

                {/* Title */}
                <h2
                  className="
                    mt-1
                    font-hand
                    text-[2rem]
                    leading-none
                    text-maroon
                    max-sm:text-[1.45rem]
                  "
                >
                  A Little Surprise
                </h2>

                {/* Underline */}
                <div
                  className="
                    mt-1.5
                    h-px
                    w-14
                    bg-gold/70
                    max-sm:mt-1
                    max-sm:w-10
                  "
                />

              </div>

              {/* =================================================
                  FRIENDSHIP STORY
              ================================================== */}
              <div
                className="
                  mt-2
                  shrink-0
                  max-sm:mt-1.5
                "
              >
                <p
                  className="
                    max-w-[52ch]
                    font-display
                    text-[0.78rem]
                    leading-[1.6]
                    text-ink-soft
                    max-sm:text-[0.58rem]
                    max-sm:leading-[1.5]
                  "
                >
                  By the time Friendship Day came around, we had known each other
                  a little longer. Things had started to feel more comfortable,
                  and our conversations had become easier and more natural.
                  <br />

                  A few days before, you had shared that you were going through a
                  difficult phase and weren’t really in the mood to connect with anyone.
                  I just wanted to do something small that might bring a smile to your face.
                  <br />

                  So on Friendship Day, I showed you the gift I had taken for you. You loved it,
                  and that honestly made me really happy. I even sent it to
                  your home so that you could have it with you.
                  <br />

                  Thank you for accepting my little gift — I’m just glad it brought
                  a little smile to your day. 🌸
                  <br />

                </p>
              </div>

            </div>
          </article>

        </main>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer
          className="
            relative
            z-10
            shrink-0
            pb-1
            pt-0.5
            text-center
          "
        >
          <OrnamentDivider
            className="mb-0.5"
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <p
            className="
              font-hand
              text-[0.68rem]
              text-maroon
              max-sm:text-[0.52rem]
            "
          >
            Little surprises. Little memories.
          </p>
        </footer>

      </div>
    </PageShell>
  );
}

function FriendshipDayPhotoPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col items-center justify-center px-3">

        <p className="font-display text-[0.62rem] tracking-[0.28em] text-gold uppercase">
          Friendship Day
        </p>

        <h2 className="mt-2 font-hand text-2xl text-maroon max-sm:text-xl">
          A little surprise ♡
        </h2>

        <OrnamentDivider
          className="my-4 max-sm:my-3"
          width="w-24 max-sm:w-20"
          tone="gold"
        />

        {/* Photo */}
        <div
          className="
            relative
            w-[82%]
            rotate-[-1.2deg]
            bg-white
            p-3
            pb-5
            shadow-[4px_10px_22px_-10px_rgba(60,40,20,0.6)]
            max-sm:w-[88%]
            max-sm:p-2
            max-sm:pb-4
          "
        >
          <WashiTape
            className="-top-3 left-1/2 -translate-x-1/2"
            tone="saffron"
          />

          <img
            src={friendshipDay}
            alt="Friendship Day memory"
            className="
              block
              h-auto
              max-h-[320px]
              w-full
              object-contain
              object-center
              max-sm:max-h-[230px]
            "
          />

          <p className="mt-3 text-center font-hand text-base italic text-ink max-sm:mt-2 max-sm:text-sm">
            A little surprise, picked just for you.
          </p>
        </div>

        <p className="mt-5 max-w-[30ch] text-center font-hand text-base leading-relaxed text-maroon max-sm:mt-4 max-sm:text-sm">
          Some moments are small,
          <br />
          but they stay with us.
          <br/>
        </p>
         <p className="mt-5 max-w-[30ch] text-center font-hand text-base leading-relaxed text-maroon max-sm:mt-4 max-sm:text-sm">
          Thank you for being such a wonderful person.
          <br />
          It’s amazing how much I’ve come to appreciate knowing you
          in just a few months. 😊
        </p>

      </div>
    </PageShell>
  );
}
/* ---- Visit to YOur Home ---- */
/* ---------------- Visit Your Home ---------------- */

function VisitYourHomePage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="relative flex h-full min-h-0 flex-col overflow-hidden">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className="relative z-10 shrink-0 text-center">
          <p
            className="
              font-display
              text-[0.62rem]
              tracking-[0.28em]
              text-gold
              uppercase
              max-sm:text-[0.55rem]
            "
          >
            A little visit
          </p>

          <h2
            className="
              mt-2
              font-hand
              text-2xl
              text-maroon
              max-sm:mt-1.5
              max-sm:text-xl
            "
          >
            Visiting Your Home
          </h2>

          <p
            className="
              mt-1
              font-deva
              text-base
              text-maroon/80
              max-sm:text-sm
            "
          >
            तुम्हारे घर की एक याद
          </p>

          <OrnamentDivider
            className="mt-3 max-sm:mt-2"
            width="w-20 max-sm:w-14"
            tone="gold"
          />
        </header>

        {/* =====================================================
            STORY
        ====================================================== */}
        <main
          className="
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            overflow-hidden
            px-5
            py-4
            max-sm:px-3
            max-sm:py-2
          "
        >
          <div className="max-w-[43ch] text-center">

            {/* First paragraph */}
            <p
              className="
                font-hand
                text-[1.02rem]
                leading-[1.6]
                text-ink
                max-sm:text-[0.8rem]
                max-sm:leading-[1.5]
              "
            >
              On 22nd August, you invited me to Mumbai to visit your home.
              After almost three months, we were meeting in person again.
            </p>

            {/* Second paragraph */}
            <p
              className="
                mt-4
                font-hand
                text-[1.02rem]
                leading-[1.6]
                text-ink
                max-sm:mt-3
                max-sm:text-[0.8rem]
                max-sm:leading-[1.5]
              "
            >
              We had a little conversation, I met your parents, and spent
              some time with your family. It was simple, comfortable, and
              really nice to be there again.
            </p>

            {/* Third paragraph */}
            <p
              className="
                mt-4
                font-hand
                text-[1.02rem]
                leading-[1.6]
                text-ink
                max-sm:mt-3
                max-sm:text-[0.8rem]
                max-sm:leading-[1.5]
              "
            >
              And thank you for the Gujarati snacks —
              dhokla and khandvi.
              I genuinely enjoyed them. ♡
            </p>

            {/* Divider */}
            <OrnamentDivider
              className="my-5 max-sm:my-4"
              width="w-20 max-sm:w-14"
              tone="gold"
            />

            {/* Emotional ending */}
            <p
              className="
                font-hand
                text-[1.15rem]
                italic
                leading-relaxed
                text-maroon
                max-sm:text-[0.88rem]
              "
            >
              That day, for a little while,
              <br />
              your home felt like home to me.
            </p>

          </div>
        </main>

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer
          className="
            relative
            z-10
            shrink-0
            pb-1
            pt-0.5
            text-center
          "
        >
          <OrnamentDivider
            className="mb-0.5"
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <p
            className="
              font-hand
              text-[0.68rem]
              text-maroon
              max-sm:text-[0.52rem]
            "
          >
            A visit worth remembering.
          </p>
        </footer>

      </div>
    </PageShell>
  );
}

/* ---------------- 08 मुस्कान — tick list ---------------- */
function SmilePage() {
  const [ticked, setTicked] = useState<number[]>([]);

  const toggle = (i: number) =>
    setTicked((t) =>
      t.includes(i) ? t.filter((x) => x !== i) : [...t, i]
    );

  const smiles = [
    "Your random messages that somehow made my day better",
    "Calling me “gadhedo” 😄 when I gave you the Friendship Day gift",
    "The way you made me feel at home when I visited Mumbai",
  ];

  return (
    <PageShell>
      <PageBorder tone="maroon" />

      <div className="flex h-full flex-col justify-center gap-5">
        <ChapterMark {...markProps(7)} />

        <p className="font-hand px-4 text-center text-lg text-ink-soft">
          Some smiles came from the smallest things.
          <br />
          These are a few I still remember. ❤️
        </p>

        <ul className="space-y-3 px-2" onClick={stop}>
          {smiles.map((smile, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-baseline gap-3 text-left"
              >
                <span
                  className={`font-hand w-4 text-lg ${
                    ticked.includes(i)
                      ? "text-maroon"
                      : "text-gold/50"
                  }`}
                >
                  {ticked.includes(i) ? "✓" : "✧"}
                </span>

                <span
                  className={`font-hand flex-1 border-b border-dotted border-paper-edge pb-1 text-lg transition-colors ${
                    ticked.includes(i)
                      ? "text-ink-soft line-through decoration-maroon/50"
                      : "text-ink"
                  }`}
                >
                  {smile}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

/* ---------------- 09 ख़ास — peel cards ---------------- */
function AboutYouPage() {
  const memories = [
    "You are honest, and I really respect that about you.",
    "One thing I genuinely appreciate about you is how naturally you make people feel comfortable.",
    "I appreciate how openly you share what you think and feel.",
    "You have a way of making even simple conversations feel special.",
    "Even when you were going through a tough time, you still always talked to me so nicely.",
  ];

  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col">
        <ChapterMark {...markProps(8)} />

        <div className="mx-auto mt-4 grid w-full max-w-[38rem] min-h-0 flex-1 grid-cols-2 gap-3 px-2 max-sm:mt-3 max-sm:gap-2">
          
          {memories.map((memory, i) => (
            <article
              key={i}
              className={`
                relative
                flex
                min-h-0
                flex-col
                justify-center
                border
                border-paper-edge/80
                bg-paper
                p-3
                shadow-[2px_5px_12px_-8px_rgba(60,40,20,0.6)]
                transition-transform
                hover:-translate-y-1
                max-sm:p-2.5
                ${i === 0 ? "rotate-[-1deg]" : ""}
                ${i === 1 ? "rotate-[1deg]" : ""}
                ${i === 2 ? "rotate-[0.5deg]" : ""}
                ${i === 3 ? "rotate-[-1.2deg]" : ""}
                ${i === 4 ? "rotate-[1deg] col-span-2 mx-auto w-[60%] max-sm:w-[75%]" : ""}
              `}
            >
              {/* Small number */}
              <span
                className="
                  absolute
                  right-2
                  top-2
                  font-display
                  text-[0.5rem]
                  tracking-[0.15em]
                  text-gold
                  max-sm:text-[0.42rem]
                "
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Small decoration */}
              <span className="mb-1 font-hand text-base text-maroon/60 max-sm:text-sm">
                ♡
              </span>

              {/* Memory */}
              <p
                className="
                  font-hand
                  text-[0.82rem]
                  leading-[1.35]
                  text-ink
                  max-sm:text-[0.68rem]
                  max-sm:leading-[1.3]
                "
              >
                {memory}
              </p>

              {/* Bottom line */}
              <div className="mt-2 h-px w-8 bg-gold/40" />
            </article>
          ))}

        </div>

        <div className="shrink-0 pb-1 pt-3 text-center max-sm:pt-2">
          <OrnamentDivider
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <p className="mt-1 font-hand text-[0.68rem] text-maroon max-sm:text-[0.55rem]">
            A few things I remember about you.
          </p>
        </div>
      </div>
    </PageShell>
  );
}

/* ---------------- 10 आगे... — letter ---------------- */
function LetterPage() {
  const [open, setOpen] = useState(false);

  return (
    <PageShell>
      <PageBorder tone="maroon" />

      <div
        className="flex h-full min-h-0 flex-col justify-center gap-5"
        onClick={stop}
      >
        <ChapterMark {...markProps(9)} />

        {open ? (
          <div className="anim-unfold mx-auto w-full max-w-[38ch] px-2">
            <div
              className="
                relative
                border
                border-paper-edge/70
                bg-paper
                px-6
                py-5
                shadow-[2px_6px_16px_-10px_rgba(60,40,20,0.5)]
                max-sm:px-4
                max-sm:py-4
              "
            >
              {/* Decoration */}
              <span className="absolute right-3 top-2 font-hand text-lg text-gold/40">
                ❧
              </span>

              {/* Letter */}
              <div className="space-y-1.5">
                <p className="font-hand text-lg text-maroon max-sm:text-base">
                  Dear Urvi,
                </p>

                <p className="font-hand text-base leading-[1.55] text-ink max-sm:text-[0.78rem]">
                  I don't really know how to put everything we've shared over
                  these few months into words.
                </p>

                <p className="font-hand text-base leading-[1.55] text-ink max-sm:text-[0.78rem]">
                  Four months may not sound like a very long time, but somehow
                  they have given me so many little memories to keep. From our
                  first meeting to our conversations, the little surprises,
                  the laughter, and the moments we've spent together — each one
                  has quietly become a part of my story.
                </p>

                <p className="font-hand text-base leading-[1.55] text-ink max-sm:text-[0.78rem]">
                  I am genuinely glad that I got the chance to know you. I
                  appreciate the way you talk, the way you share your thoughts,
                  and the comfort that slowly grown between us.
                </p>

                <p className="font-hand text-base leading-[1.55] text-ink max-sm:text-[0.78rem]">
                  I don't know exactly what the future will look like, and
                  perhaps that's okay. Some stories are better when they are
                  allowed to unfold naturally, one little moment at a time.
                </p>

                <p className="font-hand text-base leading-[1.55] text-maroon max-sm:text-[0.78rem]">
                  For now, I just wanted you to know that these little memories
                  mean something to me.
                </p>

                <p className="font-hand text-base leading-[1.55] text-ink max-sm:text-[0.78rem]">
                  Thank you for being a part of them.
                </p>

                <div className="pt-2 text-right">
                  <p className="font-hand text-base italic text-ink-soft max-sm:text-sm">
                    With a smile,
                  </p>

                  <p className="font-hand text-xl text-maroon max-sm:text-lg">
                    Raj ♡
                  </p>
                </div>
              </div>
            </div>

            {/* Close / fold again */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                mx-auto
                mt-3
                block
                font-sans
                text-[0.55rem]
                tracking-[0.25em]
                text-ink-soft
                uppercase
                hover:text-maroon
              "
            >
              fold the letter
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="
              relative
              mx-auto
              flex
              h-36
              w-4/5
              max-w-[22rem]
              items-end
              justify-center
              bg-paper-deep
              pb-4
              shadow-[0_10px_20px_-12px_oklch(0_0_0/0.45)]
              transition-transform
              hover:-translate-y-1
              max-sm:h-32
            "
          >
            {/* Envelope lines */}
            <span className="absolute inset-x-0 top-1/3 h-px bg-paper-edge/70" />
            <span className="absolute inset-x-0 top-2/3 h-px bg-paper-edge/70" />

            {/* Seal */}
            <span
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-maroon
                text-gold-soft
                shadow-[0_4px_10px_-4px_oklch(0_0_0/0.6)]
              "
            >
              <span className="font-display text-sm text-gold/60">U</span>
            </span>

            <span
              className="
                font-sans
                text-[0.58rem]
                tracking-[0.3em]
                text-brown/70
                uppercase
              "
            >
              unfold the letter
            </span>
          </button>
        )}
      </div>
    </PageShell>
  );
}


function WishesPage() {
  const wishes = [
    "I wish you plenty of happiness — even on the most ordinary days.",
    "I wish you success in everything you genuinely care about.",
    "I wish you plenty of reasons to smile, laugh, and enjoy the little things.",
    "I wish you beautiful experiences, new places, and memories worth keeping.",
    "And most importantly, I wish you always stay exactly the person you are — genuine, kind, and wonderfully you.",
  ];

  const icons = ["🌸", "✨", "😊", "🌷", "💫"];

  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col px-4 py-4 sm:px-6 sm:py-7">

        {/* Top decoration */}
        <div className="shrink-0 text-center">
          <OrnamentDivider
            width="w-16 max-sm:w-12"
            tone="gold"
          />

          <h2 className="mt-3 font-hand text-2xl leading-tight text-ink sm:mt-5 sm:text-3xl">
            A Few Wishes for You
          </h2>

          <p className="mt-1 font-hand text-xs italic text-ink-soft/60 sm:text-base">
            Just a few things I genuinely wish for you...
          </p>
        </div>

        {/* Wishes */}
        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center py-2 sm:py-5">

          {wishes.map((wish, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 border-b border-gold/15 px-1.5 py-2.5 last:border-b-0 sm:gap-3 sm:py-3.5"
            >
              <span className="mt-0.5 shrink-0 text-sm sm:text-lg">
                {icons[index]}
              </span>

              <p className="font-hand text-[0.82rem] leading-[1.22rem] text-ink-soft sm:text-base sm:leading-6">
                {wish}
              </p>
            </div>
          ))}

        </div>

        {/* Small decorative ending */}
        <div className="shrink-0 pb-1 text-center sm:pb-2">
          <OrnamentDivider
            width="w-12 max-sm:w-10"
            tone="gold"
          />
        </div>

      </div>
    </PageShell>
  );
}

function FutureMemoriesPage() {
  return (
    <PageShell>
      <PageBorder />

      <div className="flex h-full min-h-0 flex-col">
        {/* Chapter heading */}
        <div className="shrink-0">
          <ChapterMark {...markProps(10)} />
        </div>

        {/* Main content */}
        <div className="flex min-h-0 flex-1 flex-col items-center px-5 text-center">

          <OrnamentDivider
            className="mt-5"
            width="w-24 max-sm:w-20"
            tone="gold"
          />

          {/* Main thought */}
          <div className="mt-8 max-w-md">
            <p className="gold-foil font-hand text-[1.15rem] leading-relaxed sm:text-[1.25rem]">
              Some pages are left blank
              <br />
              for memories that are yet to come.
            </p>

            <p className="mt-5 font-hand text-base italic leading-relaxed text-ink-soft/60 max-sm:text-sm">
              No need to know what comes next.
              <br />
              Some of the nicest moments
              <br />
              are the ones we don't plan.
            </p>
          </div>

          {/* Open space — keeps the page feeling like a blank scrapbook page */}
          <div className="flex-1 w-full" />

          {/* Doodle + closing note */}
          <div className="flex flex-col items-center pb-6">
            <CuteDoodle className="h-36 w-36 text-ink/55 max-sm:h-28 max-sm:w-28" />

            <OrnamentDivider
              className="mt-4"
              width="w-14 max-sm:w-12"
              tone="gold"
            />

            <p className="mt-4 font-hand text-sm italic text-ink-soft/55 max-sm:text-xs">
              A little space for whatever comes next...
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}


function EndPage() {
  return (
    <div className="cover-surface relative flex h-full flex-col items-center justify-center px-10 text-center">
      {/* Cloth texture */}
      <div className="cloth-grain pointer-events-none absolute inset-0 opacity-70" />

      {/* Double gold border */}
      <div className="pointer-events-none absolute inset-5 border border-gold/30" />
      <div className="pointer-events-none absolute inset-[27px] border border-gold/14" />

    </div>
  );
}



export const PAGES: Array<{ node: ReactNode; cover?: boolean }> = [
  { node: <CoverPage />, cover: true },
  { node: <BlessingPage /> },
  { node: <ContentsPage /> },
  { node: <BeginningPage /> },
  { node: <BeginningPhotosPage /> },
  { node: <ConversationsPage /> },
  { node: <ConversationsQuotePage /> },
  { node: <LittleThingsPage  /> },
  { node: <MemoriesPage /> },
  { node: <MomentsPage /> },
  { node: <BirthdayPage />},
  { node: <FriendshipDayPage /> },
  { node: <FriendshipDayPhotoPage /> },
  { node: <VisitYourHomePage /> },
  { node: <SmilePage /> },
  { node: <AboutYouPage /> },
  { node: <LetterPage /> },
  { node: <WishesPage /> },
  { node: <FutureMemoriesPage /> },
  { node: <EndPage /> },
  
];
