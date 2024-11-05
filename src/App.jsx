import { useEffect, useState } from "react";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Product from "./components/Product";
import useStore from "./global/store";
import Flipbook from "./components/Flipbook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import tauro from "./data/tauro";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  const grupos = [];
  const topics = [];
  const datas = [];

  const { page, updatePage, updateLimit, showProduct, currentProduct } = useStore();
  const [swipe, setSwipe] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(0);

  for (let i = 0; i < tauro.length; i += 6) {
    const grupo = tauro.slice(i, i + 6);
    const imagenes = grupo.map((producto) => producto.images.split(" ")[0]);
    grupos.push(imagenes);
  }

  for (let i = 0; i < tauro.length; i += 6) {
    topics.push(tauro[i].topic.split("|")[0]);
  }

  for (let i = 0; i < tauro.length; i += 6) {
    const grupo = tauro.slice(i, i + 6);
    const data = grupo.map((g) => ({
      post_title: g.post_title,
      sku: g.sku,
      regular_price: g.regular_price,
      stock: g.stock,
      product_page_url: g.product_page_url,
      topic: g.topic,
      image: g.images.split(" ")[0],
    }));
    datas.push(data);
  }


  useEffect(() => {
    swipe && swipe.slideTo(page, 1000);
  }, [page]);

  useEffect(() => {
    swipe && swipe.slides && updateLimit(swipe.slides.length);
  }, [swipe]);

  return (
    <div className="flex flex-col max-h-screen min-h-screen gap-4 relative">
      <Header></Header>

      <main className="flex h-full grow flex-col gap-4 mt-24 py-4">
        <Swiper
          className="w-fit grow max-h-[640px] h-fit"
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
          onSlideChange={(e) => {
            updatePage(e.activeIndex);
          }}
          onSwiper={setSwipe}
          mousewheel={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Mousewheel, Pagination]}
        >
          {grupos.map((g, index) => (
            <SwiperSlide key={index}>
              <Flipbook
                images={g}
                key={index}
                topic={topics[index]}
                onClick={() => setSelectedProduct(index)}
              ></Flipbook>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      {showProduct && 
      <Product
      breadcrumb={datas[selectedProduct][currentProduct].topic}
      code={datas[selectedProduct][currentProduct].sku}
      link={datas[selectedProduct][currentProduct].product_page_url}
      image={datas[selectedProduct][currentProduct].image}
      price={datas[selectedProduct][currentProduct].regular_price}
      stock={datas[selectedProduct][currentProduct].stock}
      title={datas[selectedProduct][currentProduct].post_title}
      ></Product>}
    </div>
  );
}

export default App;
