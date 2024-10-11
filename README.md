<img src="https://github.com/abraao69/abraao69/blob/main/Navy%20Blue%20Geometric%20Technology%20LinkedIn%20Banner%20(2).png" alt="Logo">
<img src="https://github.com/abraao69/Testinho-API-Node-Express-Myql-Websocket/blob/main/testinho/frontend/src/img/fotocrud.jpg">

Tecnologias Usadas:

 Prisma - Jest - Node - Docker - ApiExpress - WebSockets - Chat - Nodemon - Prisma 
 
 
 Instalação do Container Docker
  
O servidor está configurado com muitos complementos sendo grande parte deles desnecessários.  
Retire-os conforme quiser personalizar sua instalação no arquivo dockerfile.  
Além disso, esse projeto é bom para personalizar para outros projetos Web também.  
  

 Fazer o build dos containers analizando a construção:  
```
Build: docker-compose up --build  
```

Intalação do projeto:  

O primeiro passo e ter o Node e o Yarn instalados no seu sistema.

Em particular utilizo o Node NVM, para intercalar entre as versões mais facilmente.

Para instalar o Node.js usando o NVM (Node Version Manager) e o Yarn no Linux, siga os passos abaixo:

Instalar o NVM

Abra o terminal e execute o seguinte comando para baixar e instalar o NVM:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
Depois, adicione o NVM ao seu terminal. Para isso, adicione as linhas abaixo ao seu arquivo ~/.bashrc, ~/.bash_profile, ou ~/.zshrc, dependendo do shell que você está usando:
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```
Em seguida, recarregue o arquivo de configuração:
```
source ~/.bashrc  # ou ~/.bash_profile ou ~/.zshrc
```

Instalar o Node.js

Agora que o NVM está instalado, você pode instalar a versão do Node.js que desejar. Por exemplo, para instalar a versão mais recente:

```
nvm install node
```
Para instalar uma versão específica (substitua X.X.X pela versão desejada):
```
nvm install X.X.X
```

Com o Node.js instalado, você pode instalar o Yarn globalmente usando o npm (que é instalado junto com o Node.js):

```
npm install --global yarn
```

Para verificar se o NVM, Node.js e Yarn foram instalados corretamente, execute:

```
nvm --version

```

```
node --version

```

```
yarn --version

```
Esses comandos devem retornar as versões instaladas de cada ferramenta.

Dicas Finais
Para listar as versões do Node.js instaladas, use nvm ls.
Para alternar entre versões do Node.js, use nvm use X.X.X.
Agora você deve estar pronto para usar o Node.js e o Yarn no seu sistema Linux! Se tiver mais dúvidas, é só perguntar.
Comece acessando a pasta api e instale as dependencias do docker, 


Obs: caso não tenha o docker instalado no seu sistema acesse:

```
https://github.com/Polcaro1989/Instala-o-Docker-compose/blob/main/README.md
```

INSTALAÇÂO DO PROJETO API RESTFULL COM NOJE :

comandos utilizados para a instalação :

1- Clone o progeto <br>
2- Entre nas dependências do projeto :/ApiRestful-teste/testinho/frontend e rode o comando yarn .<br>
3- Entre nas dependências do projeto :/ApiRestful-teste/testinho/api e rode o comando yarn .<br>
4- Depois disso inicie o servidor com o comando yarn start.<br>
5- Para iniciar o projeto frontend, inicie com yarn start.<br>


Testes  automatizados com Jest:

Para fazer os testes automatizados entre no diretorio :/ApiRestful-teste/testinho/api você pode testar as rotas utilizando os comandos:

Aviso: Todas as rotas foram testadas com Jest e estão em pleno funcionamento.

1-
```
jest delete.teste.js
```
2- 
```
jest update.teste.js
```
3- 

```
jest post.teste.js
```

4- 
```
jest users.teste.js
```

5- 
```
jest usersid.teste.js
```

<br>

Desse jeito você conseguirá testar as rotas com êxito .

Redação:

O sucesso vem da autonomia e de uma ampla gama de habilidades.

Projetos de desenvolvimento de software bem-sucedidos exigem habilidades diversas e apropriadas. Este artigo descreve minha jornada para desenvolver uma integração de API RESTful e WebSocket - uma tarefa que enfatiza a autonomia e a interação humana eficaz, bem como habilidades colaborativas, mesmo quando trabalho sozinho.

O projeto começou criando uma API RESTful usando Node.js, React e Express e combinando-a com a funcionalidade interativa exigida pelo projeto de banco de dados MySQL. Garantir um fluxo eficiente entre o objetivo final do projeto e a sua execução real é crucial: o trabalho individual, a definição de objetivos claros e a divisão das tarefas em fases coerentes abrem caminho para um progresso eficiente e organizado. Para garantir a qualidade e confiabilidade da API, o próximo passo é escrever testes automatizados usando Jest para verificar a funcionalidade de roteamento.

Sou habilidoso em identificar rigorosamente os casos de teste necessários e executá-los adequadamente para obter uma implementação completa. Minha experiência inclui a criação de conjuntos de testes abrangentes que abordam uma variedade de cenários, desde sucesso até falha potencial. Um dos maiores desafios encontrados durante o projeto foi a integração da funcionalidade WebSocket na API de mensagens instantâneas. Aproveitei minha vasta experiência e domínio de ferramentas relacionadas, como Node.js e Express, sem ter que fazer pesquisas extensas. Documentei cada etapa do processo com uma abordagem pragmática e determinada e superei obstáculos de forma eficaz para garantir a integração bem-sucedida do WebSocket ao projeto.

Por fim, reconhecendo a importância de uma documentação clara e da manutenção do código, reservei um tempo para criar uma documentação abrangente e incluir comentários relevantes no código-fonte. Isto não só torna o código mais fácil de entender em iterações futuras, mas também demonstra um compromisso com a transparência e a qualidade do trabalho que está sendo realizado.
Resumindo, minha experiência no desenvolvimento de APIs RESTful por meio da integração WebSocket destacou a importância da autonomia, versatilidade e comunicação eficaz, mesmo em um ambiente de trabalho individual. Enfrentei desafios com determinação e adaptabilidade, alcançando resultados finais que atenderam às expectativas do projeto e demonstrando a importância dessas habilidades em qualquer ambiente de desenvolvimento de software.


Reflexão:

Quando encontrei desafios técnicos durante o projeto e considerei possíveis simulações interpessoais, enfatizei a importância da determinação e da comunicação clara. Uma abordagem pragmática e a capacidade de compreender e expressar necessidades são fundamentais para superar obstáculos e manter um ambiente de trabalho colaborativo e produtivo.

Proatividade:

Durante o projeto, fui capaz de  prever possíveis obstáculos à integração do WebSocket na API de mensagens instantâneas. O meu domínio das melhores práticas permite-me enfrentar estes desafios com confiança e eficiência, garantindo um progresso contínuo. Adicionalmente, busco a melhoria contínua, aproveitando as habilidades do framework Jest para desenvolver testes automatizados completos e confiáveis. Essas iniciativas refletem meu compromisso com a excelência técnica e a entrega de resultados de alta qualidade.
