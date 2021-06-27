class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    github = undefined,
    approvedCourses = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.twitter = twitter;
    this.github = github;
    this.approvedCourses = approvedCourses;
  }
}
