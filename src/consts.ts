import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "happyplace",
  EMAIL: "eujiaxin@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "The landing page of my happy place.",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "A collection of my silly little thoughts.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/eujiaxin"
  }
];
