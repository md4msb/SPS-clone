function firstVideo () {
    document.getElementById('first-img').style.display = 'none'
    document.getElementById('first-video').style.display = 'block'
    document
      .getElementById('first-video-content')
      .setAttribute('src', 'https://www.youtube.com/embed/I9QGnNvrmoY?autoplay=1')
  }
  function secondVideo () {
    document.getElementById('second-img').style.display = 'none'
    document.getElementById('second-video').style.display = 'block'
    document
      .getElementById('second-video-content')
      .setAttribute('src', 'https://www.youtube.com/embed/ckub1RSlhic?autoplay=1')
  }
  function thirdVideo () {
    document.getElementById('third-img').style.display = 'none'
    document.getElementById('third-video').style.display = 'block'
    document
      .getElementById('third-video-content')
      .setAttribute('src', 'https://www.youtube.com/embed/xkmM6h32lnM?autoplay=1')
  }
  function fourthVideo () {
    document.getElementById('fourth-img').style.display = 'none'
    document.getElementById('fourth-video').style.display = 'block'
    document
      .getElementById('fourth-video-content')
      .setAttribute('src', 'https://www.youtube.com/embed/vhG3wKGp2mc?autoplay=1')
  }
  function fifthVideo () {
    document.getElementById('fifth-img').style.display = 'none'
    document.getElementById('fifth-video').style.display = 'block'
    document
      .getElementById('fifth-video-content')
      .setAttribute('src', 'https://www.youtube.com/embed/m_hx0Ebg5Yo?autoplay=1')
  }


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
})