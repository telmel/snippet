// Basic List Component creation (UI logic)
// This component accepts an array of post titles and outputs an unordered list of elements.
function PostList(props) {
  const titles = props.titles;
  const listItems = titles.map((post) => <li key={post.toString()}>{post}</li>);
  return (
    <ul>{listItems}</ul>
  );
}

const titles = ['Recently Added Fonts', 'Most Downloaded Fonts', 'Almost Free Fonts', 'Languages', 'Tags'];
ReactDOM.render( <PostList titles={titles} />, document.getElementById('root') );
