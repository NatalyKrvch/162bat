import type { RolesCardProps } from '@/components/Cards/RolesCard/types';

export interface RolesSectionProps {
  data: {
    title: string;
    readMoreText: string;
    readMoreLink: string;
    items: RolesCardProps[];
  };
}
