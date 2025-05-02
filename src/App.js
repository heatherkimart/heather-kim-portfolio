
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("en");

  const works = [
    {
      series: "Connected",
      items: [
        {
          title: "Connected I: Between Structures",
          image: "/images/IMG_4922.jpg",
          description_en: "Explores the tension between static architectural forms and organic softness.",
          description_kr: "정적인 건축 구조와 유기적 부드러움 사이의 긴장을 탐구한다."
        },
        {
          title: "Connected II: Soft Intervals",
          image: "/images/4-d.jpg",
          description_en: "Flowers and geometry unfold in layered intervals of perception.",
          description_kr: "꽃과 기하가 인식의 간극 속에서 층을 이루며 펼쳐진다."
        },
        {
          title: "Connected III: Suspended Perception",
          image: "/images/IMG_4920.jpg",
          description_en: "An impossible structure floats above blooming sensation.",
          description_kr: "불가능한 구조 위로 피어나는 감각이 떠오른다."
        },
        {
          title: "Connected IV: Fractured Logic",
          image: "/images/IMG_4919.jpg",
          description_en: "A fragmented space invites the viewer into perceptual dissonance.",
          description_kr: "분절된 공간은 지각의 균열 속으로 관람자를 초대한다."
        }
      ]
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Heather Kim</h1>
      {works.map((series) => (
        <div key={series.series}>
          <h2>{series.series}</h2>
          {series.items.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} style={{ width: "100%", maxWidth: 600 }} />
              <p>{lang === "en" ? item.description_en : item.description_kr}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
