interface BlogPost {
  id: string;
  title: string;
  slug: string;
  titleInThai?: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

interface BlogCategory {
  id: string;
  name: string;
  nameInThai: string;
}

interface BlogData {
  posts: BlogPost[];
  categories: BlogCategory[];
}

const blog: BlogData = {
  "posts": [
    {
      "id": "1",
      "title": "The Art of Flower Arrangement",
      "slug": "the-art-of-flower-arrangement",
      "titleInThai": "ศิลปะการจัดดอกไม้",
      "excerpt": "Learn the basics of Thai flower arrangement and its cultural significance",
      "content": `
      🌷 ความหมายของดอกไม้ในแต่ละวาระ 🌷
เพราะทุกดอกไม้พูดแทนใจได้เสมอ

💌 1. โอกาสแสดงความรัก – วาเลนไทน์ / ขอความรัก / ครบรอบ
กุหลาบแดง (Red Rose) – ความรักอันลึกซึ้ง ความโรแมนติก ความหลงใหล

ทิวลิปสีชมพู (Pink Tulip) – ความรักที่อ่อนโยน ความห่วงใย

ดอกคาร์เนชั่น (Carnation) – ความรักที่บริสุทธิ์ มักใช้แทนความรักของแม่

กุหลาบสีขาว (White Rose) – ความรักที่บริสุทธิ์และมั่นคง

🪻 2. โอกาสแสดงความยินดี – รับปริญญา / เปิดร้าน / เลื่อนตำแหน่ง
ดอกลิลลี่ (Lily) – ความบริสุทธิ์ ความสง่างาม มักสื่อถึงความสำเร็จที่คู่ควร

เยอบีร่า (Gerbera) – ความร่าเริง สดใส ความสุขและพลังบวก

ดอกทานตะวัน (Sunflower) – ความมั่นคง ความศรัทธา การมองโลกในแง่ดี

🙏 3. โอกาสทางศาสนา / ถวายพระ / พิธีมงคล
ดอกมะลิ (Jasmine) – ความกตัญญู ความรักอันบริสุทธิ์ มักใช้ในวันแม่หรือถวายพระ

กล้วยไม้ (Orchid) – ความสง่างาม ความอ่อนน้อมถ่อมตน

ดอกดาวเรือง (Marigold) – ความเจริญรุ่งเรือง ใช้ในพิธีมงคล เช่น ขึ้นบ้านใหม่

🖤 4. โอกาสแสดงความเสียใจ / งานศพ
ลิลลี่ขาว (White Lily) – ความสงบ การปล่อยวาง

ดอกเบญจมาศ (Chrysanthemum) – ความอาลัย ความเคารพ

กุหลาบขาว – การระลึกถึง ความรักที่ไม่มีวันจางหาย

🎁 5. โอกาสทั่วไป – แสดงน้ำใจ / ขอบคุณ / ให้กำลังใจ
ไฮเดรนเยีย (Hydrangea) – ความซาบซึ้งใจ การขอบคุณ

ดอกฟอร์เก็ตมีน็อต (Forget-me-not) – โปรดอย่าลืมฉัน คิดถึงเสมอ

ลาเวนเดอร์ (Lavender) – ความสงบ สติ สมาธิ มักใช้ในการให้กำลังใจ

📝 Tips เล็กๆ:

สีของดอกไม้ก็มีผลกับความหมาย เช่น กุหลาบแดง = รัก, กุหลาบเหลือง = มิตรภาพ, กุหลาบชมพู = ความรักแบบใสๆ

การจับคู่ดอกไม้หลายชนิดในช่อเดียว อาจสร้างความหมายพิเศษที่ลึกซึ้งขึ้น เช่น ลิลลี่ขาว + กุหลาบชมพู = ความรักที่บริสุทธิ์และอ่อนโยน


      `,
      "image": "/images/blog/placeholder-blog.jpg",
      "author": "Guide Korikung",
      "date": "2024-03-20",
      "category": "tips"
    }
  ],
  "categories": [
    {
      "id": "tips",
      "name": "Tips & Tricks",
      "nameInThai": "เคล็ดลับและเทคนิค"
    },
    {
      "id": "culture",
      "name": "Culture",
      "nameInThai": "วัฒนธรรม"
    },
    {
      "id": "news",
      "name": "News",
      "nameInThai": "ข่าวสาร"
    }
  ]
};

export default blog;
