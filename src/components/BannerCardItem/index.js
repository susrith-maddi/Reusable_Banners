// Write your code here.
import './index.css'

const BannerCard = props => {
  const {cardDetails} = props
  const {id, headerText, description, className} = cardDetails
  console.log(id);

  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}
export default BannerCard
