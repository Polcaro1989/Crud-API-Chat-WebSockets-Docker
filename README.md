<img src="https://github.com/abraao69/abraao69/blob/main/Navy%20Blue%20Geometric%20Technology%20LinkedIn%20Banner%20(2).png" alt="Logo">
<img src="https://github.com/abraao69/Testinho-API-Node-Express-Myql-Websocket/blob/main/testinho/frontend/src/img/fotocrud.jpg">

## Criador do projeto: 

Abraão polcaro: devabraao.tech

## Projeto: 

Testinho ApiRESTfull

## Instalação do Container Docker
  
## O servidor está configurado com muitos complementos sendo grande parte deles desnecessários.  
Retire-os conforme quiser personalizar sua instalação no arquivo dockerfile.  
Além disso, esse projeto é bom para personalizar para outros projetos Web também.  
  

## Fazer o build dos containers analizando a construção:  
Build: docker-compose up --build  
  

### Instalação de algumas dependências
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
  

### 
### Instalação do Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io

Depois de instalado e configurado rode o Docker:
sudo service docker start

Testar se o serviço Docker está rodando corretamente:
sudo docker run hello-world  

##
### Docker-Compose - Instalação e configuração:

OBS: EM ALGUNS CASOS PODE ESTAR NO /usr/bin/docker-compose

sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version  
  
##
### Para usar o Docker sem usar sudo
https://docs.docker.com/engine/install/linux-postinstall/
  
##  
### Configurar para o fuso horário de São Paulo
sudo timedatectl set-timezone America/Sao_Paulo
  
##
### Adicionar o repositório do PHP:
sudo add-apt-repository ppa:ondrej/php

##
### Instalar os pacotes do PHP instalado. Verificar com php version.
sudo apt-get install -y php8.2-cli php8.2-common php8.2-pgsql php8.2-zip php8.2-gd php8.2-mbstring php8.2-curl php8.2-xml php8.2-bcmath

##
### Install Composer
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer


php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

sudo apt-get install composer

## Comandos:
Iniciar:  
docker-compose up -d  
  
Parar:  
docker-compose down  

## INSTALAÇÂO DO PROJETO API RESTFULL COM NOJE :

## comandos utilizados para a instalação :

1- Clone o progeto <br>
2- Entre nas dependências do projeto :/ApiRestful-teste/testinho/frontend e rode o comando yarn .<br>
3- Entre nas dependências do projeto :/ApiRestful-teste/testinho/api e rode o comando yarn .<br>
4- Depois disso inicie o servidor com o comando yarn start.<br>
5- Para iniciar o projeto frontend, inicie com yarn start.<br>


## Testes  automatizados com Jest:

## Para fazer os testes automatizados entre no diretorio :/ApiRestful-teste/testinho/api você pode testar as rotas utilizando os comandos:

## Aviso: Todas as rotas foram testatas e estão em pleno funcionamento.

1- jest delete.teste.js<br>
2- jest update.teste.js<br>
3- jest post.teste.js<br>
4- jest users.teste.js<br>
5- jest usersid.teste.js<br>

## Desse jeito você conseguirá testar as rotas com êxito .



## Redação:

O sucesso vem da autonomia e de uma ampla gama de habilidades.

Projetos de desenvolvimento de software bem-sucedidos exigem habilidades diversas e apropriadas. Este artigo descreve minha jornada para desenvolver uma integração de API RESTful e WebSocket - uma tarefa que enfatiza a autonomia e a interação humana eficaz, bem como habilidades colaborativas, mesmo quando trabalho sozinho.

O projeto começou criando uma API RESTful usando Node.js, React e Express e combinando-a com a funcionalidade interativa exigida pelo projeto de banco de dados MySQL. Garantir um fluxo eficiente entre o objetivo final do projeto e a sua execução real é crucial: o trabalho individual, a definição de objetivos claros e a divisão das tarefas em fases coerentes abrem caminho para um progresso eficiente e organizado. Para garantir a qualidade e confiabilidade da API, o próximo passo é escrever testes automatizados usando Jest para verificar a funcionalidade de roteamento.

Sou habilidoso em identificar rigorosamente os casos de teste necessários e executá-los adequadamente para obter uma implementação completa. Minha experiência inclui a criação de conjuntos de testes abrangentes que abordam uma variedade de cenários, desde sucesso até falha potencial. Um dos maiores desafios encontrados durante o projeto foi a integração da funcionalidade WebSocket na API de mensagens instantâneas. Aproveitei minha vasta experiência e domínio de ferramentas relacionadas, como Node.js e Express, sem ter que fazer pesquisas extensas. Documentei cada etapa do processo com uma abordagem pragmática e determinada e superei obstáculos de forma eficaz para garantir a integração bem-sucedida do WebSocket ao projeto.

Por fim, reconhecendo a importância de uma documentação clara e da manutenção do código, reservei um tempo para criar uma documentação abrangente e incluir comentários relevantes no código-fonte. Isto não só torna o código mais fácil de entender em iterações futuras, mas também demonstra um compromisso com a transparência e a qualidade do trabalho que está sendo realizado.
Resumindo, minha experiência no desenvolvimento de APIs RESTful por meio da integração WebSocket destacou a importância da autonomia, versatilidade e comunicação eficaz, mesmo em um ambiente de trabalho individual. Enfrentei desafios com determinação e adaptabilidade, alcançando resultados finais que atenderam às expectativas do projeto e demonstrando a importância dessas habilidades em qualquer ambiente de desenvolvimento de software.


## Reflexão:

Quando encontrei desafios técnicos durante o projeto e considerei possíveis simulações interpessoais, enfatizei a importância da determinação e da comunicação clara. Uma abordagem pragmática e a capacidade de compreender e expressar necessidades são fundamentais para superar obstáculos e manter um ambiente de trabalho colaborativo e produtivo.

## Proatividade:

Durante o projeto, fui capaz de  prever possíveis obstáculos à integração do WebSocket na API de mensagens instantâneas. O meu domínio das melhores práticas permite-me enfrentar estes desafios com confiança e eficiência, garantindo um progresso contínuo. Adicionalmente, busco a melhoria contínua, aproveitando as habilidades do framework Jest para desenvolver testes automatizados completos e confiáveis. Essas iniciativas refletem meu compromisso com a excelência técnica e a entrega de resultados de alta qualidade.
