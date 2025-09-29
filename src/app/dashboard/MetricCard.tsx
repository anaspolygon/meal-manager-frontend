interface MatricCardProps {
  title: string;
  value: string;
  bgColor: string;
  textColor: string;
}
const MatricCard = ({ title, value, bgColor, textColor }: MatricCardProps) => {
  return (
    <div
      className={`font-inter ${bgColor} ${textColor} p-6 rounded-[10px] flex-1`}
    >
      <h2 className="text-2xl font-inter font-semibold mb-3.5">{title}</h2>
      <p className="text-xl font-inter font-medium">{value}</p>
    </div>
  );
};
export default MatricCard;
