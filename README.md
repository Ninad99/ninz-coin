# ninz-coin

A _very_ simple blockchain implemented in nodejs and typescript.

### How to run

Run `npx tsc` to compile and `npm start` to run the script.

Current script:
```typescript
import { Chain } from "./classes/chain";
import { Wallet } from "./classes/wallet";

const bob = new Wallet();
const alice = new Wallet();
const ninz = new Wallet();

ninz.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
alice.sendMoney(5, bob.publicKey);

console.log(Chain.instance);
```

Sample output:
```bash
mining...
Solved: 10474
mining...
Solved: 11876
mining...
Solved: 82121
Chain {
  chain: [
    Block {
      prevHash: null,
      transaction: [Transaction],
      ts: 1614687473283,
      nonce: 714309591
    },
    Block {
      prevHash: '5e30e2ccece44bf1349ad230e36062e7d5d90b97b94e7a35a2076ebdb053c546',
      transaction: [Transaction],
      ts: 1614687473537,
      nonce: 787574766
    },
    Block {
      prevHash: 'c1d032dc8e0b030792155782ecd4cbbd4ba503c200a12a5078fcdf7ae12dfdef',
      transaction: [Transaction],
      ts: 1614687473729,
      nonce: 910245488
    },
    Block {
      prevHash: '30d6c84ad8a87de89ead98bb46f14f19a7ba7bfaa93d6498c622cb3a25a95503',
      transaction: [Transaction],
      ts: 1614687473883,
      nonce: 962644319
    }
  ]
}

```

- (See `src/index.ts`)
  - Create a wallet using the **Wallet** class.
  - Use the `Wallet.sendMoney()` function to initiate a transaction.
