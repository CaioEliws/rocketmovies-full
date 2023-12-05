import { Content, Form } from './styles'

import { Header } from '../../components/Header';
import { Back } from '../../components/Back';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export function New(){
    const [title, setTitle] = useState("");
    
    const [rating, setRating] = useState("");

    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate()

    function handleRating(e) {
        const value = e.target.value;
    
        if (value < 0 || value > 5) {
          alert("A classificação deve estar entre 0 e 5.");
          return;
        }
    
        setRating(value);
      }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o título da nota");
        }

        if(!rating) {
            return alert("Digite a classificação do filme, de 1 a 5!");
        }

        if(newTag) {
            return alert("Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
        }

        if (tags.length === 0) {
            return alert("Adicione pelo menos um marcador");
        }

        await api.post("/movies", {
            title,
            rating,
            description,
            tags,
        })

        alert("Review criada com sucesso!");
        navigate("/");
    }

    async function handleClear() {
        setTitle("");
        setRating("");
        setDescription("");
        setTags([]);
    }

    return(
        <Content>
            
            <Header />

            <Form>
                <Back />
                <h1>Novo Filme</h1>

                <main>
                    <Input 
                        placeholder="Título"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input 
                        placeholder="Sua nota (de 0 a 5)"
                        value={rating}
                        onChange={handleRating}
                    />
                </main>

                <Textarea 
                    placeholder="Observações"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <Section title="Marcadores">
                    <div className='tags'>
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)} 
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <NoteItem 
                            $isNew 
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={e => setNewTag(e.target.value)}
                            onClick={handleAddTag} 
                        />
                    </div>
                </Section>

                <footer>
                    <Button 
                        children="Apagar tudo"
                        onClick={handleClear}
                    />

                    <Button 
                        children="Salvar alterações"
                        onClick={handleNewNote}
                    />
                </footer>
                
            </Form>


        </Content>
    );
}