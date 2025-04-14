interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "เวลาจัดส่งของคุณคือเมื่อไหร่?",
    answer:
      "เราจัดส่งตั้งแต่ 9:00 น. ถึง 18:00 น. วันจันทร์ถึงวันเสาร์ สำหรับโอกาสพิเศษเช่นวันวาเลนไทน์ เรามีบริการจัดส่งพิเศษ",
  },
  {
    question: "คุณมีบริการจัดส่งในวันเดียวกันหรือไม่?",
    answer:
      "ใช่ เรามีบริการจัดส่งในวันเดียวกันสำหรับคำสั่งซื้อก่อน 14:00 น. ในเขตภูเก็ต",
  },
  {
    question: "ฉันควรดูแลดอกไม้อย่างไร?",
    answer:
      "เปลี่ยนน้ำทุกวัน ตัดก้านเฉียง เก็บให้ห่างจากแสงแดดโดยตรงและแหล่งความร้อน และใช้อาหารดอกไม้ที่ให้มา",
  },
];

export default { faqs };
