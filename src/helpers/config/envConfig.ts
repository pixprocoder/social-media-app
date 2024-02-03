export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://circleup-backend-e2pqfgvaa-masumrana44.vercel.app/api/v1"
  );
};
