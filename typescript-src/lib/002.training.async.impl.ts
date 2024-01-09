import { resetFakeAsyncZone } from '@angular/core/testing';

interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const unorderedList = setupUserList(document.body);

async function getUsersByPost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network Error');
  }

  return response.json() as Promise<User[]>;
}

getUsersByPost().then((users) =>
  users.forEach((user) => unorderedList.appendChild(userToListItem(user)))
);

function setupUserList(element: HTMLElement): HTMLElement {
  let list = document.createElement('ul');
  element.appendChild(list);
  return list;
}

function userToListItem(user: User): HTMLElement {
  let listItem = document.createElement('li');
  listItem.innerText = `${user.userId} ${user.title}`;
  return listItem;
}

export default {};
