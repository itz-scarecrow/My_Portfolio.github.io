
  $(window).scroll(function () {
  if (this.scrollY > 20) {
    $('.navbar').addClass("sticky");
  }
  else {
    $('.navbar').removeClass("sticky");
  }
});
$('.container').click(function () {
  $('.list ul').toggleClass("show");
  $('.container').toggleClass("change");
});

$('.skill-per').each(function () {
  var $this = $(this);
  var per = $this.attr('per');
  $this.css("width", per + '%');
  $({ animatedValue: 0 }).animate({ animatedValue: per }, {
    duration: 1000,
    step: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    },
    complete: function () {
      $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
  });
});
var typed= new Typed(".typing",{
  strings: ["Front-End Developer.","Aspiring Full-Stack Developer.","Coder.","Sports Lover."],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true
});
setTimeout(function(){
$('.loader-bg').fadeToggle();
},1000);
