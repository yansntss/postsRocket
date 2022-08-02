import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';




export function Post(props) {
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
