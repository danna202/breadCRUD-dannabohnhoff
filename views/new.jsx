const React = require('react')
const Default = require('./layouts/Default')

function New ({error, bakers}) {
  let errorMessage
  if(error) errorMessage = 'error saving image'
    return (
      <Default>
        <h2>Add a new bread</h2>
        {errorMessage && <h3 className='alert-warning'>{errorMessage}</h3>} 
    <div className='backButton'> 
        <a href='/breads'>
            <button>Go Back to home page</button>
        </a>
    </div>
    <form  action='/breads' method='POST'>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        required
      />
      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        id="image"
      />
      <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {
              bakers.map( baker => {
                return <option key={baker.id} value={baker.id}>{baker.name}</option>
              })
            }
      </select>

      <label htmlFor="hasGluten">Has Gluten?</label>
      <input
        type="checkbox"
        name="hasGluten"
        id="hasGluten"
        defaultChecked
      />
      <br />
      <input type="submit"/>
    </form>
   </Default>
    )
}

module.exports = New