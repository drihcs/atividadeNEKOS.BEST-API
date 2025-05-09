const botao = document.createElement('button');
botao.style.position = 'absolute';
botao.style.width = '1px';
botao.style.height = '1px';
botao.style.opacity = '0';
botao.style.overflow = 'hidden';
botao.style.pointerEvents = 'none'; // impede clique manual visível
document.body.appendChild(botao);

const audio = document.createElement('audio');
audio.src = 'kiki.mp3';
audio.loop = true;
document.body.appendChild(audio);

// Agora, você ativa o áudio com **qualquer outra interação real**:
document.addEventListener('click', () => {
  audio.play().catch(err => {
    console.error('Autoplay bloqueado:', err);
  });
}, { once: true }); // garante que o áudio só tente tocar uma vez
