/* eslint-disable react/prop-types */
export function PostExemplo(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
