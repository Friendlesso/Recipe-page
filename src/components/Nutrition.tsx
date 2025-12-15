import { nutrition } from "../data/nutrition";

export function Nutrition() {
  return (
    <section>
      <div className="pb-4">
        <h2 className="text-(--text-brown) font-[YoungSerif] text-2xl mb-3">Nutrition</h2>
        <p className="font-[OutfitNormal] text-(--light-text-color)">The table below shows nutritional values per serving without the additional fillings.</p>
      </div>
      {nutrition.map(({ name, amount }) => (
        <div className="flex border-b-2 border-b-(--border-color) mb-3">
          <p className="font-[OutfitNormal] text-(--light-text-color) w-1/2 pl-5">{name}</p>
          <p className="text-(--text-brown) font-[OutfitSemiBold]">{amount.value}{amount.unit}</p>
        </div>
      ))}
    </section>
  )
}