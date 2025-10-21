import { auth } from "@/api/ApiClient";
import AddExpense from "./AddExpense";

const Page = async () => {
  const users: any = await auth.get("/users");
  console.log(users, "users data");
  return (
    <div>
      <AddExpense users={users.data} />
    </div>
  );
};

export default Page;
