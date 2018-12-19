var transEffect = Barba.BaseTransition.extend({
    start: function(){
       this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
    },
    fadeInNewcontent: function(nc) {
      nc.hide();
      var _this = this;
      $(this.oldContainer).fadeOut(1000).promise().done(() => {
              nc.css('visibility','visible');
                    nc.fadeIn(1000, function(){
                    _this.done();
              })
             });
    }
});

Barba.Pjax.getTransition = function() {
  return transEffect;
}

Barba.Pjax.start();

function move() {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      submitTrackingNumber();
    } else {
      width++; 
      elem.style.width = width + '%';
    }
  }
}

function submitTrackingNumber() {
  var trackingNumberInput = document.getElementById('tracking_Number').value;
  var carrierInput = document.getElementById('carrier').value;
  var url = 'https://flawless-basilisk.glitch.me/track?trackingNumber=' + trackingNumberInput + '&carrier=' + carrierInput;
  Barba.Pjax.goTo(url);
  //window.location.replace("https://flawless-basilisk.glitch.me/track?trackingNumber=" + trackingNumberInput.innerHTML);
}


function verifyTrackingNumber() {
  track(document.getElementById('carrier').value, document.getElementById('tracking_Number').value);
  
  move();
  //code
}

console.log(getInfo());