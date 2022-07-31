import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1618695497554-6fdbb916806b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
      />

      <div className={styles.profiles}>
        <strong>Diego Fernandes </strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
