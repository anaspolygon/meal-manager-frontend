import { auth } from "../../api/ApiClient";
import Meals from "./Meals";

const Page = async () => {
  const users = await auth.get("/users");
  console.log(users);
  return <Meals users={users} />;
};

export default Page;
