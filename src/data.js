const priceToString = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

let datas = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    count: 0,
  },
  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    count: 0,
  },
  {
    id: 2,
    title: "CGrey Yordan",
    content: "Born in the States",
    price: 130000,
    count: 0,
  },
  {
    id: 3,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 12000,
    count: 0,
  },
  {
    id: 4,
    title: "FGrey Yordan",
    content: "Born in the States",
    price: 16000,
    count: 0,
  },
  {
    id: 5,
    title: "DGrey Yordan",
    content: "Born in the States",
    price: 130000,
    count: 0,
  },
  {
    id: 6,
    title: "BGrey Yordan",
    content: "Born in the States",
    price: 140000,
    count: 0,
  },
  {
    id: 7,
    title: "FGrey Yordan",
    content: "Born in the States",
    price: 130000,
    count: 0,
  },
  {
    id: 8,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 17000,
    count: 0,
  },
  {
    id: 9,
    title: "EGrey Yordan",
    content: "Born in the States",
    price: 17000,
    count: 0,
  },
  {
    id: 10,
    title: "DGrey Yordan",
    content: "Born in the States",
    price: 17000,
    count: 0,
  },
  {
    id: 11,
    title: "DGrey Yordan",
    content: "Born in the States",
    price: 17000,
    count: 0,
  },
];

export default datas;
