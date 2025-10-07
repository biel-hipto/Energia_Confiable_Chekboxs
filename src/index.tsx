import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for frontend-backend communication
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// API route for form submission
app.post('/api/solicitar-tarifa', async (c) => {
  const formData = await c.req.json()
  
  // Here you would typically save to database or send email
  console.log('Nueva solicitud de tarifa:', formData)
  
  return c.json({
    success: true,
    message: 'Solicitud recibida correctamente. Nos pondremos en contacto con usted en breve.'
  })
})

// Main landing page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ENERGÍA CONFIABLE - Tarifas para Empresas</title>
        <meta name="description" content="Obtenga las mejores tarifas de energía para su empresa. Soluciones energéticas confiables y competitivas para empresas de todos los tamaños.">
        
        <!-- Favicons -->
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg">
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png">
        <meta name="theme-color" content="#ffffff">
        <meta name="msapplication-TileColor" content="#da532c">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100;200;300;400;500;600;700;800&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Custom CSS -->
        <link href="/static/style.css" rel="stylesheet">
        
        <!-- Analytics & Tracking -->
        <script>
            // Initialize dataLayer
            window.dataLayer = window.dataLayer || [];
            
            // Generate unique ID
            function create_UUID() {
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = (dt + Math.random()*16)%16 | 0;
                    dt = Math.floor(dt/16);
                    return (c=='x' ? r :(r&0x3|0x8)).toString(16);
                });
                return uuid;
            }
            
            var hipto_uid = create_UUID();
            
            // Push tracking data
            window.dataLayer.push({
                site: document.location.protocol + '//' + document.location.host + document.location.pathname,
                type_page: 'lp',
                channel: 'hiptoform',
                sector: 'energie',
                vertical: 'ESP_B2B_NRG',
                hipto_uid: hipto_uid
            });
            
            // Welcome message event
            window.dataLayer.push({
                event: 'welcome_message_view'
            });
        </script>
        
        <!-- Tailwind Custom Config -->
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            'energy-orange': '#da532c',
                            'energy-blue': '#2563eb',
                            'energy-green': '#16a34a'
                        },
                        fontFamily: {
                            'source': ['Source Sans 3', 'sans-serif'],
                            'sora': ['Sora', 'sans-serif'],
                            'nunito': ['Nunito', 'sans-serif'],
                            'roboto': ['Roboto', 'sans-serif']
                        }
                    }
                }
            }
        </script>
    </head>
    <body class="bg-gray-50 font-source">
        <!-- Header -->
        <header class="bg-white shadow-sm sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center">
                        <i class="fas fa-bolt text-energy-orange text-2xl mr-3"></i>
                        <h1 class="text-2xl font-bold font-sora text-gray-900">ENERGÍA CONFIABLE</h1>
                    </div>
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="#tarifas" class="text-gray-700 hover:text-energy-orange transition-colors">Tarifas</a>
                        <a href="#beneficios" class="text-gray-700 hover:text-energy-orange transition-colors">Beneficios</a>
                        <a href="#contacto" class="bg-energy-orange text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Contactar</a>
                    </div>
                    <button class="md:hidden text-gray-700" onclick="toggleMobileMenu()">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-2 space-y-2">
                    <a href="#tarifas" class="block py-2 text-gray-700">Tarifas</a>
                    <a href="#beneficios" class="block py-2 text-gray-700">Beneficios</a>
                    <a href="#contacto" class="block py-2 text-gray-700">Contactar</a>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-energy-orange to-orange-600 text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-5xl md:text-6xl font-bold font-sora mb-6 leading-tight">
                            Tarifas de Energía para <span class="text-yellow-300">Empresas</span>
                        </h2>
                        <p class="text-xl mb-8 font-nunito opacity-90">
                            Obtenga las mejores tarifas energéticas para su empresa. Soluciones confiables, competitivas y adaptadas a sus necesidades empresariales.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button onclick="scrollToForm()" class="bg-white text-energy-orange px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                <i class="fas fa-calculator mr-2"></i>
                                Solicitar Tarifa
                            </button>
                            <button onclick="document.getElementById('beneficios').scrollIntoView({behavior: 'smooth'})" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-energy-orange transition-colors">
                                <i class="fas fa-info-circle mr-2"></i>
                                Saber Más
                            </button>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div class="text-center">
                                <i class="fas fa-industry text-6xl mb-4 text-yellow-300"></i>
                                <h3 class="text-2xl font-bold mb-4 font-sora">+5,000 Empresas</h3>
                                <p class="text-lg opacity-90">Ya confían en nuestras soluciones energéticas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tarifas Section -->
        <section id="tarifas" class="py-20 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4 font-sora">Nuestras Tarifas Empresariales</h2>
                    <p class="text-xl text-gray-600 font-nunito">Planes flexibles adaptados al consumo de su empresa</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Plan Básico -->
                    <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div class="text-center">
                            <i class="fas fa-building text-4xl text-energy-blue mb-4"></i>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2 font-sora">Plan Básico</h3>
                            <p class="text-gray-600 mb-6">Ideal para pequeñas empresas</p>
                            <div class="text-4xl font-bold text-energy-orange mb-2">€0.12</div>
                            <p class="text-gray-500 mb-6">por kWh</p>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Consumo hasta 50 MWh/año</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Facturación mensual</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Soporte básico</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Portal online</li>
                        </ul>
                        <button onclick="selectPlan('basico')" class="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                            Seleccionar Plan
                        </button>
                    </div>
                    
                    <!-- Plan Profesional (Destacado) -->
                    <div class="bg-gradient-to-b from-energy-orange to-orange-600 text-white rounded-2xl p-8 transform scale-105 shadow-xl relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                            MÁS POPULAR
                        </div>
                        <div class="text-center">
                            <i class="fas fa-industry text-4xl text-yellow-300 mb-4"></i>
                            <h3 class="text-2xl font-bold mb-2 font-sora">Plan Profesional</h3>
                            <p class="text-white/90 mb-6">Ideal para medianas empresas</p>
                            <div class="text-4xl font-bold mb-2">€0.09</div>
                            <p class="text-white/70 mb-6">por kWh</p>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-yellow-300 mr-3"></i>Consumo hasta 500 MWh/año</li>
                            <li class="flex items-center"><i class="fas fa-check text-yellow-300 mr-3"></i>Facturación personalizada</li>
                            <li class="flex items-center"><i class="fas fa-check text-yellow-300 mr-3"></i>Soporte prioritario 24/7</li>
                            <li class="flex items-center"><i class="fas fa-check text-yellow-300 mr-3"></i>Gestor de cuenta dedicado</li>
                            <li class="flex items-center"><i class="fas fa-check text-yellow-300 mr-3"></i>Análisis de consumo</li>
                        </ul>
                        <button onclick="selectPlan('profesional')" class="w-full bg-white text-energy-orange py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                            Seleccionar Plan
                        </button>
                    </div>
                    
                    <!-- Plan Empresarial -->
                    <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                        <div class="text-center">
                            <i class="fas fa-city text-4xl text-energy-green mb-4"></i>
                            <h3 class="text-2xl font-bold text-gray-900 mb-2 font-sora">Plan Empresarial</h3>
                            <p class="text-gray-600 mb-6">Para grandes corporaciones</p>
                            <div class="text-4xl font-bold text-energy-orange mb-2">€0.07</div>
                            <p class="text-gray-500 mb-6">por kWh</p>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Consumo ilimitado</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Contratos a medida</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Soporte premium 24/7</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Equipo dedicado</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Consultoría energética</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Energías renovables</li>
                        </ul>
                        <button onclick="selectPlan('empresarial')" class="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                            Contactar Ventas
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Beneficios Section -->
        <section id="beneficios" class="py-20 bg-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4 font-sora">¿Por Qué Elegir Energía Confiable?</h2>
                    <p class="text-xl text-gray-600 font-nunito">Beneficios que marcan la diferencia para su empresa</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center">
                        <div class="bg-energy-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-euro-sign text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2 font-sora">Ahorro Garantizado</h3>
                        <p class="text-gray-600">Hasta 30% menos en su factura energética</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-energy-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-shield-alt text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2 font-sora">Suministro Confiable</h3>
                        <p class="text-gray-600">99.9% de disponibilidad garantizada</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-energy-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-leaf text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2 font-sora">Energía Verde</h3>
                        <p class="text-gray-600">100% energía renovable disponible</p>
                    </div>
                    
                    <div class="text-center">
                        <div class="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-headset text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2 font-sora">Soporte 24/7</h3>
                        <p class="text-gray-600">Atención al cliente especializada</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="contacto" class="py-20 bg-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4 font-sora">Solicite Su Tarifa Personalizada</h2>
                    <p class="text-xl text-gray-600 font-nunito">Complete el formulario y reciba una propuesta en menos de 24 horas</p>
                </div>
                
                <div class="bg-gray-50 rounded-2xl p-8">
                    <form id="tarifa-form" class="space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="empresa" class="block text-sm font-semibold text-gray-700 mb-2">Nombre de la Empresa *</label>
                                <input type="text" id="empresa" name="empresa" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                            </div>
                            <div>
                                <label for="sector" class="block text-sm font-semibold text-gray-700 mb-2">Sector de Actividad *</label>
                                <select id="sector" name="sector" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                                    <option value="">Seleccione su sector</option>
                                    <option value="manufactura">Manufactura</option>
                                    <option value="servicios">Servicios</option>
                                    <option value="retail">Retail/Comercio</option>
                                    <option value="tecnologia">Tecnología</option>
                                    <option value="construccion">Construcción</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="nombre" class="block text-sm font-semibold text-gray-700 mb-2">Nombre del Contacto *</label>
                                <input type="text" id="nombre" name="nombre" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                            </div>
                            <div>
                                <label for="cargo" class="block text-sm font-semibold text-gray-700 mb-2">Cargo</label>
                                <input type="text" id="cargo" name="cargo" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Email Corporativo *</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                            </div>
                            <div>
                                <label for="telefono" class="block text-sm font-semibold text-gray-700 mb-2">Teléfono *</label>
                                <input type="tel" id="telefono" name="telefono" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="consumo" class="block text-sm font-semibold text-gray-700 mb-2">Consumo Anual Estimado (MWh)</label>
                                <select id="consumo" name="consumo" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                                    <option value="">Seleccione rango</option>
                                    <option value="0-50">0 - 50 MWh</option>
                                    <option value="50-200">50 - 200 MWh</option>
                                    <option value="200-500">200 - 500 MWh</option>
                                    <option value="500-1000">500 - 1,000 MWh</option>
                                    <option value="1000+">Más de 1,000 MWh</option>
                                </select>
                            </div>
                            <div>
                                <label for="plan_interes" class="block text-sm font-semibold text-gray-700 mb-2">Plan de Interés</label>
                                <select id="plan_interes" name="plan_interes" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent">
                                    <option value="">Seleccione plan</option>
                                    <option value="basico">Plan Básico</option>
                                    <option value="profesional">Plan Profesional</option>
                                    <option value="empresarial">Plan Empresarial</option>
                                    <option value="personalizado">Solución Personalizada</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="comentarios" class="block text-sm font-semibold text-gray-700 mb-2">Comentarios Adicionales</label>
                            <textarea id="comentarios" name="comentarios" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-energy-orange focus:border-transparent" placeholder="Cuéntenos sobre sus necesidades energéticas específicas..."></textarea>
                        </div>
                        
                        <div class="flex items-start">
                            <input type="checkbox" id="acepta_terminos" name="acepta_terminos" required class="mt-1 mr-3">
                            <label for="acepta_terminos" class="text-sm text-gray-700">
                                Acepto los <a href="#" class="text-energy-orange hover:underline">términos y condiciones</a> y la <a href="#" class="text-energy-orange hover:underline">política de privacidad</a>. Consiento el tratamiento de mis datos para fines comerciales.
                            </label>
                        </div>
                        
                        <div class="text-center">
                            <button type="submit" class="bg-energy-orange text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors transform hover:scale-105">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Solicitar Tarifa Gratuita
                            </button>
                        </div>
                    </form>
                </div>
                
                <!-- Success/Error Messages -->
                <div id="form-message" class="hidden mt-6 p-4 rounded-lg text-center">
                    <p id="message-text"></p>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
            <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-bold mb-4 font-sora">¿Listo para Reducir Sus Costos Energéticos?</h2>
                <p class="text-xl mb-8 opacity-90 font-nunito">Más de 5,000 empresas ya han optimizado sus tarifas energéticas con nosotros</p>
                <button onclick="scrollToForm()" class="bg-energy-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors">
                    <i class="fas fa-rocket mr-2"></i>
                    Empezar Ahora
                </button>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <i class="fas fa-bolt text-energy-orange text-2xl mr-3"></i>
                            <h3 class="text-xl font-bold font-sora">ENERGÍA CONFIABLE</h3>
                        </div>
                        <p class="text-gray-400 mb-4">Soluciones energéticas confiables y competitivas para empresas de todos los tamaños.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4 font-sora">Servicios</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Tarifas Empresariales</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Energía Renovable</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Consultoría Energética</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Gestión de Contratos</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4 font-sora">Empresa</h4>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Casos de Éxito</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Prensa</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Carreras</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4 font-sora">Contacto</h4>
                        <div class="space-y-2 text-gray-400">
                            <p><i class="fas fa-phone mr-2"></i> +34 900 123 456</p>
                            <p><i class="fas fa-envelope mr-2"></i> info@energia-confiable.com</p>
                            <p><i class="fas fa-map-marker-alt mr-2"></i> Madrid, España</p>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400">&copy; 2024 Energía Confiable. Todos los derechos reservados. | <a href="#" class="hover:text-white">Términos</a> | <a href="#" class="hover:text-white">Privacidad</a></p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
