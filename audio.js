 const botao = document.getElementById('meuBotao');
  const audio = new Audio('kiki-ost.mp3');
  audio.loop = true;

  botao.addEventListener('click', () => {
    audio.play().catch(err => {
      console.error('Erro ao tocar áudio:', err);
    });
  });