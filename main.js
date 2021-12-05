const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// it gets the data from localStorage first and, if it isn't there, it falls back to an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(plates = [], platesList) {
  const html = plates.map((plate, index) => `
    <li>
        <input type="checkbox" id="item${index}" data-index="${index}" ${plate.done ? 'checked' : ''} />
        <label for="item${index}">${plate.text}</label>
    </li>
    `)
    .join('');
  platesList.innerHTML = html;
}

function addItem(event) {
  event.preventDefault();
  const input = this.querySelector('[name="item"]');
  const item = {
    text: input.value,
    done: false,
  };
  this.reset(); // clears the input value inside the form
  items.push(item);
  populateList(items, itemsList);
  // set the items array into local storage
  localStorage.setItem('items', JSON.stringify(items));
}

function toggleDone(event) {
  const el = event.target;
  if (!el.matches('input')) return; // skip this unless it's an input
  const { index } = el.dataset; // const index = el.dataset.index;
  items[index].done = !items[index].done; // change the property by flip-flopping between true and false
  localStorage.setItem('items', JSON.stringify(items)); // we can only use strings in Local Storage.
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// when the page loads
populateList(items, itemsList);
