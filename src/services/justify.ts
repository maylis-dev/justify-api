export function justify(text: string): string {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];

  let currentLine: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    if (currentLength + word.length + currentLine.length > 80) {
      lines.push(justifyLine(currentLine));
      currentLine = [];
      currentLength = 0;
    }

    currentLine.push(word);
    currentLength += word.length;
  }

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.join("\n");
}

function justifyLine(words: string[]): string {
  if (words.length === 1) {
    return words[0].padEnd(80, " ");
  }

  const totalLetters = words.reduce((sum, w) => sum + w.length, 0);
  const totalSpaces = 80 - totalLetters;
  const gaps = words.length - 1;

  const space = Math.floor(totalSpaces / gaps);
  let extra = totalSpaces % gaps;

  let line = "";

  for (let i = 0; i < words.length; i++) {
    line += words[i];

    if (i < words.length - 1) {
      line += " ".repeat(space + (extra > 0 ? 1 : 0));
      if (extra > 0) extra--;
    }
  }

  return line;
}