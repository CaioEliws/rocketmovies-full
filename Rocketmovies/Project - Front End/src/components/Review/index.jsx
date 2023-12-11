import { Content, Title, Paragraph } from './styles';

import { Tag } from '../Tag';

import { useNavigate } from 'react-router-dom';

import { IoIosStarOutline } from "react-icons/io";
// <IoIosStarOutline />
import { IoMdStar } from "react-icons/io";
//<IoMdStar />

export function Review({ movie }) {

    const navigate = useNavigate();

    function handleDetails(id) {
        navigate(`/details/${id}`);
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
    
    return (
        <Content>
            <Title>
                {movie.title}
            </Title>

            <div id='stars'>
                {renderStars(movie.rating)}
            </div>
    
            <Paragraph>
                {movie.description.length > 50
                ? `${movie.description.slice(0, 350)}... `
                : movie.description}

                <button to="/details/1" onClick={() => handleDetails(movie.id)}>
                <strong>Ler Mais</strong>
                </button>
            </Paragraph>
    
            <div>
                {movie.tags.map((tag) => (
                <Tag title={tag.name} key={tag.id} />
                ))}
            </div>
        </Content>
      );
    }