export type MenuItem = {
  id: string;
  label: string;
  enabled: boolean;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};
