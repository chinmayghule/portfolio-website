export type Project = {
  name: string;
  description: string;
  screenshotUrls: {
    url: string;
    blurDataUrl: string;
    altText: string;
  }[];
  githubUrl: {
    url: string;
    linkText: string;
  }[];
  liveUrl: string;
};
