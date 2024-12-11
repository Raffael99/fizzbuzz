# FizzBuzz

TypeScript Implementation des FizzBuzz Spiels.

## Installation

Nutzung des Package Managers [npm](https://www.npmjs.com/) zur Installation.

```bash
npm install
```

## Nutzung

### Demonstration der Funktionalität.

1. Transpilieren des TypeScript Codes in JavaScript.
```bash
npm run build
```

2. Ausführen der Beispieldatei index.js.
```bash
node index.js
```

### Beispiel Nutzung des Moduls in JavaScript.
```javascript
const fizzbuzz = require('./dist/fizzbuzz');
const result = fizzBuzz(15);
```

### Beispiel Nutzung des Moduls in TypeScript.
```typescript
import { fizzBuzz } from './dist/fizzbuzz';
const result = fizzBuzz(15);
```

## Entwicklung

Code Analyse mit ESLint.
```bash
npm run lint
```

Code Formatierung mit Prettier.
```bash
npm run format
```
### Testen

Testen des Moduls mit Jest.
```bash
npm run test
```

## Build Prozess

Zwei Optionen für den Build Prozess:

Nur Transpilieren des TypeScript Codes in JavaScript.
```bash
npm run build:raw
```

Vollständiger Build Prozess
1. Code Analyse mit ESLint, 
2. Formatierung mit Prettier, 
3. Ausführung der Tests mit jest,
4. Transpilieren des TypeScript Codes in JavaScript mit Webpack.
```bash
npm run build
```

## Veröffentlichen als npm module

1. Projekt bauen
```bash
npm run build
```

2. Bei NPM anmelden
```bash
npm login
```

3. Veröffentlichen des Moduls
```bash
npm publish
```
