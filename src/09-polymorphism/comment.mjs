// eslint-disable-next-line import/named
import { Student } from '../08-inheritance/Student.mjs';

class Comment {
  constructor({ content, username, role = 'student' }) {
    this.content = content;
    this.username = username;
    this.role = role;
    this.likes = 0;
  }

  publish() {
    console.log(`${this.username} (${this.role}) / ${this.likes} Likes`);
  }
}

class NewStudent extends Student {
  publishComment(commentBody) {
    const comment = new Comment({
      content: commentBody,
      username: this.username,
    });

    comment.publish();
  }
}

// eslint-disable-next-line import/prefer-default-export
export { NewStudent };
