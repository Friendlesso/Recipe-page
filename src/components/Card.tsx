import { Description } from "./Description";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";
import { Preparation } from "./Preparation";

export function Card() {
  return(
    <div className="flex flex-col max-w-[100vw] w-4xl bg-white rounded-[1.250rem] p-8">
      <Description />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}