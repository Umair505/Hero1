import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-3 cursor-pointer'  pauseOnHover={true}>
                <p className='font-semibold'>Tech companies are racing to integrate AI into everyday tools, with new announcements this week from major players like Google and Microsoft. Google unveiled enhancements to its Gemini AI assistant, aiming to make it more conversational and helpful across Android devices, while Microsoft rolled out Copilot features in more of its Office apps. Experts say this rapid growth in AI accessibility could reshape how people work, learn, and communicate in the coming months.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;