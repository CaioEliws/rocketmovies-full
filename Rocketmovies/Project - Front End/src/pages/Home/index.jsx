import { Content, Container, NewMovie } from './styles';

import { RiAddFill } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Review } from '../../components/Review';

import { api } from '../../services/api';

import { useEffect, useState } from "react";

export function Home(){
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const [tagsSelected] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await api.get(`/movies?title=${search}&tags=${tagsSelected}`);
            setMovies(response.data);
        }

        fetchMovies();
    }, [tagsSelected, search]);

    return(
        <Content>
            <Header 
                tagsSelected = {tagsSelected} 
                setSearch = {setSearch}
            />
            
            <main>
                <Container>

                    <section>
                        <h1>Meus Filmes</h1>
                        <NewMovie to="/new"><RiAddFill />Adicionar Filme</NewMovie>
                    </section>

                    <div>
                        {
                            movies.map(movie => (
                                <Review 
                                    movie={movie}
                                    key={movie.id}
                                />
                            ))
                        }
                    </div>

                </Container>
            </main>


        </Content>
    );
}