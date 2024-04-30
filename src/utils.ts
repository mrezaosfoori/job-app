import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { JobType } from "./data/job-types";
import moment from "moment";
const PN = require("persian-number");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMoney(amount: number) {
  const salary = (amount / 1000000).toFixed(0);
  return PN.convertEnToPe(PN.sliceNumber(salary));
}
export function formatSalary(amount: any) {
  let unitSalary;
  let devide = 1;
  amount / 1000 <= 1
    ? ((unitSalary = ` تومان`), (devide = 1))
    : amount / 1000000 <= 1
      ? ((unitSalary = ` هزار تومان`), (devide = 1000))
      : amount / 1000000000 <= 1
        ? ((unitSalary = ` میلیون تومان`), (devide = 1000000))
        : ((unitSalary = ` میلیارد تومان`), (devide = 1000000000));

  const pSlary = PN.convertEnToPe(PN.sliceNumber((amount / devide).toFixed(1)));

  return `${pSlary} ${unitSalary}`;
}
export function formatEnglish(array: JobType[]) {
  return array.map((item: any) => item.english);
}

export function relativeDate(from: Date) {
  const customDate = moment(from);
  const today = moment();
  const duration = moment.duration(today.diff(customDate));

  const hours = Math.floor(duration.asHours());
  const days = Math.floor(duration.asDays());
  const months = Math.floor(duration.asMonths());
  const years = Math.floor(duration.asYears());

  const peHours = PN.convertEnToPe(hours);
  const peDays = PN.convertEnToPe(days);
  const peMonths = PN.convertEnToPe(months);
  const peYears = PN.convertEnToPe(years);

  if (hours < 24) return `${peHours} ساعت قبل`;
  if (days < 30) return `${peDays} روز قبل`;
  if (months < 12) return `${peMonths} ماه قبل`;
  return `${peYears} سال قبل`;
}
