import { auth } from "@/api/ApiClient";
import MemberList from "./memberList";

const Page = async () => {
  const res:any = await auth.get("/users");
  console.log(res, "============================");
  return <MemberList users={res.data} />;
};
export default Page;
