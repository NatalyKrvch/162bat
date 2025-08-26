type MenuItem = {
  title: string;
  href: string;
};

export interface MenuItemsProps {
  buttonText: string;
  menu: MenuItem[];
  contacts: {
    number: string;
    email: string;
  };
}
