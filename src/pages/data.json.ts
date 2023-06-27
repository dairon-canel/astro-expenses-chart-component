import type { APIRoute } from 'astro';

export const get: APIRoute = async function get() {
  const data = {
    currentBalance: 921.48,
    currentDay: 'wed',
    currentMonthExpenses: 478.32,
    pastMonthExpenses: 467.11,
    expensesObject: [
      {
        day: 'mon',
        amount: 17.45,
      },
      {
        day: 'tue',
        amount: 34.91,
      },
      {
        day: 'wed',
        amount: 52.36,
      },
      {
        day: 'thu',
        amount: 31.07,
      },
      {
        day: 'fri',
        amount: 23.39,
      },
      {
        day: 'sat',
        amount: 43.28,
      },
      {
        day: 'sun',
        amount: 25.48,
      },
    ],
  };
  return {
    body: JSON.stringify(data),
  };
};
