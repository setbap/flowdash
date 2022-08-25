**card box**

```js
<StatsCard title="Title" link="link" stat={volumeInLastDay} status={"inc"} />
```

**DonutChart**

```js
<DonutChart
  queryLink="https://app.flipsidecrypto.com/velocity/queries/6fa15eba-c264-4b97-8557-f1cf103f801e"
  data={mostDappsAndContractWithMostUSDTUSNUSDC.usn}
  tooltipTitle=""
  modelInfo=""
  title="which dapps and addresses hold the majority of USN?"
  nameKey="Contract"
  dataKey="USN amount"
/>
```

**BarGraph**

```js
<BarGraph
  queryLink="https://app.flipsidecrypto.com/velocity/queries/3315b247-9f09-43c2-8533-f7dcf0f45722"
  modelInfo={`modal info`}
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
  modelInfo=""
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
  modelInfo=""
  title="Swap from Stablecoins to Others"
  tooltipTitle="This chart shows the flow between stablecoins and top tokens based on volume in Ref finance. 
As you can see, The stablecoins swapped to NEAR more than others."
  baseSpan={3}
  queryLink="https://app.flipsidecrypto.com/velocity/queries/9483c686-f6d4-469c-9d68-f0bcbb411f8e"
/>
```
