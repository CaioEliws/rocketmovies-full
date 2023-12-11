import { Content, Container } from './styles';

import { BiTimeFive } from 'react-icons/bi'

import { Tag } from '../../components/Tag'

import { Back } from '../../components/Back'
import { Header } from '../../components/Header'

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { IoIosStarOutline, IoMdStar } from 'react-icons/io';
import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from "../../assets/profile.png"


export function Details() {
    const [data, setData] = useState(null);
    const { user } = useAuth();

    const params = useParams();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleAvatar() {
        console.log(user)
    }

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movies/${params.id}`);

            console.log(response.data);

            setData(response.data);
        }

        handleAvatar();
        fetchMovie();
    },[])

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover o filme?");

        if(confirm) {
            await api.delete(`/movies/${params.id}`)
            navigate("/");
        }
    }

    function renderStars(rating) {
        const starArray = [];
        const maxRating = 5;
    
        for (let i = 1; i <= maxRating; i++) {
          if (i <= rating) {
            starArray.push(<IoMdStar key={i} />);
          } else {
            starArray.push(<IoIosStarOutline key={i} />);
          }
        }
    
        return starArray;
    }

    return(
        <Content>
            
            <Header />  
            {
                data &&
                <main>
                    <Container>

                        <div id='header'>
                            <Back />

                            <button
                                onClick={handleRemove}
                            >
                                Excluir filme
                            </button>
                        </div>


                        <header>
                            <h1>
                                {data.title} {renderStars(data.rating)}
                            </h1>

                            <div>
                                <img 
                                    src={avatarUrl}
                                    alt="Foto do usuário"
                                />

                                <span>
                                    Por {user.name}
                                    <BiTimeFive /> {new Date(data.created_at).toLocaleDateString('pt-BR')} 
                                    {' às '} {new Date(data.created_at).toLocaleTimeString()}
                                </span>

                            </div>
                            
                            <aside>
                                {
                                    data.tags.map(tag => (
                                        <Tag
                                            key={String(tag.id)}
                                            title={tag.name}
                                        />
                                    ))
                                    
                                }
                            </aside>
                        </header>

                        <p>
                            {data.description}
                        </p>

                    </Container>
                </main>
            }
        </Content>
    );
}