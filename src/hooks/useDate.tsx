import dayjs from "dayjs";

type DateStrType = {
  date: Date | undefined;
  format: string;
  enablePresentStr?: boolean;
};

const useDate = () => {
  const getDateStr = ({
    date,
    format,
    enablePresentStr = true,
  }: DateStrType) => {
    if (!date) return "";
    if (dayjs(date).isSame(dayjs(), "month") && enablePresentStr)
      return "Present";
    return dayjs(date).format(format);
  };

  return {
    getDateStr,
  };
};

export default useDate;
