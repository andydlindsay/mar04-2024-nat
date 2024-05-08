// grab the DOM elements
const optionsForm = document.getElementById('options-form');
const newAppTitle = document.getElementById('new-app-title');
const countStart = document.getElementById('count-start');

optionsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const appTitle = newAppTitle.value;
  const counter = countStart.value;

  console.log(appTitle, counter);

  chrome.storage.local.set({
    counter: counter,
    appTitle: appTitle,
  });
});
