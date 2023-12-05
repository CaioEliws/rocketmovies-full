import { Content } from "./styles";

export function Button({ children, loading = false, ...rest }) {
    return(
        <Content 
            type="button"
            disabled={loading}
            {...rest}
        >
            { loading ? 'Carregando...' : children }
        </Content>
    );
}