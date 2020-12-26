# ts-replace

```typescript
import { Replace } from 'ts-replace'

// Replace same parameter name
type Result = Replace<{ a: 1, b: 1, c: 1 }, { a: 2, b: 2, z: 2 }> // { a: 2, b: 2, c: 1 }
```
