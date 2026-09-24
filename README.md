# Fumaça Grill — Landing Page v2

Landing page estática, responsiva e interativa para **Fumaça Grill — Parrilla Burguer**, em Olinda/PE.

## O que foi atualizado

- Identidade visual refeita para refletir a referência pública encontrada da marca.
- Favicon local em SVG.
- Open Graph + Twitter Cards com imagem local.
- SEO básico com `description`, `robots` e schema.org `Restaurant`.
- Dados públicos atualizados: endereço, telefone, Instagram, nota do Google, quantidade de avaliações e horários consultados.
- Seção de serviços baseada nas atividades públicas cadastradas.
- CTA direto para Instagram, Google Maps e WhatsApp.
- Layout mobile-first, microinterações e animações de entrada.
- Sem backend, banco de dados ou dependências de servidor.

## Conteúdo que deliberadamente não foi inventado

### Cardápio
Não foi localizado, em uma fonte pública indexável confiável, o cardápio item a item da unidade de Olinda. Por isso a página leva o visitante ao Instagram oficial em vez de publicar produtos ou preços de outra empresa com nome semelhante.

### Comentários do Google
O perfil público consultado mostra **5,0/5 em 6 avaliações**, mas os textos individuais não ficaram disponíveis de forma verificável na indexação consultada. A página exibe a nota/quantidade e leva ao perfil para leitura dos comentários reais.

### Fotos do estabelecimento
As buscas públicas não forneceram um acervo de fotos reutilizável com segurança. A seção de fotos leva ao Instagram oficial, evitando usar imagens genéricas como se fossem da Fumaça Grill.

## Estrutura

```text
fumaca-grill-landing-v2/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── brand-mark.svg
    ├── favicon.svg
    └── og-image.jpg
```

## Como editar

A maior parte dos links e ações está concentrada no `index.html` e `script.js`.

Quando o cliente entregar as fotos e o cardápio oficial, substitua os blocos da seção de cardápio e da galeria por dados reais. O restante da estrutura não precisa mudar.

## Fontes públicas consultadas

- Google Business / Maps: Fumaça Grill - Parrilla Burguer — nota 5,0 e 6 avaliações; endereço e horários públicos.
- Cadastro empresarial público: Rua Manoel Graciliano de Souza, 502, Loja A, Jardim Atlântico, Olinda/PE; telefone (81) 99416-4526; atividades incluem lanchonete/restaurante e serviços de alimentação para eventos/recepções.
- Referência visual pública da marca encontrada em um diretório local; o arquivo `brand-mark.svg` é uma **recriação de referência**, não um arquivo oficial entregue pelo estabelecimento.

## Atualização — canais oficiais de pedido
- Cardápio Web: https://app.cardapioweb.com/fumaca_grill
- iFood: https://www.ifood.com.br/delivery/olinda-pe/fumaca-grill---hamburguer-na-parrilha-jardim-atlantico/1e67b941-a0d5-4a47-a960-6825f44abc48
- Logo oficial recebida: `assets/fumaca-logo.webp`
- A área de “Eventos & recepções” foi removida.


## Destaques do cardápio

- Recomendado: `assets/hamburguer-recomendado.png` → produto `3119849`
- Mais pedido (duplo): `assets/mais-pedido-duplo.png` → produto `3119848`
- Mais pedido (clássico): `assets/mais-pedido-classico.png` → produto `3119843`


## Atualização v6
- A antiga seção de Fotos foi removida.
- Foi criada a seção “A experiência Fumaça Grill”, com destaque visual do produto, diferenciais, avaliação e CTAs de pedido.
- A navegação agora separa Serviços e Experiência.
