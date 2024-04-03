import React, { useState } from "react";
import { useSelector } from "react-redux";
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item border-gray-500 border-2  rounded">
      <div
        className="accordion-header bg-[#CD2147] p-3 text-gray-200 text-2xl cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">
          {isOpen ? (
            <i className="fas fa-angle-down text-xl"></i>
          ) : (
            <i className="fas fa-angle-right text-xl"></i>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content bg-pink-800 transition text-gray-300 text-xl p-5 rounded-b">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const SssBody = () => {
  const faq = useSelector((state) => state.faq);
  return (
    <div className="accordion-container flex flex-col gap-3 mb-40">
      {faq?.faqs?.map((item) => {
        return (
          <AccordionItem
            key={item._id}
            title={item.question}
            content={item.answer}
          />
        );
      })}
    </div>
  );
};

export default SssBody;
