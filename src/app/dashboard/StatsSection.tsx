"use client";
import { Select, SelectItem } from "@heroui/react";
import MetricCard from "./MetricCard";
interface Stat {
  title: string;
}
const StatsSection = ({ title }: Stat) => {
  const memberStats = [
    {
      title: "Mess Balance",
      value: "৳ 5,250",
      bgColor: "bg-[#0D6EFD]",
      textColor: "text-white",
    },
    {
      title: "Total Deposit",
      value: "৳ 30,000",
      bgColor: "bg-[#198754]",
      textColor: "text-white",
    },
    {
      title: "Meal Rate",
      value: "৳ 60/meal",
      bgColor: "bg-[#FFC107]",
      textColor: "text-white",
    },
    {
      title: "Total Meals",
      value: "412 meals",
      bgColor: "bg-[#0DCAF0]",
      textColor: "text-white",
    },
  ];

  const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
  ];
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-inter font-medium">{title}</h2>
        <Select
          className="w-30 h-12"
          defaultSelectedKeys={["dog"]}
          isClearable={true}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex gap-5">
        {memberStats.map((stat, index) => (
          <MetricCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};
export default StatsSection;
