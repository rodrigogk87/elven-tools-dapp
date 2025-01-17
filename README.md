### Elven Tools Dapp

- Docs: [elven.tools/docs/minter-dapp-introduction.html](https://www.elven.tools/docs/minter-dapp-introduction.html)
- Dapp's React hooks and components [elven.tools/docs/dapp-react-hooks-and-components.html](https://www.elven.tools/docs/dapp-react-hooks-and-components.html)
- Demo: [dapp-demo.elven.tools](https://dapp-demo.elven.tools)
- Elven Tools intro (including the Dapp): [youtu.be/Jou5jn8PFz8](https://youtu.be/Jou5jn8PFz8)

The Dapp is built using Nextjs and a couple of helpful tools. It allows you to interact with the MultiversX blockchain and smart contracts, and especially it is prepared for the [Elven Tools Smart Contract](https://github.com/ElvenTools/elven-nft-minter-sc). But you can always modify it and adjust it for your needs.

### It provides:

- Auth with 4 MultiversX blockchain providers
  - Web Wallet
  - xPortal mobile app
  - MultiversX DeFi browser extension
  - Ledger Nano
- React hooks for making transactions
- React hooks for querying smart contracts
- Tools and React hooks for app state synchronization
- API endpoint rewrites and 'guard' middleware
- Preconfigured UI based on Chakra UI
- The template with sections mainly used on minter dapps (it will be developed further)

### Examples

Login with one of four methods.

```jsx
const { login, isLoggedIn, error, walletConnectUri, getHWAccounts } = useLogin();

(...)

login(LoginMethodsEnum.ledger)
```

Custom mint transactions for the Elven Tools Smart Contract. There is also a more generic `useScTransaction` hook.

```jsx
const { mint, pending, transaction, error } = useMintTransaction();

(...)

mint(amount)
```

Query the Elven Tools Smart Contract. There is also a more generic `useScQuery` hook.

```jsx
const {
  data,
  fetch,
  isLoading,
} = useElvenScQuery<boolean>({
  funcName: 'isAllowlistEnabled',
  type: SCQueryType.BOOLEAN,
  autoInit: false,
});

(...)

fetch()
```

You can also query more complex data types. Then you  will need to provide the ABI JSON file.

```jsx
import { TypedOutcomeBundle } from '@multiversx/sdk-core';
import abiJSON from '../config/abi.json';

const { data } = useScQuery<TypedOutcomeBundle>({
  type: SCQueryType.COMPLEX,
  payload: {
    scAddress: 'erd1qqq...',
    funcName: 'yourScFunction',
    args: [], // args in hex format, use erdjs for conversion, see above
  },
  autoInit: true,
  abiJSON,
});
```

The `data` here will be a `TypedOutcomeBundle`. Which is:

```typescript
interface TypedOutcomeBundle {
  returnCode: ReturnCode;
  returnMessage: string;
  values: TypedValue[];
  firstValue?: TypedValue;
  secondValue?: TypedValue;
  thirdValue?: TypedValue;
  lastValue?: TypedValue;
}
```

For more docs on how to use it check the link above, and for more examples see: [elven.tools/docs/dapp-react-hooks-and-components.html](https://elven.tools/docs/dapp-react-hooks-and-components.html)

### Tracking the progress

- [Elven Tools Dapp kanban](https://github.com/orgs/ElvenTools/projects/2)

### How to start it locally:

1. npm install -g elven-tools
2. elven-tools init-dapp
3. cd your-dapp-directory
5. npm run dev

--- or ---

1. clone or download the repo code
2. cd elven-tools-dapp
3. npm install
4. configure .env.local (you can copy the contents of the .env.example)
6. npm run dev

Check detailed docs on it here: [How to start with the Dapp](https://www.elven.tools/docs/how-to-start-with-the-dapp.html)

### Main assumption for the dapp:

- it works on Nextjs
- it uses the newest version of [sdk-core](https://github.com/multiversx/mx-sdk-js-core) without the [sdk-dapp](https://github.com/multiversx/mx-sdk-dapp) library.
- optionally it uses backend-side rewrites to hide the API endpoint, then the only exposed one is `/api`
- it uses .env file - there is an example in the repo
- it uses [chakra-ui](https://chakra-ui.com/)

More docs on it: [Minter Dapp introduction](https://www.elven.tools/docs/minter-dapp-introduction.html)

### Other tools

- [elven.js](https://www.elvenjs.com) - standalone lite SDK for browsers without build steps
- [Buildo Begins](https://github.com/xdevguild/buildo-begins) - CLI helper tools - interaction with APIs, smart contracts and protocol
- [Nextjs Dapp Template](https://github.com/xdevguild/nextjs-dapp-template) - Open source Dapp template for the MultiversX blockchain (more general one).

### Community

- Example with auth verification on the backend side: [elven-tools-dapp-with-auth](https://github.com/borispoehland/elven-tools-dapp-with-auth) thanks to [@borispoehland](https://github.com/borispoehland)
