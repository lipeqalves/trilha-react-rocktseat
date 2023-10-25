/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [newCommetText, setNewCommetText] = useState("");
  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommetText]);
    setNewCommetText("");
  }

  function handleNewCommetText() {
    event.target.setCustomValidity('');
    setNewCommetText(event.target.value);
  }
  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  }
  function deleteComment(commentToDelete) {
    console.log(`Deletando comentario ${comments}`);
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }
  const publishedDateFormatetd = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommetText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatetd}
          dateTime={publishedAt.toISOString()}
        >
          {publisheddateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        {/* <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw </a>{" "}
          <a href="#"> #rocketseat</a>
        </p> */}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommetText}
          onChange={handleNewCommetText}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled ={isNewCommentEmpty}> Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
