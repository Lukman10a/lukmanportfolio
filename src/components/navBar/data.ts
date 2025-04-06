export interface NavItem {
  title: string;
  href?: string;
  items?: {
    category: string;
    href?: string;
    description?: string;
    subitems?: {
      title: string;
      description?: string;
      href: string;
    }[];
  }[];
}

export const navItems: NavItem[] = [
  // {
  //   title: "About",
  //   href: "/about",
  // },
  {
    title: "Projects",
    href: "/projects",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Reviews",
  //   href: "/reviews",
  // },
  {
    title: "Contact",
    href: "/contact",
  },
];
