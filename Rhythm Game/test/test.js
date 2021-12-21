window.onload = function() {
    var start = null;
    var element = document.getElementById('SomeElementYouWantToAnimate');
    element.style.position = 'absolute';
    
    function step(timestamp) {
        console.log(timestamp)

      if (null == start) {
        start = timestamp;
      }
      var progress = timestamp - start;
      element.style.left = Math.min(progress / 10, 500) + 'px';
      if (progress < 5000) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
}