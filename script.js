function showPreview(id) {
  const previews = {
    project1: '<img src="assets/previews/project1.png" class="img-fluid" alt="Project 1 Preview">',
    amazon: '<img src="assets/previews/amazon.png" class="img-fluid" alt="Amazon Internship Preview">',
    uva: '<img src="assets/previews/uva.png" class="img-fluid" alt="UVA Work Preview">'
  };
  document.getElementById('preview-content').innerHTML = previews[id] || '<p>No preview available.</p>';
  document.getElementById('preview-modal').style.display = 'flex';
}

function hidePreview() {
  document.getElementById('preview-modal').style.display = 'none';
}
