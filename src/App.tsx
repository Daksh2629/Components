
import CardSlider from "./components/CardSlider/CardSlider";
import Carousel from "./components/Carousel/Carousel";
const App = () => {


  const slides = [
    {
      image: "https://via.placeholder.com/800x400",
      title: "Slide 1",
      description: "This is the first slide",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Slide 2",
      description: "This is the second slide",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "Slide 3",
      description: "This is the third slide",
    },
  ];
  const cardsData = [
    {
      image: "/movieimage.webp",
      title: "Beautiful Landscape",
      description: "A breathtaking view of mountains and valleys.",
    },
    {
      image: "/movieimage.webp",
      title: "City Night Lights",
      description: "The city comes alive with vibrant colors at night.",
    },
    {
      image: "/movieimage.webp",
      title: "Sunny Beach",
      description: "Relax on a sunny beach with crystal-clear waters.",
    },
  ];

  return (
    <div className="p-6">
      {/* Example 1: Default Dimensions */}
      <h2 className="text-xl font-bold mb-4">Default Dimensions</h2>
      <CardSlider cardsData={cardsData} />

      {/* Example 2: Custom Dimensions */}
      <h2 className="text-xl font-bold mt-8 mb-4">Custom Dimensions</h2>
      <CardSlider cardsData={cardsData} cardWidth="36rem" cardHeight="18rem" />
      <div className="w-full">
     <Carousel slides={slides} />
   </div>
    </div>
     
  );
};

export default App;
