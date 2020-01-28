const main = document.querySelector('#main');
const addSet = document.querySelector('#add_new_set');
const newSet = document.querySelector('#new_set');
const setName = document.querySelector('#set_name');
const unstudiedItems = document.querySelector('#unstudied_items');
let sets = [];
let currentSet = {};

window.addEventListener('hashchange', function() {
  switch (location.hash) {
    case '#/add':
      main.classList.remove('visible');
      addSet.classList.add('visible');
      break;
    case '#/modify':
      break;
    default :
      main.classList.add('visible');
      addSet.classList.remove('visible');
      refreshList();
      break;
  }
});

function onChangeSave() {
  const children = newSet.getElementsByTagName('fieldset');
  currentSet.name = setName.value;
  currentSet.definitions = [];
  for (let i = 0; i < children.length; i++) {
    const newTerm = {
      id: i,
      term: children[i].querySelector('.termText').value,
      definition: children[i].querySelector('.termDefinition').value
    };
    currentSet.definitions.push(newTerm);
  }
  sets.push(currentSet);
  setName.value = '';
  currentSet = {};
  location.hash = '';
}

function onRemoveTermClick() {
  this.parentNode.remove();
}

function onRemoveSetClick() {
  this.parentNode.remove();
  sets.splice(this.parentNode.id, 1);
}

function onEditSetClick() {
  location.hash = `#/modify/:${this.parentNode.id}`;
}

const onAddTermClick = () => {
  const content = `<fieldset>
                   <input type="text" placeholder="Enter term" class="termText">
                   <input type="text" placeholder="Enter definition" class="termDefinition">
                   <button class="button remove_term">Remove</button>
               </fieldset>`;
  newSet.innerHTML += content;
  const removeTerm = document.getElementsByClassName('remove_term');
  Array.from(removeTerm).forEach((el) => {
    el.addEventListener('click', onRemoveTermClick);
  });
};

function refreshList() {
  unstudiedItems.innerHTML = '';
  sets.forEach((set, i) => {
    const item = `<div id = "${i}">
                   <div>${set.name}</div>
                   <a class ="button set_edit">Edit</a>
                   <a class="button set_remove">Remove</a>
               </div>`;
    unstudiedItems.innerHTML += item;
    const setEdit = document.getElementsByClassName('set_edit');
    Array.from(setEdit).forEach((el) => {
      el.addEventListener('click', onEditSetClick);
    });
    const setRemove = document.getElementsByClassName('set_remove');
    Array.from(setRemove).forEach((el) => {
      el.addEventListener('click', onRemoveSetClick);
    });
  });
}