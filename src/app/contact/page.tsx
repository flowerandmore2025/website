'use client';

import * as motion from 'motion/react-client';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PageHeader from '@/components/ui/PageHeader';
import SectionContainer from '@/components/ui/SectionContainer';

export default function Contact() {
  const mapAddress =
    '20 Rattanakosin 200 Pi Rd, Tambon Talat Nuea, Amphoe Mueang Phuket, Chang Wat Phuket 83000';
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d520.9910510515252!2d98.38879767619314!3d7.87186483507594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502e03a5bd4c5d%3A0x2f35d3973eacf5f8!2s20%20Rattanakosin%20200%20Pi%20Rd%2C%20Tambon%20Talat%20Nuea%2C%20Amphoe%20Mueang%20Phuket%2C%20Chang%20Wat%20Phuket%2083000!5e0!3m2!1sen!2sth!4v1769790263020!5m2!1sen!2sth`;

  return (
    <div className="min-h-screen">
      <PageHeader title="ติดต่อเรา" subtitle="ติดต่อเราเพื่อสร้างความสัมพันธ์กับเรา" />

      <SectionContainer background="white">
        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-700 p-8 text-white max-w-3xl mx-auto w-full"
          >
            <h3 className="text-2xl font-bold">ข้อมูลการติดต่อ</h3>
            <p className="mt-2 text-primary-200">เราพร้อมให้บริการและตอบคำถามตลอด 24 ชั่วโมง</p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-primary-200" />
                </div>
                <div className="ml-4 w-full">
                  <p className="text-base font-medium">เบอร์โทร</p>
                  <div className="mt-1 space-y-1">
                    {['0612394924', '0897248056'].map((phone, index) => (
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
                    {['kanompung2521@gmail.com', 'Chanaphonnok.2528@gmail.com'].map(
                      (email, index) => (
                        <div key={index} className="flex items-center">
                          <a
                            href={`mailto:${email}`}
                            className="hover:text-primary-200 transition-colors duration-200 break-all"
                          >
                            {email}
                          </a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-primary-200" />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium">ที่ตั้ง</p>
                  <p className="mt-1">{mapAddress}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium">ติดตามเรา</h4>
              <div className="mt-4 flex space-x-4">
                {[
                  {
                    name: 'Facebook',
                    href: 'https://www.facebook.com/profile.php?id=61576166213676',
                  },
                  { name: 'Instagram', href: 'https://www.instagram.com/flowerandmore.official/' },
                  { name: 'Line', href: 'https://line.me/ti/p/@623jsfdu' },
                ].map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
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
            src={mapSrc}
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
