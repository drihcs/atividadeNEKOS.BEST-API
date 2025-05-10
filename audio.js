 const audio = new Audio('public/kiki.mp3');
    audio.loop = true;

    function tocarAudio() {
      audio.play().then(() => {
        console.log('Música tocando');
      }).catch(err => {
        console.error('Erro ao tocar:', err);
      });

      document.removeEventListener('click', tocarAudio);
    }

    document.addEventListener('click', tocarAudio);