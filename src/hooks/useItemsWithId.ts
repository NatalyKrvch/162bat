// import { useMemo } from 'react';

// export type ListItemWithId<T> = {
//   id: string;
//   children: T;
// };

// export function useItemsWithId<T>(list: T[]): Array<ListItemWithId<T>> {
//   return useMemo(() => {
//     return list.map(item => ({
//       id: window.crypto.randomUUID(),
//       children: item,
//     }));
//   }, [list]);
// }

import { useEffect, useState } from 'react';

export type ListItemWithId<T> = {
  id: string;
  children: T;
};

function uniqueId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function useItemsWithId<T>(list: T[]): Array<ListItemWithId<T>> {
  const [itemsWithId, setItemsWithId] = useState<Array<ListItemWithId<T>>>([]);

  useEffect(() => {
    // Generate unique IDs for each list item
    const updatedItems = list.map(item => ({
      id: uniqueId(),
      children: item,
    }));
    setItemsWithId(updatedItems);
  }, [list]);

  return itemsWithId;
}
