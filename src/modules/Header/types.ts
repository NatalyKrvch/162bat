type Image = {
  src: string;
  alt: string;
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
  };
  onClick?: () => void;
}
