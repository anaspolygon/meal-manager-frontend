import { auth } from "../../api/ApiClient";
import Meals from "./Meals";
import { MealEntry } from "./Types";

const Page = async () => {
  const users:any = await auth.get("/users");
  const meals:any = await auth.get("/user-meals/today-meals");
  const newMeals  = (meals.data ?? []).map((item: MealEntry) => ({ ...item, ...item.user }))
  console.log(newMeals,"meals data");
  return <Meals users={users.data} meals={newMeals}/>;
};

export default Page;
