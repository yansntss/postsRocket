import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/yansntss.png"
          />
          <div className={styles.authorInfo}>
            <strong>yan</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="31 de julho de 2022" dateTime="2022-07-31 08:10:00">
          publicado
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          {' '}
          <a href="#">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
    </article>
  );
}
