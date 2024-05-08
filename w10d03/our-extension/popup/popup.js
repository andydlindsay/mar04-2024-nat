console.log('inside the popup file');

// grab the DOM elements
const appTitle = document.getElementById('app-title');
const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');

chrome.storage.local.get()
  .then((results) => {
    console.log('results', results);
    appTitle.innerText = results.appTitle;
    countSpan.innerText = results.counter;
  });

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log('changes', changes);
  console.log('namespace', namespace);

  if (namespace === 'local') {
    if (changes.appTitle) {
      appTitle.innerText = changes.appTitle.newValue;
    }
    if (changes.counter) {
      countSpan.innerText = changes.counter.newValue;
    }
  }
});

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  countSpan.innerText = count;
});
