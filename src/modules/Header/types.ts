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

export interface HeaderProps {
  data: {
    image: Image;
    iconButton: IconButton;
    number: string;
    button: {
      title: string;
    };
    menu: MenuItem[];
    contacts: {
      number: string;
      email: string;
    };
  };
  onClick?: () => void;
}
