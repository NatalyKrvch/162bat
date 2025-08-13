type MenuItem = {
  title: string;
  href: string;
};

export interface MenuProps {
  buttonText: string;
  menu: MenuItem[];
  contacts: {
    number: string;
    email: string;
  };
}
