import { instructions } from "../data/instructions";

export function Instructions() {
  return (
    <section className="border-b-2 border-(--border-color) mb-5 pb-3">
      <h3 className="text-(--text-brown) font-[YoungSerif] text-2xl mb-3">Instructions</h3>
      <ol className="list-decimal list-outside px-6 marker:text-(--text-brown) marker:font-bold">
        {instructions.map(({ name, instruction }) => (
          <li className="text-(--light-text-color) font-[OutfitNormal] mb-4" key={name}>
            <span className="text-(--strong-text-color) font-bold">
              {name}
            </span>
            {instruction}
          </li>
        ))}
      </ol>
    </section>
  )
}