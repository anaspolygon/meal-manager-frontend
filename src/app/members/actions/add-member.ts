"use server";

import { auth } from "@/api/ApiClient";

interface Payload {
  name: string;
  email: string;
  password: string;
}

export const addMember = async (payload: Payload) => {
  const res: any = await auth.post("/users", payload);

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
