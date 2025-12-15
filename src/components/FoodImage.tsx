import Image from '../assets/images/image-omelette.jpeg'

export function FoodImage() {
  return (
    <div className='rounded-[10px] overflow-hidden mb-5'>
      <img src={Image} alt="Food image" />
    </div>
  )

}