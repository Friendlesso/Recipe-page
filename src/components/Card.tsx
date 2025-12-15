import { Description } from "./Description";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";
import { Preparation } from "./Preparation";

export function Card() {
  return(
    <div>
      <Description />
      <Preparation />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  )
}