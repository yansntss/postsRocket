import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src="https://github.com/yansntss.png" />
          <div className={styles.authorInfo}>
            <strong>yan</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="31 de julho de 2022" dateTime="2022-07-31 08:10:00">
          publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{' '} <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw </a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>

        </footer>
      </form>


      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>


    </article>
  );
}
