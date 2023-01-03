import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://www.telegraph.co.uk/content/dam/men/2022/01/12/Main-image_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg",
    route: "shop/mens",
  },
  {
    id: 1,
    title: "hats",
    imageUrl:
      "https://img.joomcdn.net/e90045a242562dbb71abd6779cff519ed11c6739_original.jpeg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://uploads-ssl.webflow.com/5b36a2c9df51e7d9e3f9291f/600b0fb57e84b38921e2c5d4_LF240_ASST_WINE_3Q_10_1000x.jpg",
    route: "shop/womens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
