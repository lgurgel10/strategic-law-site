

## Plano: Remover Matheus Cavalcanti de Santana do site

### Alterações necessárias

**1. `src/components/Team.tsx`**
- Remover o objeto de Matheus do array de membros (linhas 197-208)
- Remover o import da foto dele (`matheusCavalcantiPhoto`)
- Remover referências ao nome dele nos blocos de `objectPosition` (linhas 261-262, 370-371)
- Remover da lista `needsHigherPosition` se presente

**2. `src/pages/TeamPage.tsx`**
- Remover o objeto de Matheus do array de membros (linhas 191-202)
- Remover o import da foto dele
- Remover referências ao nome dele nos blocos de `objectPosition` (linhas 257-258, 287)
- Remover da lista `needsHigherPosition` (linha 356)

Todas as referências a "Matheus Cavalcanti de Santana" serão eliminadas de ambos os arquivos.

