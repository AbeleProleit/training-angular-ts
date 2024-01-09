export interface PostDTO {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

interface PostService {
  posts: PostDTO[];
  loadPosts(): void;
}

export class Post implements PostService {
  posts: PostDTO[] = [];

  async loadPosts(): Promise<void> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network Error');
    }

    this.posts = (await response.json()) as PostDTO[];
  }
}

// const post = new Post();
// post.loadPosts().then(() => console.log(post.posts));

// export default {};
