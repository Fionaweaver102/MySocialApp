import React, { Component } from 'react'

class Post extends Component {
  render() {

    const { description, img, tags } = this.props;

    return (
      <div>
        <p>{description}</p>
        <img src={img} alt={'blah'} />
        <div>
          {this.getTags(tags)}
        </div>
      </div>
    )
  }

  getTags(tags) {
    let html = '';
    for (let i = 0; i < tags.length; i++) {
      let tag = tags[i];
      html += tag + ' ';
    }
    return html;
  }
}

export default Post
