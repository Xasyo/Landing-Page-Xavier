export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm">
            <div className="py-5">
                <div className="container">
                    <nav className="hidden md:flex gap-6 text-black/60 items-center justify-center">
                        <a href="#aboutme">Sobre mí</a>
                        <a href="#experience">Experiencia</a>
                        <a href="#education">Formación</a>
                        <a href="#languages">Idiomas</a>
                        <a href="#projects">Proyectos</a>
                        <a href="#hobbies">Aficiones</a>
                        <a href="#contact">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};