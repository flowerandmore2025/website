interface Product {
  id?: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  craftedBy?: string;
  description: string;
  inStock: boolean;
  isPopular: boolean;
}

interface Category {
  id: string;
  name: string;
  nameInThai: string;
}

const bouquetCategoryId: string = 'bouquets';
const natureInspiredFloralCreationCategoryId: string = 'nature_inspired_floral_creation';
const velvetWireFloralArtCategoryId: string = 'velvet_wire_floral_art';
const thaiFloralCraftCategoryId: string = 'thai_floral_craft';
const vaseBouquetCategoryId: string = 'vase_bouquet';

const bouquets: Omit<Product, 'category'>[] = [
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 560,
    images: ['/images/products/bouquets/fresh_flower/1.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 2500,
    images: ['/images/products/bouquets/fresh_flower/2.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 1000,
    images: ['/images/products/bouquets/fresh_flower/3.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 1500,
    images: ['/images/products/bouquets/fresh_flower/4.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 150,
    images: ['/images/products/bouquets/fresh_flower/5.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 250,
    images: ['/images/products/bouquets/fresh_flower/6.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 2500,
    images: ['/images/products/bouquets/fresh_flower/8.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 150,
    images: ['/images/products/bouquets/fresh_flower/12.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 150,
    images: ['/images/products/bouquets/fresh_flower/13.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 1500,
    images: ['/images/products/bouquets/fresh_flower/11.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อบูเก้ดอกไม้สด',
    price: 1500,
    images: ['/images/products/bouquets/fresh_flower/14.jpg'],
    description: 'Beautiful fresh flower bouquet with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
];

const natureInspiredFloralCreation: Omit<Product, 'category'>[] = [
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 1500,
    images: ['/images/products/nature_inspired_floral_creation/1.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 2000,
    images: ['/images/products/nature_inspired_floral_creation/2.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 800,
    images: ['/images/products/nature_inspired_floral_creation/3.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 1000,
    images: ['/images/products/nature_inspired_floral_creation/4.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 2000,
    images: ['/images/products/nature_inspired_floral_creation/5.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้เสมือนจริง',
    price: 2000,
    images: ['/images/products/nature_inspired_floral_creation/6.jpg'],
    description: 'Beautiful nature-inspired floral creation with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
];

const velvetWireFloralArt: Omit<Product, 'category'>[] = [
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/1.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/2.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/3.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/4.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/5.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/6.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/7.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/8.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/9.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/10.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ดอกไม้ลวดกำมะหยี่',
    price: 150,
    images: ['/images/products/velvet_wire_floral_art/11.jpg'],
    description: 'Beautiful velvet wire floral art with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
];

const thaiFloralCraft: Omit<Product, 'category'>[] = [
  {
    name: 'แกะสลักดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/carving/1.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'แกะสลักดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/carving/2.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'แกะสลักดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/carving/3.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'แกะสลักดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/carving/4.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/1.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/2.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/3.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/4.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/5.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/6.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พานดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/ceremonial_flower_tray/7.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/1.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/2.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/3.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/4.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/5.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'พวงมาลัยดอกไม้ไทย',
    price: 150,
    images: ['/images/products/thai_floral_craft/flower_garland/6.jpg'],
    description: 'Beautiful thai floral craft with a perfect blend of colors',
    inStock: true,
    isPopular: true,
  },
];

const vaseBouquet: Omit<Product, 'category'>[] = [
  {
    name: 'ช่อแจกันดอกไม้สด',
    price: 1500,
    images: ['/images/products/vase_bouquet/1.jpg'],
    description: 'การจัดดอกกุหลาบและดอกลิลลี่สดในแจกันคริสตัลอย่างสวยงาม เหมาะสำหรับโอกาสพิเศษ',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/2.jpg'],
    description: 'ดอกทานตะวันและดอกเดซี่สีสดใสจัดในแจกันเซรามิกแบบรัสติก นำแสงแดดมาสู่ทุกห้อง',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/3.jpg'],
    description:
      'กล้วยไม้บอบบางและใบไม้เขตร้อนในแจกันแก้วทันสมัย เพิ่มความหรูหราแบบเมืองร้อนให้กับพื้นที่ของคุณ',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/4.jpg'],
    description: 'การจัดดอกโปยอนีสีชมพูและกุหลาบขาวในแจกันสไตล์วินเทจ เหมาะสำหรับวันครบรอบ',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/5.jpg'],
    description:
      'การจัดดอกลิลลี่ขาวและไฮเดรนเยียสีฟ้าในแจกันเซรามิกสีฟ้า สร้างบรรยากาศที่สงบและผ่อนคลาย',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/6.jpg'],
    description:
      'การจัดดอกกุหลาบสีแดงและดอกคาล่าลิลลี่สีดำในแจกันสีดำทันสมัย สร้างความโดดเด่นและน่าสนใจ',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/7.jpg'],
    description: 'การจัดดอกไม้ป่าแบบรัสติกในแจกันแบบเมสันจาร์ นำเสน่ห์ชนบทมาสู่บ้านของคุณ',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/8.jpg'],
    description: 'การจัดดอกทิวลิปสีขาวแบบมินิมอลในแจกันแก้วใส สะท้อนถึงความเรียบง่ายและความหรูหรา',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/9.jpg'],
    description:
      'การจัดดอกไม้เขตร้อนและใบปาล์มอย่างสวยงามในแจกันไม้ไผ่ นำความรู้สึกแบบเมืองร้อนมาสู่บ้าน',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/10.jpg'],
    description:
      'การจัดดอกคาร์เนชั่นสีแดงและขาวพร้อมกิ่งสนในแจกันธีมวันหยุด สร้างบรรยากาศเทศกาลแห่งความสุข',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/11.jpg'],
    description: 'การผสมผสานดอกเกอร์เบอร่าเดซี่สีรุ้งอย่างสดใส จัดในแจกันเซรามิกสีเหลืองสดใส',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/12.jpg'],
    description: 'การจัดดอกแอนีโมนสีม่วงและขาวอย่างหรูหราในแจกันแก้วเมอร์คิวรี่ เพิ่มความหรูหรา',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/13.jpg'],
    description: 'การจัดดอกคาร์เนชั่นสีชมพูและดอกยิปซี่ในแจกันแก้วสีชมพูฟรอสต์ เหมาะสำหรับวันแม่',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/14.jpg'],
    description: 'การจัดหน่อไม้ไผ่และกล้วยไม้ขาวในแจกันหินทรงสี่เหลี่ยม สร้างความสงบแบบเซน',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/15.jpg'],
    description: 'การจัดดอกลิลลี่สีส้มและดอกเบญจมาศสีเหลืองในแจกันทองแดง เฉลิมฉลองฤดูใบไม้ร่วง',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/16.jpg'],
    description:
      'การจัดดอกเดลฟิเนียมสีฟ้าและดอกแอนติร์ไรนัมขาวในแจกันแก้วสีทะเล สร้างความรู้สึกของสายลมทะเล',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/17.jpg'],
    description: 'การจัดดอกคาล่าลิลลี่ขาวและยูคาลิปตัสในแจกันคริสตัลทรงสูง แสดงถึงความหรูหรา',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/18.jpg'],
    description: 'การจัดดอกลิซิแอนทัสสีม่วงและดอกรานังคูลัสสีชมพูในแจกันขวดนมวินเทจ น่ารักและหวาน',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/19.jpg'],
    description:
      'การจัดดอกโปรตีเอและพืชอวบน้ำในแจกันคอนกรีตรูปทรงเรขาคณิต เหมาะสำหรับพื้นที่ร่วมสมัย',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/20.jpg'],
    description:
      'การจัดดอกแดห์เลียสีม่วงเข้มและสีบานเย็นในแจกันตกแต่งด้วยทอง สร้างบรรยากาศแบบราชวงศ์',
    inStock: true,
    isPopular: true,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/21.jpg'],
    description:
      'การจัดดอกกุหลาบสีลาเวนเดอร์และดอกไลแล็กขาวในแจกันเซรามิกสีลาเวนเดอร์ นุ่มนวลและสวยงาม',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/22.jpg'],
    description: 'การจัดดอกทิวลิปสีเหลืองและดอกไอริสสีฟ้าอย่างสดใสในแจกันเซรามิกวาดมือ',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/24.jpg'],
    description: 'การจัดดอกกุหลาบสีแดงเข้มและขนนกสีดำในแจกันสีดำด้าน เหมาะสำหรับสไตล์กอธิค',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/25.jpg'],
    description:
      'การจัดดอกกุหลาบขาวและยูคาลิปตัสเงินในแจกันแก้วเมอร์คิวรี่สีเงิน ไร้กาลเวลาและหรูหรา',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/26.jpg'],
    description: 'การจัดดอกเครือพักตร์นกและขิงแดงในแจกันตกแต่งด้วยไม้ไผ่ นำความอบอุ่นแบบเมืองร้อน',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/27.jpg'],
    description: 'การจัดดอกซากุระและดอกไฮยาซินธ์ขาวในแจกันเซรามิกสไตล์ญี่ปุ่น เฉลิมฉลองฤดูใบไม้ผลิ',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/28.jpg'],
    description:
      'การจัดต้นข้าวสาลี ดอกลาเวนเดอร์แห้ง และปุยฝ้ายในเหยือกโลหะแบบเก่า สไตล์ชนบทสวยงาม',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/29.jpg'],
    description:
      'การจัดดอกลิลลี่สตาร์เกเซอร์สีชมพูและดอกลิซิแอนทัสสีม่วงในแจกันแก้วสีม่วง โดดเด่นและสวยงาม',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/30.jpg'],
    description:
      'การจัดดอกไม้สีเดียวของดอกกุหลาบขาว ดอกลิลลี่ และไฮเดรนเจียในแจกันเซรามิกสีขาว บริสุทธิ์และสง่างาม',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/31.jpg'],
    description: 'ช่อดอกไม้สดสวยงามด้วยสีสันและพื้นผิวที่ผสมผสานกันอย่างลงตัว เหมาะสำหรับทุกโอกาส',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/32.jpg'],
    description: 'การผสมผสานดอกไม้ตามฤดูกาลที่สวยงามในสีสันสดใส จัดในแจกันเซรามิกตกแต่ง',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/33.jpg'],
    description:
      'การผสมผสานอย่างสง่างามของดอกกุหลาบและใบไม้เขียวในแจกันแก้วทันสมัย เหมาะสำหรับบ้านหรือสำนักงาน',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/34.jpg'],
    description: 'การจัดดอกไม้ชั้นดีอย่างหรูหราในสีสันอันอุดมสมบูรณ์ นำเสนอในแจกันแก้วร่วมสมัย',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/35.jpg'],
    description: 'การจัดแสดงดอกไม้แปลกตาและใบไม้อย่างมีศิลปะในแจกันดีไซน์เนอร์ สร้างความโดดเด่น',
    inStock: true,
    isPopular: false,
  },
  {
    name: 'ช่อแจกัน',
    price: 1500,
    images: ['/images/products/vase_bouquet/36.jpg'],
    description:
      'การผสมผสานอย่างลงตัวของดอกไม้สีพาสเทลในแจกันแรงบันดาลใจจากยุควินเทจ สร้างบรรยากาศแห่งความโรแมนติก',
    inStock: true,
    isPopular: false,
  },
];

const categories: Category[] = [
  {
    id: bouquetCategoryId,
    name: 'Bouquets',
    nameInThai: 'งานช่อบูเก้ดอกไม้สด',
  },
  {
    id: natureInspiredFloralCreationCategoryId,
    name: 'Nature-Inspired Floral Creation',
    nameInThai: 'งานดอกไม้เสมือนจริง',
  },
  {
    id: velvetWireFloralArtCategoryId,
    name: 'Velvet Wire Floral Art',
    nameInThai: 'งานดอกไม้ลวดกำมะหยี่',
  },
  {
    id: thaiFloralCraftCategoryId,
    name: 'Thai Floral Craft',
    nameInThai: 'งานดอกไม้ไทย',
  },
  {
    id: vaseBouquetCategoryId,
    name: 'Vase Bouquet',
    nameInThai: 'ช่อแจกัน',
  },
];

const products: Product[] = [
  ...bouquets.map((product, index) => ({
    ...product,
    ...{
      id: `bouquet-${index + 1}`,
    },
    category: bouquetCategoryId,
  })),
  ...natureInspiredFloralCreation.map((product, index) => ({
    ...product,
    ...{
      id: `nature-inspired-floral-creation-${index + 1}`,
    },
    category: natureInspiredFloralCreationCategoryId,
  })),
  ...velvetWireFloralArt.map((product, index) => ({
    ...product,
    ...{
      id: `velvet-wire-floral-art-${index + 1}`,
    },
    category: velvetWireFloralArtCategoryId,
  })),
  ...thaiFloralCraft.map((product, index) => ({
    ...product,
    ...{
      id: `thai-floral-craft-${index + 1}`,
    },
    category: thaiFloralCraftCategoryId,
  })),
  ...vaseBouquet.map((product, index) => ({
    ...product,
    ...{
      id: `vase-bouquet-${index + 1}`,
    },
    category: vaseBouquetCategoryId,
  })),
];

const maxPrice = products.reduce((max, product) => {
  return Math.max(max, product.price);
}, 0);

export default { products, categories, maxPrice };
