import './index.css'

const BannerCard = params => {
  const {id, headerText, description, className} = params
  return (
    <div className={'card-' + id}>
      <h1 className="heading">headerText</h1>
      <p className="description">description</p>
      <button className="button">Show More</button>
    </div>
  )
}

export default BannerCard
