// 컴포넌트화 시킬때는 컴포넌트 이름 첫글자는 꼭 대문자
// 화살표함수 축약형도 가능(return문 생략 가능)
// 하나의 태그로 감싼 객체만 부를 수 있음(태그 2개이상 올 수 없음)
const Card = ({
  imgSrc,
  brandName,
  productName,
  price,
  discount,
  discountPrice,
  likes,
  reviews,
}) => (
  <div className="out_box">
    <a href="#none" className="img_box">
      <img src={imgSrc} alt={`${brandName} 썸네일`} />
    </a>

    <div className="text_content">
      <div className="text_head">
        <a href="#none" className="brand_name">
          {brandName}
        </a>
        <h5 className="product_name">{productName}</h5>
      </div>

      <div className="text_center">
        {/* price 와 discount 가 있을 경우에만 렌더링 */}
        {/*  price 와 discount 가 있을 경우에만 렌더링 price 와 discount 값을 전달하지 않도록 하거나 빈 문자열이나 null 을 전달한 후 Card 컴포넌트 내부에서 조건부 렌더링을 사용해 이값을 기반으로 UI를 렌더링하지 않도록 해야함 */}

        {price && discount && (
          // 자바스크립트 논리연산자의 개념
          // price 와 discount 가 둘 다 참이먄 해당 앨리먼트를 출력
          // 따라서 price && discount && <요소> : price와 discount가 모두 **참값일 때만 <요소>가 실행되어 렌더링
          <>
            <strong className="price">{price}</strong>
            <span className="discount">{discount}</span>
          </>
        )}
        <strong className="discount_price">{discountPrice}</strong>
        <button className="coupon">쿠폰</button>
      </div>

      <div className="text_bottom">
        <button className="icon heart_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 18 18"
          >
            <path d="M9 6.088C9 3.831 10.791 2 13 2s4 1.83 4 4.088c0 1.743-1.46 3.23-1.46 3.23L9 16 2.46 9.318S1 7.83 1 6.088C1 3.831 2.791 2 5 2s4 1.83 4 4.088z"></path>
          </svg>

          <span className="like">{likes}</span>
        </button>

        <button className="icon review_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 15 16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 2.007v8.813c0 .556.457 1.007 1.02 1.007h7.749L14 15V2.007C14 1.451 13.543 1 12.98 1H2.02C1.457 1 1 1.451 1 2.007z"
            ></path>
          </svg>

          <span className="review">{reviews}</span>
        </button>
      </div>
    </div>
  </div>
);

// 구조 분해 할당을 사용하여 매개변수 부분이 길어지더라도, 구조 분해 할당이 주는 장점이 더 많음
// 1. 코드 가독성 향상(반복되는 props 참조를 줄임)
// 매번 props.를 붙일 필요 없이, 컴포넌트의 특정 속성을 직접 사용할 수 있음
// 2. 편리한 유지보수
// 구조 분해 할당을 사용하면 새로운 props를 추가하거나 수정할 때 코드 변경이 더 쉬워짐

export default Card;
// 무조건 필수 설정 -> 이때 Card는 컴포넌트 자체를 내보내는 코드로 함수호출형태로 부르지 않음

// 과제: Card 컴포넌트 2,3 알맞은 인자로 설정해오기
