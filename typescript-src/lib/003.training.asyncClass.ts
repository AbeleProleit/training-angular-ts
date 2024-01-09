import { Post, PostDTO } from './003.class.interfaces';

class htmlHelper {
  private readonly listId = 'helperUList'
  get unorderedList(): HTMLUListElement {
    if (!this._unorderedList) {
      this._unorderedList = this.getUList();
    }
    return this._unorderedList!;
  }

  private set unorderedList(value: HTMLUListElement) {
    this._unorderedList = value;
  }

  private _unorderedList?: HTMLUListElement;

  constructor(private htmlRootElement: HTMLElement) {}

  private getUList(): HTMLUListElement {
    let uList = document.getElementById(this.listId) as HTMLUListElement;
    if (!uList) uList = this.createUList();
    return uList;
  }

  private createUList(): HTMLUListElement {
    const uList = document.createElement('ul');
    uList.id = this.listId
    this.htmlRootElement.appendChild(uList);
    return uList;
  }

  static postDTOToListItem(post: PostDTO) {
    const listItem = document.createElement('li');
    listItem.innerText = `${post.userId} ${post.title}`;
    return listItem;
  }
}

const postService = new Post();
const htmlTools = new htmlHelper(document.body);


postService
  .loadPosts()
  .then(() =>
    postService.posts.forEach((post) =>
      htmlTools.unorderedList.appendChild(htmlHelper.postDTOToListItem(post))
    )
  )
  .catch((err) => console.log(err));
