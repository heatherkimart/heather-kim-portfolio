
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("en");

  const works = [
    {
      series: "Connected",
      items: [
        {
          title: "Connected I: Between Structures",
          image: "https://via.placeholder.com/800x400?text=Connected+I",
          description_en: "Explores the tension between static architectural forms and organic softness.",
          description_kr: "정적인 건축 구조와 유기적 부드러움 사이의 긴장을 탐구한다."
        },
        {
          title: "Connected II: Soft Intervals",
          image: "https://via.placeholder.com/800x400?text=Connected+II",
          description_en: "Flowers and geometry unfold in layered intervals of perception.",
          description_kr: "꽃과 기하가 인식의 간극 속에서 층을 이루며 펼쳐진다."
        },
        {
          title: "Connected III: Suspended Perception",
          image: "https://via.placeholder.com/800x400?text=Connected+III",
          description_en: "An impossible structure floats above blooming sensation.",
          description_kr: "불가능한 구조 위로 피어나는 감각이 떠오른다."
        },
        {
          title: "Connected IV: Fractured Logic",
          image: "https://via.placeholder.com/800x400?text=Connected+IV",
          description_en: "A fragmented space invites the viewer into perceptual dissonance.",
          description_kr: "분절된 공간은 지각의 균열 속으로 관람자를 초대한다."
        }
      ]
    }
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, fontWeight: "bold", marginBottom: 10 }}>Heather Kim</h1>
      <p style={{ marginBottom: 30, color: "#555" }}>
        {lang === "en"
          ? "Artist exploring the tension between structure and sensation."
          : "구조와 감각 사이의 긴장을 탐구하는 작가"}
      </p>
      <button
        onClick={() => setLang(lang === "en" ? "kr" : "en")}
        style={{ marginBottom: 30, padding: "8px 16px", cursor: "pointer" }}
      >
        {lang === "en" ? "한국어" : "English"}
      </button>

      {works.map((series) => (
        <div key={series.series} style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: 24, borderBottom: "1px solid #ccc", paddingBottom: 5 }}>{series.series}</h2>
          {series.items.map((item) => (
            <div key={item.title} style={{ marginTop: 20 }}>
              <h3 style={{ fontSize: 20, marginBottom: 8 }}>{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 6 }}
              />
              <p style={{ marginTop: 10, color: "#666" }}>
                {lang === "en" ? item.description_en : item.description_kr}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
