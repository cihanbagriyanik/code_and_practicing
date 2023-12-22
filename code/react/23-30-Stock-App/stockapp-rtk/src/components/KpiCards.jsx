// import { Card, Metric, Text, Icon, Flex, Grid } from "@tremor/react";
import {
  Card,
  Metric,
  DonutChart,
  Text,
  Flex,
  ProgressBar,
  Grid,
} from "@tremor/react";
import { useGetStocksQuery } from "../services/stocks";
import Loading from "./Loading";

export default function KpiCards() {
  const { data: purchases } = useGetStocksQuery("purchases");
  const { data: sales, isLoading } = useGetStocksQuery("sales");

  const totalSales = sales?.reduce((acc, item) => acc + Number(item.amount), 0);
  const totalPurchases = purchases?.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );
  const totalCash = totalSales - totalPurchases;
  const categories = [
    {
      title: "Sales",
      metric: `€ ${totalSales}`,
      value: `${((totalSales / 200000) * 100).toFixed(2)}`,
      target: "$ 200,000",
      color: "indigo",
    },
    {
      title: "Cash",
      metric: `€ ${totalCash}`,
      value: `${((totalCash / 100000) * 100).toFixed(2)}`,
      target: "$ 100,000",
      color: "fuchsia",
    },
    {
      title: "Purchases",
      metric: `€ ${totalPurchases}`,
      value: `${((totalPurchases / 100000) * 100).toFixed(2)}`,
      target: "$ 100,000",
      color: "amber",
    },
  ];

  if (isLoading) return <Loading />;

  return (
    <Grid className="flex justify-center items-center flex-wrap gap-6 w-full mt-3">
      {categories.map((item) => (
        <Card
          key={item.title}
          decoration="top"
          decorationColor={item.color}
          className="w-full flex-grow lg:w-5/12 2xl:w-[32%]"
        >
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Flex className="mt-4">
            <Text className="truncate">{`${item.value}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar color={item.color} value={item.value} className="mt-2" />
        </Card>
      ))}
    </Grid>
  );
}

