import { nutrition } from "../data/nutrition";

export function Nutrition() {
  return (
    <section>
      <h2>Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      {nutrition.map(({name, amount}) => (
        <div className="flex border-b-2">
          <p>{name}</p>
          <p className="text-(--text-brown)">{amount.value}{amount.unit}</p>
        </div>
      ))}
    </section>
  )
}