// Fetch the HTML content of the allCategoriesMenu.html file and insert it into the element with ID 'all-categories'
fetch('../components/allCategoriesMenu.html')
.then(res => res.text())
.then(data => {
  document.getElementById('all-categories').insertAdjacentHTML('beforeend', data);
});

// Fetch the HTML content of the departmentsMenu.html file and insert it into the element with ID 'departments-menu'
fetch('../components/departmentsMenu.html')
.then(res => res.text())
.then(data => {
  document.getElementById('departments-menu').insertAdjacentHTML('beforeend', data);
});