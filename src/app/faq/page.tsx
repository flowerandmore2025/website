'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import * as motion from 'motion/react-client';
import faqs from '@/data/faqs';
import PageHeader from '@/components/ui/PageHeader';
import SectionContainer from '@/components/ui/SectionContainer';
import CtaSection from '@/components/ui/CtaSection';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQPage() {
  return (
    <div>
      <PageHeader
        title="คำถามที่พบบ่อย"
        subtitle="ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับสินค้าและบริการของเรา"
      />

      <SectionContainer background="white">
        <div className="mx-auto max-w-4xl">
          {/* FAQ list */}
          <motion.dl
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {faqs.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-start justify-between bg-white px-6 py-5 text-left text-gray-900">
                        <div className="flex items-center">
                          <QuestionMarkCircleIcon className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                          <span className="text-base font-medium leading-7">{faq.question}</span>
                        </div>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-5 w-5 transform text-gray-500 transition duration-300'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="dd"
                        className="px-6 pb-5 pr-12 bg-gray-50 border-t border-gray-100"
                      >
                        <div
                          className="text-base leading-7 text-gray-600 pt-4"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        ></div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </SectionContainer>

      {/* Contact CTA */}
      <CtaSection
        title="ยังมีคำถามอื่นๆ?"
        subtitle="หากคุณไม่พบคำตอบที่ต้องการ โปรดติดต่อทีมบริการลูกค้าของเรา"
        primaryButtonText="ติดต่อเรา"
        icon={<QuestionMarkCircleIcon />}
      />
    </div>
  );
}
