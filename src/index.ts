import { Chain } from "./classes/chain";
import { Wallet } from "./classes/wallet";

const bob = new Wallet();
const alice = new Wallet();
const ninz = new Wallet();

ninz.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
alice.sendMoney(5, bob.publicKey);

console.log(Chain.instance);