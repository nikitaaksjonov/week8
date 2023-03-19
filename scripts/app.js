const movieTitle = document.querySelector('.movie-title');
const releaseDate  = document.querySelector('.release-date');
const genres  = document.querySelector('.genres');
const movieDuration  = document.querySelector('.movie-duration');
const moviePosterContainerImg  = document.querySelector('.movie-poster-container img');
const movieInfoQuote  = document.querySelector('.movie-info-quote');
const movieinfoOwerview  = document.querySelector('.movie-info-overview');
const footerYear = document.querySelector('.year');
const movieUrl = document.querySelector('.input-movie-URL');
const search = document.querySelector('.Search-button');
window.onload = ()=> {
    let url = 'https://api.themoviedb.org/3/movie/551?api_key=c451f7394ea0722b245b9cc88cea21e2';

    let urlInStorage  = localStorage.getItem('moviePath');
    if(urlInStorage){
        url = `https://api.themoviedb.org/3/movie/${urlInStorage}?api_key=c451f7394ea0722b245b9cc88cea21e2`;
    }

    search.addEventListener('click', ()=>{
        let movieUrlInput = movieUrl.value;

        movieUrlInputArrayPromo= movieUrlInput.split('/');
        moviePathPromo = movieUrlInputArrayPromo[movieUrlInputArrayPromo.length - 1];
        moviePathArray= moviePathPromo.split('-');
        moviePath= moviePathArray[0];
        localStorage.setItem('moviePath',moviePath);
        let url = `https://api.themoviedb.org/3/movie/${moviePath}?api_key=c451f7394ea0722b245b9cc88cea21e2`;
        fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data);
            movieTitle.textContent=data.title;
            let date = new Date(data.release_date);
            console.log(date);
            releaseDate.textContent=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
            movieDuration.textContent=`${data.runtime/60-data.runtime%60/60}h ${data.runtime%60}min` ;
            movieInfoQuote.textContent=data.tagline;
            movieinfoOwerview.textContent=data.overview;
        
            let posterUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
            moviePosterContainerImg.src = posterUrl;
            moviePosterContainerImg.alt = `${data.title} Poster`;
            genresLoop = '';

            data.genres.forEach(genre => {
                genresLoop=genresLoop + `${genre.name}, `;
            });

            let genresLoopUpdate= genresLoop.slice(0, -2) + '.';
            console.log(genresLoopUpdate);
            genres.textContent=genresLoopUpdate;

            let footerYearAuto = new Date().getFullYear();

            footerYear.textContent=footerYearAuto;
        })
    
    });

    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
        movieTitle.textContent=data.title;
        let date = new Date(data.release_date);
        console.log(date);
        releaseDate.textContent=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${data.production_countries[0].iso_3166_1}`;
        movieDuration.textContent=`${data.runtime/60-data.runtime%60/60}h ${data.runtime%60}min` ;
        movieInfoQuote.textContent=data.tagline;
        movieinfoOwerview.textContent=data.overview;
    
        let posterUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePosterContainerImg.src = posterUrl;
        moviePosterContainerImg.alt = `${data.title} Poster`;
        genresLoop = '';

        data.genres.forEach(genre => {
            genresLoop=genresLoop + `${genre.name}, `;
        });
        
        let genresLoopUpdate= genresLoop.slice(0, -2) + '.';
        console.log(genresLoopUpdate);
        genres.textContent=genresLoopUpdate;

        let footerYearAuto = new Date().getFullYear();

        footerYear.textContent=footerYearAuto;
    })
    
}

