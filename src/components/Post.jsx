import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/kreitmaier.png" />
                    <div className={styles.authorInfo}>
                        <strong>Douglas Kreitmaier Lopes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="10 de Jan às 16:45" dateTime="2023-01-10 16:45:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no meu portifolio. É um projeto que no NLW, evento da Rocketseat. O nome do projeto é Project</p>
                <p><a href="">kreitmaier/feed-project</a></p>
                <p>
                    <a href=""> #novoprojeto </a> {" "}
                    <a href=""> #nlw </a> {" "}
                    <a href=""> #rocketseat </a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
          

        </article>
    )
}