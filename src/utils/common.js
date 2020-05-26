export const processCart = (data) =>
  data.reduce((arr, item) => {
    const index = arr.findIndex(
      (x) =>
        x.id === item.id &&
        x.categoryId === item.categoryId &&
        x.size === item.size &&
        x.crust === item.crust
    );
    if (index !== -1) {
      arr[index].list ? arr[index].list.push(item) : (arr[index].list = [item]);
    } else {
      arr.push({ ...item, list: [{ ...item }] });
    }
    return arr;
  }, []);

export const getSize = (data, categoryId, sizeId) => {
  const category = data.find((x) => x.categoryId == categoryId);
  return category.sizes.find((x) => x.id == sizeId);
};

export const getCrust = (data, categoryId, crustId) => {
  return data.reduce((acc, x) => {
    if (x.id == crustId) {
      return x;
    } else {
      return acc;
    }
  }, {});
};

export const processAmount = (data, sizes) =>
  data.reduce((acc, x) => {
    const category = sizes.find((c) => c.categoryId == x.categoryId);
    const size = category.sizes.find((s) => s.id == x.size);
    if (size) {
      acc += size.price;
    }
    return acc;
  }, 0);

export const calculateTax = (amount, taxPercent) => (taxPercent / 100) * amount;
