const UserCart = ({user})=>{
    const {firstName, lastName, photoUrl, age, about, gender} = user;
    return(
        <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      className="w-full h-80 object-cover rounded-t-lg"
      alt="User Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName +" "+ lastName}</h2>
    <p>{about}</p>
   {age && gender && <p>{age+" "+ gender}</p>}
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Ignored</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    )
}

export default UserCart;