export function Description() {

  const text =
  {
    title: 'Simple Omelette Recipe',
    description: `An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.`
  }


  return (
    <div>
      <h1>{text.title}</h1>
      <p>{text.description}</p>
    </div>
  )
}