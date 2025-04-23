// Fetch the HTML content of the allCategoriesMenu.html file and insert it into the element with ID 'all-categories'
fetch('../components/allCategoriesMenu.html')
.then(res => res.text())
.then(data => {
  document.getElementById('all-categories').insertAdjacentHTML('beforeend', data);
});