"use client";

import { useEffect, useState } from "react";
import { Text, Flex } from "@/once-ui/components";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Default to 'en-GB' if not provided
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone,
  locale = "en-GB",
}) => {
  const [currentTime, setCurrentTime] = useState("");
  const [timeEmoji, setTimeEmoji] = useState("🕒"); // Default emoji

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit", // ✅ Remove seconds
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);

      setCurrentTime(timeString);
      setTimeEmoji(getTimeEmoji(now.getHours(), now.getMinutes())); // ✅ Update emoji dynamically
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // ✅ Update every minute

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return (
    <Flex horizontal="center" vertical="center" gap="4">
      <Text variant="body-default-m">{timeEmoji}</Text>
      <Text variant="body-default-m">{currentTime}</Text>
    </Flex>
  );
};

/**
 * ✅ Function to get the correct clock emoji based on the time
 */
const getTimeEmoji = (hour: number, minute: number): string => {
  const roundedHour = hour % 12 || 12; // Convert 24-hour to 12-hour format
  const isHalfPast = minute >= 30; // Check if it's past the half-hour mark

  const clockEmojis = {
    1: isHalfPast ? "🕜" : "🕐",
    2: isHalfPast ? "🕝" : "🕑",
    3: isHalfPast ? "🕞" : "🕒",
    4: isHalfPast ? "🕟" : "🕓",
    5: isHalfPast ? "🕠" : "🕔",
    6: isHalfPast ? "🕡" : "🕕",
    7: isHalfPast ? "🕢" : "🕖",
    8: isHalfPast ? "🕣" : "🕗",
    9: isHalfPast ? "🕤" : "🕘",
    10: isHalfPast ? "🕥" : "🕙",
    11: isHalfPast ? "🕦" : "🕚",
    12: isHalfPast ? "🕧" : "🕛",
  };

  return clockEmojis[roundedHour];
};

export default TimeDisplay;
