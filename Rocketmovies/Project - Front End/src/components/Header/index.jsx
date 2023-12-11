import { Content, Profile, Logotipo } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/profile.png"

export function Header({ setSearch }){
    
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Content>

            <Logotipo to="/">
                <h1>RocketMovies</h1>
            </Logotipo>

            <Input 
                placeholder="Pesquisar pelo título"
                onChange={(e) => setSearch(e.target.value)}
            />

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <Link 
                        to="/" 
                        onClick={signOut}
                    >
                        sair
                    </Link>
                </div>

                <Link to="/profile">
                    <img 
                        src={avatarUrl} 
                        alt={user.name} 
                    />
                </Link>
            </Profile>


        </Content>
    );
}