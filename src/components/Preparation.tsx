import { prepInfo } from "../data/preparations";

export function Preparation() {
  return (
    <section>
      <h4>Preparation time</h4>
      <ul>
        {prepInfo.map(({title, approximate, time}) => (
          <li>
            {title} 
            {approximate === true && 'Approximately'}
            {time.value} {time.unit}
          </li>
        ))}
      </ul>
    </section>
  )

}