async function getNeko() {
  try {
    console.log('buscando imagem de gato...');
    const response = await fetch("https://nekos.best/api/v2/neko");

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const catImage = data.results[0];

    console.log("Imagem de gato encontrada!");

    return catImage;
  } catch (error) {
    console.error('Erro ao buscar imagem de gatos: ', error);
    throw error;
  }
}

function displayCatImage(catImage) {
  const imageElement = document.createElement('img');

  imageElement.src = catImage.url;
  imageElement.alt = 'Foto de um gato';
  imageElement.style.maxWidth = '100%';

  const infoElement = document.createElement('p');
  infoElement.textContent = `Imagem de neko carregada com sucesso!`;

  const container = document.getElementById('cat-container');

  container.innerHTML = '';
  container.appendChild(imageElement);
  container.appendChild(infoElement);
}

async function loadCatImage() {
  try {
    document.getElementById('status').textContent = 'Carregando...';

    const catImage = await getNeko();

    displayCatImage(catImage);

    document.getElementById('status').textContent = "Imagem carregada com sucesso!";
  } catch (error) {
    document.getElementById('status').textContent = "Falha ao carregar imagem";
  }
}
