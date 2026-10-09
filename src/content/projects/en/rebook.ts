import rebook0 from "../../../assets/images/projects/rebook/rebook-0.jpg";
import type { ProjectContent } from "../../types";

export default {
  title: "Rebook",
  theme: "light",
  tags: ["fullstack", "javascript", "node", "uiux"],
  videoBorder: false,
  description:
    "Rebook is a dedicated campus book exchange and trading platform engineered for university students.<br/><br/>As the Lead Developer, I designed and developed the full-stack architecture enabling seamless listing, filtering, and peer-to-peer book exchanges. Applied modern UI/UX principles to provide an intuitive, trustworthy user experience that drove high engagement and adoption.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: rebook0,
        alt: "Rebook Platform Interface",
        caption: "Campus Book Trading Dashboard & Search UI",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Highlights",
        items: [
          "<strong>Full-Stack Development:</strong> Built end-to-end functionality including textbook cataloging, condition tags, and search filters.",
          "<strong>Student-Centered UI/UX:</strong> Applied user-friendly design patterns to ensure high adoption rates and intuitive trading workflows.",
          "<strong>Secure Exchange Workflows:</strong> Streamlined verification and peer-to-peer communication between university buyers and sellers.",
        ],
      },
    },
  ],
} as const satisfies ProjectContent;
