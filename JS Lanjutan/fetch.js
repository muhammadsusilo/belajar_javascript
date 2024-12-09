// $('.search-btn').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=f85d757b&s=' + $('.input-keyword').val(),
//         success: result => {

//             const search = result.Search;
//             console.info(search);
//             let kotak = '';
//             search.forEach(s => {
//                 kotak +=
//                     `<div class="col-md-4 my-5">
//                 <div class="card">
//                 <img src="${s.Poster}" class="card-img-top" alt="">
//                 <div class="card-body">
//                     <h5 class="card-title">${s.Title}</h5>
//                     <h6 class="card-subtitle mb-2 text-body-secondary">${s.Year}</h6>
//                     <a href="#" class="btn btn-primary modal-detail-btn">Show Details</a>
//                 </div> 
//                 </div> 
//                 </div>`
//             });
//             $('.filmku ').html(kotak)


//             // // 
//             // $('.modal-detail-btn').on('click', function() {
//             //     // console.info($(this).data('imdbid'))
//             //     $.ajax({
//             //         url: 'http://www.omdbapi.com/?apikey=f85d757b&i=' + $(this).data(imdbid),
//             //         success: m => {
//             //             const movieDetail = ` <div class="container-fluid">
//             //             <div class="col-md-3">
//             //                 <img src="" alt="">
//             //             </div>
//             //             <div class="col-md">
//             //                 <ul class="list-group">
//             //                     <li class="list-group-item">An item</li>
//             //                     <li class="list-group-item">A second item</li>
//             //                     <li class="list-group-item">A third item</li>
//             //                     <li class="list-group-item">A fourth item</li>
//             //                     <li class="list-group-item">And a fifth one</li>
//             //                 </ul>
//             //             </div>
//             //         </div>`
//             //             $('modal-body').html(movieDetail);
//             //         },
//             //         error: (e) => {
//             //             console.info(e.responseText);
//             //         }
//             //     })
//             // })
//         },
//         error: (e) => {
//             console.info(e.responseText);
//         }
//     });

// });

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", function() {

    const inputKeyword = document.querySelector(".input-keyword")
    fetch('http://www.omdbapi.com/?apikey=f85d757b&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let kotak = " ";
            movies.forEach(m => kotak += showcards(m));
            const film = document.querySelector(".filmku");
            film.innerHTML = kotak;

            // 
        })
})

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