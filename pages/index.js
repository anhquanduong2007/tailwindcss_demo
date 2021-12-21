import ProductItem from "../components/ProductItem";
import img_1 from "../assets/img/5a2145df860ca5 1.png";
import img_2 from "../assets/img/5a22f73edf1555 2.png";
import img_3 from "../assets/img/5a38a9d7db5a60 2.png";
import img_4 from "../assets/img/pngwing 16.png";
import img_5 from "../assets/img/pngwing 18.png";
const productData = [
  {
    id: 1,
    imgSrc: img_1,
    isTag: true,
    contentTag: ""
  },
  {
    id: 2,
    imgSrc: img_2,
    isTag: false,
    contentTag: ""
  },
  {
    id: 3,
    imgSrc: img_3,
    isTag: true,
    contentTag: "25% off"
  },
  {
    id: 4,
    imgSrc: img_4,
    isTag: true,
    contentTag: "45% off"
  },
  {
    id: 5,
    imgSrc: img_5,
    isTag: true,
    contentTag: ""
  },
]
export default function Home() {
  return (
    <>
      <div className=" flex justify-center px-5 items-center">
        <div className="grid grid-cols-5 gap-x-5 md:grid-cols-2 2xl:grid-cols-5 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 ">
          {
            productData.map((item) => (

              <ProductItem key={item.id} isTag={item.isTag} contentTag={item.contentTag} imgSrc={item.imgSrc.src} />
            ))
          }
        </div>
      </div>
    </>
  )
}
