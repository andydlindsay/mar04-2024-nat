console.log('inside the background file');

// fetch data
// fetch('https://www.dnd5eapi.co/api/classes')
//   .then(res => res.json())
//   .then(res => console.log(res));

// set default values
// chrome.storage.local.set({
//   appTitle: 'default title',
//   counter: -100,
// });

// wire up on click handler
// chrome.action.onClicked.addListener(() => {
//   console.log('the icon was clicked');
// });

// setting alarms
chrome.alarms.create('every 5 seconds', {
  // delayInMinutes: 5, // optional
  periodInMinutes: 5 / 60, // optional
  // when: new Date() + 60000, // optional
});

// listen for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm);

  // send a notification
  chrome.notifications.create('name', {
    title: 'Time to go to the dentist',
    message: 'you are late for the dentist',
    iconUrl: 'images/icon.png',
    type: 'basic' // 'basic', 'image', 'list', 'progress'
  });

  chrome.notifications.create('', {
    title: 'Time to go to the dentist',
    message: 'you are late for the dentist',
    iconUrl: 'images/icon.png',
    type: 'basic' // 'basic', 'image', 'list', 'progress'
  });
});
