"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import faqs from "@/data/faqs.json";
import PageHeader from "@/components/ui/PageHeader";
import SectionContainer from "@/components/ui/SectionContainer";
import CtaSection from "@/components/ui/CtaSection";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FAQPage() {
  const [language, setLanguage] = useState<"en" | "th">("en");

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

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        thaiTitle="คำถามที่พบบ่อย"
        subtitle="Find answers to common questions about our products and services"
      />

      <SectionContainer background="white">
        <div className="mx-auto max-w-4xl">
          {/* Language switcher */}
          <div className="flex justify-end mb-8">
            <div className="inline-flex p-1 rounded-lg bg-gray-100">
              <button
                onClick={() => setLanguage("en")}
                className={classNames(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                  language === "en"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("th")}
                className={classNames(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
                  language === "th"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                ไทย
              </button>
            </div>
          </div>

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
                          <span className="text-base font-medium leading-7">
                            {language === "en"
                              ? faq.question
                              : faq.questionInThai}
                          </span>
                        </div>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-5 w-5 transform text-gray-500 transition duration-300"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="dd"
                        className="px-6 pb-5 pr-12 bg-gray-50 border-t border-gray-100"
                      >
                        <p className="text-base leading-7 text-gray-600 pt-4">
                          {language === "en" ? faq.answer : faq.answerInThai}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </motion.dl>

          {/* FAQ categories */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              {language === "en" ? "Browse by category" : "เรียกดูตามหมวดหมู่"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Delivery", "Products", "Payment", "Returns"].map(
                (category, index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="flex flex-col items-center p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-primary-600 font-medium">
                      {language === "en"
                        ? category
                        : {
                            Delivery: "การจัดส่ง",
                            Products: "สินค้า",
                            Payment: "การชำระเงิน",
                            Returns: "การคืนสินค้า",
                          }[category]}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Contact CTA */}
      <CtaSection
        title={language === "en" ? "Still have questions?" : "ยังมีคำถามอื่นๆ?"}
        subtitle={
          language === "en"
            ? "If you can't find the answer you're looking for, contact our customer support team."
            : "หากคุณไม่พบคำตอบที่ต้องการ โปรดติดต่อทีมบริการลูกค้าของเรา"
        }
        primaryButtonText={language === "en" ? "Contact Us" : "ติดต่อเรา"}
        icon={<QuestionMarkCircleIcon />}
      />
    </div>
  );
}
