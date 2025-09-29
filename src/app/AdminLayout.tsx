import Sidebar from "@/components/layout/Sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-1 p-9">{children}</div>
    </div>
  );
};
export default AdminLayout;
