const navMenu = [
    { id: 1, name: 'Intro', scrollTo: 'intro' },
    { id: 2, name: 'Who I Am', scrollTo: 'who-i-am' },
    { id: 3, name: 'Skills&Tools', scrollTo: 'skills' },
    { id: 4, name: 'Projects', scrollTo: 'projects' },
    {
        id: 5,
        name: 'Design Gallery',
        scrollTo: 'design-gallery',
    },
];

const Header = ({ scrollToSection }) => {
    return (
        <div className="inner-header flex flex-row justify-between items-center h-[70px] z-10 backdrop-blur-xl ">
            {navMenu.map((menu) => (
                <p
                    onClick={() =>
                        scrollToSection(menu.scrollTo)
                    }
                    className="cursor-pointer"
                >
                    {menu.name}
                </p>
            ))}
        </div>
    );
};

export default Header;
