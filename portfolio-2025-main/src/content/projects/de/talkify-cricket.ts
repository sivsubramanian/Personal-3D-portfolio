import talkify0 from "../../../assets/images/projects/talkify-cricket/talkify-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Talkify & Cricket Scoreboard UI",
  theme: "dark",
  tags: ["figma", "uiux"],
  videoBorder: false,
  description:
    "Ein modernes UI/UX-Prototyping-Projekt in Figma: eine Echtzeit-Messaging-App ('Talkify') und ein dynamisches Cricket-Live-Scoreboard.<br/><br/>Entwickelt mit Fokus auf Ergonomie, kontrastreiche Dark-Theme-Farbwelten und flüssige Interaktionsmuster.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: talkify0,
        alt: "Talkify UI Prototyp",
        caption: "Figma UI/UX Prototyping",
      },
    },
  ],
} as const satisfies ProjectContent;
