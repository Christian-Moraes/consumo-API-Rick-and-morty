fetch('https://rickandmortyapi.com/api/character', { method: 'GET' })
  .then(response => response.json())
  .then(function (json) {
    var container = document.querySelector('.grid-container')

    json.results.map(function (results) {
      container.innerHTML +=
        `
      <div> <img src=` +
        results.image +
        `> <h2>` +
        results.name +
        `</h2>
        <p>` +
        results.gender +
        `</p>
         </div> 
      `
    })
  })
