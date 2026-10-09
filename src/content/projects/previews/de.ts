import thumbnailRebook from "../../../assets/thumbnails/rebook.jpg";
import thumbnailNetflix from "../../../assets/thumbnails/netflix-dashboard.jpg";
import thumbnailTalkify from "../../../assets/thumbnails/talkify-cricket.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Rebook",
    slug: "rebook",
    thumbnail: thumbnailRebook,
    description: "Campus-Büchertausch-Plattform",
  },
  {
    title: "Netflix Analytics Dashboard",
    slug: "netflix-dashboard",
    thumbnail: thumbnailNetflix,
    description: "Interaktives Power BI & Python Dashboard",
  },
  {
    title: "Talkify & Cricket Scoreboard UI",
    slug: "talkify-cricket",
    thumbnail: thumbnailTalkify,
    description: "High-Fidelity Figma UI/UX Prototypen",
  },
] as const satisfies ProjectPreview[];
