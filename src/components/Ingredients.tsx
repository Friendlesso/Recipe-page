import { ingredInfo } from "../data/ingrediants";

export function Ingredients() {
  return(
    <section>
      <h3>Ingredients</h3>
      <ul className="list-disc list-inside">
        {ingredInfo.map(({ingrediant})=> (
          <li key={ingrediant}>{ingrediant}</li>
        ))}
      </ul>
    </section>
  )
}