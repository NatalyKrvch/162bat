export type FormData = {
  fullName: string;
  birthDate: string;
  phone: string;
  position: string;
  placeOfLiving: string;
  reason: string;
};

export interface ApplicationFormProps {
  placeholders: {
    fullName: string;
    birthDate: string;
    phone: string;
    placeOfLiving: string;
    position: string;
    reason: string;
  };
  errors: {
    required: string;
    invalidFullName: string;
    invalidDate: string;
    invalidPhone: string;
  };
  masks: {
    birthDate: string;
    phone: string;
  };
  button: {
    submit: string;
  };
}
