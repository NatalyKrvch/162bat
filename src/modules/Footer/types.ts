type Image = {
  src: string;
  alt: string;
};

type MenuItem = {
  title: string;
  href: string;
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

export interface FooterProps {
  data: {
    image: Image;
    menu: MenuItem[];
    button: {
      title: string;
    };
    legal: string;
    contacts: Contacts;
  };
  onClick?: () => void;
}
