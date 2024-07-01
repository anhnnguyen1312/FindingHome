const checkArea = (dataPostSearch, searchData) => {
  let postArea = [];
  switch (searchData?.area) {
    case "DUOI_10m2":
      postArea = dataPostSearch.filter((post) => post.area <= 10);

      return postArea;

    case "Tu10m2_20m2":
      postArea = dataPostSearch.filter(
        (post) => post.area > 10 && post.area <= 20
      );
      return postArea;
    case "Tu20m2_30m2":
      postArea = dataPostSearch.filter(
        (post) => post.area > 20 && post.area <= 30
      );
      return postArea;
    case "Tu30m2_40m2":
      postArea = dataPostSearch.filter(
        (post) => post.area > 30 && post.area <= 40
      );
      return postArea;
    case "TREN_40m2":
      postArea = dataPostSearch.filter(
        (post) => post.area > 40 && post.area <= 80
      );
      return postArea;
    case "TREN_80m2":
      postArea = dataPostSearch.filter(
        (post) => post.area > 80 && post.area <= 150
      );
      return postArea;
    case "TREN_150m2":
      postArea = dataPostSearch.filter((post) => post.area > 150);
      return postArea;
    default:
      return postArea;
  }
};
export default checkArea;
