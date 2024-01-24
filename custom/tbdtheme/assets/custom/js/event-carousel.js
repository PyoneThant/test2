// Add to any (Add to calendar button)

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('add-to-calendar-btn').addEventListener('click', () => {
    // Code to open the AddToAny share menu
    a2a.init('page');
    a2a.openShareWindow('your-service-code', 'your-url');
  });

  document.getElementById('download-ics-btn').addEventListener('click', () => {
    // Code to handle the ICS file download
    // ...
  });
});
