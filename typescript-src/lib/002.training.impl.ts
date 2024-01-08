import { User, getUsr } from './002.training.helper';

const users = getUsr();
const htmlBody = document.body;

const unorderedList = setupUserList(htmlBody);

users.forEach((x) => unorderedList.appendChild(userToListItem(x)));

function setupUserList(element: HTMLElement): HTMLElement {
  let list = document.createElement('ul');
  element.appendChild(list);
  return list;
}

function userToListItem(user: User): HTMLElement {
  let listItem = document.createElement('li');
  listItem.innerText = user.firstname + ' ' + user.lastname;
  return listItem;
}
