
function showPreview(id) {
  const previews = {
    project1: '<img src="assets/previews/project1.png" class="img-fluid" alt="Project 1 Preview">'
  };
  document.getElementById('preview-content').innerHTML = previews[id] || '<p>No preview available.</p>';
  document.getElementById('preview-modal').style.display = 'block';
}
function hidePreview() {
  document.getElementById('preview-modal').style.display = 'none';
}
