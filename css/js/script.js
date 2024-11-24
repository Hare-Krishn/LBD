function filterBusinesses() {
  const locationFilter = document.getElementById('filter-location').value;
  const typeFilter = document.getElementById('filter-type').value;
  const cards = document.querySelectorAll('.business-card');

  cards.forEach(card => {
    const businessType = card.getAttribute('data-type');
    const businessLocation = card.getAttribute('data-location');
    const matchesType = typeFilter === 'all' || typeFilter === businessType;
    const matchesLocation = locationFilter === 'all' || locationFilter === businessLocation;

    if (matchesType && matchesLocation) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}









document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    root: null, // Use the viewport as the container
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Optional: Stop observing once it's in view
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});