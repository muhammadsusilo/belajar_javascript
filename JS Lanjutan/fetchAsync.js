// const searchBtn = document.querySelector(".search-btn");
// searchBtn.addEventListener("click", function() {
//     const inputKeyword = document.querySelector(".input-keyword")
//     fetch('http://www.omdbapi.com/?apikey=f85d757b&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let kotak = " ";
//             movies.forEach(m => kotak += showcards(m));
//             const film = document.querySelector(".filmku");
//             film.innerHTML = kotak;
//         });
// });

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", async function() {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getmovies(inputKeyword.value)
        // console.info(movies);
    updateUI(movies);
});


function getmovies(keyword) {
    const inputKeyword = document.querySelector(".input-keyword")
    return fetch('http://www.omdbapi.com/?apikey=f85d757b&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)
};

function updateUI(movies) {
    let kotak = " ";
    movies.forEach(m => kotak += showcards(m));
    const film = document.querySelector(".filmku");
    film.innerHTML = kotak;
};

function showcards(s) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${s.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${s.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${s.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-btn">Show Details</a>
                    </div> 
                </div> 
            </div>`
}