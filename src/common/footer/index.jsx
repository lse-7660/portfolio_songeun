import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const Contact = ({ name }) => (
        <div className="h-[2.2vw] overflow-hidden">
            <motion.span whileHover={{ y: '-2.2vw' }} transition={{ duration: 0.3 }} className="flex flex-col">
                <span className="text-g0 text-[1.5vw] font-bold">{name}</span>
                <span className="text-g0 text-[1.5vw] font-bold">{name}</span>
            </motion.span>
        </div>
    );

    return (
        <div className="footer bg-g900 inner-footer border-t border-g500">
            <div
                ref={ref}
                className="flex flex-row"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isInView ? 'space-between' : 'flex-start',
                    transition: 'justify-content 0.8s ease-in-out',
                }}
            >
                <motion.span
                    layout
                    className="font-kenoky text-g0 font-bold text-[12vw] leading-none"
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    Get In
                </motion.span>

                <motion.span
                    layout
                    className="text-g0 font-bold text-[12vw] leading-none"
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    TOUCH
                </motion.span>
            </div>
            {/* <div className="flex flex-col justify-end">
                <p className="text-g0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-g0">Distinctio possimus enim assumenda sint at cupiditate, iure,</p>
                <p className="text-g0">facilis laboriosam neque et perferendis, sed blanditiis? Voluptatem</p>
            </div> */}
            <div className="flex flex-row items-end justify-between mt-[20vh]">
                <div className="flex flex-row gap-10">
                    <p className="max-w-[10vw]">
                        <a href="mailto:thddms355@naver.com" className="email">
                            <Contact name="EMAIL" />
                        </a>
                    </p>
                    <p cassName="max-w-[10vw]">
                        <Link to="https://github.com/lse-7660" target="blank" className="github">
                            <Contact name="GITHUB" />
                        </Link>
                    </p>
                </div>
                <p className="text-[1.5vw] font-bold font-kenoky text-g0">LEE SONG EUN</p>
            </div>
        </div>
    );
};

export default Footer;
