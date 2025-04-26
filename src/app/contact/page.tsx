"use client";

import * as motion from "motion/react-client";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/ui/SectionContainer";
import AbstractFlowerBg from "@/components/animations/AbstractFlowerBg";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="ติดต่อเรา"
        subtitle="ติดต่อเราเพื่อสร้างความสัมพันธ์กับเรา"
      />

      <SectionContainer background="white">
        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-700 p-8 text-white max-w-3xl mx-auto w-full"
          >
            <div className="absolute inset-0 opacity-10">
              <AbstractFlowerBg />
            </div>

            <h3 className="text-2xl font-bold">ข้อมูลการติดต่อ</h3>
            <p className="mt-2 text-primary-200">
              เราพร้อมให้บริการและตอบคำถามตลอด 24 ชั่วโมง
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-primary-200" />
                </div>
                <div className="ml-4 w-full">
                  <p className="text-base font-medium">เบอร์โทร</p>
                  <div className="mt-1 space-y-1">
                    {[
                      "0612394924",
                      "0897248956"
                    ].map((phone, index) => (
                      <div key={index} className="flex items-center">
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-primary-200 transition-colors duration-200 flex items-center"
                        >
                          <span className="block">{phone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-6 w-6 text-primary-200" />
                </div>
                <div className="ml-4 w-full">
                  <p className="text-base font-medium">อีเมล</p>
                  <div className="mt-1 space-y-1">
                    {[
                      "kanompung2521@gmail.com",
                      "Chanaphonnok.2528@gmail.com"
                    ].map((email, index) => (
                      <div key={index} className="flex items-center">
                        <a
                          href={`mailto:${email}`}
                          className="hover:text-primary-200 transition-colors duration-200 break-all"
                        >
                          {email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-primary-200" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium">ที่ตั้ง</p>
                  <p className="mt-1">
                    9/22 หมู่บ้านโกลเด้นวิล 2 ตำบลกะทู้ อำเภอกะทู้ จังหวัดภูเก็ต 83120
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium">ติดตามเรา</h4>
              <div className="mt-4 flex space-x-4">
                {[
                  { name: "Facebook", href: "#" },
                  { name: "Instagram", href: "#" },
                  { name: "Line", href: "#" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Map */}
      <SectionContainer background="light" title="ที่ตั้งของเรา">
        <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden shadow-inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252232.25309900828!2d98.29150521953126!3d7.978534999999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xcda0482bcad13394!2zUGh1a2V0IEZsb3dlciBTaG9wIOC4nuC4seC4meC4nuC4seC4meC4mOC5jCDguKfguLHguJTguJTguK3guIHguYTguKHguYnguJvguKXguLXguIHguYDguIU!5e0!3m2!1sen!2sth!4v1652345678901!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </SectionContainer>
    </div>
  );
}
