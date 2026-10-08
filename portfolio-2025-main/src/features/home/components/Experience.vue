<script setup lang="ts">
import Banner from "../../../components/Banner.vue";
import { t } from "../../../i18n/utils/translate";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type?: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

interface EducationItem {
  title: string;
  institution: string;
  grade: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Mediant Labs",
    role: "Project Coordinator Trainee",
    period: "June 2026 – Present",
    description:
      "Supporting project coordination, process tracking, QA workflows, reporting, and technology-driven process improvements. Working with data, AI tools, dashboards, and application development to improve project visibility and operational efficiency. Involved in building and enhancing internal solutions based on business and project requirements.",
    tags: ["Project Coordination", "Process Tracking", "QA Workflows", "AI Tools", "Dashboards"],
  },
  {
    company: "Mahi King Cricket Academy",
    role: "Cricket Coach",
    type: "Part-time",
    period: "Present",
    description:
      "Played professional cricket for more than 10 years, now being a cricket coach training 15+ budding cricketers.",
    highlights: [
      "Played professional cricket for more than 10 years across competitive circuits.",
      "Coaching and mentoring 15+ budding cricketers in technique, discipline, and match tactics.",
      "Developing tailored batting, bowling, and physical conditioning drill programs.",
    ],
    tags: ["Sports Coaching", "Mentorship", "Team Leadership", "Athletic Training"],
  },
  {
    company: "Synergy Marine Group",
    role: "Technology Intern (Data & Business Systems)",
    period: "Jan 2026 – April 2026",
    description:
      "Collaborated within the Technology Dept. in procurement reporting, bridging the gap between business requirements and technical AI solutions. Managed vendor data and maritime supply chain workflows within the Technology Dept.",
    tags: ["Data & Business Systems", "Procurement Reporting", "Supply Chain", "AI Solutions"],
  },
  {
    company: "Industrial Design & Animations",
    role: "Data Analytics Intern",
    period: "August 2025",
    description:
      "Synthesized complex datasets to provide visual reports, aiding in the optimization of design and animation project timelines. Collaborated with cross-functional teams to identify key performance indicators (KPIs) and improve data reporting accuracy.",
    tags: ["Data Analytics", "KPIs Reporting", "Dataset Synthesis", "Cross-Functional"],
  },
];

const educationList: EducationItem[] = [
  {
    title: "B.Tech in Artificial Intelligence & Data Science",
    institution: "DMI College of Engineering, Chennai",
    grade: "CGPA: 7.8",
  },
  {
    title: "Higher Secondary Certificate (HSC 12th)",
    institution: "AVM Rajeswari Matriculation Hr. Sec. School",
    grade: "66.8%",
  },
  {
    title: "Secondary School Leaving Certificate (SSLC 10th)",
    institution: "St. Anns Matriculation Higher Secondary School",
    grade: "65.8%",
  },
];

const TAG_ICONS: Record<string, string> = {
  "Project Coordination":
    "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16 M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z",
  "Process Tracking": "M22 12h-4l-3 9L9 3l-3 9H2",
  "QA Workflows": "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M9 12l2 2 4-4",
  "AI Tools":
    "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z",
  Dashboards: "M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3",
  "Sports Coaching":
    "M6 9H4.5a2.5 2.5 0 0 1 0-5H6 M18 9h1.5a2.5 2.5 0 0 0 0-5H18 M4 22h16 M10 14.66V17a1 1 0 0 1-1 1H8v3h8v-3h-1a1 1 0 0 1-1-1v-2.34 M6 4h12v5a6 6 0 0 1-12 0V4z",
  Mentorship:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  "Team Leadership":
    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  "Athletic Training": "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  "Data & Business Systems":
    "M3 5c0-1.66 4.03-3 9-3s9 1.34 9 3-4.03 3-9 3-9-1.34-9-3z M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5 M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  "Procurement Reporting":
    "m16.5 9.4-9-5.19 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.29 7 12 12 20.71 7 M12 22V12",
  "Supply Chain":
    "m16.5 9.4-9-5.19 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.29 7 12 12 20.71 7 M12 22V12",
  "AI Solutions":
    "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z",
  "Data Analytics": "M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3",
  "KPIs Reporting": "M3 3v18h18 M18 17V9 M13 17V5 M8 17v-3",
  "Dataset Synthesis":
    "M3 5c0-1.66 4.03-3 9-3s9 1.34 9 3-4.03 3-9 3-9-1.34-9-3z M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5 M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3",
  "Cross-Functional":
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
};

const getTagIconPath = (tag: string): string => {
  return (
    TAG_ICONS[tag] ||
    "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
  );
};
</script>

<template>
  <div class="experience-section">
    <!-- Header -->
    <div class="grid">
      <div class="experience-title">
        <Banner class="experience-title-banner" copy="CAREER" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("experience") }}</h2>
      </div>
    </div>

    <!-- Experience Cards -->
    <div class="grid">
      <div class="experience-list">
        <div v-for="exp in experiences" :key="exp.company" class="experience-card">
          <div class="experience-card-header">
            <div>
              <div class="experience-card-company-wrap">
                <h3 class="experience-card-company">{{ exp.company }}</h3>
                <span v-if="exp.type" class="experience-card-type">{{ exp.type }}</span>
              </div>
              <p class="experience-card-role">{{ exp.role }}</p>
            </div>
            <span class="experience-card-period">{{ exp.period }}</span>
          </div>
          <p class="experience-card-desc">{{ exp.description }}</p>
          <ul v-if="exp.highlights && exp.highlights.length" class="experience-card-highlights">
            <li v-for="(highlight, hIdx) in exp.highlights" :key="hIdx">{{ highlight }}</li>
          </ul>
          <div class="experience-card-tags">
            <span v-for="tag in exp.tags" :key="tag" class="experience-tag">
              <svg
                class="experience-tag-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path :d="getTagIconPath(tag)" />
              </svg>
              <span class="experience-tag-text">{{ tag }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Header -->
    <div class="grid education-grid-header">
      <div class="experience-title">
        <Banner class="experience-title-banner" copy="ACADEMICS" size="sm" animated />
        <h2 class="experience-title-copy">{{ t("education") }}</h2>
      </div>
    </div>

    <!-- Education Cards -->
    <div class="grid">
      <div class="education-list">
        <div v-for="edu in educationList" :key="edu.institution" class="education-card">
          <div class="education-card-top">
            <h3 class="education-card-title">{{ edu.title }}</h3>
            <span class="education-card-grade">{{ edu.grade }}</span>
          </div>
          <p class="education-card-inst">{{ edu.institution }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.experience-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  margin-top: var(--space-xxl);

  @include mixins.mq("md") {
    gap: var(--space-xxl);
    margin-top: var(--space-xxxl);
  }
}

.education-grid-header {
  margin-top: var(--space-lg);
}

.experience-title {
  position: relative;
  padding-top: var(--space-md);
  grid-column: 1 / 13;

  @include mixins.mq("md") {
    grid-column: 1 / 10;
  }

  @include mixins.mq("lg") {
    grid-column: 3 / 8;
  }

  &-copy {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-banner {
    position: absolute;
    top: 0;
    left: -8px;
    transform: translate(0, -20%) rotate(-4deg);

    @include mixins.mq("lg") {
      left: -16px;
      transform: translate(0, -20%) rotate(-6deg);
    }
  }
}

.experience-list {
  grid-column: 1 / 13;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  @include mixins.mq("lg") {
    grid-column: 3 / span 8;
  }
}

.experience-card {
  background: var(--color-beige-500);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-xl);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 32px -4px rgba(0, 0, 0, 0.09), 0 4px 12px -2px rgba(0, 0, 0, 0.04);
  }

  &-header {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs);

    @include mixins.mq("sm") {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  &-company-wrap {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    flex-wrap: wrap;
  }

  &-type {
    font-size: var(--font-size-xxs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(11, 85, 99, 0.12);
    color: #0b5563;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
  }

  &-company {
    font-size: var(--font-size-title-xs);
    font-weight: 800;
    color: var(--color-text-400);
  }

  &-role {
    font-size: var(--font-size-md);
    font-weight: 700;
    color: #0b5563;
  }

  &-period {
    font-family: "ProFontWindows", monospace;
    font-size: var(--font-size-xs);
    font-weight: 700;
    background: rgba(0, 0, 0, 0.06);
    padding: 4px 10px;
    border-radius: var(--radius-md);
    color: var(--color-text-400);
    width: fit-content;
  }

  &-desc {
    font-size: var(--font-size-sm);
    line-height: 1.55;
    color: var(--color-text-400);
    opacity: 0.88;
  }

  &-highlights {
    margin: var(--space-xxs) 0 0 0;
    padding-left: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;

    li {
      font-size: var(--font-size-sm);
      line-height: 1.55;
      color: var(--color-text-400);
      opacity: 0.88;
    }
  }

  &-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-top: var(--space-xs);
  }
}

.experience-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--font-size-xxs);
  font-weight: 700;
  letter-spacing: 0.02em;
  background: #ffffff;
  border: 1px solid rgba(11, 85, 99, 0.18);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 5px 11px;
  border-radius: var(--radius-md);
  color: var(--color-text-400);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  cursor: default;

  &-icon {
    width: 14px;
    height: 14px;
    color: #0b5563;
    flex-shrink: 0;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  &-text {
    line-height: 1.2;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(11, 85, 99, 0.14), 0 2px 4px rgba(0, 0, 0, 0.04);
    border-color: #0b5563;
    background: #f0fdfa;

    .experience-tag-icon {
      transform: scale(1.15);
      color: #094753;
    }
  }
}

.education-list {
  grid-column: 1 / 13;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);

  @include mixins.mq("md") {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @include mixins.mq("lg") {
    grid-column: 3 / span 8;
  }
}

.education-card {
  background: var(--color-beige-500);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -2px rgba(0, 0, 0, 0.08);
  }

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  &-title {
    font-size: var(--font-size-md);
    font-weight: 800;
    color: var(--color-text-400);
  }

  &-grade {
    font-family: "ProFontWindows", monospace;
    font-size: var(--font-size-xs);
    font-weight: 700;
    background: #0b5563;
    color: #fff;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    white-space: nowrap;
    box-shadow: 0 2px 6px rgba(11, 85, 99, 0.25);
  }

  &-inst {
    font-size: var(--font-size-sm);
    color: var(--color-text-400);
    opacity: 0.88;
  }
}

:global(html.dark) {
  .experience-card,
  .education-card {
    border-color: rgba(255, 255, 255, 0.09);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);

    &:hover {
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.1);
    }
  }

  .experience-card-role {
    color: #38bdf8;
  }

  .experience-card-type {
    background: rgba(56, 189, 248, 0.16);
    color: #38bdf8;
  }

  .experience-card-period {
    background: rgba(255, 255, 255, 0.08);
    color: var(--color-text-300);
  }

  .experience-tag {
    background: rgba(30, 41, 59, 0.85);
    border-color: rgba(56, 189, 248, 0.28);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    color: #f1f5f9;

    .experience-tag-icon {
      color: #38bdf8;
    }

    &:hover {
      background: rgba(30, 41, 59, 1);
      border-color: #38bdf8;
      box-shadow: 0 6px 18px rgba(56, 189, 248, 0.25), 0 2px 6px rgba(0, 0, 0, 0.4);

      .experience-tag-icon {
        color: #7dd3fc;
      }
    }
  }

  .education-card-grade {
    background: #0284c7;
    box-shadow: 0 2px 8px rgba(2, 132, 199, 0.35);
  }
}
</style>
