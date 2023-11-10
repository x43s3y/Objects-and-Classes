function movies(moviesDetails) {
  let movies = [];
  let name, directedBy, date;

  moviesDetails.forEach((movieDetails) => {
    if (movieDetails.includes("addMovie")) {
      name = movieDetails.replace("addMovie ", "");
      addMovie(name);
    } else if (movieDetails.includes("directedBy")) {
      comandIndex = movieDetails.indexOf(" directedBy ");
      name = movieDetails.slice(0, comandIndex);
      directedBy = movieDetails.slice(comandIndex + 12);
      addDirector(name, directedBy)
    } else {
      comandIndex = movieDetails.indexOf(" onDate ");
      name = movieDetails.slice(0, comandIndex);
      date = movieDetails.slice(comandIndex + 8);
      addDate(name, date)
    }
  });
  movies = movies.filter((m) => m.name !== undefined && m.director !== undefined && m.date !== undefined)
  movies.forEach(movie => {
    console.log(JSON.stringify(movie));
  });

  function addMovie(name) {
    movies.push({ name });
  }

  function addDirector(name, director) {
    let movieName = movies.find((n) => n.name === name);
    if (movieName) {
      movieName.director = director;
    }
  }

  function addDate(name, date) {
    let movieName = movies.find((n) => n.name === name);
    if (movieName) {
      movieName.date = date;
    }
  }
}

movies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ]);
