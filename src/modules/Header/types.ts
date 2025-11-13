type Image = {
  src: string;
  alt: string;
};

type MenuItem = {
  title: string;
  href: string;
};

type IconButton = {
  title: string;
};

type Messenger = {
  icon: string;
  link: string;
};

type Messengers = Record<string, Messenger>;

type Contacts = {
  phoneNumbers: string[];
  messengers: Messengers;
};

export interface HeaderProps {
  data: {
    image: Image;
    iconButton: IconButton;
    button: {
      title: string;
    };
    menu: MenuItem[];
    contacts: Contacts;
  };
  onClick?: () => void;
}
