import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// Translations
const translations = {
  es: {
    title: 'CASUS CONSILIUM | Madrid',
    heroTitle: 'Servicios Legales y Empresariales en Madrid',
    heroSubtitle: 'Su socio de confianza para servicios legales, contabilidad, inmobiliaria y más',
    aboutTitle: 'Sobre Nosotros',
    aboutText: 'Un equipo de especialistas altamente cualificados con amplia experiencia en su campo le proporcionará servicios del más alto nivel.',
    priceFrom: 'Desde 1.000€',
    priceDesc: 'por acompañamiento de su caso',
    successRate: '99%',
    successDesc: 'tasa de éxito',
    experience: '15+',
    experienceDesc: 'años de experiencia',
    servicesTitle: 'Nuestros Servicios',
    legal: 'Servicios Legales',
    legalDesc: 'Asesoramiento legal completo para empresas y particulares. Golden Visa, residencia, contratos.',
    accounting: 'Contabilidad',
    accountingDesc: 'Contabilidad empresarial, impuestos, auditoría y planificación fiscal.',
    financial: 'Consultoría Financiera',
    financialDesc: 'Planificación financiera, inversiones, estructuración de activos.',
    lawyers: 'Abogados',
    lawyersDesc: 'Representación legal, litigios, derecho civil y mercantil.',
    realEstate: 'Agencia Inmobiliaria',
    realEstateDesc: 'Compra, venta y alquiler de inmuebles en Madrid y toda España.',
    architects: 'Arquitectos y Diseñadores',
    architectsDesc: 'Proyectos arquitectónicos, diseño de interiores, reformas.',
    casesTitle: 'Casos de Éxito',
    case1: 'Ayudamos a obtener Golden Visa',
    case2: 'Acompañamiento en compra de inmueble por 500k€',
    case3: 'Resolución de conflicto empresarial',
    reviewsTitle: 'Testimonios',
    contactTitle: 'Contacto',
    name: 'Nombre',
    phone: 'Teléfono',
    email: 'Email',
    message: 'Describa su consulta',
    service: 'Servicio',
    language: 'Idioma de comunicación',
    contactMethod: 'Método de contacto preferido',
    submit: 'Enviar',
    callMe: 'Llámeme',
    address: 'Madrid, España',
    footerText: '© 2024 CASUS CONSILIUM Madrid. Todos los derechos reservados.',
    disclaimer: 'El ejecutor se reserva el derecho de recurrir a terceros para la ejecución, no se requiere la aprobación del cliente.',
    privacy: 'Política de Privacidad',
    thankYou: 'Gracias por su solicitud. Nos pondremos en contacto con usted en las próximas 24 horas.',
    menu: 'Menú',
    advantages: 'Nuestras Ventajas',
    adv1: 'Años de experiencia en España',
    adv2: 'Trabajo con clientes internacionales',
    adv3: 'Enfoque integral',
    adv4: 'Garantía de confidencialidad',
    selectService: 'Seleccione servicio',
    selectLanguage: 'Seleccione idioma',
    selectContact: 'Seleccione método'
  },
  en: {
    title: 'CASUS CONSILIUM | Madrid',
    heroTitle: 'Legal and Business Services in Madrid',
    heroSubtitle: 'Your trusted partner for legal, accounting, real estate services and more',
    aboutTitle: 'About Us',
    aboutText: 'A team of highly qualified specialists with extensive experience will provide you with services at the highest level.',
    priceFrom: 'From €1,000',
    priceDesc: 'per case support',
    successRate: '99%',
    successDesc: 'success rate',
    experience: '15+',
    experienceDesc: 'years of experience',
    servicesTitle: 'Our Services',
    legal: 'Legal Services',
    legalDesc: 'Comprehensive legal advice for businesses and individuals. Golden Visa, residency, contracts.',
    accounting: 'Accounting',
    accountingDesc: 'Business accounting, taxes, audit and tax planning.',
    financial: 'Financial Consulting',
    financialDesc: 'Financial planning, investments, asset structuring.',
    lawyers: 'Lawyers',
    lawyersDesc: 'Legal representation, litigation, civil and commercial law.',
    realEstate: 'Real Estate Agency',
    realEstateDesc: 'Buying, selling and renting properties in Madrid and all of Spain.',
    architects: 'Architects & Designers',
    architectsDesc: 'Architectural projects, interior design, renovations.',
    casesTitle: 'Success Stories',
    case1: 'Helped obtain Golden Visa',
    case2: 'Supported property purchase for €500k',
    case3: 'Business conflict resolution',
    reviewsTitle: 'Testimonials',
    contactTitle: 'Contact',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    message: 'Describe your inquiry',
    service: 'Service',
    language: 'Communication language',
    contactMethod: 'Preferred contact method',
    submit: 'Submit',
    callMe: 'Call Me',
    address: 'Madrid, Spain',
    footerText: '© 2024 CASUS CONSILIUM Madrid. All rights reserved.',
    disclaimer: 'The executor reserves the right to involve third parties for execution, client approval is not required.',
    privacy: 'Privacy Policy',
    thankYou: 'Thank you for your request. We will contact you within 24 hours.',
    menu: 'Menu',
    advantages: 'Our Advantages',
    adv1: 'Years of experience in Spain',
    adv2: 'Work with international clients',
    adv3: 'Comprehensive approach',
    adv4: 'Confidentiality guarantee',
    selectService: 'Select service',
    selectLanguage: 'Select language',
    selectContact: 'Select method'
  },
  ru: {
    title: 'CASUS CONSILIUM | Мадрид',
    heroTitle: 'Юридические и бизнес-услуги в Мадриде',
    heroSubtitle: 'Ваш надежный партнер в юридических, бухгалтерских, риелторских услугах и многом другом',
    aboutTitle: 'О нас',
    aboutText: 'Команда высококвалифицированных специалистов с обширным опытом окажет вам услуги на высочайшем уровне.',
    priceFrom: 'От 1 000€',
    priceDesc: 'за сопровождение вашего дела',
    successRate: '99%',
    successDesc: 'успешных дел',
    experience: '15+',
    experienceDesc: 'лет опыта',
    servicesTitle: 'Наши услуги',
    legal: 'Юридические услуги',
    legalDesc: 'Полный юридический консалтинг для бизнеса и частных лиц. Golden Visa, резиденция, контракты.',
    accounting: 'Бухгалтерские услуги',
    accountingDesc: 'Бухгалтерский учет, налоги, аудит и налоговое планирование.',
    financial: 'Финансовый консалтинг',
    financialDesc: 'Финансовое планирование, инвестиции, структурирование активов.',
    lawyers: 'Адвокаты',
    lawyersDesc: 'Представительство в суде, судебные споры, гражданское и коммерческое право.',
    realEstate: 'Агентство недвижимости',
    realEstateDesc: 'Покупка, продажа и аренда недвижимости в Мадриде и по всей Испании.',
    architects: 'Архитекторы и дизайнеры',
    architectsDesc: 'Архитектурные проекты, дизайн интерьера, реновация.',
    casesTitle: 'Успешные кейсы',
    case1: 'Помогли получить Golden Visa',
    case2: 'Сопровождение покупки недвижимости на 500k€',
    case3: 'Разрешение бизнес-конфликта',
    reviewsTitle: 'Отзывы',
    contactTitle: 'Контакты',
    name: 'Имя',
    phone: 'Телефон',
    email: 'Email',
    message: 'Опишите ваш вопрос',
    service: 'Услуга',
    language: 'Язык общения',
    contactMethod: 'Предпочтительный способ связи',
    submit: 'Отправить',
    callMe: 'Перезвоните мне',
    address: 'Мадрид, Испания',
    footerText: '© 2024 CASUS CONSILIUM Madrid. Все права защищены.',
    disclaimer: 'Исполнитель оставляет за собой право обратиться к третьим лицам, согласование заказчиком не требуется.',
    privacy: 'Политика конфиденциальности',
    thankYou: 'Спасибо за вашу заявку. Мы свяжемся с вами в течение 24 часов.',
    menu: 'Меню',
    advantages: 'Наши преимущества',
    adv1: 'Многолетний опыт в Испании',
    adv2: 'Работа с международными клиентами',
    adv3: 'Комплексный подход',
    adv4: 'Гарантия конфиденциальности',
    selectService: 'Выберите услугу',
    selectLanguage: 'Выберите язык',
    selectContact: 'Выберите способ'
  }
}

// API endpoint to get translations
app.get('/api/translations/:lang', (c) => {
  const lang = c.req.param('lang') as keyof typeof translations
  if (translations[lang]) {
    return c.json(translations[lang])
  }
  return c.json(translations.es)
})

// API endpoint to handle form submissions
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Here we would typically send email or save to database
  console.log('Contact form submission:', body)
  return c.json({ success: true, message: 'Form submitted successfully' })
})

// Main page
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CASUS CONSILIUM | Madrid - Legal Services</title>
    <meta name="description" content="CASUS CONSILIUM - Professional legal, accounting, and business services in Madrid, Spain. Golden Visa, real estate, legal consulting.">
    <meta name="keywords" content="legal services Madrid, asesoría jurídica Madrid, abogado ruso Madrid, real estate agency Madrid, Golden Visa Spain">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#1e3a5f',
              secondary: '#4a6fa5',
              accent: '#7b9cc4',
              light: '#e8eef5',
              dark: '#0d1b2a'
            }
          }
        }
      }
    </script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }
      
      h1, h2, h3, .logo {
        font-family: 'Playfair Display', serif;
      }
      
      .hero-bg {
        background: linear-gradient(135deg, rgba(30, 58, 95, 0.95) 0%, rgba(13, 27, 42, 0.9) 100%),
                    url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80') center/cover;
        min-height: 100vh;
      }
      
      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(30, 58, 95, 0.2);
      }
      
      .stat-card {
        background: linear-gradient(135deg, #1e3a5f 0%, #4a6fa5 100%);
      }
      
      .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
      }
      
      .modal.active {
        display: flex;
      }
      
      .mobile-menu {
        transform: translateX(100%);
        transition: transform 0.3s ease;
      }
      
      .mobile-menu.active {
        transform: translateX(0);
      }
      
      .fade-in {
        animation: fadeIn 0.5s ease-in-out;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .call-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
    </style>
</head>
<body class="bg-light text-dark">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-3">
                <div class="flex-1">
                    <div class="logo text-xl md:text-2xl font-bold text-primary">CASUS CONSILIUM</div>
                    <div class="text-xs text-gray-500">Madrid</div>
                </div>
                
                <!-- Contact Info (Desktop) -->
                <div class="hidden md:flex items-center gap-6 text-sm">
                    <a href="https://maps.google.com/?q=Madrid,Spain" target="_blank" class="flex items-center gap-2 text-gray-600 hover:text-primary">
                        <i class="fas fa-map-marker-alt"></i>
                        <span data-i18n="address">Madrid, España</span>
                    </a>
                    <a href="tel:+34600000000" class="flex items-center gap-2 text-gray-600 hover:text-primary">
                        <i class="fas fa-phone"></i>
                        +34 600 000 000
                    </a>
                    <a href="mailto:info@casusconsilium.es" class="flex items-center gap-2 text-gray-600 hover:text-primary">
                        <i class="fas fa-envelope"></i>
                        info@casusconsilium.es
                    </a>
                    <a href="https://wa.me/34600000000" target="_blank" class="text-green-600 hover:text-green-700">
                        <i class="fab fa-whatsapp text-xl"></i>
                    </a>
                    <a href="https://t.me/casusconsilium" target="_blank" class="text-blue-500 hover:text-blue-600">
                        <i class="fab fa-telegram text-xl"></i>
                    </a>
                </div>
                
                <!-- Language Switcher -->
                <div class="flex items-center gap-2 mx-4">
                    <button onclick="setLanguage('es')" class="lang-btn px-2 py-1 rounded text-sm font-medium hover:bg-primary hover:text-white transition" data-lang="es">ES</button>
                    <button onclick="setLanguage('en')" class="lang-btn px-2 py-1 rounded text-sm font-medium hover:bg-primary hover:text-white transition" data-lang="en">EN</button>
                    <button onclick="setLanguage('ru')" class="lang-btn px-2 py-1 rounded text-sm font-medium hover:bg-primary hover:text-white transition" data-lang="ru">RU</button>
                </div>
                
                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="md:hidden text-primary text-2xl">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
    
    <!-- Mobile Menu -->
    <div id="mobileMenu" class="mobile-menu fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 overflow-y-auto">
        <div class="p-6">
            <div class="flex justify-between items-center mb-8">
                <span class="text-xl font-bold text-primary" data-i18n="menu">Menú</span>
                <button onclick="toggleMobileMenu()" class="text-2xl text-gray-500">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="space-y-4 mb-8">
                <a href="https://maps.google.com/?q=Madrid,Spain" target="_blank" class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-map-marker-alt text-primary"></i>
                    <span data-i18n="address">Madrid, España</span>
                </a>
                <a href="tel:+34600000000" class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-phone text-primary"></i>
                    +34 600 000 000
                </a>
                <a href="mailto:info@casusconsilium.es" class="flex items-center gap-3 text-gray-700">
                    <i class="fas fa-envelope text-primary"></i>
                    info@casusconsilium.es
                </a>
                <div class="flex gap-4 pt-2">
                    <a href="https://wa.me/34600000000" target="_blank" class="text-green-600 text-2xl">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://t.me/casusconsilium" target="_blank" class="text-blue-500 text-2xl">
                        <i class="fab fa-telegram"></i>
                    </a>
                </div>
            </div>
            
            <div class="border-t pt-6">
                <h3 class="text-lg font-semibold mb-4 text-primary" data-i18n="servicesTitle">Nuestros Servicios</h3>
                <div class="space-y-3">
                    <button onclick="openServiceModal('legal')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-balance-scale text-primary mr-2"></i>
                        <span data-i18n="legal">Servicios Legales</span>
                    </button>
                    <button onclick="openServiceModal('accounting')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-calculator text-primary mr-2"></i>
                        <span data-i18n="accounting">Contabilidad</span>
                    </button>
                    <button onclick="openServiceModal('financial')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-chart-line text-primary mr-2"></i>
                        <span data-i18n="financial">Consultoría Financiera</span>
                    </button>
                    <button onclick="openServiceModal('lawyers')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-gavel text-primary mr-2"></i>
                        <span data-i18n="lawyers">Abogados</span>
                    </button>
                    <button onclick="openServiceModal('realEstate')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-home text-primary mr-2"></i>
                        <span data-i18n="realEstate">Agencia Inmobiliaria</span>
                    </button>
                    <button onclick="openServiceModal('architects')" class="w-full text-left py-2 px-3 rounded hover:bg-light transition">
                        <i class="fas fa-drafting-compass text-primary mr-2"></i>
                        <span data-i18n="architects">Arquitectos y Diseñadores</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Hero Section -->
    <section class="hero-bg flex items-center justify-center text-white text-center px-4 py-20">
        <div class="max-w-4xl fade-in">
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" data-i18n="heroTitle">
                Servicios Legales y Empresariales en Madrid
            </h1>
            <p class="text-lg md:text-xl text-gray-200 mb-10" data-i18n="heroSubtitle">
                Su socio de confianza para servicios legales, contabilidad, inmobiliaria y más
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#services" class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    <span data-i18n="servicesTitle">Nuestros Servicios</span>
                </a>
                <a href="#contact" class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
                    <span data-i18n="contactTitle">Contacto</span>
                </a>
            </div>
        </div>
    </section>
    
    <!-- Stats Section -->
    <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="stat-card rounded-xl p-6 text-white text-center">
                    <div class="text-4xl font-bold mb-2" data-i18n="priceFrom">Desde 1.000€</div>
                    <div class="text-gray-200" data-i18n="priceDesc">por acompañamiento de su caso</div>
                </div>
                <div class="stat-card rounded-xl p-6 text-white text-center">
                    <div class="text-4xl font-bold mb-2" data-i18n="successRate">99%</div>
                    <div class="text-gray-200" data-i18n="successDesc">tasa de éxito</div>
                </div>
                <div class="stat-card rounded-xl p-6 text-white text-center">
                    <div class="text-4xl font-bold mb-2" data-i18n="experience">15+</div>
                    <div class="text-gray-200" data-i18n="experienceDesc">años de experiencia</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section class="py-16 bg-light" id="about">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8" data-i18n="aboutTitle">Sobre Nosotros</h2>
            <div class="max-w-3xl mx-auto text-center">
                <p class="text-lg text-gray-700 mb-8" data-i18n="aboutText">
                    Un equipo de especialistas altamente cualificados con amplia experiencia en su campo le proporcionará servicios del más alto nivel.
                </p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <i class="fas fa-award text-3xl text-primary mb-2"></i>
                        <p class="text-sm" data-i18n="adv1">Años de experiencia en España</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <i class="fas fa-globe text-3xl text-primary mb-2"></i>
                        <p class="text-sm" data-i18n="adv2">Trabajo con clientes internacionales</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <i class="fas fa-handshake text-3xl text-primary mb-2"></i>
                        <p class="text-sm" data-i18n="adv3">Enfoque integral</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <i class="fas fa-lock text-3xl text-primary mb-2"></i>
                        <p class="text-sm" data-i18n="adv4">Garantía de confidencialidad</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Team Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Nuestro Equipo</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="text-center">
                    <div class="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl mb-4">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <p class="font-semibold text-primary">Abogado Senior</p>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl mb-4">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <p class="font-semibold text-primary">Consultor Financiero</p>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl mb-4">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <p class="font-semibold text-primary">Contable</p>
                </div>
                <div class="text-center">
                    <div class="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl mb-4">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <p class="font-semibold text-primary">Agente Inmobiliario</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Services Section -->
    <section class="py-16 bg-light" id="services">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12" data-i18n="servicesTitle">Nuestros Servicios</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Legal Services -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('legal')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-balance-scale text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="legal">Servicios Legales</h3>
                    <p class="text-gray-600" data-i18n="legalDesc">Asesoramiento legal completo para empresas y particulares. Golden Visa, residencia, contratos.</p>
                </div>
                
                <!-- Accounting -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('accounting')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-calculator text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="accounting">Contabilidad</h3>
                    <p class="text-gray-600" data-i18n="accountingDesc">Contabilidad empresarial, impuestos, auditoría y planificación fiscal.</p>
                </div>
                
                <!-- Financial Consulting -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('financial')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-chart-line text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="financial">Consultoría Financiera</h3>
                    <p class="text-gray-600" data-i18n="financialDesc">Planificación financiera, inversiones, estructuración de activos.</p>
                </div>
                
                <!-- Lawyers -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('lawyers')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-gavel text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="lawyers">Abogados</h3>
                    <p class="text-gray-600" data-i18n="lawyersDesc">Representación legal, litigios, derecho civil y mercantil.</p>
                </div>
                
                <!-- Real Estate -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('realEstate')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-home text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="realEstate">Agencia Inmobiliaria</h3>
                    <p class="text-gray-600" data-i18n="realEstateDesc">Compra, venta y alquiler de inmuebles en Madrid y toda España.</p>
                </div>
                
                <!-- Architects -->
                <div class="service-card bg-white rounded-xl p-6 shadow-lg transition cursor-pointer" onclick="openServiceModal('architects')">
                    <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <i class="fas fa-drafting-compass text-2xl text-primary"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-primary mb-2" data-i18n="architects">Arquitectos y Diseñadores</h3>
                    <p class="text-gray-600" data-i18n="architectsDesc">Proyectos arquitectónicos, diseño de interiores, reformas.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Cases Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12" data-i18n="casesTitle">Casos de Éxito</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-light rounded-xl p-6">
                    <div class="text-primary text-4xl mb-4"><i class="fas fa-passport"></i></div>
                    <p class="text-lg font-semibold" data-i18n="case1">Ayudamos a obtener Golden Visa</p>
                </div>
                <div class="bg-light rounded-xl p-6">
                    <div class="text-primary text-4xl mb-4"><i class="fas fa-building"></i></div>
                    <p class="text-lg font-semibold" data-i18n="case2">Acompañamiento en compra de inmueble por 500k€</p>
                </div>
                <div class="bg-light rounded-xl p-6">
                    <div class="text-primary text-4xl mb-4"><i class="fas fa-handshake"></i></div>
                    <p class="text-lg font-semibold" data-i18n="case3">Resolución de conflicto empresarial</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Reviews Section -->
    <section class="py-16 bg-light">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12" data-i18n="reviewsTitle">Testimonios</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl p-6 shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">JM</div>
                        <div>
                            <p class="font-semibold">Juan M.</p>
                            <div class="text-yellow-500">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-gray-600">"Excelente servicio profesional. Me ayudaron con todo el proceso de Golden Visa."</p>
                </div>
                <div class="bg-white rounded-xl p-6 shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">MK</div>
                        <div>
                            <p class="font-semibold">Maria K.</p>
                            <div class="text-yellow-500">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-gray-600">"Очень профессиональная команда. Помогли с покупкой недвижимости в Мадриде."</p>
                </div>
                <div class="bg-white rounded-xl p-6 shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">PS</div>
                        <div>
                            <p class="font-semibold">Peter S.</p>
                            <div class="text-yellow-500">★★★★★</div>
                        </div>
                    </div>
                    <p class="text-gray-600">"Great experience! They handled all legal matters efficiently and professionally."</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-16 bg-primary text-white" id="contact">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-i18n="contactTitle">Contacto</h2>
            <div class="max-w-2xl mx-auto">
                <form id="contactForm" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Nombre" data-i18n-placeholder="name" required
                            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white">
                        <input type="tel" name="phone" placeholder="Teléfono" data-i18n-placeholder="phone" required
                            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white">
                    </div>
                    <input type="email" name="email" placeholder="Email" data-i18n-placeholder="email" required
                        class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white">
                    <select name="service" required
                        class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                        <option value="" data-i18n="selectService">Seleccione servicio</option>
                        <option value="legal" data-i18n="legal">Servicios Legales</option>
                        <option value="accounting" data-i18n="accounting">Contabilidad</option>
                        <option value="financial" data-i18n="financial">Consultoría Financiera</option>
                        <option value="lawyers" data-i18n="lawyers">Abogados</option>
                        <option value="realEstate" data-i18n="realEstate">Agencia Inmobiliaria</option>
                        <option value="architects" data-i18n="architects">Arquitectos y Diseñadores</option>
                    </select>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="language" required
                            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                            <option value="" data-i18n="selectLanguage">Seleccione idioma</option>
                            <option value="es">Español</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                        <select name="contactMethod" required
                            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white">
                            <option value="" data-i18n="selectContact">Seleccione método</option>
                            <option value="phone">📞 Phone</option>
                            <option value="email">✉️ Email</option>
                            <option value="whatsapp">💬 WhatsApp</option>
                            <option value="telegram">✈️ Telegram</option>
                        </select>
                    </div>
                    <textarea name="message" rows="4" placeholder="Describa su consulta" data-i18n-placeholder="message" required
                        class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"></textarea>
                    <button type="submit"
                        class="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        <span data-i18n="submit">Enviar</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
    
    <!-- Map Section -->
    <section class="h-64 md:h-96">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440883955!2d-3.8196207!3d40.4378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1703956800000!5m2!1sen!2sus"
            width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
    </section>
    
    <!-- Footer -->
    <footer class="bg-dark text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div class="logo text-2xl font-bold mb-4">CASUS CONSILIUM</div>
                    <p class="text-gray-400" data-i18n="address">Madrid, España</p>
                    <p class="text-gray-400">+34 600 000 000</p>
                    <p class="text-gray-400">info@casusconsilium.es</p>
                    <div class="flex gap-4 mt-4">
                        <a href="https://wa.me/34600000000" target="_blank" class="text-green-500 text-2xl hover:text-green-400">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://t.me/casusconsilium" target="_blank" class="text-blue-400 text-2xl hover:text-blue-300">
                            <i class="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold mb-4" data-i18n="servicesTitle">Nuestros Servicios</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" onclick="openServiceModal('legal')" data-i18n="legal">Servicios Legales</a></li>
                        <li><a href="#" onclick="openServiceModal('accounting')" data-i18n="accounting">Contabilidad</a></li>
                        <li><a href="#" onclick="openServiceModal('financial')" data-i18n="financial">Consultoría Financiera</a></li>
                        <li><a href="#" onclick="openServiceModal('lawyers')" data-i18n="lawyers">Abogados</a></li>
                        <li><a href="#" onclick="openServiceModal('realEstate')" data-i18n="realEstate">Agencia Inmobiliaria</a></li>
                    </ul>
                </div>
                <div class="text-center">
                    <h3 class="font-semibold mb-4">QR Code</h3>
                    <div class="bg-white p-4 rounded-lg inline-block">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://casusconsilium.es&bgcolor=ffffff&color=1e3a5f" alt="QR Code" class="mx-auto">
                    </div>
                    <p class="text-gray-400 text-sm mt-2">Escanea para visitar el sitio</p>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p data-i18n="footerText">© 2024 CASUS CONSILIUM Madrid. Todos los derechos reservados.</p>
                <p class="text-xs mt-2" data-i18n="disclaimer">El ejecutor se reserva el derecho de recurrir a terceros para la ejecución, no se requiere la aprobación del cliente.</p>
                <a href="#" class="text-sm hover:text-white mt-2 inline-block" data-i18n="privacy">Política de Privacidad</a>
            </div>
        </div>
    </footer>
    
    <!-- Call Me Button (Mobile) -->
    <a href="tel:+34600000000" class="call-button md:hidden bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <i class="fas fa-phone text-xl"></i>
    </a>
    
    <!-- Service Modal -->
    <div id="serviceModal" class="modal">
        <div class="bg-white rounded-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 id="modalTitle" class="text-2xl font-bold text-primary">Servicio</h3>
                    <button onclick="closeServiceModal()" class="text-gray-500 hover:text-gray-700 text-2xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div id="modalContent" class="mb-6 text-gray-600"></div>
                <form id="serviceForm" class="space-y-4">
                    <input type="hidden" name="selectedService" id="selectedService">
                    <input type="text" name="name" placeholder="Nombre" data-i18n-placeholder="name" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary">
                    <input type="tel" name="phone" placeholder="Teléfono" data-i18n-placeholder="phone" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary">
                    <input type="email" name="email" placeholder="Email" data-i18n-placeholder="email" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary">
                    <textarea name="message" rows="3" placeholder="Describa su consulta" data-i18n-placeholder="message" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"></textarea>
                    <button type="submit"
                        class="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition">
                        <span data-i18n="submit">Enviar</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Thank You Modal -->
    <div id="thankYouModal" class="modal">
        <div class="bg-white rounded-2xl max-w-md w-full mx-4 p-8 text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-check text-4xl text-green-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-primary mb-4">¡Gracias!</h3>
            <p class="text-gray-600 mb-6" data-i18n="thankYou">Gracias por su solicitud. Nos pondremos en contacto con usted en las próximas 24 horas.</p>
            <button onclick="closeThankYouModal()" class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition">
                OK
            </button>
        </div>
    </div>
    
    <script>
        let currentLang = 'es';
        let translations = {};
        
        // Load translations
        async function loadTranslations(lang) {
            try {
                const response = await fetch('/api/translations/' + lang);
                translations = await response.json();
                applyTranslations();
            } catch (error) {
                console.error('Error loading translations:', error);
            }
        }
        
        // Apply translations to page
        function applyTranslations() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[key]) {
                    el.textContent = translations[key];
                }
            });
            
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[key]) {
                    el.placeholder = translations[key];
                }
            });
            
            // Update active language button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                if (btn.getAttribute('data-lang') === currentLang) {
                    btn.classList.add('bg-primary', 'text-white');
                }
            });
        }
        
        // Set language
        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('preferredLang', lang);
            loadTranslations(lang);
        }
        
        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
        }
        
        // Service descriptions
        const serviceDescriptions = {
            legal: {
                icon: 'fa-balance-scale',
                examples: ['Golden Visa', 'Residencia', 'Contratos', 'Derecho inmobiliario']
            },
            accounting: {
                icon: 'fa-calculator',
                examples: ['Impuestos', 'Auditoría', 'IVA', 'Planificación fiscal']
            },
            financial: {
                icon: 'fa-chart-line',
                examples: ['Inversiones', 'Planificación', 'Estructuración de activos']
            },
            lawyers: {
                icon: 'fa-gavel',
                examples: ['Litigios', 'Derecho civil', 'Derecho mercantil']
            },
            realEstate: {
                icon: 'fa-home',
                examples: ['Compra', 'Venta', 'Alquiler', 'Inversión inmobiliaria']
            },
            architects: {
                icon: 'fa-drafting-compass',
                examples: ['Proyectos', 'Diseño interior', 'Reformas', 'Licencias']
            }
        };
        
        // Open service modal
        function openServiceModal(service) {
            const modal = document.getElementById('serviceModal');
            const title = document.getElementById('modalTitle');
            const content = document.getElementById('modalContent');
            const selectedService = document.getElementById('selectedService');
            
            const serviceData = serviceDescriptions[service];
            title.innerHTML = '<i class="fas ' + serviceData.icon + ' mr-2"></i>' + (translations[service] || service);
            content.innerHTML = '<p class="mb-4">' + (translations[service + 'Desc'] || '') + '</p>' +
                '<ul class="list-disc list-inside text-sm">' +
                serviceData.examples.map(ex => '<li>' + ex + '</li>').join('') +
                '</ul>';
            selectedService.value = service;
            
            modal.classList.add('active');
            toggleMobileMenu();
        }
        
        // Close service modal
        function closeServiceModal() {
            document.getElementById('serviceModal').classList.remove('active');
        }
        
        // Close thank you modal
        function closeThankYouModal() {
            document.getElementById('thankYouModal').classList.remove('active');
        }
        
        // Handle form submissions
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                this.reset();
                document.getElementById('thankYouModal').classList.add('active');
            } catch (error) {
                console.error('Error:', error);
            }
        });
        
        document.getElementById('serviceForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            
            try {
                await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                this.reset();
                closeServiceModal();
                document.getElementById('thankYouModal').classList.add('active');
            } catch (error) {
                console.error('Error:', error);
            }
        });
        
        // Close modals on outside click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            const savedLang = localStorage.getItem('preferredLang') || 'es';
            setLanguage(savedLang);
        });
    </script>
</body>
</html>
  `)
})

export default app
