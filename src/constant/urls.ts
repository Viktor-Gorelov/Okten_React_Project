const baseUrl ='https://api.themoviedb.org/3';

const urls ={
    movies:{
        base:'/discover/movie',
        genre: '/discover',
        second: '/movie',
        byPage:(page:string):string => urls.movies.base +'?page=' + page,
        byId:(id:number):string => urls.movies.second + '/' + id,
        byPageAndGenreId:(params:{page:string, genreId:string}):string => urls.movies.genre + urls.movies.second
            + '?page='+ params.page
            + '&sort_by=popularity.desc&with_genres=' + params.genreId
    },
    genres:{
        base:'/genre/movie/list'
    }
}

export {
    baseUrl,
    urls
}