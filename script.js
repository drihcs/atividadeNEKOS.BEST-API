async function getNeko() {
  try {
    const status = document.getElementById('status');
    const container = document.getElementById('cat-container');

    status.textContent = 'Carregando...';

    const response = await fetch('https://nekos.best/api/v2/neko');

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const json = await response.json();
    const catImage = json.results[0];

    const imageElement = document.createElement('img');
    imageElement.src = getNeko.url;
    imageElement.alt = 'Foto de um gato';
    imageElement.style.maxWidth = '100%';

    const infoElement = document.createElement('p');
    infoElement.textContent = `ID: ${catImage.anime_name}`;

    container.innerHTML = '';
    container.appendChild(imageElement);
    container.appendChild(infoElement);

    status.textContent = "Imagem carregada com sucesso!";
  } catch (error) {
    console.error('Erro ao buscar imagem de gato:', error);
    document.getElementById('status').textContent = "Falha ao carregar imagem";
  }
}
