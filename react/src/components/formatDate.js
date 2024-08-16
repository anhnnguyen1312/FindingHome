const formatDate = (date) => {
  const dayFormat =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return dayFormat;
};

export default formatDate;
