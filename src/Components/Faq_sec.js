import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
function Faq_sec() {
  return (
    <div className='Faq_sec'>
      <div className='container_x'>
        <h2 className='font-semibold mb-6'>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-left'>How does Zolvecare ensure the security of patient information?</AccordionTrigger>
            <AccordionContent>
            Zolvecare employs robust security measures, including encryption protocols and access controls, to safeguard patient data. Our platform complies with industry standards and regulations to ensure the confidentiality and integrity of sensitive information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className='text-left'>Can I customize templates in Zolvecare to suit the specific needs of my medical practice?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className='text-left'>Is Zolvecare compatible with other healthcare systems and tools?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq_sec
