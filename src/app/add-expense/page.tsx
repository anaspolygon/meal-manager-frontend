import { auth } from "@/api/ApiClient";
import AddExpense from "./AddExpense";
import Table from "@/components/layout/Table";

const Page = async () => {
  const users: any = await auth.get("/users");
    const bazars: any = await auth.get("/user-bazars?startDate=2025-10-01&endDate=2025-10-31");
  console.log(bazars);
  const columns = [
    { header: "ID", key: "id" },
    { header: "Bazar Cost", key: "bazar_cost" },
    { header: "Bazar Date", key: "bazar_date" },
  ];

  return (
    <div>
      <AddExpense users={users.data} />
      <div className="mt-4">
        <Table columns={columns} data={bazars.data} />
      </div>
    </div>
  );
};

export default Page;
