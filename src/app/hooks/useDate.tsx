import dayjs from "dayjs";

const useDate = () => {
  const getDateStr = (date: Date | undefined, format: string) => {
    if (!date) return "";
    if (dayjs(date).isSame(dayjs(), "month")) return "Present";
    return dayjs(date).format(format);
  };

  return {
    getDateStr,
  };
};

export default useDate;
