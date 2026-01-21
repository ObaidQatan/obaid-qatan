export type LinksGroup = {
  id: number;
  title: string;
  links: Link[];
};

export type Link = {
  id: number;
  name: string;
  url: string;
};
