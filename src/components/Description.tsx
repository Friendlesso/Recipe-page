export function Description() {

  const text =
  {
    title: 'Simple Omelette Recipe',
    description: `An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.`
  }


  return (
    <div className="flex flex-col gap-4 font-">
      <h1 className="font-[YoungSerif] text-4xl text-(--strong-text-color)">{text.title}</h1>
      <p className="font-[OutfitNormal] text-(--light-text-color)">{text.description}</p>
    </div>
  )
}