const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread}) {
    console.log(bread.name)
        return (
         <Default>
             <h2>Show Page</h2>
             <h3>{bread.name}</h3>
             <img src={bread.image} alt={bread.image} />
         </Default>

        )
}

module.exports = Show
    