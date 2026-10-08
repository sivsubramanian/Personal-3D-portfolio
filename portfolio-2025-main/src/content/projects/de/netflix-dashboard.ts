import netflix0 from "../../../assets/images/projects/netflix-dashboard/netflix-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Netflix Analytics Dashboard",
  theme: "dark",
  tags: ["powerbi", "python", "sql", "pandas"],
  videoBorder: false,
  description:
    "Ein interaktives Business Intelligence Dashboard zur Analyse globaler Netflix-Streaming-Daten von 1925 bis 2021.<br/><br/>Bereinigung und Transformation komplexer Datensätze mit Power Query und Python zur Visualisierung von Genres, Ratings und Trends.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: netflix0,
        alt: "Netflix Power BI Dashboard",
        caption: "Power BI Executive Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
