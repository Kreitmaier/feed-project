import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
          <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

          <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Douglas Lopes</strong>
                        <time title="10 de Jan às 16:45" dateTime="2023-01-10 16:45:30">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Devon parabéns!</p>
            </div>

            <footer>
                <button >
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
          </div>
        </div>
      
    )
}