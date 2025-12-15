import { instructions } from "../data/instructions";

export function Instructions() {
  return(
    <section>
      <h3>Instructions</h3>
      <ol className="list-decimal list-inside">
        {instructions.map(({name, instruction}) => (
          <li key={name}>{name} {instruction}</li>
        ))}
      </ol>
    </section>
  )
}