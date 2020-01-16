import Link from "next/link"

const PostLink = (props) => {
  return (
    <div>
      <li>
        <Link as={`/p/${props.slug}-${props.id}`} href={`/post?id=${props.id}`}>
          <a>{props.title}</a>
        </Link>
      </li>
    </div>
  );
}

export default PostLink;