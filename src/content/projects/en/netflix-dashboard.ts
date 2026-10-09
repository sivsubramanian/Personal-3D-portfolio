import netflix0 from "../../../assets/images/projects/netflix-dashboard/netflix-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Netflix Analytics Dashboard",
  theme: "dark",
  tags: ["powerbi", "python", "sql", "pandas"],
  videoBorder: false,
  description:
    "An interactive executive business intelligence dashboard analyzing Netflix movies and TV shows from 1925 to 2021.<br/><br/>Extracted, cleaned, and transformed large streaming datasets using Power Query and Python. Formulated automated calculations, dynamic slicers, and interactive KPI cards to uncover critical shifts in content distribution, genres, ratings, and year-over-year release velocity.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: netflix0,
        alt: "Netflix Power BI Executive Dashboard",
        caption: "Power BI Executive Dashboard & Trends Visualization",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Insights & Architecture",
        items: [
          "<strong>Data Transformation & Cleaning:</strong> Used Power Query and Python to handle missing records, normalize categories, and structure 9,800+ titles.",
          "<strong>Interactive KPI Cards & Slicers:</strong> Implemented multi-dimensional filtering across release years, global countries, content ratings, and genres.",
          "<strong>Year-over-Year (YoY) Growth Trends:</strong> Visualized explosive content production trends and shift towards original international programming.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
