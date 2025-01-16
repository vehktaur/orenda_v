import providersImages from "@/assets/providers/providerImages";
import wishlist from "../assets/christmas_wishlist.jpg";
import christmas from "../assets/christmas.jpg";
const blogs = [
  {
    id: "1",
    title: `When Holidays Bring Stress`,
    description: `Understanding how stress relates to holiday seasons and practical tips to make the most of the season without losing our minds in the process.`,
    hero_img: "",
    categories: [`holidays`, `anxiety`],
    created_at: "December, 2024",
    duration: "4 min",
    author: {
      image: providersImages.Kimberly_Levitt,
      name: "Kimberly Levitt",
      credentials: "PMHNP-BC",
    },
    image: [wishlist, christmas],
  },
];

export default blogs;
