export type SiteStatus = "live" | "beta" | "soon";

export type ExperimentSite = {
  name: string;
  subdomain: string;
  url: string;
  description: string;
  status: SiteStatus;
};

export const experimentSites: ExperimentSite[] = [
  {
    name: "Hub",
    subdomain: "hub",
    url: "https://hub.fairyrealm.xyz",
    description: "实验子站导航入口",
    status: "live",
  },
  {
    name: "Auth",
    subdomain: "auth",
    url: "https://auth.fairyrealm.xyz",
    description: "跨子域统一登录",
    status: "live",
  },
  {
    name: "Blog",
    subdomain: "blog",
    url: "https://blog.fairyrealm.xyz",
    description: "个人博客实验",
    status: "beta",
  },
  {
    name: "AI",
    subdomain: "ai",
    url: "https://ai.fairyrealm.xyz",
    description: "AI 工具实验（待建）",
    status: "soon",
  },
];

export const statusLabel: Record<SiteStatus, string> = {
  live: "运行中",
  beta: "测试中",
  soon: "即将上线",
};
