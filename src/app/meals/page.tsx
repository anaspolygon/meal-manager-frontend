import { auth } from "../../api/ApiClient";
import Meals from "./Meals";
import { MealEntry } from "./Types";

const Page = async () => {
  const users = await auth.get("/users");
  const meals = await auth.get("/user-meals/today-meals");
  const newMeals  = meals.map((item: MealEntry) => ({ ...item, ...item.user }))
  return <Meals users={users} meals={newMeals}/>;
};

export default Page;
