import styles from './Frase.module.css';

function Frases() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Esta é a minha pequena frase utilizando JSX e React no meu novo projeto de Programação WEB</p>
    </div>
  );
}

export default Frases;
