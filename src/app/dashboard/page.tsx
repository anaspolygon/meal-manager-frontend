import Table from "@/components/layout/Table";
import StatsSection from "./StatsSection";

const Page = () => {
  const columns = [
    { header: "ID", key: "id" },
    { header: "Name", key: "name" },
    { header: "Age", key: "age" },
    { header: "Action", key: "actions" },
  ];

  const users = [
    { id: 1, name: "Sajid", age: 22 },
    { id: 2, name: "Anas", age: 24 },
    { id: 3, name: "Rafiq", age: 28 },
  ];
  return (
    <div>
      <StatsSection title="Dashboard (Polygon, March 2025)" />
      <StatsSection title="Personal Info" />
      <Table columns={columns} data={users} />
    </div>
  );
};

export default Page;
