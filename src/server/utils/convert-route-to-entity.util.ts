const mapping: Record<string, string> = {
  'menu-items': 'menu_item',
  orders: 'order',
  restaurants: 'restaurant',
  'table-assignments': 'table_assignment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
