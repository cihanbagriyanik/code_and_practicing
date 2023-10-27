import React from 'react'

const MyCard = ({ id, title, date, desc, image }) => {

  return (
    <div className="col-sm-12 col-md-6 container">
      <div class="card bg-dark text-white">
        <img class="card-img" src={image} alt="Card image" />
          <div class="card-img-overlay">
            <h5 class="card-title title">{title}</h5>
            <p class="card-text date">{date}</p>
            <p class="card-text desc">{desc}</p>
          </div>
      </div>
    </div>
  );

}

export default MyCard