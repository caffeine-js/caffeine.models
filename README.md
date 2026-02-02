# @caffeine/models

Biblioteca core do ecossistema **Caffeine.js** que fornece classes base, utilitários de validação de schema, DTOs reutilizáveis e helpers para construção de entidades de domínio.

## 📦 Instalação

```bash
bun install @caffeine/models
```

Ou, se estiver usando localmente no monorepo:

```bash
bun link @caffeine/models
```

## 🎯 O que este pacote fornece

### Classes Base

| Export | Descrição |
|--------|-----------|
| `Entity` | Classe abstrata base para entidades de domínio. Gerencia `id`, `createdAt` e `updatedAt` automaticamente. |
| `Schema` | Wrapper para validação de schemas TypeBox com compilação otimizada. |
| `SchemaManager` | Utilitário para construir e validar schemas a partir de strings JSON. |
| `t` | Re-export do TypeBox para criação de schemas de validação. |

### DTOs (Data Transfer Objects)

Importados via `@caffeine/models/dtos`:

| DTO | Descrição |
|-----|-----------|
| `EntityDTO` | Schema base para entidades (`id`, `createdAt`, `updatedAt`). |
| `IdObjectDTO` | Schema para query parameters por UUID. |
| `SlugObjectDTO` | Schema para query parameters por slug. |
| `PaginationDTO` | Schema para parâmetros de paginação. |
| `PasswordDTO` | Schema para validação de senha. |

#### DTOs de API

Importados via `@caffeine/models/dtos/api`:

| DTO | Descrição |
|-----|-----------|
| `AuthorizationDTO` | Schema para headers de autorização. |

### Factories

Importadas via `@caffeine/models/factories`:

| Factory | Descrição |
|---------|-----------|
| `makeEntityFactory` | Gera dados base de entidade com UUID v7 e timestamps. |

### Helpers

Importados via `@caffeine/models/helpers`:

| Helper | Descrição |
|--------|-----------|
| `generateUUID` | Gera um UUID v7. |
| `slugify` | Converte uma string para slug (lowercase, sem caracteres especiais). |

### Types

Importados via `@caffeine/models/types`:

| Type | Descrição |
|------|-----------|
| `IEntity` | Interface base para entidades. |

## 🚀 Uso

### Criando uma Entidade

```typescript
import { Entity } from "@caffeine/models";
import { EntityDTO } from "@caffeine/models/dtos";
import { makeEntityFactory } from "@caffeine/models/factories";

interface PostData {
  id: string;
  createdAt: string;
  updatedAt?: string;
  title: string;
  content: string;
}

class Post extends Entity<PostData> {
  private constructor(
    entity: EntityDTO,
    public readonly title: string,
    public readonly content: string
  ) {
    super(entity);
  }

  static make(data: PostData): Post {
    const entity = Entity.prepare(data);
    return new Post(entity, data.title, data.content);
  }

  unpack(): PostData {
    return {
      id: this.id,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      title: this.title,
      content: this.content,
    };
  }
}
```

### Validando Schemas

```typescript
import { Schema, t } from "@caffeine/models";

const UserSchema = t.Object({
  name: t.String(),
  email: t.String({ format: "email" }),
  age: t.Number({ minimum: 18 }),
});

const schema = new Schema(UserSchema);

const isValid = schema.match({
  name: "John",
  email: "john@example.com",
  age: 25,
}); // true
```

### Usando Helpers

```typescript
import { generateUUID, slugify } from "@caffeine/models/helpers";

const id = generateUUID(); // "0193c5f0-7c8e-7d9f-8e1a-2b3c4d5e6f7a"
const slug = slugify("Meu Post Incrível!"); // "meu-post-incrivel"
```

## 📁 Estrutura de Exports

```
@caffeine/models
├── Entity, Schema, SchemaManager, t
│
├── /dtos
│   ├── EntityDTO
│   ├── IdObjectDTO
│   ├── SlugObjectDTO
│   ├── PaginationDTO
│   ├── PasswordDTO
│   └── /api
│       └── AuthorizationDTO
│
├── /factories
│   └── makeEntityFactory
│
├── /helpers
│   ├── generateUUID
│   └── slugify
│
└── /types
    └── IEntity
```

## 🛠️ Scripts

| Script | Descrição |
|--------|-----------|
| `bun run build` | Compila o projeto para CJS e ESM. |
| `bun run test` | Executa os testes. |
| `bun run test:coverage` | Executa os testes com cobertura. |
| `bun setup` | Compila e registra o pacote localmente via `bun link`. |

## 📄 Licença

Desenvolvido por [Alan Reis](https://hoyasumii.dev).
