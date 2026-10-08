import talkify0 from "../../../assets/images/projects/talkify-cricket/talkify-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Talkify & Cricket Scoreboard UI",
  theme: "dark",
  tags: ["figma", "uiux"],
  videoBorder: false,
  description:
    "A high-fidelity mobile experience design suite built in Figma featuring Talkify (a next-gen real-time chat application) and an immersive live sports broadcast cricket scoreboard.<br/><br/>Engineered detailed design systems, dark-mode visual hierarchy, micro-interactions, ball-by-ball match analytics widgets, and seamless conversational workflows focused on accessibility and viewer engagement.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: talkify0,
        alt: "Talkify Chat App & Live Cricket Scoreboard UI",
        caption: "Figma High-Fidelity UI Prototypes & Design System",
      },
    },
    {
      type: "list",
      props: {
        title: "Design System & UX Focus",
        items: [
          "<strong>Talkify Messaging UI:</strong> Crafted sleek conversation threads, multimedia sharing previews, and clean active status indicators.",
          "<strong>Broadcast Cricket Scoreboard:</strong> Designed live ball tracking, bowler & batter statistics, strike rates, run projections, and visual charts.",
          "<strong>Design Tokens & Ergonomics:</strong> Applied strict contrast ratios, cohesive dark-theme palettes, and tactile thumb-zone touch targets.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
