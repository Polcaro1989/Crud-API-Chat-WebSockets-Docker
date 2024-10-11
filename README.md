<img src="https://github.com/abraao69/abraao69/blob/main/Navy%20Blue%20Geometric%20Technology%20LinkedIn%20Banner%20(2).png" alt="Logo">
<img src="https://github.com/abraao69/Testinho-API-Node-Express-Myql-Websocket/blob/main/testinho/frontend/src/img/fotocrud.jpg">

# Crud usuários com chat em tempo real:

Tecnologias utilizadas: 

 Prisma - Jest - Node - Docker - Express - WebSockets - Chat - Nodemon - Prisma 
 
 
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
Instalação da ApiRestfull:

comandos utilizados para a instalação :

1- Clone o projeto <br>
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

Reflexão:

Quando encontrei desafios técnicos durante o projeto e considerei possíveis simulações interpessoais, enfatizei a importância da determinação e da comunicação clara. Uma abordagem pragmática e a capacidade de compreender e expressar necessidades são fundamentais para superar obstáculos e manter um ambiente de trabalho colaborativo e produtivo.

Proatividade:

Durante o projeto, fui capaz de  prever possíveis obstáculos à integração do WebSocket na API de mensagens instantâneas. O meu domínio das melhores práticas permite-me enfrentar estes desafios com confiança e eficiência, garantindo um progresso contínuo. Adicionalmente, busco a melhoria contínua, aproveitando as habilidades do framework Jest para desenvolver testes automatizados completos e confiáveis. Essas iniciativas refletem meu compromisso com a excelência técnica e a entrega de resultados de alta qualidade.
