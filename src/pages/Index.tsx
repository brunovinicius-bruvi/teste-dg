import { Instagram, Facebook } from "lucide-react";
import backgroundImg from "@/assets/background.png";
import logoImg from "@/assets/logo.png";

const Index = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Agendar no Booksy",
      url: "https://bit.ly/AgendamentoDouglasBarber",
      icon: "📅"
    },
    {
      title: "WhatsApp",
      url: "https://wa.link/pd58h1",
      icon: "💬"
    },
    {
      title: "Education (cursos)",
      url: "#",
      icon: "🎓"
    }
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 -z-10" />

      <main className="w-full max-w-md mx-auto flex flex-col items-center text-center z-10">
        {/* Header */}
        <header className="mb-6">
          <img 
            src={logoImg} 
            alt="Degê Barberaria" 
            className="w-40 h-40 mx-auto mb-3 object-contain"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">
            Degê Barberaria
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-xs mx-auto">
            A excelência em cada corte, a experiência em cada detalhe. Somos mais que uma barbearia — um ponto de encontro entre estilo, tradição e personalidade.
          </p>
        </header>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mb-5">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect hover-gold rounded-[var(--radius)] py-3.5 px-4 font-semibold text-foreground transition-all duration-300"
            >
              <span className="mr-2">{link.icon}</span>
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3.5 mb-5">
          <a
            href="https://www.instagram.com/degebarbearia.mk/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/dgbarbearia.mk"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://bit.ly/AgendamentoDouglasBarber"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:scale-110"
            aria-label="Booksy"
          >
            <span className="text-lg">📅</span>
          </a>
          <a
            href="https://wa.link/pd58h1"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gold hover:scale-110"
            aria-label="WhatsApp"
          >
            <span className="text-lg">💬</span>
          </a>
        </div>

        {/* Google Maps */}
        <iframe
          src="https://www.google.com/maps?q=R.%20Ant%C3%B4nio%20Zechi%2C%2045%20-%20Centro%2C%20Mairinque%20-%20SP%2C%2018120-000&output=embed"
          className="w-full h-52 rounded-[var(--radius)] shadow-2xl mb-6"
          allowFullScreen
          loading="lazy"
          title="Localização Degê Barberaria"
        />

        {/* Footer */}
        <footer className="text-xs text-muted-foreground">
          © {currentYear} Degê Barberaria —{" "}
          <a
            href="https://www.instagram.com/degebarbearia.mk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            @degebarbearia.mk
          </a>
        </footer>
      </main>
    </div>
  );
};

export default Index;
