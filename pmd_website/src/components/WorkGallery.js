import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./WorkGallery.css";

const WorkGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  const workItems = [
    {
      id: 1,
      category: "Photoshoot",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "T-Shirt Printing",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "Car Branding",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      category: "Photoshoot",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      category: "T-Shirt Printing",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      category: "Car Branding",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      category: "Photoshoot",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      category: "T-Shirt Printing",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleImageClick = (event, item) => {
    event.preventDefault();
    setActiveImage(item);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setActiveImage(null);
  };

  const handleLightboxClick = (event) => {
    event.preventDefault();
    setActiveImage(null);
  };

  const handleContentClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (<section className="work-gallery"> <div className="work-gallery-container"> <div className="work-gallery-header"> <span className="work-gallery-eyebrow">
    Our Recent Work </span>


    <h2 className="work-gallery-title">
      Ideas Made
      <span> Visible.</span>
    </h2>

    <p className="work-gallery-description">
      Explore a selection of PMD's recent creative work, from
      professional photoshoots and custom apparel to eye-catching
      vehicle branding.
    </p>
  </div>

    <div className="work-gallery-grid">
      {workItems.map((item) => (
        <button
          type="button"
          className="work-gallery-item"
          key={item.id}
          onClick={(event) =>
            handleImageClick(event, item)
          }
          aria-label={`View ${item.category} project`}
        >
          <img
            src={item.image}
            alt={`${item.category} project`}
            className="work-gallery-image"
          />

          <div className="work-gallery-overlay">
            <div className="work-gallery-overlay-content">
              <span>{item.category}</span>
              <strong>View Project</strong>
            </div>
          </div>
        </button>
      ))}
    </div>
  </div>

    {activeImage && (
      <div
        className="work-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={`${activeImage.category} project preview`}
        onClick={handleLightboxClick}
      >
        <button
          type="button"
          className="work-lightbox-close"
          onClick={handleClose}
          aria-label="Close image preview"
        >
          <FaTimes />
        </button>

        <div
          className="work-lightbox-content"
          onClick={handleContentClick}
        >
          <img
            src={activeImage.image}
            alt={`${activeImage.category} project`}
            className="work-lightbox-image"
          />

          <div className="work-lightbox-caption">
            {activeImage.category}
          </div>
        </div>
      </div>
    )}
  </section>


  );
};

export default WorkGallery;
