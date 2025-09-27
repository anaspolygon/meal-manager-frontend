import Table from "@/components/layout/Table";

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
  return <Table columns={columns} data={users} />;
};

export default Page;
