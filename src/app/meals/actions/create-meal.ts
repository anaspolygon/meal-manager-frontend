"use server";

import { auth } from "@/api/ApiClient";

interface Payload {
  breakfast_count: number;
  lunch_count: number;
  dinner_count: number;
  total: number;
  userId: number;
}
export const createMeal = async(payload: Payload) => {
  const res = await auth.post("/user-meals", payload);
  return res;
};
