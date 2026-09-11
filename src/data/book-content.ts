export type QuizQuestion = {
  question: string;
  choices: string[];
  answer: number;
};

export const bookContent = {
  titleHindi: "एक छोटी सी कहानी",
  titleEnglish: "EK CHHOTI SI KAHAANI",
  subtitle: ["Four months.", "A few conversations.", "Many little memories."],
  coverNote: "एक नन्ही यादों की डायरी",
  beginning: {
    date: "[DATE]",
    heading: "[How our conversations began]",
    body: "[Write the actual story here.]",
    note: "[Small personal note]",
  },
  conversations: [
    "[A memorable conversation]",
    "[Something funny we talked about]",
    "[A completely random topic]",
    "[A conversation that stayed in my mind]",
  ],
  photos: Array.from({ length: 5 }, (_, index) => ({
    label: `PHOTO 0${index + 1}`,
    date: "[DATE]",
    caption: "[Why I wanted to remember this]",
    memory: "[Memory behind this photo]",
  })),
  moments: [
    "[Something she said]",
    "[Something funny]",
    "[A small moment that made me smile]",
    "[Something unexpected]",
  ],
  smiles: Array.from({ length: 6 }, () => "[Something about her that made me smile]"),
  envelopes: [
    "One little memory",
    "Remember this?",
    "Something I saved",
    "A moment worth keeping",
    "Open me",
  ],
  observations: [
    "[A small thing I noticed about you]",
    "[Something she likes]",
    "[Something she once said]",
    "[A little detail I remember]",
    "[Something that makes her different]",
    "[A habit worth remembering]",
  ],
  quiz: Array.from({ length: 5 }, (_, index): QuizQuestion => ({
    question: `[Memory question ${index + 1}]`,
    choices: ["[Choice A]", "[Choice B]", "[Choice C]"],
    answer: index % 3,
  })),
  mumbai: "[Write something personal about Mumbai or something she loves about Mumbai.]",
  finalLetter: "[Write final personal letter here.]",
  finalSurprise: "[Optional final surprise message]",
} as const;