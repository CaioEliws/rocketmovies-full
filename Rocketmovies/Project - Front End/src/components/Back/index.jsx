import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Content, Button } from './styles'

export function Back(){
    return(
        <Content>
            <Button to="/">
                <AiOutlineArrowLeft />
                <h2>Voltar</h2>
            </Button>
        </Content>
    );
}