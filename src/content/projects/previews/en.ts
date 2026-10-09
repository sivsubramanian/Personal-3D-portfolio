import thumbnailRebook from "../../../assets/thumbnails/rebook.jpg";
import thumbnailNetflix from "../../../assets/thumbnails/netflix-dashboard.jpg";
import thumbnailTalkify from "../../../assets/thumbnails/talkify-cricket.jpg";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Rebook",
    slug: "rebook",
    thumbnail: thumbnailRebook,
    description: "Campus book exchange platform",
  },
  {
    title: "Netflix Analytics Dashboard",
    slug: "netflix-dashboard",
    thumbnail: thumbnailNetflix,
    description: "Interactive Power BI & Python analytics",
  },
  {
    title: "Talkify & Cricket Scoreboard UI",
    slug: "talkify-cricket",
    thumbnail: thumbnailTalkify,
    description: "High-fidelity Figma UI/UX prototyping",
  },
] as const satisfies ProjectPreview[];
