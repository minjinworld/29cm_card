import { useState } from "react";
import "./App.css";
import Card from "./Card";
// 외부 컴포넌트는 import 필수

const App = () => {
  // Card 안에 들어갈 데이터 state에 저장
  // 객체 배열로 정의 -> 객체로 정리해둘때 사용해준 props 로 분류해주면 분류가 쉬워짐
  const [cardData, setCardData] = useState([
    {
      imgSrc:
        "https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=400",
      brandName: "프리츠한센",
      productName: "프리츠한센 - IKEBANA SMALL(BRASS)",
      price: "178,000",
      discount: "8%",
      discountPrice: "163,760",
      likes: "10,642",
      reviews: "201",
    },
    {
      imgSrc:
        "https://img.29cm.co.kr/item/202405/11ef11f00240d0cc892bedfd915221d1.jpg?width=400",
      brandName: "리히르",
      productName: "LHR-T-03 Ivory/Yellow (주문제작상품)",
      price: "950,000",
      discount: "5%",
      discountPrice: "902,500",
      likes: "1032",
      reviews: "15",
    },
    {
      imgSrc:
        "https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400",
      brandName: "다이노탱",
      productName: "Quokka in School Figure Pen",
      discountPrice: "7,000",
      likes: "8,347",
      reviews: "125",
    },
  ]);

  // 추가할 카드 데이터 배열로 정의
  const additionalData = [
    {
      imgSrc:
        "https://img.29cm.co.kr/item/202308/11ee3019ce051828a5cafd48217214f3.jpg?width=400",
      brandName: "리히르",
      productName: "소파체어 리히르_LHR-C-03 Navy",
      price: "680,000",
      discount: "5%",
      discountPrice: "646,000",
      likes: "640",
      reviews: "20",
    },
    {
      imgSrc:
        "https://img.29cm.co.kr/next-product/2023/01/04/fd590e2b68114bafa833607afce1b3d0_20230104223415.jpg?width=400",
      brandName: "에프에프 컬렉티브",
      productName: "[29CM 단독] Spiral Floor Lamp (Black / White)",
      price: "440,000",
      discount: "25%",
      discountPrice: "330,000",
      likes: "3712",
      reviews: "49",
    },
    {
      imgSrc:
        "https://img.29cm.co.kr/next-product/2023/07/27/c7b1848961e946efb01de0c0731370f8_20230727162853.png?width=400",
      brandName: "리튼",
      productName: "[29CM단독] 블루베리 모자이크 도어 매트 (50x70)",
      discountPrice: "52,000",
      likes: "4576",
      reviews: "459",
    },
  ];

  // 새로운 카드 데이터 추가하는 함수
  const addCards = () => {
    // setCardData([...additionalData]); // 이건 추가아니고 교체
    setCardData([...cardData, ...additionalData]);
    // 기존 cardData에 additionalData 를 추가해서 상태 업데이트
  };

  return (
    <>
      <div className="container_wrap">
        <button
          className="addbtn text-[#333] text-[20px] font-[800] w-[200px] h-[50px] rounded-[8px] border border-solid border-[#333] mx-auto mb-[50px] flex justify-center items-center"
          onClick={addCards}
        >
          더보기
        </button>

        <div className="flex_box">
          {/* <Card
            imgSrc="https://img.29cm.co.kr/next-product/2023/03/13/6df115b934da4129a4a154606084bfdd_20230313145108.jpg?width=400"
            brandName="프리츠한센"
            productName="프리츠한센 - IKEBANA SMALL(BRASS)"
            price="178,000"
            discount="8%"
            discountPrice="163,760"
            likes="10,642"
            reviews="201"
          />
          <Card
            imgSrc="https://img.29cm.co.kr/item/202405/11ef11f00240d0cc892bedfd915221d1.jpg?width=400"
            brandName="리히르"
            productName="LHR-T-03 Ivory/Yellow (주문제작상품)"
            price="950,000"
            discount="5%"
            discountPrice="902,500"
            likes="1032"
            reviews="15"
          />
          <Card
            imgSrc="https://img.29cm.co.kr/item/202403/11eee2a5ea13c82682f27532668945d8.png?width=400"
            brandName="다이노탱"
            productName="Quokka in School Figure Pen"
            discountPrice="7,000"
            likes="8,347"
            reviews="125"
          /> */}

          {/* ------------------------------------------ */}
          {/* map 함수 사용해서 카드 컴포넌트를 state에 저장되어있는 갯수만큼 생성 */}
          {cardData.map((data, index) => (
            <Card
              key={index}
              imgSrc={data.imgSrc}
              brandName={data.brandName}
              productName={data.productName}
              price={data.price}
              discount={data.discount}
              discountPrice={data.discountPrice}
              likes={data.likes}
              reviews={data.reviews}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// 하단에 Card 라는 컴포넌트를 만들고 위에 만든 out_box 넣어주기
// const Card = () => {
//   return (
//     <></>
//   )
// }

export default App;
