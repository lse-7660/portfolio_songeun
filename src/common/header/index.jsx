import { motion } from 'framer-motion';

const navMenu = [
    { id: 1, name: 'INTRO', scrollTo: 'intro' },
    { id: 2, name: 'WHO I AM', scrollTo: 'who-i-am' },
    { id: 3, name: 'SKILLS & TOOLS', scrollTo: 'skills' },
    { id: 4, name: 'PROJECTS', scrollTo: 'projects' },
    {
        id: 5,
        name: 'DESIGN GALLERY',
        scrollTo: 'design-gallery',
    },
];

const Header = ({ scrollToSection, animationEndTime }) => {
    return (
        <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            transition={{
                duration: 0.8,
                delay: animationEndTime + 1.2,
                ease: 'easeInOut',
            }}
            className="inner-header flex flex-row justify-end items-center gap-10 h-[60px] z-50 bg-black bg-opacity-50 mix-blend-exclusion backdrop-blur-xl"
        >
            {navMenu.map((menu, index) => (
                <div
                    key={index}
                    onClick={() => scrollToSection(menu.scrollTo)}
                    className="cursor-pointer text-g20 mix-blend-difference h-6 overflow-hidden"
                >
                    <motion.div whileHover={{ y: -21 }} transition={{ duration: 0.3 }} className="flex flex-col">
                        <span className="text-detail-m">{menu.name}</span>
                        <span className="text-detail-m font-bold">{menu.name}</span>
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
};

export default Header;
