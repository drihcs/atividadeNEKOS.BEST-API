async function getNeko() {
  try {
    console.log('buscando imagem de gato...')
    const response = await fetch('https://nekos.best/api/v2/neko')
    const json = await response.json()
    console.log(json.results[0].url)
}

await getNeko()


    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const catImage = data[0];

    console.log("Imagem de gato encontrada!");

    return catImage;
  } catch (error) {
    console.error('Erro ao buscar imagem de gatos: ', error);
    throw error;
  }


/*FALTA EDITAR E CORRIGIR*/

function displayCatImage(catImage) {
  const imageElement = document.createElement('img');

  imageElement.src = catImage.url;
  imageElement.alt = 'Foto de um gato';
  imageElement.style.maxWidth = '100%';

  const infoElement =  document.createElement('p');
  infoElement.textContent = `ID da imagem: ${catImage.id}, largura: ${catImage.width}px, Altura: ${catImage.height}px`

  const container = document.getElementById('cat-container');

  container.innerHTML = '';
  container.appendChild(imageElement);
  container.appendChild(infoElement);
}

async function loadCatImage() {
  try {
    document.getElementById('status').textContent = 'Carregando...';

    const catImage = await fetchRandomCatImage();

    displayCatImage(catImage);

    document.getElementById('status').textContent = "imagem carregada com sucesso!";

  } catch (error) {
    document.getElementById('status').textContent = "Falha ao carregar imagem";
  }
}