# Origem deste código-fonte

Este snapshot foi copiado diretamente do checkout customizado existente na VM Oracle em 18/10/2026.

Foram excluídos do repositório público apenas dados específicos da máquina ou gerados localmente:

- backups do Codex e estado local da VM;
- arquivos `.env` de desenvolvimento/local;
- caches, `node_modules`, `target`, `dist` e artefatos de build;
- arquivos temporários e diretórios de staging.

Os arquivos de configuração de exemplo foram preservados. Nenhuma credencial de produção, chave privada ou token de acesso faz parte deste snapshot.

As pastas de primeiro nível e os charts Helm foram renomeados para a identidade MAKARINCORD. Nomes internos de pacotes, crates, serviços e variáveis de compatibilidade foram preservados para não quebrar a execução da VM.
