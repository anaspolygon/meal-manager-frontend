import { auth } from "@/api/ApiClient";

const Page = async() => {
    const res = await auth.get("/users");
    console.log(res,"============================");
  return JSON.stringify(res);

}

export default Page;
  