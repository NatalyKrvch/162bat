type MenuItem = {
  title: string;
  href: string;
};

export interface BurgerMenuModalProps {
  buttonText: string;
  menu: MenuItem[];
  contacts: {
    number: string;
    email: string;
  };
}
