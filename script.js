const movies = [
    { title: "The Price of Confession", image: "https://via.placeholder.com/300x400?text=Movie+1" },
    { title: "Monster Island", image: "https://via.placeholder.com/300x400?text=Movie+2" },
    { title: "VMX Rewind", image: "https://via.placeholder.com/300x400?text=Movie+3" },
];

// Render awal
function renderMovies(list) {
    const container = document.getElementById("movieList");
    container.innerHTML = "";

    list.forEach(movie => {
        container.innerHTML += `
            <div class="movie">
                <img src="${movie.image}">
                <div class="movie-title">${movie.title}</div>
            </div>
        `;
    });
}

renderMovies(movies);

// Fitur search
document.getElementById("search").addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
    renderMovies(filtered);
});
