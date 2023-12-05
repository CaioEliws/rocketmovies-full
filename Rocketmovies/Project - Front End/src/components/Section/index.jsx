import { Content } from './styles'

export function Section({ title, children }){
    return(
        <Content>
            <h2>{title}</h2>
            {children}
        </Content>
    );
}