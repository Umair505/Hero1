import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-3 cursor-pointer'  pauseOnHover={true}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facilis eligendi non in eum dolor neque saepe obcaecati quae quisquam eius dolore aspernatur reprehenderit, placeat doloremque dolores ab ipsam. Dolor.
                Laboriosam explicabo sint optio corporis velit modi nostrum maxime eveniet cumque iusto itaque vero, facilis commodi delectus error, soluta magnam, incidunt fuga id in tenetur dolorum voluptatum maiores? Suscipit, doloremque?
                Ab explicabo fugit odit officia, labore, tempora sequi, similique voluptas nostrum aperiam ipsa numquam. Facilis, cum? Perferendis inventore laudantium molestiae distinctio, exercitationem beatae explicabo eum excepturi omnis repudiandae reprehenderit aliquam?.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;