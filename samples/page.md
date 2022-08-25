## Requests

**this are some examples of request i create for backend data**

```js
import Page from "page path";
import { FnA, FnB } from "some path";
export async function getStaticProps() {
  const [nameOfFnA, nameOfFnB] = await Promise.all([FnA(), FnB()]);
  return {
    props: {
      nameOfFnA,
      nameOfFnB,
    },
    revalidate: 10 * 60,
  };
}
export default Page;
```
