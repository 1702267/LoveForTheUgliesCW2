import React, { Component } from 'react';
//importing the picture as "profilepic".
import Social from '../components/Social';

class Comment extends Component {
  render() {
    return (
      <div className="condiv home">
      <h2>Leave a comment!</h2>
      <h3>but nothing rude please...</h3>
      <p>This is where  a comments page should go if I could get that to work... Ideally I would have it so that users could start their own threads and comment on others. Admins would be able to moderate comments</p>
      <form>
        <textarea name="comment" form="usrform">Leave a comment!</textarea>
        <input type="submit" value="submit" />
        </form>


      <Social />
      </div>
    )
  }
}
export default Comment
