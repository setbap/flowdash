## Requests

**this are some examples of request i create for backend data**

#### when need data for Cards

```js
    export function getNumberOfAddresses = () => getSimpleInfo('velocity-key')
```

#### when need some data in type of array for bar chart or etc...

**just first input is required**

```js
    export function getDailyNumberOfAddresses = () => getSimpleArrayData<FetchedDataType,ReturnDataType>(
        'velocity-key', //key of velocity
        'Data', // example of key than we want sort data according to
        (item) => {...item,Day:item.DATE}, // example of map function
    )
```

#### when get array data but data need pivot and some key should be change to column

```js
export const getMostPopularTokenSwapCount: () => Promise<any> = async () => {
  const res = await fetch(
    "https://node-api.flipsidecrypto.com/api/v2/queries/90429960-c3a4-46a0-aa10-be315d0e7362/data/latest"
  );
  const rawData: IMostPoularTokenSwapCountOnRef[] = await res.json();
  const actionType = Array.from(
    new Set(
      rawData.map((item) => {
        return item.type;
      })
    )
  );
  const countInfo = pivotData(
    rawData,
    "Symbol",
    "type",
    "Count",
    actionType,
    0
  );
  return {
    countInfo: countInfo.sort((a, b) =>
      // @ts-ignore
      a[actionType[0]] > b[actionType[0]] ? -1 : 1
    ),
    actions: actionType,
  };
};
```
