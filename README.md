# projeto-redes-computadores

## 💡 Sobre o projeto
Este projeto tem como objetivo implementar uma infraestrutura de rede, utilizando instâncias da AWS para disponibilizar uma aplicação de maneira segura e escalável. A aplicação se trata de um serviço web simples que realiza operações de CRUD em um banco de dados.

## Diagrama
```mermaid
graph TD
  Cliente[🖥️ Cliente]
  VPN[🔒 OpenVPN]
  Firewall[🛡️ Firewall]
  Nginx[Nginx<br/>reverse-proxy / load balance]
  Web1[Container WEB 1]
  Web2[Container WEB 2]
  Web3[Container WEB 3]
  Postgres[(🗄️ Postgres)]

  Cliente --> VPN
  VPN --> Firewall
  Firewall --> Nginx
  Nginx --> Web1
  Nginx --> Web2
  Nginx --> Web3
  Web1 --> Postgres
  Web2 --> Postgres
  Web3 --> Postgres
```

### 🧰 Tecnologias utilizadas
- AWS (Amazon Web Services)
- Ubuntu Server
- Docker
- Docker Compose
- Git
- Nginx
- PostgreSQL
- OpenVPN

## 🔍 Replicando o ambiente
Para esse projeto vamos utilizar uma instância `t2.micro` da AWS com Ubuntu Server como sistema operacional. Para facilitar o acesso a essa instância utilizaremos o arquivo de chave `.pem` ao invés de `.ppk`, que pode ser utilizado diretamente em qualquer terminal.

### 💻 Acessando o terminal da instância
Utilizando o powershell, execute o comando, substituindo `<chave.pem>` pelo arquivo da sua chave e `<ip_publico>` pelo ipv4 público da sua instância.

`ssh -i <chave.pem> ubuntu@<ip_publico>`

Se for sua primeira vez acessando, o powershell talvez possa pedir que você confirme o acesso. Basta digitar `yes` e pressionar Enter.

### 🐳 Instalando o docker
Agora que acessamos o terminal da nossa instância vamos instalar o docker

```bash
# Atualize os pacotes da instância
sudo apt update
```

```bash
# Baixe o script de instalação do Docker
curl -fsSL https://get.docker.com -o get-docker.sh

# Execute o script
sudo sh ./get-docker.sh
```

Para verificar se o Docker foi instalado corretamente execute `docker -v`

### 🚀 Executando o projeto
Execute o comando para clonar o projeto
```bash
# Caso a instância não possua o git, execute sudo apt install git

git clone https://github.com/BrunoVieira003/projeto-redes-computadores.git
```

Após isso execute os comandos:
```bash
cd /projeto-redes-computadores

docker compose up -d
```

Para acessar a aplicação, acesse o navegador e digite `http://<ip_publico>:3000` e de Enter. Observe que a instância alternará a cada acesso devido ao uso do nginx

**OBS: É importante que, nas regras de entrada da instância, em grupos de segurança, a porta 3000 esteja liberada**

### 🌐 Adicionando a VPN
Para adicionarmos a camada de VPN, vamos utilizar o OpenVPN. Neste projeto vamos utilizar o script presente na pasta vpn que pode ser encontrado nesse [repositório](https://github.com/Nyr/openvpn-install)

```bash
sudo bash ./vpn/openvpn-install
```

Quando as opções aparecerem escolha `1` - `1` - `1` - `2`, em ordem. Por último escolha um nome para o primeiro cliente da sua vpn (ex. cliente1)

O script irá instalar o OpenVPN e gerar um arquivo `cliente1.ovpn` para acesso. Basta copiar esse arquivo para a máquina que você deseja utilizar com o comando

```bash
scp -i <chave.pem> ubuntu@<ip_publico>:home/ubuntu/cliente1.ovpn .
```