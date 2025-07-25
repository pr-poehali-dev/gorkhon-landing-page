import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#005BFF]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 bottom-0 z-50 w-20">
        <div className="bg-white/20 backdrop-blur-xl border border-white/30 h-full px-4 py-8 shadow-xl rounded-3xl m-4 mr-0">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center mb-12">
              <img 
                src="https://cdn.poehali.dev/files/7635eb8c-18ab-46a9-8b2e-849843df2e55.png" 
                alt="Горхон"
                className="h-10 w-auto"
              />
            </div>
            
            <div className="flex flex-col space-y-4 flex-1">
              {[
                { id: 'home', icon: 'Home' },
                { id: 'about', icon: 'Users' },
                { id: 'projects', icon: 'FolderOpen' },
                { id: 'contact', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                    activeSection === item.id
                      ? 'bg-[#F1117E] text-white shadow-lg'
                      : 'text-white hover:text-[#F1117E] hover:bg-white/20'
                  }`}
                >
                  <Icon name={item.icon} size={24} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ml-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/d05bf2a2-dfec-4e04-8e52-cc9d9843564b.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Glass Panel */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              ГОРХОН
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Медиакоманда поселка Горхон
            </p>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              Мы создаем качественный контент, рассказываем истории нашего поселка 
              и помогаем местному сообществу развиваться через медиатехнологии
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-[#005BFF] hover:bg-white/90 px-8 py-3 text-lg rounded-full font-semibold"
              >
                Наши проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-[#F1117E] text-[#F1117E] hover:bg-[#F1117E]/10 px-8 py-3 text-lg rounded-full"
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white ml-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-900">О нашей команде</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы - команда энтузиастов, объединенных любовью к медиатворчеству 
                и желанием показать красоту и уникальность поселка Горхон
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/9ffca709-cd64-4029-b370-05807025302b.jpg"
                  alt="Наша студия"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F1117E]/10 p-3 rounded-lg">
                    <Icon name="Video" className="text-[#F1117E]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Видеопроизводство</h3>
                    <p className="text-gray-600">Создаем документальные фильмы, репортажи и промо-ролики о жизни поселка</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F1117E]/10 p-3 rounded-lg">
                    <Icon name="Camera" className="text-[#F1117E]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Фотография</h3>
                    <p className="text-gray-600">Фиксируем важные события и создаем фотоархив истории Горхона</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F1117E]/10 p-3 rounded-lg">
                    <Icon name="Mic" className="text-[#F1117E]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Подкасты</h3>
                    <p className="text-gray-600">Записываем интервью с жителями и рассказываем их истории</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white ml-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Наши проекты</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Каждый проект - это история, которая заслуживает быть рассказанной
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 bg-[#F1117E]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Film" size={48} className="text-[#F1117E]" />
                  </div>
                  <CardTitle className="text-xl">Документальный фильм "Горхон: История поселка"</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Полнометражный документальный фильм о истории основания и развития поселка Горхон
                  </CardDescription>
                  <Button className="mt-4 w-full bg-[#F1117E] hover:bg-[#F1117E]/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 bg-[#F1117E]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Headphones" size={48} className="text-[#F1117E]" />
                  </div>
                  <CardTitle className="text-xl">Подкаст "Голоса Горхона"</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Еженедельный подкаст с интервью жителей поселка о их жизни, традициях и планах
                  </CardDescription>
                  <Button className="mt-4 w-full bg-[#F1117E] hover:bg-[#F1117E]/90">
                    Слушать
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="w-full h-48 bg-[#F1117E]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Image" size={48} className="text-[#F1117E]" />
                  </div>
                  <CardTitle className="text-xl">Фотопроект "Четыре сезона"</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Фотографическая летопись Горхона через все времена года - природа и люди
                  </CardDescription>
                  <Button className="mt-4 w-full bg-[#F1117E] hover:bg-[#F1117E]/90">
                    Смотреть
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 ml-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 mb-12">
              Есть идея для проекта или хотите стать частью нашей команды? Мы всегда рады новым знакомствам!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-[#F1117E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-[#F1117E]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">media@gorhon.ru</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F1117E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-[#F1117E]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#F1117E]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-[#F1117E]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">п. Горхон, Республика Бурятия</p>
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Присоединяйтесь к нам</h3>
              <p className="text-gray-600 mb-6">
                Мы ищем талантливых людей для расширения нашей команды. 
                Если вы увлекаются видеосъемкой, фотографией, монтажом или журналистикой - напишите нам!
              </p>
              <Button className="bg-[#F1117E] hover:bg-[#F1117E]/90 text-white px-8 py-3 text-lg rounded-full">
                Написать нам
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 ml-64">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/7635eb8c-18ab-46a9-8b2e-849843df2e55.png" 
                alt="Горхон"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-semibold">Медиакоманда Горхон</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Медиакоманда Горхон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;