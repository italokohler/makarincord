# MAKARINCORD

Código-fonte e distribuição do cliente MAKARINCORD usado pela comunidade TPG e publicado na VM Oracle.

Este repositório contém o snapshot customizado que está na VM, incluindo a interface, identidade visual, fluxo de autenticação e configuração de self-hosting. A base técnica é derivada do projeto Fluxer, preservando a licença e os avisos de terceiros correspondentes.

## Release da VM

- [MAKARINCORD 2026.1013.75915](https://github.com/italokohler/makarincord/releases/tag/v2026.1013.75915)
- [Instalador Windows x64](https://github.com/italokohler/makarincord/releases/download/v2026.1013.75915/MAKARINCORD-2026.1013.75915-win-x64.exe)
- SHA-256: `c902b7fdce3c052dce89f97ded54e4229bab67925d4644c87089191f18b743dd`

## Código da VM

O arquivo [SOURCE_ORIGIN.md](./SOURCE_ORIGIN.md) registra a origem e os filtros aplicados ao snapshot público. Foram removidos arquivos de ambiente local, caches, backups e credenciais antes da publicação.

## Self-hosting

O override usado pelo app-proxy da VM está em [`deploy/self-hosting/docker-compose.tpg.yml`](./deploy/self-hosting/docker-compose.tpg.yml). O instalador é distribuído pela release, não pelo histórico Git, devido ao tamanho do executável.

## Desenvolvimento

O projeto usa TypeScript, React, Rust e os serviços de self-hosting descritos nos arquivos de configuração do repositório. Para executar uma instância de desenvolvimento, configure um ambiente local a partir de [`deploy/self-hosting/.env.example`](./deploy/self-hosting/.env.example) e nunca publique valores reais de produção.

## Licença

O código é distribuído sob a licença [AGPL-3.0-or-later](./LICENSE). Os avisos de terceiros estão em [`fluxer_static/THIRD_PARTY_LICENSES.md`](./fluxer_static/THIRD_PARTY_LICENSES.md).
