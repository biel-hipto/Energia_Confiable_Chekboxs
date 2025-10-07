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

// Main landing page - Exact copy from original site
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ENERGÍA CONFIABLE</title>
        <meta name="description" content="Offre fibre : Profitez des promos internet et obtenez un abonnement internet pas cher." />
        
        <!-- FAVICONS -->
        <link rel="apple-touch-icon" sizes="180x180" href="/static/logoEC.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/logoEC.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/logoEC.svg" />
        <link rel="manifest" href="/static/logoEC.svg" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <!-- Facebook SDK -->
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v16.0" nonce="N7bSeE0E"></script>

        <!-- Google Fonts - Exact from original -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        <!-- TailwindCSS + DaisyUI (matching original) -->
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>

        <!-- Analytics & Tracking - Exact from original -->
        <script>
            window.dataLayer = window.dataLayer || [];
            function create_UUID() {
                var dt = new Date().getTime();
                var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
                });
                return uuid;
            }
            var hipto_uid = create_UUID();
            var vertical = "ESP_B2B_NRG";
            dataLayer.push({
                site: document.location.origin + document.location.pathname,
                type_page: "lp",
                channel: "hiptoform",
                sector: "energie",
                vertical: "ESP_B2B_NRG",
                hipto_uid: hipto_uid,
            });
        </script>

        <!-- Google Tag Manager -->
        <script>
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
                j.async = true;
                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-KFWBLZRL");
            
            window.dataLayer.push({
                event: "welcome_message_view",
            });
        </script>

        <!-- Custom Tailwind Config -->
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            'primary-orange': '#FF9633',
                            'energy-main': '#da532c'
                        },
                        fontFamily: {
                            'inter': ['Inter', 'sans-serif'],
                            'source': ['Source Sans 3', 'sans-serif'],
                            'poppins': ['Poppins', 'sans-serif'],
                            'sora': ['Sora', 'sans-serif'],
                            'nunito': ['Nunito', 'sans-serif'],
                            'roboto': ['Roboto', 'sans-serif']
                        }
                    }
                }
            }
        </script>

        <!-- Custom CSS -->
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body data-theme="light" class="font-inter bg-base-100">
        <!-- GTM Noscript -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFWBLZRL" height="0" width="0" style="display: none; visibility: hidden"></iframe>
        </noscript>

        <!-- Main Content will be loaded by React/JavaScript -->
        <div id="root">
            <!-- Loading placeholder -->
            <div class="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                <div class="text-center">
                    <div class="loading loading-spinner loading-lg text-primary-orange mb-4"></div>
                    <h1 class="text-2xl font-bold text-gray-800 font-sora">ENERGÍA CONFIABLE</h1>
                    <p class="text-gray-600 font-source">Cargando página...</p>
                </div>
            </div>
        </div>

        <!-- Phone Input Library (from original CSS) -->
        <script src="https://cdn.jsdelivr.net/npm/react-phone-number-input@3.3.9/bundle/input.js"></script>
        
        <!-- Custom JavaScript -->
        <script src="/static/app.js"></script>

        <!-- Initialize App -->
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Initialize the main application
                if (window.initEnergyApp) {
                    window.initEnergyApp();
                }
            });
        </script>
    </body>
    </html>
  `)
})

export default app