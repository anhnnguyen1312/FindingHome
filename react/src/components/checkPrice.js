const checkPrice = (dataPostSearch, searchData) => {
  let postPrice = [];
  switch (searchData.price) {
    case "DUOI_2TR":
      postPrice = dataPostSearch.filter((post) => post.price <= 2);

      return postPrice;

    case "Tu2TR_4TR":
      postPrice = dataPostSearch.filter(
        (post) => post.price > 2 && post.price <= 4
      );
      return postPrice;

    case "Tu4TR_6TR":
      postPrice = dataPostSearch.filter(
        (post) => post.price > 4 && post.price <= 6
      );
      return postPrice;

    case "Tu6TR_8TR":
      postPrice = dataPostSearch.filter(
        (post) => post.price > 6 && post.price <= 8
      );
      return postPrice;

    case "TREN_8TR":
      postPrice = dataPostSearch.filter(
        (post) => post.price > 8 && post.price < 19.9
      );
      return postPrice;

    case "TREN_20TR":
      postPrice = dataPostSearch.filter((post) => post.price > 20);
      return postPrice;

    default:
      return postPrice;
  }
};

export default checkPrice;
