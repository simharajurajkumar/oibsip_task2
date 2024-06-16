document.addEventListener('DOMContentLoaded', function() {
  // Code for interactive hover effect on Elon Musk's image
  var elonImage = document.getElementById('elonImage');

  elonImage.addEventListener('mouseover', function() {
      this.src = 'elon2.jpg'; // Image of one of Elon Musk's innovations
  });

  elonImage.addEventListener('mouseout', function() {
      this.src = 'Elon.png'; // Original image of Elon Musk
  });

  // Code for flipping cards
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
      card.addEventListener('click', function() {
          this.classList.toggle('flipped');
      });
  });

  // Code for interactive timeline
  var timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Handle interactive timeline actions here
          console.log('Clicked timeline item:', item.textContent);
      });
  });
});
