export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default Repository"}</strong>
      <p>{props.repository?.description ?? "Forms in React"}</p>

      <a href={props.repository?.link ?? "#"}>Acessar repositório</a>
    </li>
  );
}
