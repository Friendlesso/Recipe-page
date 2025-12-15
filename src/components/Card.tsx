import { Description } from "./Description";
import { FoodImage } from "./FoodImage";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";
import { Preparation } from "./Preparation";

export function Card() {
  return(
    <div className="flex flex-col max-w-[100vw] w-4xl bg-white md:rounded-[1.250rem] p-8">
      <FoodImage />
      <Description />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}