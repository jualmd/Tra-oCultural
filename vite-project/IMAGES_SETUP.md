# 🖼️ Configuração de Imagens

## Como Adicionar Imagens ao Projeto

### 1. Estrutura de Pastas
Crie as seguintes pastas dentro de `src/assets/`:
```
src/assets/
├── images/
│   ├── logos/
│   ├── events/
│   ├── backgrounds/
│   └── icons/
```

### 2. Imagens Necessárias

#### Logos
- `traco-cultural-logo.png` - Logo principal da aplicação
- Tamanho recomendado: 200x100px ou similar
- Formato: PNG com fundo transparente

#### Imagens de Eventos
- `cristo-redentor.png` - Imagem do Cristo Redentor para as páginas iniciais
- `events-collection.jpg` - Imagem genérica para eventos
- `act-new-episode.jpg` - Imagem específica do evento K-pop
- Tamanho recomendado: 400x600px para cards de eventos
- Formato: JPG ou PNG

#### Backgrounds
- Imagens de fundo para as páginas (opcional)
- Tamanho: 1920x1080px ou maior
- Formato: JPG

### 3. Como Usar as Imagens

#### Método 1: Import direto
```jsx
import cristoRedentor from '../assets/images/cristo-redentor.png';

<img src={cristoRedentor} alt="Cristo Redentor" />
```

#### Método 2: Usando o helper de imagens
```jsx
import { getImage } from '../assets/images.js';

<img src={getImage('cristoRedentor')} alt="Cristo Redentor" />
```

### 4. Otimização de Imagens

#### Tamanhos Recomendados:
- **Cards de eventos**: 300x400px
- **Banners**: 1200x400px  
- **Avatars**: 100x100px
- **Logos**: 200x100px

#### Formatos:
- **Fotos**: JPG (menor tamanho)
- **Logos/Ícones**: PNG (transparência)
- **Imagens simples**: WebP (melhor compressão)

### 5. Substituindo Placeholders

Atualmente o projeto usa placeholders. Para substituir:

1. Adicione suas imagens na pasta `src/assets/images/`
2. Atualize os caminhos no arquivo `src/assets/images.js`
3. As imagens serão automaticamente usadas em todo o projeto

### 6. Exemplo de Estrutura Final

```
src/assets/images/
├── logos/
│   └── traco-cultural-logo.png
├── events/
│   ├── cristo-redentor.png
│   ├── events-collection.jpg
│   ├── act-new-episode.jpg
│   ├── teatro-municipal.jpg
│   └── allianz-parque.jpg
├── backgrounds/
│   └── gradient-bg.jpg
└── icons/
    ├── heart-icon.svg
    └── star-icon.svg
```

### 7. Dicas de Performance

- Comprima as imagens antes de adicionar
- Use formatos modernos (WebP) quando possível
- Considere lazy loading para imagens grandes
- Mantenha imagens abaixo de 500KB quando possível

### 8. Ferramentas Recomendadas

- **Compressão**: TinyPNG, ImageOptim
- **Edição**: GIMP, Photoshop, Canva
- **Conversão**: CloudConvert, Squoosh

### 9. Imagens Gratuitas

Fontes para imagens culturais:
- Unsplash.com
- Pexels.com
- Pixabay.com
- Freepik.com (com atribuição)

### 10. Direitos Autorais

⚠️ **Importante**: Certifique-se de ter direitos para usar todas as imagens ou use apenas imagens livres de direitos autorais.