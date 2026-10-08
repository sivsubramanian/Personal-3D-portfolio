import rebook0 from "../../../assets/images/projects/rebook/rebook-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Rebook",
  theme: "light",
  tags: ["fullstack", "javascript", "node", "uiux"],
  videoBorder: false,
  description:
    "Rebook ist eine Campus-Plattform für den Büchertausch und -handel von Studierenden.<br/><br/>Als Lead Developer konzipierte und implementierte ich die Full-Stack-Architektur für strukturierte Buchlisten, Filterfunktionen und sichere Tauschprozesse.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: rebook0,
        alt: "Rebook Benutzeroberfläche",
        caption: "Campus Buchtausch Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
