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
  posts: [
    {
      title: '🌷 ความหมายของดอกไม้ในแต่ละวาระ 🌷',
      slug: 'meaning-of-flowers-in-thai-culture',
      excerpt:
        'ค้นพบความสำคัญทางวัฒนธรรมของดอกไม้ในวัฒนธรรมไทย และเรียนรู้ความหมายของดอกไม้แต่ละชนิดที่เหมาะสมกับโอกาสต่างๆ',
      content: `
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
      image: '/images/blog/placeholder-blog.jpg',
      author: 'Flower & More',
      date: '2025-04-15',
      category: 'tips',
    },
    {
      title: 'ดอกไม้ประจำราศีทั้ง 12 เสริมดวง เสริมพลังใจให้ชีวิตสดใส',
      slug: 'flowers-for-12-zodiac-signs-boost-luck-and-energy',
      excerpt:
        'ดอกไม้ไม่เพียงแต่ให้ความสวยงามและความหอมเท่านั้น แต่ยังมีพลังงานที่สามารถเสริมบุคลิก เสริมโชค และบ่งบอกถึงตัวตนของแต่ละราศีได้ด้วย มาดูกันค่ะว่าดอกไม้ประจำราศีของคุณคืออะไร?',
      content: `
<h2><strong>🌸 ดอกไม้ประจำราศีทั้ง 12 เสริมดวง เสริมพลังใจให้ชีวิตสดใส 🌟</strong></h2>
<h3><strong>ดอกไม้ไม่เพียงแต่ให้ความสวยงามและความหอมเท่านั้น แต่ยังมีพลังงานที่สามารถเสริมบุคลิก เสริมโชค และบ่งบอกถึงตัวตนของแต่ละราศีได้ด้วย มาดูกันค่ะว่า &ldquo;ดอกไม้ประจำราศีของคุณคืออะไร?&rdquo; พร้อมเหตุผลที่เลือกแต่ละชนิดมาให้ตรงกับลักษณะของราศีนั้น ๆ ✨</strong></h3>
<h3><strong>♈ ราศีเมษ (21 มี.ค. &ndash; 19 เม.ย.)</strong></h3>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Apr%20-%20%20Red%20Tulip.png" width="60%" />
</div>
<p><strong>ดอกทิวลิปแดง Red Tulip</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความมั่นใจ ความหลงใหล และพลังงาน</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ผู้หญิงราศีเมษมีความกล้า มั่นใจ และเต็มไปด้วยพลัง ทิวลิปแดงสะท้อนบุคลิกอันเร่าร้อนของเธอได้ดี</span><span style="font-weight: 400;"></span></p>
<h3><strong>♉ ราศีพฤษภ (20 เม.ย. &ndash; 20 พ.ค.)</strong></h3>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/May%20-%20Light%20Pink%20Rose.png" width="60%" />
</div>
<p><strong>ดอกกุหลาบสีชมพูอ่อน Light Pink Rose</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความอ่อนโยน ความโรแมนติก ความมั่นคง</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ผู้หญิงราศีพฤษภชอบความหรูหราและมีความโรแมนติก กุหลาบสีชมพูอ่อนให้ความรู้สึกอบอุ่นและมั่นคง เหมือนตัวตนของเธอ</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Jun%20-Daisy.png" width="60%" />
</div>
<h3><strong>♊ ราศีเมถุน (21 พ.ค. &ndash; 20 มิ.ย.)</strong></h3>
<p><strong>ดอกเดซี่ Daisy</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความสดใส ความสนุกสนาน และความอ่อนเยาว์</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ราศีเมถุนช่างพูด ร่าเริง และมีหลายบุคลิก เดซี่สะท้อนความเบิกบานและเป็นธรรมชาติของเธอได้ดี</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Jul-Carnation.png" width="60%" />
</div>
<h3><strong>♋ ราศีกรกฎ (21 มิ.ย. &ndash; 22 ก.ค.)</strong></h3>
<p><strong>ดอกคาร์เนชั่น Carnation</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความห่วงใย ความอ่อนโยน และครอบครัว</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ผู้หญิงราศีกรกฎเป็นคนอบอุ่น รักครอบครัว และมีความรู้สึกละเอียดอ่อน คาร์เนชั่นสีขาวสื่อถึงความรักบริสุทธิ์และห่วงใย</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Aug-%20%20Sunflower.png" width="60%" />
</div>
<h3><strong>♌ ราศีสิงห์ (23 ก.ค. &ndash; 22 ส.ค.)</strong></h3>
<p><strong>ดอกทานตะวัน Sunflower</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความมั่นใจ การเป็นผู้นำ และความอบอุ่น</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ราศีสิงห์รักความโดดเด่นและมีเสน่ห์ ทานตะวันเปล่งประกายสะท้อนพลังบวกของเธอได้อย่างชัดเจน</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Sep%20-%20%20White%20Lily.png" width="60%" />
</div>
<h3><strong>♍ ราศีกันย์ (23 ส.ค. &ndash; 22 ก.ย.)</strong></h3>
<p><strong>ดอกลิลลี่สีขาว White Lily</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความบริสุทธิ์ เรียบร้อย และสมบูรณ์แบบ</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">ผู้หญิงราศีกันย์มีความละเอียดรอบคอบ ลิลลี่สีขาวสื่อถึงความสะอาดและบริสุทธิ์อย่างที่เธอเป็น</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Oct-Peach%20Rose.png" width="60%" />
</div>
<h3><strong>♎ ราศีตุลย์ (23 ก.ย. &ndash; 22 ต.ค.)</strong></h3>
<p><strong>ดอกกุหลาบพีช Peach Rose</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความสง่างาม ความสมดุล และเสน่ห์นุ่มนวล</span><span style="font-weight: 400;"></span><span style="font-weight: 400;">ราศีตุลย์เป็นคนมีเสน่ห์ รักความยุติธรรม ดอกกุหลาบพีชให้ความรู้สึกนุ่มนวล อบอุ่น และสมดุล</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Nov-Purple%20Orchid.png" width="60%" />
</div>
<h3><strong>♏ ราศีพิจิก (23 ต.ค. &ndash; 21 พ.ย.)</strong></h3>
<p><strong>ดอกกล้วยไม้ม่วง Purple Orchid</strong></p>
<p><span style="font-weight: 400;">ความลึกลับ เสน่ห์ และความแข็งแกร่ง</span><span style="font-weight: 400;"></span></p>
<p><strong>เหตุผล:</strong><span style="font-weight: 400;"> ผู้หญิงราศีพิจิกมีความลึกซึ้ง และมีเสน่ห์ดึงดูด กล้วยไม้ม่วงแสดงถึงความลึกลับและความงดงามที่น่าค้นหา</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Dec%20-%20Gerbera%20Daisy.png" width="60%" />
</div>
<h3><strong>♐ ราศีธนู (22 พ.ย. &ndash; 21 ธ.ค.)</strong></h3>
<h3><strong>ดอกไม้ที่เหมาะ: ดอกเยอบีร่า (Gerbera Daisy)</strong><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความสดใส ร่าเริง และความสุข</span><span style="font-weight: 400;"></span><span style="font-weight: 400;">ดอกเยอบีร่าเป็นดอกไม้ที่หาซื้อได้ง่ายในไทย มีสีสันสดใส เหมาะกับผู้หญิงราศีธนูที่มีนิสัยร่าเริง ชอบความสนุกสนาน และมีพลังบวกเต็มเปี่ยม</span></h3>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Jan%20-%20Blue%20Hydrangea.png" width="60%" />
</div>
<h3><strong>♑ ราศีมังกร (22 ธ.ค. &ndash; 19 ม.ค.)</strong></h3>
<p><strong>ดอกไฮเดรนเยียสีฟ้า Blue Hydrangea</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความมีระเบียบ ความอดทน และการควบคุมอารมณ์</span><span style="font-weight: 400;"></span><span style="font-weight: 400;">ราศีมังกรมีความเป็นมืออาชีพและตั้งใจ ไฮเดรนเยียสีฟ้าสื่อถึงความสงบและความเป็นระเบียบแบบเธอ</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Feb-Lavender.png" width="60%" />
</div>
<h3><strong>♒ ราศีกุมภ์ (20 ม.ค. &ndash; 18 ก.พ.)</strong></h3>
<p><strong>ดอกลาเวนเดอร์ Lavender</strong></p>
<p><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความคิดสร้างสรรค์ ความสงบ และความแปลกใหม่</span><span style="font-weight: 400;">ผู้หญิงราศีกุมภ์มักมีไอเดียแปลกใหม่ ลาเวนเดอร์ให้ความรู้สึกผ่อนคลายและมีเอกลักษณ์เฉพาะตัว</span><span style="font-weight: 400;"></span></p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flowers-for-12-zodiac-signs/Mar-Peony.png" width="60%" />
</div>
<h3><strong>♓ ราศีมีน (19 ก.พ. &ndash; 20 มี.ค.)</strong></h3>
<h4><strong>ดอกไม้ที่เหมาะ: ดอกพีโอนี (Peony)</strong><strong>ความหมาย:</strong><span style="font-weight: 400;"> ความรักอันลึกซึ้ง ความงามแบบโรแมนติก และความสุภาพ</span><span style="font-weight: 400;"></span><span style="font-weight: 400;">ผู้หญิงราศีมีนเต็มไปด้วยเสน่ห์ที่นุ่มนวลและจิตใจอ่อนโยน ดอกพีโอนีมีความหรูหราแต่ก็อ่อนหวาน เปรียบเหมือนหัวใจที่ละเอียดอ่อนของชาวมีนที่เต็มไปด้วยความฝันและความรักอย่างไม่มีเงื่อนไข</span></h4>
      `,
      image: '/images/blog/flowers-for-12-zodiac-signs/hero.png',
      author: 'Flower & More',
      date: '2025-04-02',
      category: 'tips',
    },
    {
      title: 'ไอเดียดอกไม้แทนใจ สำหรับคนพิเศษในทุกความสัมพันธ์',
      slug: 'flower-arrangement-ideas',
      excerpt:
        'ดอกไม้… สิ่งเล็กๆ ที่เต็มไปด้วยพลังแห่งความหมาย ไม่ว่าจะเป็นการแสดงความรัก ความห่วงใย หรือแค่ต้องการบอกว่า “คิดถึงนะ” หากคุณกำลังมองหาของขวัญที่ทั้งสวยและมีคุณค่าในใจผู้รับ “ของขวัญจากดอกไม้” คือคำตอบที่แสนพิเศษ',
      content: `
<p>การเลือกดอกไม้ให้กับใครสักคนไม่ใช่แค่เรื่องของความสวยงามเท่านั้น แต่ยังเป็นการส่งผ่านความรู้สึก ความห่วงใย และความหมายลึกซึ้งใจที่ผู้รับจะสัมผัสได้ มาดูกันว่า...แต่ละความสัมพันธ์ควรเลือกดอกไม้ชนิดไหน พร้อมเหตุผลที่ทำให้มัน "ใช่" ที่สุดสำหรับคนพิเศษของคุณ</p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flower-arrangement-ideas/1.png" width="60%" />
</div>
<h2>💛 สำหรับเพื่อน: ส่งพลังบวก เติมรอยยิ้ม</h2>
<h3>ดอกทานตะวัน (Sunflower)</h3>
<p>สื่อถึงความสุข ความอบอุ่น และความจริงใจ ดอกทานตะวันเหมาะกับเพื่อนที่อยู่เคียงข้างกันในทุกช่วงเวลา เป็นสัญลักษณ์ของมิตรภาพที่มั่นคงและสดใส</p>
<h3>ดอกไอริส (Iris)</h3>
<p>แสดงถึงความหวังและการสนับสนุน เหมาะสำหรับเพื่อนที่กำลังเริ่มต้นสิ่งใหม่ หรืออยู่ในช่วงเวลาสำคัญของชีวิต</p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flower-arrangement-ideas/2.png" width="60%" />
</div> 

<h2>❤️ สำหรับคนรัก: แทนคำว่ารัก...จากใจจริง</h2>
<h3>ดอกกุหลาบแดง (Red Rose)</h3>
<p>ไอคอนแห่งความรักและความหลงใหล การมอบกุหลาบแดงคือการบอกรักแบบคลาสสิกที่ไม่มีวันล้าสมัย</p>
<h3>ดอกลิลลี่ (Lily)</h3>
<p>สื่อถึงความรักที่บริสุทธิ์และลึกซึ้ง เหมาะสำหรับคู่รักที่ผูกพันกันอย่างอ่อนโยนและจริงใจ</p>
<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flower-arrangement-ideas/3.png" width="60%" />
</div>

<h2>💐 สำหรับผู้ใหญ่หรือผู้มีพระคุณ: เคารพและนอบน้อม </h2>
<h3>ดอกกล้วยไม้ (Orchid)</h3>
<p>ตัวแทนแห่งความหรูหรา สง่างาม และความเคารพ การให้ดอกกล้วยไม้แสดงถึงความนับถือและความซาบซึ้งใจอย่างลึกซึ้ง</p>
<h3>ดอกเบญจมาศ (Chrysanthemum)</h3>
<p>สื่อถึงความเคารพ ความจริงใจ และความปรารถนาดี เหมาะสำหรับโอกาสพิเศษหรือเพื่อแสดงความห่วงใยต่อผู้มีพระคุณ</p>

<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flower-arrangement-ideas/4.png" width="60%" />
</div>
<h2>👶 สำหรับเด็กหรือสมาชิกในครอบครัว: อบอุ่น อ่อนโยน และเต็มไปด้วยความรัก</h2>
<h3>🌼 ดอกเดซี่ (Daisy)</h3>
<p>แทนความไร้เดียงสา ความบริสุทธิ์ และความหวัง ดอกเดซี่เหมาะสำหรับเด็กหรือหลาน สื่อถึงความรักแบบใสซื่อ และความปรารถนาดีที่ไม่มีเงื่อนไข</p>
<h3>🌸 ดอกคาร์เนชั่นชมพู (Pink Carnation)</h3>
<p>สื่อถึงความรักของแม่ ความห่วงใย และความอ่อนโยน เหมาะสำหรับแสดงความรักต่อแม่ พี่สาว หรือน้องสาวที่คุณห่วงใย</p>

<div style="display: flex;justify-content: center;">
  <img src="/images/blog/flower-arrangement-ideas/5.png" width="60%" />
</div>
<h2>🙌 สำหรับเพื่อนร่วมงานหรือเจ้านาย: ให้เกียรติ สนับสนุน และสร้างความประทับใจ</h2>
<h3>🌷 ดอกทิวลิปสีม่วง (Purple Tulip)</h3>
<p>แทนความเคารพ ความชื่นชม และความเป็นมืออาชีพ เหมาะสำหรับเจ้านายหรือผู้ร่วมงานที่คุณนับถือ</p>
<h3>💐 ดอกไฮเดรนเยีย (Hydrangea)</h3>
<p>สื่อถึงความขอบคุณและความเข้าใจ เหมาะกับการขอบคุณเพื่อนร่วมงานที่ให้ความช่วยเหลือ หรือเป็นกำลังใจในที่ทำงาน</p>
      `,
      image: '/images/blog/flower-arrangement-ideas/hero.jpg',
      author: 'Flower & More',
      date: '2025-03-01',
      category: 'tips',
    },
  ],
  categories: [
    {
      id: 'tips',
      name: 'Tips & Tricks',
      nameInThai: 'เคล็ดลับและเทคนิค',
    },
    {
      id: 'culture',
      name: 'Culture',
      nameInThai: 'วัฒนธรรม',
    },
    {
      id: 'news',
      name: 'News',
      nameInThai: 'ข่าวสาร',
    },
  ],
};

export default blog;
