import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="postList">
        <ol>
          {this.props.posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts })(PostList);
