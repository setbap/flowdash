**card box**

```js
<StatsCard title="Title" link="link" stat={volumeInLastDay} status={"inc"} />
```

**Advance Card with Dynamic Data**

```js
<StateCardRemoteData
  url="https://api.coingecko.com/api/v3/simple/price?ids=optimism&vs_currencies=usd"
  link="https://www.coingecko.com/en/coins/optimism"
  status="unchanged"
  title={"Current Optimism Price (USD)"}
  getStat={(data) => data["optimism"].usd}
/>
```

**DonutChart**

```js
<DonutChart
  queryLink="https://app.flipsidecrypto.com/velocity/queries/6fa15eba-c264-4b97-8557-f1cf103f801e"
  data={mostDappsAndContractWithMostUSDTUSNUSDC.usn}
  tooltipTitle=""
  modalInfo=""
  title="which dapps and addresses hold the majority of USN?"
  nameKey="Contract"
  dataKey="USN amount"
/>
```

**Line Chart**

```js
<ChartBox
  customColor={colors[0]}
  data={dailyTXInformationData}
  queryLink="https://app.flipsidecrypto.com/velocity/queries/4b25478f-c64c-4ac8-9e42-cc5ed0660290"
  tooltipTitle="Number of unique address"
  modalInfo="Number of unique address"
  title="Number of daily unique address"
  baseSpan={3}
  areaDataKey="Unique Address"
  xAxisDataKey="Day"
/>
```

**BarGraph**

```js
<BarGraph
  queryLink="https://app.flipsidecrypto.com/velocity/queries/3315b247-9f09-43c2-8533-f7dcf0f45722"
  modalInfo={`modal info`}
  values={top100UsedContracts}
  title="Top 100 Contracts/Platforms interacted on Near"
  dataKey="Name"
  baseSpan={3}
  isNotDate
  oyLabel="Number of TXs"
  oxLabel="Dapps Name"
  labels={[
    {
      key: "Counts",
      color: colors[0],
    },
  ]}
/>
```

**CalendarChart**

```js
<CalendarChart
  data={numberOfTXAndUserOnRefFi}
  queryLink="https://app.flipsidecrypto.com/velocity/queries/4a3c1109-69ce-4502-b3ad-ca4af1022855"
  tooltipTitle=""
  title="Number of transactions on Ref finance"
  baseSpan={3}
  areaDataKey="TX Count"
  xAxisDataKey="Day"
/>
```

**Line chart with bar**

```js
<LineChartWithBar
  customColor={colors[1]}
  barColor={colors[3]}
  data={numberOfTXAndUserOnRefFi}
  queryLink="https://app.flipsidecrypto.com/velocity/queries/4a3c1109-69ce-4502-b3ad-ca4af1022855"
  tooltipTitle=""
  modalInfo=""
  title="Number of transactions on Ref finance"
  baseSpan={3}
  barDataKey="TX Count"
  lineDataKey="AVG TX Count"
  xAxisDataKey="Day"
/>
```

**money flow chart**

```js
<FlowChart
  data={finalSwapFromStablecoinsToOthers}
  modalInfo=""
  title="Swap from Stablecoins to Others"
  tooltipTitle="This chart shows the flow between stablecoins and top tokens based on volume in Ref finance. 
As you can see, The stablecoins swapped to NEAR more than others."
  baseSpan={3}
  queryLink="https://app.flipsidecrypto.com/velocity/queries/9483c686-f6d4-469c-9d68-f0bcbb411f8e"
/>
```
