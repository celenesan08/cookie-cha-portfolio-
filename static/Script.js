let count = 0;

function bakeCookie(type) {
  count++;
  document.getElementById('counter').innerText = `Cookies baked: ${count}`;
  alert(`You baked a ${type} cookie! 🍪`);
}
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Hide all content
    contents.forEach(c => c.classList.remove('active'));

    // Activate clicked tab
    tab.classList.add('active');
    // Show corresponding content
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});