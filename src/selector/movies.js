export default (movies, { text }) => {
    return movies.filter((movie) => {
        const textMatch = (movie.title.toLowerCase()).includes((text.toLowerCase()));
        return textMatch;
    });
};