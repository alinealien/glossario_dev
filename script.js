// Carrega as informações do glossário a partir do arquivo JSON
fetch('glossary.json')
  .then(response => response.json())
  .then(data => {
    // Obtém a div onde o glossário será exibido
    const glossary = document.getElementById('glossary');

    // Cria um objeto para mapear os termos do glossário por título
    const terms = {};
    data.forEach(term => {
      terms[term.title] = term.definition;
    });

    // Obtém o formulário e adiciona um listener para quando for enviado
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      // Previne o envio do formulário para a página de destino
      event.preventDefault();

      // Obtém o valor do campo de texto do formulário
      const term = form.elements.term.value;

      // Busca a definição do termo no objeto de termos
      const definition = terms[term];

      // Exibe a definição na página
      const result = document.getElementById('result');
      result.textContent = definition || 'Termo não encontrado no glossário.';
    });
  });
