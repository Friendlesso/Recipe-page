import { prepInfo } from "../data/preparations";

export function Preparation() {
  return (
    <section className="px-4 py-5 bg-(--ruby-bg-color) rounded-xl mb-5">
      <h4 className="text-lg text-(--ruby-text-color) font-[OutfitSemiBold]">Preparation time</h4>
      <ul className="list-disc list-inside px-2 marker:text-(--ruby-text-color) marker:text-xs">
        {prepInfo.map(({ title, approximate, time }) => (
          <li>
            <p className="inline-block pr-1 text-(--light-text-color) font-[OutfitSemiBold]">{title}</p>
            <p className="inline-block font-[OutfitNormal] text-(--light-text-color)">
              {approximate === true && ' Approximately '}
              {time.value} {time.unit}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )

}