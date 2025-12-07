const diaryData = [
  {
    id: 1,
    content: "The falling speed of cherry blossoms is five centimeters per second!",
    date: "2025-01-15T10:30:00Z",
    images: ["/images/diary/sakura.jpg", "/images/diary/1.jpg"]
  }
];
const getDiaryStats = () => {
  const total = diaryData.length;
  const hasImages = diaryData.filter(
    (item) => item.images && item.images.length > 0
  ).length;
  const hasLocation = diaryData.filter((item) => item.location).length;
  const hasMood = diaryData.filter((item) => item.mood).length;
  return {
    total,
    hasImages,
    hasLocation,
    hasMood,
    imagePercentage: Math.round(hasImages / total * 100),
    locationPercentage: Math.round(hasLocation / total * 100),
    moodPercentage: Math.round(hasMood / total * 100)
  };
};
const getDiaryList = (limit) => {
  const sortedData = diaryData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return sortedData;
};

export { diaryData as default, getDiaryList, getDiaryStats };
