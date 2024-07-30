document.addEventListener('DOMContentLoaded', () => {
    const nowShowing = [
        { title: "Deadpool & Wolverine", genre: "Action, Sci-Fi", languages: "English, Tamil", img: "movie1.jpeg" },
        { title: "Raayan", genre: "Action", languages: "Tamil", img: "movie2.jpeg" },
        { title: "Kalki 2898 AD", genre: "Sci-Fi", languages: "Hindi, Tamil", img: "movie3.jpg" },
        { title: "Teenz", genre: "Action", languages: "Tamil", img: "movie4.jpg" },
        { title: "Inside Out 2", genre: "Comedy", languages: "English", img: "movie5.jpg" },
        { title: "LongLegs", genre: "Horror", languages: "English", img: "movie6.jpg" },
        { title: "Godzilla X Kong: The New Empire", genre: "Sci-Fi, Action", languages: "English, Tamil", img: "movie7.jpg" },
        { title: "Maharaja", genre: "Thriller", languages: "Tamil", img: "movie8.jpg" },
        { title: "Leo", genre: "Action, Thriller", languages: "Tamil", img: "movie13.jpg" },
        { title: "Spider-man: No Way Home", genre: "Sci-Fi", languages: "English", img: "movie14.webp" }
    ];

    const upcomingMovies = [
        { title: "G.O.A.T", genre: "Sci-Fi, Action", languages: "Tamil", img: "movie9.jpeg" },
        { title: "Vidamuyarchi", genre: "Action", languages: "Tamil", img: "movie10.webp" },
        { title: "Joker: Folie À Deux", genre: "Thriller", languages: "English", img: "movie11.webp" },
        { title: "Venom: The Last Dance", genre: "Action", languages: "English", img: "movie12.jpg" },
        { title: "Avengers: Secret Wars", genre: "Sci-Fi, Action", languages: "English", img: "movie15.jpg" }
    ];

    function renderMovies(movies, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.genre} | ${movie.languages}</p>
                <button>Book Tickets</button>
            `;
            container.appendChild(movieCard);
        });
    }

    renderMovies(nowShowing, 'nowShowing');
    renderMovies(upcomingMovies, 'upcomingMovies');

    document.getElementById('searchBtn').addEventListener('click', () => {
        const query = document.getElementById('search').value.toLowerCase();
        const filteredMovies = nowShowing.filter(movie => movie.title.toLowerCase().includes(query));
        renderMovies(filteredMovies, 'nowShowing');
    });

    window.bookNow = function() {
        alert('Book Now button clicked!');
    };
});
