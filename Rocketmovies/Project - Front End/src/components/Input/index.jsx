import { Content } from "./styles";

export function Input({ icon: Icon, ...rest}) {
    return(
        <Content>
            {Icon && <Icon size={20}/>}
            <input {...rest}/>

        </Content>
    );
}