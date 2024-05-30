import React from "react";
import "../App.css";

const FaqSection = () => {
  return (
    <div>
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faqbox accordion-flush bg-dark" id="accordionExample">
          <div className="accordion-item bg-secondary">
            <h2 className="accordion-header bg-dark">
              <button
                className="bg-dark accordion-button text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is NetFlix
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="bg-dark accordion-body">
                <strong>This is the first item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="faqbox accordion-flush bg-dark" id="accordionExample">
          <div className="accordion-item bg-secondary">
            <h2 className="accordion-header bg-dark">
              <button
                className="bg-dark accordion-button text-light border-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                How much does Netflix cost?
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="bg-dark accordion-body">
                <strong>This is the first item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="faqbox accordion-flush bg-dark" id="accordionExample">
          <div className="accordion-item bg-secondary">
            <h2 className="accordion-header bg-dark">
              <button
                className="bg-dark accordion-button text-light border-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                What can I watch on Netflix?
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="bg-dark accordion-body">
                <strong>This is the first item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="faqbox accordion-flush bg-dark" id="accordionExample">
          <div className="accordion-item bg-secondary">
            <h2 className="accordion-header bg-dark">
              <button
                className="bg-dark accordion-button text-light border-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Where can I watch?
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="bg-dark accordion-body">
                <strong>This is the first item's accordion body.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="separation"></div>
    </div>
  );
};

export default FaqSection;
