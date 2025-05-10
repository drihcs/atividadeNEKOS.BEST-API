const audio = document.createElement('audio');
audio.src = 'kiki.mp3';
audio.loop = true;
document.body.appendChild(audio);

document.addEventListener('click', () => {
  audio.play().catch(err => {
    console.error('Erro ao iniciar o áudio:', err);
  });
}, { once: true });
