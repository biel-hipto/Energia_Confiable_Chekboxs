// ENERGÍA CONFIABLE - JavaScript principal que recreará la página original

// Variables globales
let formData = {};
let isFormSubmitting = false;

// Función principal que inicializa la aplicación
window.initEnergyApp = function() {
    console.log('🔋 Iniciando ENERGÍA CONFIABLE App');
    
    // Crear la estructura completa de la página
    createMainStructure();
    
    // Configurar eventos
    setupEventListeners();
    
    // Configurar tracking
    setupTracking();
    
    // Animate entrance
    setTimeout(() => {
        document.querySelector('#root').classList.add('animate-fade-in');
    }, 100);
};

// Crear la estructura principal de la página (recreando el contenido original)
function createMainStructure() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- Header Navigation -->
        <div class="navbar bg-white shadow-sm sticky top-0 z-50">
            <div class="navbar-start">
                <div class="dropdown lg:hidden">
                    <div tabindex="0" role="button" class="btn btn-ghost">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                        </svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        <li><a href="#tarifas">Tarifas</a></li>
                        <li><a href="#simulador">Simulador</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div class="flex items-center">
                    <img src="/static/logoEC.svg" alt="Energía Confiable" class="w-8 h-8 mr-3" />
                    <span class="text-xl font-bold font-sora text-gray-900">ENERGÍA CONFIABLE</span>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 font-source">
                    <li><a href="#tarifas" class="hover:text-primary-orange">Tarifas</a></li>
                    <li><a href="#simulador" class="hover:text-primary-orange">Simulador</a></li>
                    <li><a href="#contacto" class="hover:text-primary-orange">Contacto</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <button onclick="scrollToContact()" class="btn bg-primary-orange text-white hover:bg-orange-600 border-none font-source">
                    Solicitar Oferta
                </button>
            </div>
        </div>

        <!-- Hero Section -->
        <section class="hero min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
                <svg class="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#FF9633" stroke-width="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"/>
                </svg>
            </div>
            
            <div class="hero-content text-center relative z-10">
                <div class="max-w-4xl">
                    <!-- Main Headline -->
                    <h1 class="text-5xl md:text-6xl font-bold font-sora text-gray-800 mb-6 leading-tight">
                        Tarifas de <span class="text-primary-orange">Energía</span> para Empresas
                    </h1>
                    
                    <!-- Subtitle -->
                    <p class="text-xl md:text-2xl font-source text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Compare las mejores ofertas energéticas del mercado. 
                        Ahorre hasta un <strong class="text-primary-orange">30%</strong> en su factura eléctrica.
                    </p>
                    
                    <!-- CTA Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button onclick="scrollToSimulator()" class="btn btn-lg bg-primary-orange text-white hover:bg-orange-600 border-none px-8 font-source shadow-orange">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                            </svg>
                            Simular Ahorro
                        </button>
                        <button onclick="scrollToContact()" class="btn btn-lg btn-outline text-primary-orange border-primary-orange hover:bg-primary-orange hover:border-primary-orange px-8 font-source">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Solicitar Oferta
                        </button>
                    </div>
                    
                    <!-- Trust Indicators -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary-orange font-sora">5,000+</div>
                            <div class="text-sm text-gray-600 font-source">Empresas confían en nosotros</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary-orange font-sora">30%</div>
                            <div class="text-sm text-gray-600 font-source">Ahorro promedio</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary-orange font-sora">24h</div>
                            <div class="text-sm text-gray-600 font-source">Respuesta garantizada</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary-orange font-sora">100%</div>
                            <div class="text-sm text-gray-600 font-source">Energía verde disponible</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg class="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>

        <!-- Simulador de Ahorro Section -->
        <section id="simulador" class="py-20 bg-white">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4 font-sora">Simulador de Ahorro Energético</h2>
                    <p class="text-xl text-gray-600 font-source max-w-2xl mx-auto">
                        Descubra cuánto puede ahorrar su empresa con nuestras tarifas optimizadas
                    </p>
                </div>
                
                <div class="card bg-gradient-to-br from-orange-50 to-white shadow-orange-lg max-w-2xl mx-auto">
                    <div class="card-body p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6 font-sora text-center">
                            Calcule su Ahorro Potencial
                        </h3>
                        
                        <div class="form-control mb-6">
                            <label class="form-label font-source">Factura mensual actual (€)</label>
                            <input type="number" id="current-bill" class="form-input" placeholder="Ej: 1,200" onchange="calculateSavings()">
                        </div>
                        
                        <div class="form-control mb-6">
                            <label class="form-label font-source">Tipo de empresa</label>
                            <select id="company-type" class="form-input" onchange="calculateSavings()">
                                <option value="">Seleccione...</option>
                                <option value="office">Oficinas</option>
                                <option value="retail">Comercio</option>
                                <option value="manufacturing">Manufactura</option>
                                <option value="restaurant">Restauración</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>
                        
                        <div id="savings-result" class="hidden">
                            <div class="bg-primary-orange/10 border border-primary-orange/20 rounded-lg p-6 text-center">
                                <h4 class="text-2xl font-bold text-primary-orange font-sora mb-2">
                                    Ahorro Estimado
                                </h4>
                                <div id="savings-amount" class="text-4xl font-bold text-gray-800 font-sora mb-2"></div>
                                <div id="savings-percentage" class="text-lg text-gray-600 font-source mb-4"></div>
                                <p class="text-sm text-gray-500 font-source">
                                    * Cálculo estimado basado en tarifas promedio del mercado
                                </p>
                                <button onclick="scrollToContact()" class="btn bg-primary-orange text-white hover:bg-orange-600 border-none mt-4 font-source">
                                    Solicitar Oferta Personalizada
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tarifas Section -->
        <section id="tarifas" class="py-20 bg-gray-50">
            <div class="container mx-auto px-4 max-w-6xl">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4 font-sora">Nuestras Tarifas Empresariales</h2>
                    <p class="text-xl text-gray-600 font-source max-w-2xl mx-auto">
                        Planes diseñados específicamente para las necesidades energéticas de su empresa
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Plan Básico -->
                    <div class="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div class="card-body p-8 text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2 font-sora">Plan Básico</h3>
                            <p class="text-gray-600 mb-4 font-source">Perfecto para pequeñas empresas</p>
                            <div class="text-4xl font-bold text-primary-orange mb-2 font-sora">€0.12</div>
                            <p class="text-gray-500 mb-6 font-source">por kWh</p>
                            
                            <ul class="text-left space-y-2 mb-8 font-source">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Hasta 50 MWh/año
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Facturación mensual
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Soporte online
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Portal cliente
                                </li>
                            </ul>
                            
                            <button onclick="selectPlan('basico')" class="btn btn-outline text-primary-orange border-primary-orange hover:bg-primary-orange hover:border-primary-orange w-full font-source">
                                Seleccionar Plan
                            </button>
                        </div>
                    </div>
                    
                    <!-- Plan Profesional (Destacado) -->
                    <div class="card bg-primary-orange text-white shadow-xl transform scale-105 relative">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div class="bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-bold font-source">
                                MÁS POPULAR
                            </div>
                        </div>
                        <div class="card-body p-8 text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 mx-auto text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold mb-2 font-sora">Plan Profesional</h3>
                            <p class="text-white/90 mb-4 font-source">Para empresas en crecimiento</p>
                            <div class="text-4xl font-bold mb-2 font-sora">€0.09</div>
                            <p class="text-white/70 mb-6 font-source">por kWh</p>
                            
                            <ul class="text-left space-y-2 mb-8 font-source">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Hasta 500 MWh/año
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Facturación personalizada
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Soporte prioritario 24/7
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Gestor dedicado
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Análisis de consumo
                                </li>
                            </ul>
                            
                            <button onclick="selectPlan('profesional')" class="btn bg-white text-primary-orange hover:bg-gray-100 border-none w-full font-source font-semibold">
                                Seleccionar Plan
                            </button>
                        </div>
                    </div>
                    
                    <!-- Plan Enterprise -->
                    <div class="card bg-white shadow-lg hover:shadow-xl transition-shadow">
                        <div class="card-body p-8 text-center">
                            <div class="mb-4">
                                <svg class="w-12 h-12 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-800 mb-2 font-sora">Plan Enterprise</h3>
                            <p class="text-gray-600 mb-4 font-source">Para grandes corporaciones</p>
                            <div class="text-4xl font-bold text-primary-orange mb-2 font-sora">€0.07</div>
                            <p class="text-gray-500 mb-6 font-source">por kWh</p>
                            
                            <ul class="text-left space-y-2 mb-8 font-source">
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Consumo ilimitado
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Contratos personalizados
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-weight="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Soporte premium 24/7
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Equipo dedicado
                                </li>
                                <li class="flex items-center">
                                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Energía 100% renovable
                                </li>
                            </ul>
                            
                            <button onclick="selectPlan('enterprise')" class="btn btn-outline text-primary-orange border-primary-orange hover:bg-primary-orange hover:border-primary-orange w-full font-source">
                                Contactar Ventas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contacto" class="py-20 bg-white">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4 font-sora">Solicite su Oferta Personalizada</h2>
                    <p class="text-xl text-gray-600 font-source max-w-2xl mx-auto">
                        Complete el formulario y reciba una propuesta adaptada a las necesidades de su empresa
                    </p>
                </div>
                
                <div class="card bg-gradient-to-br from-gray-50 to-white shadow-xl">
                    <div class="card-body p-8">
                        <form id="contact-form" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="form-label">Nombre de la Empresa *</label>
                                    <input type="text" name="empresa" required class="form-input" placeholder="Mi Empresa S.L.">
                                </div>
                                <div class="form-control">
                                    <label class="form-label">Sector de Actividad *</label>
                                    <select name="sector" required class="form-input">
                                        <option value="">Seleccione...</option>
                                        <option value="manufactura">Manufactura</option>
                                        <option value="servicios">Servicios</option>
                                        <option value="comercio">Comercio</option>
                                        <option value="tecnologia">Tecnología</option>
                                        <option value="construccion">Construcción</option>
                                        <option value="hosteleria">Hostelería</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="form-label">Nombre del Contacto *</label>
                                    <input type="text" name="nombre" required class="form-input" placeholder="Juan Pérez">
                                </div>
                                <div class="form-control">
                                    <label class="form-label">Cargo</label>
                                    <input type="text" name="cargo" class="form-input" placeholder="Director General">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="form-label">Email Corporativo *</label>
                                    <input type="email" name="email" required class="form-input" placeholder="contacto@miempresa.com">
                                </div>
                                <div class="form-control">
                                    <label class="form-label">Teléfono *</label>
                                    <input type="tel" name="telefono" required class="form-input" placeholder="+34 600 000 000">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="form-control">
                                    <label class="form-label">Consumo Anual Estimado</label>
                                    <select name="consumo" class="form-input">
                                        <option value="">Seleccione...</option>
                                        <option value="0-50">0 - 50 MWh</option>
                                        <option value="50-200">50 - 200 MWh</option>
                                        <option value="200-500">200 - 500 MWh</option>
                                        <option value="500-1000">500 - 1,000 MWh</option>
                                        <option value="1000+">Más de 1,000 MWh</option>
                                    </select>
                                </div>
                                <div class="form-control">
                                    <label class="form-label">Plan de Interés</label>
                                    <select name="plan" id="plan-select" class="form-input">
                                        <option value="">Seleccione...</option>
                                        <option value="basico">Plan Básico</option>
                                        <option value="profesional">Plan Profesional</option>
                                        <option value="enterprise">Plan Enterprise</option>
                                        <option value="personalizado">Solución Personalizada</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="form-control">
                                <label class="form-label">Mensaje (Opcional)</label>
                                <textarea name="mensaje" rows="4" class="form-input" placeholder="Cuéntenos sobre las necesidades específicas de su empresa..."></textarea>
                            </div>
                            
                            <div class="flex items-start space-x-3">
                                <input type="checkbox" name="acepta_terminos" required class="checkbox-custom mt-1">
                                <label class="text-sm text-gray-600 font-source">
                                    Acepto los <a href="#" class="text-primary-orange hover:underline">términos y condiciones</a> 
                                    y la <a href="#" class="text-primary-orange hover:underline">política de privacidad</a>. 
                                    Consiento el tratamiento de mis datos personales para fines comerciales.
                                </label>
                            </div>
                            
                            <div class="text-center">
                                <button type="submit" class="btn btn-lg bg-primary-orange text-white hover:bg-orange-600 border-none px-12 font-source shadow-orange">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                    Solicitar Oferta Gratuita
                                </button>
                            </div>
                        </form>
                        
                        <!-- Success/Error Messages -->
                        <div id="form-message" class="hidden mt-6 p-4 rounded-lg text-center">
                            <p id="message-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer bg-gray-900 text-white p-10">
            <div class="container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center mb-4">
                            <img src="/static/logoEC.svg" alt="Energía Confiable" class="w-8 h-8 mr-3" />
                            <span class="text-xl font-bold font-sora">ENERGÍA CONFIABLE</span>
                        </div>
                        <p class="text-gray-400 font-source mb-4">
                            Líder en soluciones energéticas para empresas. 
                            Más de 10 años optimizando costos energéticos.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4 font-sora">Servicios</h3>
                        <ul class="space-y-2 font-source">
                            <li><a href="#" class="text-gray-400 hover:text-white">Tarifas Empresariales</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Energía Renovable</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Consultoría Energética</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Gestión de Contratos</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4 font-sora">Empresa</h3>
                        <ul class="space-y-2 font-source">
                            <li><a href="#" class="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Casos de Éxito</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Noticias</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white">Trabaja con Nosotros</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4 font-sora">Contacto</h3>
                        <div class="space-y-2 font-source">
                            <p class="text-gray-400 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                +34 900 123 456
                            </p>
                            <p class="text-gray-400 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                info@energia-confiable.com
                            </p>
                            <p class="text-gray-400 flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Madrid, España
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-8 pt-8 text-center font-source">
                    <p class="text-gray-400">
                        © 2024 Energía Confiable. Todos los derechos reservados. | 
                        <a href="#" class="hover:text-white">Términos</a> | 
                        <a href="#" class="hover:text-white">Privacidad</a> | 
                        <a href="#" class="hover:text-white">Cookies</a>
                    </p>
                </div>
            </div>
        </footer>
    `;
}

// Event Listeners
function setupEventListeners() {
    // Form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Real-time form validation
    const inputs = document.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearValidation);
    });
}

// Form validation
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous validation
    clearValidation(e);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Este campo es obligatorio');
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Por favor, introduce un email válido');
        return false;
    }
    
    showFieldSuccess(field);
    return true;
}

function clearValidation(e) {
    const field = e.target;
    field.classList.remove('form-error', 'form-success');
    
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function showFieldError(field, message) {
    field.classList.add('form-error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function showFieldSuccess(field) {
    field.classList.add('form-success');
}

function isValidEmail(email) {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
}

// Form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    if (isFormSubmitting) return;
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField({target: field})) {
            isValid = false;
        }
    });
    
    // Check terms acceptance
    const termsCheckbox = form.querySelector('input[name="acepta_terminos"]');
    if (!termsCheckbox.checked) {
        showNotification('Debe aceptar los términos y condiciones para continuar', 'error');
        isValid = false;
    }
    
    if (!isValid) {
        showNotification('Por favor, corrija los errores en el formulario', 'error');
        return;
    }
    
    // Show loading state
    isFormSubmitting = true;
    submitButton.classList.add('loading-button');
    submitButton.disabled = true;
    
    try {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Add tracking data
        data.timestamp = new Date().toISOString();
        data.source = 'landing-page';
        data.hipto_uid = window.hipto_uid || 'unknown';
        
        // Submit to API
        const response = await fetch('/api/solicitar-tarifa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showNotification(result.message, 'success');
            form.reset();
            
            // Track conversion
            trackFormSubmission(data);
            
            // Scroll to top of form
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            showNotification('Hubo un error al procesar su solicitud. Por favor, inténtelo de nuevo.', 'error');
        }
        
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Error de conexión. Por favor, verifique su conexión e inténtelo de nuevo.', 'error');
    } finally {
        isFormSubmitting = false;
        submitButton.classList.remove('loading-button');
        submitButton.disabled = false;
    }
}

// Utility functions
function scrollToContact() {
    document.getElementById('contacto').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSimulator() {
    document.getElementById('simulador').scrollIntoView({
        behavior: 'smooth'
    });
}

function selectPlan(planType) {
    const planSelect = document.getElementById('plan-select');
    if (planSelect) {
        planSelect.value = planType;
    }
    
    scrollToContact();
    
    // Track plan selection
    trackEvent('plan_selected', {
        plan_type: planType
    });
    
    showNotification(`Has seleccionado el plan ${planType}. Complete el formulario para recibir su oferta personalizada.`, 'success');
}

function calculateSavings() {
    const currentBill = parseFloat(document.getElementById('current-bill').value);
    const companyType = document.getElementById('company-type').value;
    
    if (!currentBill || !companyType) {
        document.getElementById('savings-result').classList.add('hidden');
        return;
    }
    
    // Calculate savings based on company type
    let savingsPercentage = 0;
    switch (companyType) {
        case 'office':
            savingsPercentage = 25;
            break;
        case 'retail':
            savingsPercentage = 30;
            break;
        case 'manufacturing':
            savingsPercentage = 35;
            break;
        case 'restaurant':
            savingsPercentage = 28;
            break;
        default:
            savingsPercentage = 25;
    }
    
    const savingsAmount = Math.round((currentBill * savingsPercentage) / 100);
    const yearlySavings = savingsAmount * 12;
    
    document.getElementById('savings-amount').textContent = `€${savingsAmount}/mes`;
    document.getElementById('savings-percentage').textContent = `${savingsPercentage}% de ahorro (€${yearlySavings.toLocaleString()}/año)`;
    document.getElementById('savings-result').classList.remove('hidden');
    
    // Track calculation
    trackEvent('savings_calculated', {
        current_bill: currentBill,
        company_type: companyType,
        savings_percentage: savingsPercentage,
        savings_amount: savingsAmount
    });
}

function showNotification(message, type = 'info') {
    const messageContainer = document.getElementById('form-message');
    const messageText = document.getElementById('message-text');
    
    if (!messageContainer || !messageText) return;
    
    messageText.textContent = message;
    
    messageContainer.className = `p-4 rounded-lg text-center mt-6 ${
        type === 'success' 
            ? 'bg-green-100 border border-green-300 text-green-800' 
            : 'bg-red-100 border border-red-300 text-red-800'
    }`;
    
    messageContainer.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageContainer.classList.add('hidden');
    }, 5000);
}

// Tracking functions
function setupTracking() {
    // Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
}

function trackEvent(eventName, params = {}) {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params,
            timestamp: new Date().toISOString()
        });
    }
    
    console.log('📊 Event tracked:', eventName, params);
}

function trackFormSubmission(data) {
    trackEvent('form_submission', {
        form_type: 'solicitud_tarifa',
        empresa: data.empresa,
        sector: data.sector,
        consumo: data.consumo,
        plan: data.plan
    });
    
    // Facebook Pixel if available
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: 'Solicitud de Tarifa',
            content_category: 'Energia'
        });
    }
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    
    trackEvent('javascript_error', {
        error_message: e.message,
        error_filename: e.filename,
        error_lineno: e.lineno
    });
});

// Console branding
console.log('%c🔋 ENERGÍA CONFIABLE', 'color: #FF9633; font-size: 20px; font-weight: bold;');
console.log('%cSi eres desarrollador y quieres unirte a nuestro equipo, escríbenos: desarrollo@energia-confiable.com', 'color: #666; font-size: 12px;');