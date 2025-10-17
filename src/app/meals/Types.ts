export interface MealEntry {
  id: number;
  breakfast_count: number;
  lunch_count: number;
  dinner_count: number;
  total: number;
  user: {
    name: string;
    email: string;
  };
}
