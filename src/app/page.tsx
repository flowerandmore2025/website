"use client";

import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import * as motion from "motion/react-client";
import CartAnimation from "@/components/animations/CartAnimation";
import TruckAnimation from "@/components/animations/TruckAnimation";
import PhoneAnimation from "@/components/animations/PhoneAnimation";
import SectionContainer from "@/components/ui/SectionContainer";
import AnimatedCard from "@/components/ui/AnimatedCard";
import CtaSection from "@/components/ui/CtaSection";
import {
    ArrowRightIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

function Feature({
                     icon,
                     animationComponent,
                     title,
                     description,
                 }: {
    icon?: string;
    animationComponent?: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <motion.div
            className="text-center"
            whileHover={{y: -5}}
            transition={{duration: 0.3}}
        >
            <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 p-4 flex items-center justify-center">
                <div className="h-8 w-8 text-primary-800 flex items-center justify-center">
                    {animationComponent ? (
                        animationComponent
                    ) : icon ? (
                        <Image
                            src={icon}
                            alt={title}
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                    ) : (
                        <span className="text-x">{title.charAt(0)}</span>
                    )}
                </div>
            </div>
            <h3 className="mt-4 text-lg font-display font-semibold text-primary-800">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
        </motion.div>
    );
}

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Hero Section */}
            <div
                className="relative h-[80vh] md:h-[600px] bg-primary-100/90 bg-cover bg-center overflow-hidden flex items-start"
                style={{backgroundImage: 'url("/images/hero/minimalist-flower.png")'}}>
                <div
                    className="relative ml-4 md:ml-8 lg:ml-16 max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-start text-left">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h1 className="font-display italic font-thin text-4xl tracking-tight text-white sm:text-6xl">
                            Phuket Flower Shop
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700 max-w-lg">
                            ดอกไม้แทนคำพูดจากใจ ส่งมอบความรู้สึกดีๆส่อม
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-start">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.98}}
                            >
                                <Link
                                    href="/products"
                                    className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors duration-300 flex items-center justify-start"
                                >
                                    เลือกซื้อสินค้า
                                    <ArrowRightIcon className="ml-2 h-4 w-4"/>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative bottom curve */}
                <div className="absolute bottom-[-1px] left-0 right-0">
                    <svg
                        viewBox="0 0 1440 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto text-white"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 0L48 8.53333C96 17.0667 192 34.1333 288 32C384 29.8667 480 8.53333 576 5.33333C672 2.13333 768 17.0667 864 29.8667C960 42.6667 1056 53.3333 1152 48C1248 42.6667 1344 21.3333 1392 10.6667L1440 0V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0V0Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>

            {/* About Section */}
            <SectionContainer
                title="เกี่ยวกับเรา"
                background="white"
                withPattern={true}
            >
                <div className="mx-auto mt-10 max-w-4xl">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        <Feature
                            animationComponent={<CartAnimation/>}
                            title="ความหลากหลายของสินค้า"
                            description="เรามีสินค้าหลากหลายประเภทที่มีความแตกต่างกันในแต่ละหมวดหมู่"
                        />
                        <Feature
                            animationComponent={<TruckAnimation/>}
                            title="ส่งฟรีทุกวันในเขตภูเก็ตเมื่อสั่งซื้อครบ 1,000 บาท"
                            description="ส่งฟรีทุกวันในเขตภูเก็ตเมื่อสั่งซื้อครบ 1,000 บาท"
                        />
                        <Feature
                            animationComponent={<PhoneAnimation/>}
                            title="สนับสนุนตลอด 24 ชั่วโมง"
                            description="ตอบคำถามทุกข้อที่เกี่ยวกับธุรกิจตลอด 24 ชั่วโมง"
                        />
                    </dl>
                </div>
            </SectionContainer>

            {/* Products Section */}
            <SectionContainer title="สินค้ายอดนิยม" background="light">
                <div
                    className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
                    {products.products
                        .filter((product) => product.isPopular)
                        .map((product, index) => (
                            <AnimatedCard
                                key={product.id}
                                title={product.name}
                                subtitle={`THB ${product.price}`}
                                imageSrc={
                                    product.images && product.images.length > 0
                                        ? product.images[0]
                                        : undefined
                                }
                                href={`/products/${product.id}`}
                                index={index}
                            />
                        ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.div
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.98}}
                        className="inline-block"
                    >
                        <Link
                            href="/products"
                            className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 transition-colors duration-300 inline-flex items-center"
                        >
                            ดูสินค้าทั้งหมด
                            <ArrowLongRightIcon className="ml-2 h-5 w-5"/>
                        </Link>
                    </motion.div>
                </div>
            </SectionContainer>

            {/* Testimonials section */}
            <SectionContainer title="ลูกค้าพูดถึงเรา" background="white">
                <div
                    className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {[
                        {
                            name: "Sarah Thompson",
                            role: "Bride",
                            content:
                                "The flowers for my wedding were absolutely stunning. The team went above and beyond to make sure everything was perfect.",
                        },
                        {
                            name: "จอห์น เดวิส",
                            role: "นักธุรกิจ",
                            content:
                                "บริการที่ยอดเยี่ยม ดอกไม้สดและสวยงาม จะกลับมาใช้บริการอีกแน่นอน",
                        },
                        {
                            name: "Michael Rodriguez",
                            role: "Event Planner",
                            content:
                                "As an event planner, I need reliable vendors. This shop has been my go-to for all floral arrangements for the past two years.",
                        },
                    ].map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-200"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1, duration: 0.4}}
                            whileHover={{y: -5}}
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-base font-display font-medium text-gray-900">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">{testimonial.content}</p>
                                <div className="mt-4 flex items-center">
                                    {[1, 2, 3, 4, 5].map((rating) => (
                                        <svg
                                            key={rating}
                                            className="h-5 w-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionContainer>

            {/* Call to action */}
            <CtaSection
                title="พร้อมที่จะทำให้วันของใครสักคนสดใหม่ขึ้นมั้ย?"
                subtitle="สั่งซื้อดอกไม้สวยๆ สำหรับทุกโอกาส"
                primaryButtonText="เลือกซื้อสินค้า"
                primaryButtonLink="/products"
                secondaryButtonText="ติดต่อเรา"
                secondaryButtonLink="/contact"
                withFlower={true}
            />
        </div>
    );
}
