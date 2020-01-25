const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const list = document.createElement('ul');
rootNode.appendChild(list);

(function makeTree(parentNode, currentNode) {
  for (let i = 0; i < currentNode.length; i++) {
    const listItem = document.createElement('li');
    const titleWrapper = document.createElement('div');
    const listItemIcon = document.createElement('i');
    const listItemTitle = document.createElement('span');
    titleWrapper.appendChild(listItemIcon).className = 'material-icons';
    listItem.appendChild(titleWrapper).className = 'wrapper';
    parentNode.appendChild(listItem).className = 'list-item';
    titleWrapper.appendChild(listItemTitle).innerText = `${currentNode[i].title}`;

    if (currentNode[i].folder) {
      listItemIcon.className += ' folder-icon';
      listItemIcon.innerText += 'folder';
      listItem.onclick = toggleState;
      listItem.classList.add('disabled');

      if (currentNode[i].children) {
        const innerList = document.createElement('ul');
        listItem.appendChild(innerList);
        makeTree(innerList, currentNode[i].children);
      } else {
        const emptyNode = document.createElement('li');
        parentNode.appendChild(emptyNode).className = 'empty-folder list-item';
        emptyNode.innerText = 'Folder is empty';
        emptyNode.onclick = (e) => e.stopPropagation();
      }
    } else {
      listItemIcon.className += ' file-icon';
      listItemIcon.innerText += 'insert_drive_file';
      listItem.onclick = (e) => e.stopPropagation();
    }
  }

  function toggleState(e) {
    if (this.classList.contains('disabled')) {
      this.classList.remove('disabled');
      this.querySelector('.wrapper').firstChild.innerText = 'folder_open';
      e.stopPropagation();
    } else {
      this.classList.add('disabled');
      this.querySelector('.wrapper').firstChild.innerText = 'folder';
      e.stopPropagation();
    }
  }
})(list, structure);
