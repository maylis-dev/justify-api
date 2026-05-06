type Usage = {
  date: string;
  words: number;
};

const usage = new Map<string, Usage>();

export function checkAndAddUsage(token: string, words: number): boolean {
  const today = new Date().toISOString().split("T")[0];

  const current = usage.get(token);

  if (!current || current.date !== today) {
    usage.set(token, { date: today, words });
    return true;
  }

  
  if (current.words + words > 80000) {
    return false;
  }

  current.words += words;
  return true;
}