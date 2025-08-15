import React from 'react';
import CircularGallery from './CircularGallery';

const GalleryPage = () => {
  const galleryItems = [
    { 
      image: 'https://i.ibb.co/rRSBTz8V/a-photograph-of-a-young-bengali-woman-wi-55-N8t-IS6-TPmb2uy-DKg-QYg-Kprn4-Cfs-Rha-Qa-SNBx8-Ho2-A.jpg', 
      text: 'Educate Empower' 
    },
    { 
      image: 'https://i.ibb.co/PGmmFzhJ/Chat-GPT-Image-Jul-19-2025-11-28-35-AM.png', 
      text: 'Healing Hands' 
    },
    { 
      image: 'https://i.ibb.co/VWqP1NVP/a-vibrant-documentary-style-photograph-c-xq-Fwpy-F3-Sky9-LPQCW6-Owl-Q-tz-AOxkh-VTDiw1u-C9-Q-oy-EQ.jpg', 
      text: 'Community Stories' 
    },
    { 
      image: 'https://i.ibb.co/5XqLmsXc/a-photograph-depicting-a-group-of-four-b-je-Ea-PFh-LSYWf98-LEAdsru-Q-k-Fb-Jikuv-T0u-KSdle-JJv-F6g.jpg', 
      text: 'Build Together' 
    },
    { 
      image: 'https://i.ibb.co/TBZBk0tG/a-vibrant-documentary-style-photograph-c-st-A50n4-ETuq-Sagpe-PZ3xc-Q-tz-AOxkh-VTDiw1u-C9-Q-oy-EQ.jpg', 
      text: 'Share Nourish' 
    },
    { 
      image: 'https://i.ibb.co/R1Ft6MJ/Chat-GPT-Image-Jul-19-2025-11-23-22-AM.png', 
      text: 'Elder Care' 
    },
    { 
      image: 'https://i.ibb.co/PZKV1Nzj/a-photograph-of-a-young-bengali-woman-wi-TVSl9vh-MSbqi-YOJgca-Lr-Og-r-XYW262-S6-Clphao6y-FTIw.jpg', 
      text: 'Teach Grow' 
    },
    { 
      image: 'https://i.ibb.co/5WHWzVwX/a-photograph-of-a-young-bengali-woman-ge-gsx-Dm-He0-R0-Cy6f-6-Bh-IGYQ-grnvd4-Z-TUacujqvac-OG9-A.jpg', 
      text: 'Women Rise' 
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-12">
        {/* Beautiful Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-serif">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-500">
                 Volunteer Vision
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating the spirit of community service through powerful stories of compassion and change
          </p>
          
        </div>

        {/* Interactive Gallery */}
        <div className="h-[70vh] w-full rounded-2xl overflow-hidden ">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="gray-400"
            borderRadius={0.05}
            font="bold 24px 'Arial', sans-serif"
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>

        {/* Inspirational Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500 italic">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>
          <p className="text-gray-400 mt-2">- Mahatma Gandhi</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;