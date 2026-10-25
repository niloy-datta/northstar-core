# northstar-core

## Project Structure

```text
northstar-core/
├── apps/
│   ├── web/                  # Next.js + TypeScript
│   │   ├── src/
│   │   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── features/
│   │   │   └── lib/
│   │   └── package.json
│   │
│   └── api/                  # Spring Boot + Java
│       ├── src/main/java/com/shl/
│       │   ├── security/
│       │   ├── contacts/
│       │   ├── trading/
│       │   ├── sales/
│       │   ├── procurement/
│       │   ├── logistics/
│       │   ├── finance/
│       │   ├── documents/
│       │   └── ai/
│       │       ├── ingestion/
│       │       ├── retrieval/
│       │       └── chat/
│       ├── src/main/resources/
│       │   └── db/migration/ # Flyway SQL
│       └── pom.xml
│
├── docs/
│   ├── architecture/
│   ├── dbms/
│   │   ├── er-diagram.md
│   │   ├── normalization.md
│   │   └── queries.md
│   └── security/
│
├── infra/
│   ├── docker/
│   └── aws/
│
├── scripts/
├── .github/workflows/
├── .env.example
├── .gitignore
├── compose.yaml
└── README.md
```