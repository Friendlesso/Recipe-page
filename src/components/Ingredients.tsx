import { ingredInfo } from "../data/ingrediants";

export function Ingredients() {
  return(
    <section>
      <h3 className="text-(--text-brown) font-[YoungSerif] text-2xl">Ingredients</h3>
      <ul className="list-disc list-inside px-2">
        {ingredInfo.map(({ingrediant})=> (
          <li key={ingrediant}>{ingrediant}</li>
        ))}
      </ul>
    </section>
  )
}