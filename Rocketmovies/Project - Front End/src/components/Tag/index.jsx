import { Content } from './styles'

export function Tag({ title, ...rest }){
    return(
        <Content {...rest}>
            { title }
        </Content>
    );
}