type MenuItem = {
  title: string;
  href: string;
};

type Messenger = {
  icon: string;
  link: string;
};

export interface BurgerMenuModalProps {
  buttonText: string;
  menu: MenuItem[];
  contacts: {
    phoneNumbers: string[];
    messengers: Record<string, Messenger>;
  };
}
