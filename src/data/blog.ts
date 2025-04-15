interface BlogPost {
  title: string;
  slug: string;
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
      "title": "🌷 ความหมายของดอกไม้ในแต่ละวาระ 🌷",
      "slug": "meaning-of-flowers-in-thai-culture",
      "excerpt": "ค้นพบความสำคัญทางวัฒนธรรมของดอกไม้ในวัฒนธรรมไทย",
      "content": `
        <p><strong>เพราะทุกดอกไม้พูดแทนใจได้เสมอ</strong></p>
        <h3>💌 <strong>1. โอกาสแสดงความรัก &ndash; วาเลนไทน์ / ขอความรัก / ครบรอบ</strong></h3>
        <ul>
        <li>
        <p><strong>กุหลาบแดง (Red Rose)</strong> &ndash; ความรักอันลึกซึ้ง ความโรแมนติก ความหลงใหล</p>
        </li>
        <li>
        <p><strong>ทิวลิปสีชมพู (Pink Tulip)</strong> &ndash; ความรักที่อ่อนโยน ความห่วงใย</p>
        </li>
        <li>
        <p><strong>ดอกคาร์เนชั่น (Carnation)</strong> &ndash; ความรักที่บริสุทธิ์ มักใช้แทนความรักของแม่</p>
        </li>
        <li>
        <p><strong>กุหลาบสีขาว (White Rose)</strong> &ndash; ความรักที่บริสุทธิ์และมั่นคง</p>
        </li>
        </ul>
        <h3>🪻 <strong>2. โอกาสแสดงความยินดี &ndash; รับปริญญา / เปิดร้าน / เลื่อนตำแหน่ง</strong></h3>
        <ul>
        <li>
        <p><strong>ดอกลิลลี่ (Lily)</strong> &ndash; ความบริสุทธิ์ ความสง่างาม มักสื่อถึงความสำเร็จที่คู่ควร</p>
        </li>
        <li>
        <p><strong>เยอบีร่า (Gerbera)</strong> &ndash; ความร่าเริง สดใส ความสุขและพลังบวก</p>
        </li>
        <li>
        <p><strong>ดอกทานตะวัน (Sunflower)</strong> &ndash; ความมั่นคง ความศรัทธา การมองโลกในแง่ดี</p>
        </li>
        </ul>
        <h3>🙏 <strong>3. โอกาสทางศาสนา / ถวายพระ / พิธีมงคล</strong></h3>
        <ul>
        <li>
        <p><strong>ดอกมะลิ (Jasmine)</strong> &ndash; ความกตัญญู ความรักอันบริสุทธิ์ มักใช้ในวันแม่หรือถวายพระ</p>
        </li>
        <li>
        <p><strong>กล้วยไม้ (Orchid)</strong> &ndash; ความสง่างาม ความอ่อนน้อมถ่อมตน</p>
        </li>
        <li>
        <p><strong>ดอกดาวเรือง (Marigold)</strong> &ndash; ความเจริญรุ่งเรือง ใช้ในพิธีมงคล เช่น ขึ้นบ้านใหม่</p>
        </li>
        </ul>
        <h3>🖤 <strong>4. โอกาสแสดงความเสียใจ / งานศพ</strong></h3>
        <ul>
        <li>
        <p><strong>ลิลลี่ขาว (White Lily)</strong> &ndash; ความสงบ การปล่อยวาง</p>
        </li>
        <li>
        <p><strong>ดอกเบญจมาศ (Chrysanthemum)</strong> &ndash; ความอาลัย ความเคารพ</p>
        </li>
        <li>
        <p><strong>กุหลาบขาว</strong> &ndash; การระลึกถึง ความรักที่ไม่มีวันจางหาย</p>
        </li>
        </ul>
        <h3>🎁 <strong>5. โอกาสทั่วไป &ndash; แสดงน้ำใจ / ขอบคุณ / ให้กำลังใจ</strong></h3>
        <ul>
        <li>
        <p><strong>ไฮเดรนเยีย (Hydrangea)</strong> &ndash; ความซาบซึ้งใจ การขอบคุณ</p>
        </li>
        <li>
        <p><strong>ดอกฟอร์เก็ตมีน็อต (Forget-me-not)</strong> &ndash; โปรดอย่าลืมฉัน คิดถึงเสมอ</p>
        </li>
        <li>
        <p><strong>ลาเวนเดอร์ (Lavender)</strong> &ndash; ความสงบ สติ สมาธิ มักใช้ในการให้กำลังใจ</p>
        </li>
        </ul>
        <hr />
        <p>📝 <strong>Tips เล็กๆ</strong>:</p>
        <ul>
        <li>
        <p>สีของดอกไม้ก็มีผลกับความหมาย เช่น กุหลาบแดง = รัก, กุหลาบเหลือง = มิตรภาพ, กุหลาบชมพู = ความรักแบบใสๆ</p>
        </li>
        <li>
        <p>การจับคู่ดอกไม้หลายชนิดในช่อเดียว อาจสร้างความหมายพิเศษที่ลึกซึ้งขึ้น เช่น ลิลลี่ขาว + กุหลาบชมพู = ความรักที่บริสุทธิ์และอ่อนโยน</p>
        </li>
        </ul>
      `,
      "image": "/images/blog/placeholder-blog.jpg",
      "author": "Guide Korikung",
      "date": "2025-04-12",
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
