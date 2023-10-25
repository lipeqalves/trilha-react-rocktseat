import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
interface PostProps {
post: PostType;
}
interface Content{
  type: 'paragraph' | 'link';
  content: string;
}

export function Post({post }:PostProps) {
  const [comments, setComments] = useState([
    "Muito bom Devon, parabéns!! 👏👏",
  ]);
  const [newCommetText, setNewCommetText] = useState("");
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommetText]);
    setNewCommetText("");
  }

  function handleNewCommetChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommetText(event.target.value);
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio!");
  }
  function deleteComment(commentToDelete: string) {
    console.log(`Deletando comentario ${comments}`);
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }
  const publishedDateFormatetd = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publisheddateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommetText.length === 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatetd}
          dateTime={post.publishedAt.toISOString()}
        >
          {publisheddateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
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
          onChange={handleNewCommetChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            {" "}
            Publicar
          </button>
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
