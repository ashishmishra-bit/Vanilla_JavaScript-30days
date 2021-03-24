function changeTarnsition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playaudio(e) {
    const audio = document.querySelector(`audio[audio-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[audio-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', changeTarnsition));
  window.addEventListener('keydown', playaudio);