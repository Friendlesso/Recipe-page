import { ingredInfo } from "../data/ingrediants";

export function Ingredients() {
  return(
    <section className="border-b-2 border-(--border-color) mb-5 pb-3">
      <h3 className="text-(--text-brown) font-[YoungSerif] text-2xl mb-3">Ingredients</h3>
      <ul className="list-disc list-inside px-2 marker:text-xs marker:text-(--text-brown)">
        {ingredInfo.map(({ingrediant})=> (
          <li key={ingrediant} className="text-(--light-text-color) font-[OutfitNormal] mb-4">{ingrediant}</li>
        ))}
      </ul>
    </section>
  )
}