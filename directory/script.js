function openTab(tabId) {
  // Hide all tab content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.style.display = 'none');

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.style.backgroundColor = '#f1f1f1');

  // Show the selected tab and highlight its button
  document.getElementById(tabId).style.display = 'block';
  event.target.style.backgroundColor = '#ccc';

// Default to showing the iPhone tab
document.addEventListener('DOMContentLoaded', () => openTab('iphone'));
}
