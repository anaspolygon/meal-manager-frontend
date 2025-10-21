"use server";

import { auth } from "@/api/ApiClient";

interface Payload {
  bazar_cost: number;
  bazar_date: string;
  userId: number;
}

export const addExpense = async (payload: Payload) => {
  const res: any = await auth.post("/user-bazars", payload);

  if (!res.success) {
    console.error("Meal creation failed:", res.message);
    // You can throw or return this depending on your use case
    return {
      ok: false,
      status: res.status,
      message: res.message || "Failed to create meal",
    };
  }

  console.log("Server response:", res.data);

  return {
    ok: true,
    data: res.data,
  };
};
