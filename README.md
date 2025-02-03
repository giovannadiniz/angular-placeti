# Frond-end de Cidades

Projeto desenvolvido em **Angular** para consumir a API em spring boot.

Api: https://github.com/giovannadiniz/spring-boot-placeti

Nesse projeto é possível interegir com as seguintes funcionalidades:
- Criar nova cidade
- Listar todas as cidades
- Alterar informaçoes da cidade
- Deletar cidade 

## Endpoints que este projeto consome:

### 1. Buscar uma cidade por ID
**Método:** GET  
**URL:** `http://localhost:8080/placeti/cidades/1`

### 2. Listar todas as cidades
**Método:** GET  
**URL:** `http://localhost:8080/placeti/cidades`

### 3. Criar uma nova cidade
**Método:** POST  
**URL:** `http://localhost:8080/placeti/cidades`

**Corpo da requisição:**
```json
{
    "nome": "Águas Lindas",
    "uf": "GO",
    "capital": false
}
```

### 4. Atualizar uma cidade existente
**Método:** PUT  
**URL:** `http://localhost:8080/placeti/cidades`

**Corpo da requisição:**
```json
{
    "id": 11,
    "nome": "Águas Lindaxx",
    "uf": "GO",
    "capital": false
}
```

### 5. Remover uma cidade por ID
**Método:** DELETE  
**URL:** `http://localhost:8080/placeti/cidades/1`

