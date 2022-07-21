import React from 'react';

const ResultList = (props: { movies: any, loading: boolean }) => {
    const movies: any = props.movies;


    return (

        <div>
            {
                !props.loading && <ul>
                    {
                       movies &&  movies.map((movie:any) => (
                            <div key={movie.imdbId}>
                               <h1>{movie.title}</h1>
                            </div>
                        ))

                    }
                </ul>
            }
        </div>

    );

}


export default ResultList;
