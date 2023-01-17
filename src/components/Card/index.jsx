import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesavoritar from './desfavoritar.png';
import { useFavoritoContext } from 'context/Favoritos';

const Card = ({ id, titulo, preco, varejo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id)

    const icone = !ehFavorito ? iconeFavoritar : iconeDesavoritar;
    return (
        <nav className={styles.container}>
            <img className={styles.capa} src={capa} alt={titulo} />
            <h3>{titulo}</h3>
            <p> preço atacado
                <b> R$ {preco}</b>
            </p>
            <p> preço no varejo R$
                <b> {varejo}</b>
            </p>
            <img className={styles.favoritar}
                src={icone} alt='favoritar camisa'
                onClick={() => {
                    return adicionarFavorito({ id, titulo, preco, varejo, capa })
                }}
            />
        </nav>
    )
}

export default Card