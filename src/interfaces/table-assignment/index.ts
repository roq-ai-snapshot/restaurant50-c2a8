import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableAssignmentInterface {
  id?: string;
  table_number: number;
  wait_staff_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TableAssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  wait_staff_id?: string;
  restaurant_id?: string;
}
