<div align="center">

# MAKARINCORD

### Comunicação, comunidade e identidade TPG em um só lugar.

Código-fonte do cliente MAKARINCORD e da versão publicada na VM Oracle.

[![Release](https://img.shields.io/github/v/release/italokohler/makarincord?display_name=tag&style=for-the-badge&label=release&color=C58A3A)](https://github.com/italokohler/makarincord/releases)
[![VM Oracle](https://img.shields.io/badge/VM-Oracle-8A5A24?style=for-the-badge)](https://github.com/italokohler/makarincord/releases/tag/v2026.1013.75915)
[![Windows](https://img.shields.io/badge/Windows-x64-2563EB?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/italokohler/makarincord/releases/download/v2026.1013.75915/MAKARINCORD-2026.1013.75915-win-x64.exe)
[![License](https://img.shields.io/badge/licen%C3%A7a-AGPL--3.0--or--later-5B21B6?style=for-the-badge)](./LICENSE)

<br />

<a href="https://github.com/italokohler/makarincord/releases/download/v2026.1013.75915/MAKARINCORD-2026.1013.75915-win-x64.exe"><strong>⬇ Baixar para Windows</strong></a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://github.com/italokohler/makarincord/releases/tag/v2026.1013.75915"><strong>Ver release</strong></a>
&nbsp;&nbsp;·&nbsp;&nbsp;
<a href="https://github.com/italokohler/makarincord/tree/main"><strong>Explorar o código</strong></a>

</div>

<br />

> **MAKARINCORD 2026.1013.75915** é o snapshot customizado que está rodando na VM Oracle. Este repositório reúne o código-fonte público, o manifesto de self-hosting e os artefatos da versão distribuída.

## ✦ Sobre o projeto

O MAKARINCORD foi preparado para a comunidade TPG com foco em uma experiência própria de comunicação, comunidade e desktop. A publicação inclui as customizações visuais, o fluxo de autenticação e os ajustes necessários para a instância usada na VM.

| Componente | O que está aqui |
| --- | --- |
| **Cliente desktop** | Aplicativo Windows x64 com identidade MAKARINCORD |
| **Interface web** | Código da aplicação, temas, autenticação e experiência da comunidade |
| **Self-hosting** | Compose, serviços e configurações de implantação |
| **Release** | Instalador assinado pelo checksum e notas da versão |

## 🚀 Download

| Artefato | Descrição |
| --- | --- |
| [MAKARINCORD Windows x64](https://github.com/italokohler/makarincord/releases/download/v2026.1013.75915/MAKARINCORD-2026.1013.75915-win-x64.exe) | Instalador da versão efetivamente publicada na VM |
| [Notas da release](https://github.com/italokohler/makarincord/releases/tag/v2026.1013.75915) | Alterações, origem e arquivos complementares |
| [Checksum SHA-256](https://github.com/italokohler/makarincord/releases/download/v2026.1013.75915/MAKARINCORD-2026.1013.75915.sha256) | Verificação da integridade do instalador |

**SHA-256 do instalador:**

```text
c902b7fdce3c052dce89f97ded54e4229bab67925d4644c87089191f18b743dd
```

## 🧭 Instalação no Windows

1. Baixe o instalador na seção de [releases](https://github.com/italokohler/makarincord/releases).
2. Execute `MAKARINCORD-2026.1013.75915-win-x64.exe`.
3. Confirme o SHA-256 caso queira validar o arquivo antes da instalação.

## ☁️ Versão da VM Oracle

O código e o instalador desta publicação foram extraídos diretamente do ambiente da VM. O app-proxy usa o override [`deploy/self-hosting/docker-compose.tpg.yml`](./deploy/self-hosting/docker-compose.tpg.yml), que monta o instalador da release em modo somente leitura.

O arquivo [`SOURCE_ORIGIN.md`](./SOURCE_ORIGIN.md) documenta a origem do snapshot e os filtros aplicados antes da publicação. Ambientes locais, caches, backups e credenciais não fazem parte do repositório público.

## 🧱 Estrutura do código

```text
├── makarincord_app/              # Aplicação web e interface MAKARINCORD
├── makarincord_desktop/          # Cliente desktop e empacotamento
├── makarincord_api/              # API e serviços de aplicação
├── makarincord_gateway/          # Gateway em tempo real
├── packages/                # Pacotes compartilhados
├── deploy/self-hosting/     # Compose e configuração da VM
├── makarincord_static/           # Assets estáticos e avisos de terceiros
└── SOURCE_ORIGIN.md         # Proveniência do snapshot publicado
```

## 🛠️ Desenvolvimento

O projeto combina TypeScript, React, Rust e serviços de self-hosting. Para iniciar uma configuração local, use [`deploy/self-hosting/.env.example`](./deploy/self-hosting/.env.example) como referência e mantenha credenciais reais fora do Git.

## 📜 Licença e créditos

O código é distribuído sob a licença [AGPL-3.0-or-later](./LICENSE). Os avisos de terceiros estão em [`makarincord_static/THIRD_PARTY_LICENSES.md`](./makarincord_static/THIRD_PARTY_LICENSES.md).

O MAKARINCORD é uma distribuição customizada baseada na base técnica Fluxer; os créditos, licenças e avisos originais permanecem preservados no código.
