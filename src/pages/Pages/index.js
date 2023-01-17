import Card from 'components/Card';
import Titulo from 'components/Titulo'
import produtos from 'json/db.json';
import styles from './Inicio.module.css';

const Inicio = () => {
  return (
    <>
      <Titulo>
        <h1>selecione suas camisas favoritas</h1>
      </Titulo>
      <section className={styles.container}>
        {produtos.map(produto=>{
          return <Card {...produto} key={produto.id}/>
        })}
      </section>
    </>
  )
}

export default Inicio