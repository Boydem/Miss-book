const { useState } = React

export function AddReview({ book }) {
  const [reviewToEdit, setReviewToEdit] = useState({
    fullname: "",
    rating: "",
    readAt: "",
  })

  function handleForm({ target }) {
    let { type, name: field, value } = target
    value = type === "number" ? +value : value
    setReviewToEdit((prevReview) => ({ ...prevReview, [field]: value }))
  }

  console.log("reviewToEdit:", reviewToEdit)

  const ratingStars = [0, 0, 0, 0, 0]
  return (
    <section className='book-review'>
      <h1>Write review</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='fullname'>Full Name </label>
          <input
            type='text'
            name='fullname'
            id='fullname'
            placeholder='Full Name'
            onChange={handleForm}
            value={reviewToEdit.fullname}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='rating'>Rate </label>
          <input
            type='number'
            name='rating'
            id='rating'
            placeholder='Enter Rating'
            onChange={handleForm}
            value={reviewToEdit.rating}
          />
          {/* {ratingStars.map((star, idx) => {
            return (
              <div key={`star${idx}`} className='star'>
                <label>
                  <i className='fa-regular fa-star'></i>
                  <input
                    type='number'
                    hidden
                    name='ratingStar'
                    value={reviewToEdit.rating}
                    onChange={handleForm}
                  />
                </label>
              </div>
            )
          })} */}
        </div>
        <div className='form-group'>
          <label htmlFor='reatAt'>Read at </label>
          <input onChange={handleForm} type='date' name='readAt' id='readAt' />
        </div>
      </form>
    </section>
  )
}
