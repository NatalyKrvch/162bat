type Image = {
  src: string;
  alt: string;
};

type MenuItem = {
  title: string;
  href: string;
};

export interface FooterProps {
  data: {
    image: Image;
    menu: MenuItem[];
    contactUs: {
      title: string;
      number: string;
    };
    button: {
      title: string;
    };
    legal: string;
  };
  onClick?: () => void;
}
