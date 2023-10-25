/* eslint-disable react/prop-types */
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeletComment() {
    onDeleteComment(content);
  }
  function hendleLikeComment() {
    // setLikeCount(likeCount + 1)
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/lipeqalves.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Filipe Alves</strong>
              <time title="19 Outubro 2023" dateTime="2023-05-11 17:09:09 ">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeletComment} title="deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={hendleLikeComment}>
            <ThumbsUp />
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
