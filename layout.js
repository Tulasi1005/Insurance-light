/* 
 * Quintera Holdings - Shared Layout Script
 * Injects Header, Navigation, Footer, and Cookie Consent
 * Matches layout screenshot structures exactly
 * Designed by Antigravity AI - Google DeepMind
 */

document.addEventListener("DOMContentLoaded", () => {
    injectHeader();
    injectFooter();
    injectCookieBanner();
    setupMobileMenu();
    setupAccordion();
    setupContactForm();
    highlightActivePage();
    initLiveChat();
    setupFooterSearch();
    setupTheme();
});

const getPath = (filename) => `./${filename}`;

// Quintera Holdings Premium Branding with Transparent Logo
const starLogoSVG = `
<div class="brand-lockup">
  <img class="brand-mark" src="${getPath('quintera-q-mark.png')}" alt="Quintera Holdings Q mark">
  <div class="brand-copy">
    <span class="brand-wordmark">QUINTERA</span>
    <span class="brand-submark">HOLDINGS</span>
  </div>
</div>
`;

// Footer Logo: Quintera Holdings with Transparent Logo
const starFooterLogo1 = `
<div style="text-align: center; padding: 20px 15px; background: linear-gradient(145deg, #111118, #1a1a2e); border-radius: 12px; border: 1px solid rgba(181, 139, 66, 0.12); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); position: relative; overflow: hidden;">
  <div style="position: absolute; top: -30%; right: -20%; width: 100px; height: 100px; background: radial-gradient(circle, rgba(181, 139, 66, 0.03) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
  <div style="position: absolute; bottom: -20%; left: -20%; width: 80px; height: 80px; background: radial-gradient(circle, rgba(212, 175, 55, 0.02) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
  
  <img src="${getPath('logo.png')}" alt="Quintera Holdings" style="height: 60px; width: auto; margin-bottom: 8px; filter: drop-shadow(0 4px 12px rgba(181, 139, 66, 0.2));">
  
  <div style="font-weight: 900; font-size: 1.4rem; color: #ffffff; font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; letter-spacing: 4px; background: linear-gradient(180deg, #ffffff 30%, #b8b8c8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">QUINTERA</div>
  <div style="font-size: 0.6rem; color: rgba(181, 139, 66, 0.6); font-weight: 400; letter-spacing: 8px; text-transform: uppercase; margin-top: 2px; -webkit-text-fill-color: rgba(181, 139, 66, 0.6); font-family: 'Outfit', sans-serif;">HOLDINGS</div>
  
  <div style="width: 40px; height: 2px; background: linear-gradient(90deg, transparent, rgba(181, 139, 66, 0.3), transparent); margin: 12px auto;"></div>
  
  <div style="display: flex; justify-content: center; gap: 14px; font-size: 0.7rem; font-weight: 600; letter-spacing: 2.5px; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; flex-wrap: wrap; font-family: 'Playfair Display', Georgia, serif;">
    <span>VISION</span>
    <span style="color: rgba(181, 139, 66, 0.3);">|</span>
    <span>INTEGRITY</span>
    <span style="color: rgba(181, 139, 66, 0.3);">|</span>
    <span>IMPACT</span>
  </div>
</div>
`;

const starFooterLogo2 = ``;

function injectHeader() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    if (!headerPlaceholder) return;

    const currentPath = window.location.pathname.toLowerCase();
    const getActive = (pageName) => {
        const pageLower = pageName.toLowerCase();
        if (currentPath.endsWith("/" + pageLower) || currentPath.endsWith(pageLower)) {
            return "active";
        }
        if (pageName === "index.html" && (currentPath.endsWith("/") || currentPath === "" || currentPath.endsWith("index.html"))) {
            return "active";
        }
        return "";
    };

    const headerHTML = `
        <!-- Top Bar (Secondary Header) -->
        <div class="top-header">
            <div class="container-fluid top-header-row">
                <div class="top-links">

                    <a href="tel:980-776-5292"><i class="fas fa-phone-alt" style="margin-right: 4px;"></i> 980-776-5292 <span style="background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f; padding: 2px 10px; font-size: 0.65rem; font-weight: 800; border-radius: 3px; margin-left: 5px; letter-spacing: 0.5px;">Get Started</span></a>
                    <a href="#" id="header-live-chat-link"><i class="fas fa-comment-dots" style="margin-right: 4px;"></i> LIVE CHAT</a>
                    <a href="${getPath('services.html')}"><i class="fas fa-file-invoice-dollar" style="margin-right: 4px;"></i> POLICY SERVICES</a>

                </div>
                <div class="social-links" style="display: flex; align-items: center; gap: 10px;">
                    <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                    
                    <!-- Theme Toggle Button -->
                    <button id="theme-toggle-btn" style="background: var(--primary-light); border: 1px solid var(--border-color); color: var(--text-light); cursor: pointer; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-family: 'Outfit', sans-serif; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-left: 15px;" onclick="window.toggleTheme()">
                        <i class="fas fa-sun" id="theme-icon" style="color: var(--secondary-color);"></i>
                        <span id="theme-text" style="color: var(--text-light);">LIGHT</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Sticky Navigation Header -->
        <header>
            <div class="container-fluid nav-row">
                <a href="${getPath('index.html')}" class="logo">
                    ${starLogoSVG}
                </a>
                
                <button class="hamburger" id="hamburger-btn" aria-label="Toggle Navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="nav-links" id="nav-menu">
                    <li><a href="${getPath('index.html')}" class="nav-item ${getActive('index.html')}">Home</a></li>
                    <li><a href="${getPath('about-us.html')}" class="nav-item ${getActive('about-us.html')}">About Us</a></li>
                    <li><a href="${getPath('services.html')}" class="nav-item ${getActive('services.html')}">Services</a></li>
                    <li><a href="${getPath('contact-us.html')}" class="nav-item">Forms</a></li>
                    <li><a href="${getPath('contact-us.html')}" class="nav-item ${getActive('contact-us.html')}">Contact Us</a></li>
                    
                    <!-- Mobile Theme Toggle -->
                    <li class="mobile-theme-toggle-li" style="width: 100%; margin-top: 15px;">
                        <button id="mobile-theme-toggle-btn" style="background: var(--primary-light); border: 1px solid var(--border-color); color: var(--text-light); cursor: pointer; padding: 12px 20px; border-radius: 20px; font-size: 0.9rem; font-family: 'Outfit', sans-serif; font-weight: 700; display: flex; align-items: center; gap: 8px; margin: 0 auto; width: 100%; justify-content: center;" onclick="window.toggleTheme()">
                            <i class="fas fa-sun" id="mobile-theme-icon" style="color: var(--secondary-color);"></i>
                            <span id="mobile-theme-text" style="color: var(--text-light);">LIGHT</span>
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    `;

    headerPlaceholder.outerHTML = headerHTML;
}

function injectFooter() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    if (!footerPlaceholder) return;

    const footerHTML = `
        <footer>
            <div class="container-fluid footer-grid">

               

                <!-- Column 3: QUICK LINKS -->
                <div class="footer-col">
                    <h4 style="color: rgba(181, 139, 66, 0.8); letter-spacing: 2px; font-family: 'Outfit', sans-serif;">QUICK LINKS</h4>
                    <ul>

                        <li><a href="${getPath('about-us.html')}" style="font-family: 'Outfit', sans-serif;">About Us</a></li>
                        <li><a href="${getPath('contact-us.html')}" style="font-family: 'Outfit', sans-serif;">Contact Us</a></li>
                        <li><a href="${getPath('claims.html')}" style="font-family: 'Outfit', sans-serif;">Claims Help</a></li>
                        <li><a href="${getPath('contact-us.html')}" style="font-family: 'Outfit', sans-serif;">Ask Us Anything</a></li>

                        <li><a href="${getPath('about-us.html')}">About Us</a></li>
                        <li><a href="${getPath('contact-us.html')}">Contact Us</a></li>
                        <li><a href="${getPath('contact-us.html')}">Ask Us Anything</a></li>

                    </ul>
                </div>

                <!-- Column 5: SEARCH & LOGOS -->
                <div class="footer-col">
                    <h4 style="color: rgba(181, 139, 66, 0.8); letter-spacing: 2px; font-family: 'Outfit', sans-serif;">SEARCH</h4>
                    <form class="searchform" style="position: relative; margin-bottom: 30px;">
                        <input type="text" name="s" placeholder="Search..." style="width: 100%; padding: 10px 40px 10px 15px; border-radius: 4px; border: 1px solid rgba(181, 139, 66, 0.15); background-color: #f8fafc; color: var(--primary-color); outline: none; transition: border-color 0.3s ease; font-family: 'Outfit', sans-serif;">
                        <button type="submit" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #b58b42; cursor: pointer; transition: color 0.3s ease;"><i class="fas fa-search"></i></button>
                    </form>
                    
                    <div style="background-color: var(--primary-color); border: 1px solid rgba(181, 139, 66, 0.1); padding: 15px; border-radius: 8px; display: inline-block; width: 100%; text-align: center; box-shadow: var(--shadow-sm);">
                        ${starFooterLogo1}
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom-dark">
                <div class="container-fluid footer-bottom">
                    <p style="font-size: 0.8rem; opacity: 0.7; font-family: 'Outfit', sans-serif;">&copy; 2026 <strong style="color: rgba(181, 139, 66, 0.8); font-family: 'Playfair Display', Georgia, serif;">Quintera</strong> Holdings | All Rights Reserved | sales@quintera.us | 980-776-5292 | 2009 Embassy Ct, Charlotte, NC 28213</p>
                    <div class="social-icons" style="font-size: 1.2rem; display: flex; gap: 15px; justify-content: center; opacity: 0.8;">
                        <a href="#" style="transition: color 0.3s ease;"><i class="fab fa-facebook"></i></a>
                        <a href="#" style="transition: color 0.3s ease;"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="transition: color 0.3s ease;"><i class="fab fa-instagram"></i></a>
                        <a href="#" style="transition: color 0.3s ease;"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    `;

    footerPlaceholder.outerHTML = footerHTML;
}

function injectCookieBanner() {
    if (localStorage.getItem("cookie_consent_accepted")) return;

    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.id = "cookie-banner";
    banner.innerHTML = `
        <h4 style="margin-bottom: 8px; color: rgba(181, 139, 66, 0.9); font-family: 'Playfair Display', Georgia, serif;"><i class="fas fa-cookie-bite" style="color: #b58b42;"></i> Cookie Consent</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px; font-family: 'Outfit', sans-serif;">We use cookies to improve your experience on our site. By using our site, you consent to cookies. Please read our Cookie Policy.</p>
        <div class="cookie-actions">

            <button class="btn btn-outline btn-sm" id="cookie-settings-btn" onclick="alert('Cookie Settings details (Dummy).')" style="font-family: 'Outfit', sans-serif;">Preferences</button>
            <button class="btn btn-primary btn-sm" id="cookie-accept-btn" style="background: linear-gradient(145deg, #b58b42, #d4af37); border: none; color: #0a0a0f; font-weight: 700; font-family: 'Outfit', sans-serif;">Accept All</button>

           
            <button class="btn btn-primary btn-sm" id="cookie-accept-btn">Accept All</button>

        </div>
    `;

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.classList.add("active");
    }, 1000);

    document.getElementById("cookie-accept-btn").addEventListener("click", () => {
        localStorage.setItem("cookie_consent_accepted", "true");
        banner.classList.remove("active");
        setTimeout(() => banner.remove(), 400);
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById("hamburger-btn");
    const menu = document.getElementById("nav-menu");
    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");

        const spans = hamburger.querySelectorAll("span");
        if (hamburger.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });

    const dropdowns = menu.querySelectorAll(".dropdown");
    dropdowns.forEach(dd => {
        const link = dd.querySelector(".nav-item");
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                dd.classList.toggle("active");
            }
        });
    });
}

function setupAccordion() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = item.querySelector(".accordion-content");
            const isActive = item.classList.contains("active");

            document.querySelectorAll(".accordion-item").forEach(el => {
                el.classList.remove("active");
                el.querySelector(".accordion-content").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}

function triggerEmailReflect(subject, bodyData) {
    let emailBody = "Hello,\n\nHere are the details from the submission on Quintera Holdings:\n\n";
    for (const [key, val] of Object.entries(bodyData)) {
        emailBody += `• ${key}: ${val}\n`;
    }
    emailBody += "\nBest Regards,\nQuintera Support Team\n";

    const mailtoUrl = `mailto:tulasilaxmi.mandala@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    const mailLink = document.createElement("a");
    mailLink.href = mailtoUrl;
    mailLink.target = "_blank";
    mailLink.style.display = "none";
    document.body.appendChild(mailLink);
    mailLink.click();
    document.body.removeChild(mailLink);
}

function setupContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fields = form.querySelectorAll(".form-control[required]");
        let valid = true;

        fields.forEach(field => {
            if (!field.value.trim()) {
                valid = false;
                field.style.borderColor = "var(--danger-color)";
            } else {
                field.style.borderColor = "var(--border-color)";
            }
        });

        if (!valid) return;

        const firstName = form.querySelector("#first-name")?.value || "";
        const lastName = form.querySelector("#last-name")?.value || "";
        const nameVal = `${firstName} ${lastName}`.trim() || "Not provided";
        const emailVal = form.querySelector("#email")?.value || "Not provided";
        const phoneVal = form.querySelector("#phone")?.value || "Not provided";
        const serviceVal = form.querySelector("#service-select")?.value || "Not provided";
        const msgVal = form.querySelector("#message")?.value || "Not provided";

        // Show a loading/submitting overlay
        const overlay = document.createElement("div");
        overlay.className = "success-overlay";
        overlay.innerHTML = `
            <div class="success-box" style="text-align: center; max-width: 500px;">
                <div class="loading-spinner" style="border: 4px solid rgba(181,139,66,0.1); border-left-color: #b58b42; border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px; animation: spin 1s linear infinite;"></div>
                <h3 style="color: var(--text-light); font-family: 'Outfit', sans-serif;">Sending secure inquiry...</h3>
            </div>
        `;
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add("active"), 50);

        // Fetch API submit to Nodemailer express server
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameVal,
                email: emailVal,
                phone: phoneVal,
                service: serviceVal,
                message: msgVal
            })
        })
            .then(response => response.json())
            .then(data => {
                overlay.remove(); // Remove loading spinner

                // Build the success overlay
                const successOverlay = document.createElement("div");
                successOverlay.className = "success-overlay";

                let previewButtonHTML = "";
                if (data.success && data.previewUrl) {
                    previewButtonHTML = `
                    <div style="margin-top: 15px; margin-bottom: 20px; text-align: center;">
                        <a href="${data.previewUrl}" target="_blank" class="btn btn-secondary" style="padding: 10px 20px; font-size: 0.85rem; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f; border: none; border-radius: 4px; font-family: 'Outfit', sans-serif;">
                            <i class="fas fa-envelope-open-text"></i> View Received Email (Ethereal)
                        </a>
                    </div>
                `;
                }

                successOverlay.innerHTML = `
                <div class="success-box" style="text-align: left; max-width: 500px; border-top: 3px solid #b58b42;">
                    <div class="success-icon" style="text-align: center; color: #b58b42;"><i class="fas fa-check-circle"></i></div>
                    <h2 style="margin-bottom: 12px; color: var(--primary-color); text-align: center; font-family: 'Playfair Display', Georgia, serif;">Inquiry Transmitted!</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px; text-align: center; font-family: 'Outfit', sans-serif;">
                        ${data.success ? 'Your message has been processed using Nodemailer. Ethereal Email successfully received the dispatch:' : 'Your message details:'}
                    </p>
                    
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 4px; margin-bottom: 16px; font-size: 0.9rem; color: #334155; line-height: 1.5; font-family: 'Outfit', sans-serif;">
                        <strong>• Name:</strong> ${nameVal}<br>
                        <strong>• Email:</strong> ${emailVal}<br>
                        <strong>• Phone:</strong> ${phoneVal}<br>
                        <strong>• Service:</strong> ${serviceVal}<br>
                        <strong>• Notes:</strong> ${msgVal}
                    </div>
                    
                    ${previewButtonHTML}
                    
                    <button class="btn btn-primary" id="success-close-btn" style="width: 100%; background: linear-gradient(145deg, #b58b42, #d4af37); border: none; color: #0a0a0f; font-weight: 700; font-family: 'Outfit', sans-serif;">Close Window</button>
                </div>
            `;
                document.body.appendChild(successOverlay);
                setTimeout(() => successOverlay.classList.add("active"), 50);

                document.getElementById("success-close-btn").addEventListener("click", () => {
                    successOverlay.classList.remove("active");
                    setTimeout(() => {
                        successOverlay.remove();
                        form.reset();
                    }, 300);
                });
            })
            .catch(err => {
                console.warn("Fallback to client mailto since Nodemailer server is offline:", err);
                overlay.remove(); // Remove loading spinner

                // Fallback: Trigger client-side mailto draft
                triggerEmailReflect("Quintera Portal Submission", {
                    "Full Name": nameVal,
                    "Email Address": emailVal,
                    "Phone Number": phoneVal,
                    "Selected Service": serviceVal,
                    "Details / Notes": msgVal,
                    "Submission Source": "Website Contact Portal"
                });

                // Display standard success fallback overlay
                const successOverlay = document.createElement("div");
                successOverlay.className = "success-overlay";
                successOverlay.innerHTML = `
                <div class="success-box" style="text-align: left; max-width: 500px; border-top: 3px solid #b58b42;">
                    <div class="success-icon" style="text-align: center; color: #b58b42;"><i class="fas fa-check-circle"></i></div>
                    <h2 style="margin-bottom: 12px; color: var(--primary-color); text-align: center; font-family: 'Playfair Display', Georgia, serif;">Request Prepared!</h2>
                    <p style="color: var(--text-muted); margin-bottom: 16px; text-align: center; font-family: 'Outfit', sans-serif;">Thank you. A draft email has been prepared and opened in your email client:</p>
                    
                    <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 4px; margin-bottom: 24px; font-size: 0.9rem; color: #334155; line-height: 1.5; font-family: 'Outfit', sans-serif;">
                        <strong>• Name:</strong> ${nameVal}<br>
                        <strong>• Email:</strong> ${emailVal}<br>
                        <strong>• Phone:</strong> ${phoneVal}<br>
                        <strong>• Service:</strong> ${serviceVal}<br>
                        <strong>• Notes:</strong> ${msgVal}
                    </div>
                    
                    <button class="btn btn-primary" id="success-close-btn" style="width: 100%; background: linear-gradient(145deg, #b58b42, #d4af37); border: none; color: #0a0a0f; font-weight: 700; font-family: 'Outfit', sans-serif;">Close Window</button>
                </div>
            `;
                document.body.appendChild(successOverlay);
                setTimeout(() => successOverlay.classList.add("active"), 50);

                document.getElementById("success-close-btn").addEventListener("click", () => {
                    successOverlay.classList.remove("active");
                    setTimeout(() => {
                        successOverlay.remove();
                        form.reset();
                    }, 300);
                });
            });
    });
}

function highlightActivePage() {
    const currentPath = window.location.pathname;
    const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (!filename) return;

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === filename) {
            link.classList.add("active");
            const dropdownParent = link.closest(".dropdown");
            if (dropdownParent) {
                dropdownParent.querySelector(".nav-item").classList.add("active");
            }
        }
    });
}

function initLiveChat() {
    // Inject chat container markup
    const chatContainer = document.createElement("div");
    chatContainer.innerHTML = `
        <div id="chat-launcher" class="chat-launcher" style="background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f;">
            <i class="fas fa-comments"></i>
        </div>
        <div id="chat-window" class="chat-window">
            <div class="chat-header" style="background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f; font-family: 'Outfit', sans-serif; font-weight: 700;">
                <span><i class="fas fa-headset" style="margin-right: 8px;"></i> Quintera Live Support</span>
                <button id="chat-close" class="chat-close" style="color: #0a0a0f;">&times;</button>
            </div>
            <div class="chat-body" id="chat-body" style="font-family: 'Outfit', sans-serif;">
                <!-- Messages dynamic thread -->
            </div>
            <div class="chat-footer">
                <button class="chat-attach"><i class="fas fa-paperclip"></i></button>
                <input type="text" id="chat-input" placeholder="Type a message..." autocomplete="off" style="font-family: 'Outfit', sans-serif;">
                <button id="chat-send" class="chat-send" style="background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f; font-family: 'Outfit', sans-serif;"><i class="fas fa-paper-plane"></i></button>
            </div>
            <div style="font-size: 0.6rem; color: #94a3b8; text-align: center; padding: 6px 0; background-color: #ffffff; border-top: 1px solid #f1f5f9; font-family: 'Outfit', sans-serif;">
                powered by <strong style="color: #b58b42; font-family: 'Playfair Display', Georgia, serif;">Quintera</strong> Virtual Agents
            </div>
        </div>
    `;
    document.body.appendChild(chatContainer);

    const launcher = document.getElementById("chat-launcher");
    const windowEl = document.getElementById("chat-window");
    const closeBtn = document.getElementById("chat-close");
    const sendBtn = document.getElementById("chat-send");
    const inputField = document.getElementById("chat-input");
    const chatBody = document.getElementById("chat-body");

    let chatState = "";

    // Toggle window visibility
    launcher.addEventListener("click", () => {
        windowEl.classList.toggle("active");
        if (windowEl.classList.contains("active") && chatBody.children.length === 0) {
            showMainMenu();
        }
    });

    const headerLiveChatLink = document.getElementById("header-live-chat-link");
    if (headerLiveChatLink) {
        headerLiveChatLink.addEventListener("click", (e) => {
            e.preventDefault();
            windowEl.classList.toggle("active");
            if (windowEl.classList.contains("active") && chatBody.children.length === 0) {
                showMainMenu();
            }
        });
    }

    closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        windowEl.classList.remove("active");
    });

    // Send user message
    function handleSend() {
        const text = inputField.value.trim();
        if (!text) return;

        appendMessage(text, "user");
        inputField.value = "";

        // Simulate thinking and respond
        setTimeout(() => {
            processBotResponse(text);
        }, 600);
    }

    sendBtn.addEventListener("click", handleSend);
    inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    });

    function appendMessage(text, sender) {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-msg ${sender}`;
        if (sender === "bot") {
            msgDiv.style.borderLeft = "3px solid #b58b42";
        }
        msgDiv.style.fontFamily = "'Outfit', sans-serif";
        msgDiv.innerHTML = text;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function showMainMenu() {
        const greeting = `
            <strong style="color: #b58b42; font-family: 'Playfair Display', Georgia, serif;">✦ Quintera Holdings Live Support ✦</strong><br><br>
            Welcome! For quick responses to your queries, please select the option that best connects with your request.<br><br>
            Please note that you may type <strong>0</strong> at any time to return to this main menu.<br><br>
            Using your keypad, please select/type the option:<br>
            <div class="chat-msg-options">
                <button class="chat-msg-option-btn" onclick="window.triggerChatOption('1')" style="border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;">1) Services</button>
                <button class="chat-msg-option-btn" onclick="window.triggerChatOption('2')" style="border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;">2) Contact Us Form</button>
                <button class="chat-msg-option-btn" onclick="window.triggerChatOption('3')" style="border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;">3) Offices & Hours</button>
                <button class="chat-msg-option-btn" onclick="window.triggerChatOption('4')" style="border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;">4) About Quintera</button>
                <button class="chat-msg-option-btn" onclick="window.triggerChatOption('5')" style="border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;">5) Speak to an Advisor</button>
            </div>
        `;
        appendMessage(greeting, "bot");
    }

    function processBotResponse(input) {
        const normalized = input.toLowerCase().trim();

        if (normalized === "0") {
            chatState = ""; // reset state
            showMainMenu();
            return;
        }

        if (chatState === "waiting_for_complaint") {
            chatState = ""; // reset state

            // Extract values
            let name = "Not provided";
            let email = "Not provided";
            let policy = "Not provided";
            let rep = "Not provided";
            let phone = "Not provided";
            let details = input;

            const lines = input.split("\n");
            lines.forEach(line => {
                const clean = line.replace(/^[•\-\*]\s*/, "").trim();
                const lower = clean.toLowerCase();

                if (lower.startsWith("full name:") || lower.startsWith("name:")) {
                    name = clean.substring(clean.indexOf(":") + 1).trim();
                } else if (lower.startsWith("email address:") || lower.startsWith("email:")) {
                    email = clean.substring(clean.indexOf(":") + 1).trim();
                } else if (lower.startsWith("policy number:") || lower.startsWith("policy:")) {
                    policy = clean.substring(clean.indexOf(":") + 1).trim();
                } else if (lower.startsWith("branch representative:") || lower.startsWith("representative:") || lower.startsWith("branch:")) {
                    rep = clean.substring(clean.indexOf(":") + 1).trim();
                } else if (lower.startsWith("phone number:") || lower.startsWith("phone:")) {
                    phone = clean.substring(clean.indexOf(":") + 1).trim();
                } else if (lower.startsWith("complaint details:") || lower.startsWith("complaint:")) {
                    details = clean.substring(clean.indexOf(":") + 1).trim();
                }
            });

            triggerEmailReflect("Quintera Chat Help Ticket", {
                "Full Name": name,
                "Email Address": email,
                "Policy Number": policy,
                "Advisor Rep": rep,
                "Phone Number": phone,
                "Complaint Details": details,
                "Submission Source": "Live Chat Bot Helper"
            });

            appendMessage(
                "<strong style='color: #b58b42; font-family: 'Playfair Display', Georgia, serif;'>✅ Request Logged & Reflected!</strong><br><br>" +
                "Thank you. Your details have been successfully captured and a draft email has been automatically prepared in your email client:<br><br>" +
                "• <strong>Name:</strong> " + name + "<br>" +
                "• <strong>Email:</strong> " + email + "<br>" +
                "• <strong>Policy:</strong> " + policy + "<br>" +
                "• <strong>Rep:</strong> " + rep + "<br>" +
                "• <strong>Phone:</strong> " + phone + "<br>" +
                "• <strong>Details:</strong> " + details + "<br><br>" +
                "Our team will reach out to you within 24 hours. Type <strong>0</strong> to return to the main menu.",
                "bot"
            );
            return;
        }

        switch (normalized) {
            case "1":
            case "services & portfolios":
            case "services":
            case "portfolio":
                appendMessage(
                    "<strong style='color: #b58b42; font-family: 'Playfair Display', Georgia, serif;'>Quintera Services & Portfolios</strong>:<br>" +
                    "Please select one of our core divisions below. The chatbot will navigate you directly to that section:<br><br>" +
                    "<div class='chat-msg-options'>" +
                    "    <button class='chat-msg-option-btn' onclick='window.triggerChatOption(\"service_insurance\")' style='border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;'>Insurance Coverage</button>" +
                    "    <button class='chat-msg-option-btn' onclick='window.triggerChatOption(\"service_realestate\")' style='border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;'>Real Estate Services</button>" +
                    "    <button class='chat-msg-option-btn' onclick='window.triggerChatOption(\"service_advisory\")' style='border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;'>Advisory & Policy</button>" +
                    "</div>",
                    "bot"
                );
                break;
            case "service_insurance":
                appendMessage("Navigating to Quintera Insurance Coverage solutions...", "bot");
                setTimeout(() => {
                    window.location.href = getPath("services.html?filter=insurance");
                }, 1200);
                break;
            case "service_realestate":
                appendMessage("Navigating to Quintera Real Estate brokerage options...", "bot");
                setTimeout(() => {
                    window.location.href = getPath("services.html?filter=realestate");
                }, 1200);
                break;
            case "service_advisory":
                appendMessage("Navigating to Quintera Advisory & Policy management desk...", "bot");
                setTimeout(() => {
                    window.location.href = getPath("services.html?filter=advisory");
                }, 1200);
                break;
            case "2":
            case "contact us form":
            case "contact":
            case "form":
                appendMessage("Navigating to Quintera central contact form...", "bot");
                setTimeout(() => {
                    window.location.href = getPath("contact-us.html");
                }, 1200);
                break;
            case "3":
            case "quintera offices & hours":
            case "offices":
            case "hours":
                appendMessage("<strong style='color: #b58b42; font-family: 'Playfair Display', Georgia, serif;'>Quintera Offices & Hours</strong>:<br>• <strong>Main Office</strong>: 2009 Embassy Ct, Charlotte, NC 28213<br>• <strong>Business Hours</strong>: Monday - Friday 8:00 AM - 8:00 PM (Sat-Sun Closed)<br>• <strong>Direct Phone</strong>: 980-776-5292<br>• Contact details available on our <a href='./contact-us.html' style='color: #b58b42;'>Contact Us page</a>.", "bot");
                break;
            case "4":
            case "about quintera":
            case "about":
                appendMessage("Navigating to Quintera About Us page...", "bot");
                setTimeout(() => {
                    window.location.href = getPath("about-us.html");
                }, 1200);
                break;
            case "5":
            case "speak to an advisor":
            case "whatsapp":
            case "advisor":
                appendMessage(
                    "Would you like to speak to an advisor via WhatsApp or request a callback?<br><br>" +
                    "<div class='chat-msg-options'>" +
                    "    <button class='chat-msg-option-btn' onclick='window.triggerChatOption(\"whatsapp\")' style='border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;'>WhatsApp</button>" +
                    "    <button class='chat-msg-option-btn' onclick='window.triggerChatOption(\"callback_sub\")' style='border-color: #b58b42; color: #b58b42; font-family: 'Outfit', sans-serif;'>Request Callback</button>" +
                    "</div>",
                    "bot"
                );
                break;
            case "whatsapp":
                appendMessage("Connecting you to our WhatsApp support line... <br><a href='https://wa.me/19807765292' target='_blank' class='btn btn-primary btn-sm' style='background: linear-gradient(145deg, #b58b42, #d4af37); color: #0a0a0f; margin-top:8px; display:inline-block; padding: 8px 16px; border-radius: 4px; text-decoration: none; font-weight: 700; font-family: 'Outfit', sans-serif;'><i class='fab fa-whatsapp' style='margin-right:6px;'></i>Chat on WhatsApp</a>", "bot");
                break;
            case "callback_sub":
                appendMessage("Please provide your telephone number and name in one message, and our representative will call you back shortly.", "bot");
                break;
            case "agent":
                appendMessage("📌 Our offices are now closed. To speak with an advisor, please restart this chat during our business hours of Monday to Friday - 8:00am to 8:00pm", "bot");
                break;
            default:
                // Try to scan for keywords
                if (normalized.includes("portfolio") || normalized.includes("service") || normalized.includes("coverage")) {
                    processBotResponse("1");
                } else if (normalized.includes("form") || normalized.includes("contact") || normalized.includes("mail")) {
                    processBotResponse("2");
                } else if (normalized.includes("location") || normalized.includes("office") || normalized.includes("hour") || normalized.includes("address")) {
                    processBotResponse("3");
                } else if (normalized.includes("about") || normalized.includes("quintera") || normalized.includes("team")) {
                    processBotResponse("4");
                } else if (normalized.includes("callback") || normalized.includes("advisor") || normalized.includes("speak") || normalized.includes("whatsapp")) {
                    processBotResponse("5");
                } else {
                    appendMessage("I didn't quite catch that. Please type a number (1-5) or click one of the menu options. Type <strong>0</strong> to view the main menu.", "bot");
                }
                break;
        }
    }

    // Bind global trigger handler
    window.triggerChatOption = (option) => {
        // Echo selection as user message
        const labelMap = {
            "1": "1) Services & Portfolios",
            "2": "2) Contact Us Form",
            "3": "3) Quintera Offices & Hours",
            "4": "4) About Quintera",
            "5": "5) Speak to an Advisor / WhatsApp",
            "service_insurance": "Insurance Coverage Solutions",
            "service_realestate": "Real Estate Services",
            "service_advisory": "Advisory & Policy Services",
            "whatsapp": "WhatsApp",
            "callback_sub": "Request a Callback",
            "agent": "Agent"
        };
        appendMessage(labelMap[option] || option, "user");
        setTimeout(() => {
            processBotResponse(option);
        }, 500);
    };
}

function setupFooterSearch() {
    const searchForm = document.querySelector(".searchform");
    if (!searchForm) return;

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchForm.querySelector("input[name='s']").value.trim().toLowerCase();
        if (!query) return;
        showSearchResults(query);
    });

    async function showSearchResults(query) {
        // Show a temporary loading cursor or state if desired, but search is extremely fast
        const database = [
            { title: "Home Page", url: "index.html" },
            { title: "About Us", url: "about-us.html" },
            { title: "Board Members", url: "board-members.html" },
            { title: "Management Team", url: "management-team.html" },
            { title: "Financials", url: "financials.html" },
            { title: "Regional Partners", url: "regional-partners.html" },
            { title: "Community Activities", url: "community-activities.html" },
            { title: "FAQ Help Center", url: "faq.html" },
            { title: "Our Services", url: "services.html" },
            { title: "Claims Process", url: "claims.html" },
            { title: "Contact Us & Locations", url: "contact-us.html" },
            { title: "Electronic Forms", url: "contact-us.html" }
        ];

        const results = [];

        // Scan actual content of all pages via client-side fetch requests
        await Promise.all(database.map(async (page) => {
            try {
                const resp = await fetch(getPath(page.url));
                if (resp.ok) {
                    const html = await resp.text();

                    // Create dummy element to extract text and strip HTML nodes/scripts/styles
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');

                    // Remove scripts, header, and footer from search indexing to avoid duplicate header/footer matches
                    doc.querySelectorAll("script, style, header, footer, #header-placeholder, #footer-placeholder").forEach(el => el.remove());

                    const textContent = doc.body.textContent || doc.body.innerText || "";
                    const normalizedText = textContent.toLowerCase();

                    if (normalizedText.includes(query)) {
                        const index = normalizedText.indexOf(query);
                        const start = Math.max(0, index - 40);
                        const end = Math.min(textContent.length, index + query.length + 60);
                        let snippet = textContent.substring(start, end).replace(/\s+/g, " ").trim();
                        if (start > 0) snippet = "..." + snippet;
                        if (end < textContent.length) snippet = snippet + "...";

                        results.push({
                            title: page.title,
                            url: page.url,
                            desc: snippet
                        });
                    }
                }
            } catch (err) {
                console.error("Error indexing page for search: ", page.url, err);
            }
        }));

        // If there is exactly ONE clear match, redirect directly!
        if (results.length === 1) {
            window.location.href = getPath(results[0].url);
            return;
        }

        // Create results modal
        const overlay = document.createElement("div");
        overlay.className = "success-overlay";

        let resultsHTML = "";
        if (results.length > 0) {
            resultsHTML = `<div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">`;
            results.forEach(res => {
                resultsHTML += `
                    <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">
                        <h4 style="margin-bottom: 4px; font-family: 'Playfair Display', Georgia, serif;"><a href="${getPath(res.url)}" style="color: #b58b42; font-weight: 700; text-decoration: none; font-size: 1.1rem;">${res.title}</a></h4>
                        <p style="color: #64748b; font-size: 0.875rem; margin: 0; line-height: 1.4; font-family: 'Outfit', sans-serif;">${res.desc}</p>
                    </div>
                `;
            });
            resultsHTML += `</div>`;
        } else {
            resultsHTML = `
                <div style="text-align: center; margin-bottom: 24px; padding: 20px 0;">
                    <i class="fas fa-search-minus" style="font-size: 3rem; color: #94a3b8; margin-bottom: 16px;"></i>
                    <p style="color: #64748b; margin: 0; font-family: 'Outfit', sans-serif;">No search results match your query: "<strong style="font-family: 'Playfair Display', Georgia, serif;">${query}</strong>". Please try again.</p>
                </div>
            `;
        }

        overlay.innerHTML = `
            <div class="success-box" style="text-align: left; max-width: 600px; width: 90%; max-height: 80vh; display: flex; flex-direction: column; border-top: 3px solid #b58b42;">
                <h2 style="margin-bottom: 8px; color: var(--primary-color); font-family: 'Playfair Display', Georgia, serif;">Search Results</h2>
                <p style="color: var(--text-muted); margin-bottom: 20px; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">Found ${results.length} page(s) containing "<strong style="color: #b58b42; font-family: 'Playfair Display', Georgia, serif;">${query}</strong>":</p>
                
                <div style="flex-grow: 1; overflow-y: auto; padding-right: 8px; margin-bottom: 16px;">
                    ${resultsHTML}
                </div>
                
                <button class="btn btn-primary" id="search-close-btn" style="width: 100%; flex-shrink: 0; background: linear-gradient(145deg, #b58b42, #d4af37); border: none; color: #0a0a0f; font-weight: 700; font-family: 'Outfit', sans-serif;">Close Results</button>
            </div>
        `;

        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add("active"), 50);

        document.getElementById("search-close-btn").addEventListener("click", () => {
            overlay.classList.remove("active");
            setTimeout(() => overlay.remove(), 300);
        });
    }
}

function setupTheme() {
    const savedTheme = localStorage.getItem("theme");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");
    const mobileThemeIcon = document.getElementById("mobile-theme-icon");
    const mobileThemeText = document.getElementById("mobile-theme-text");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
        if (themeIcon) themeIcon.className = "fas fa-moon";
        if (themeText) themeText.textContent = "DARK";
        if (mobileThemeIcon) mobileThemeIcon.className = "fas fa-moon";
        if (mobileThemeText) mobileThemeText.textContent = "DARK";
    } else {
        body.classList.remove("light-mode");
        if (themeIcon) themeIcon.className = "fas fa-sun";
        if (themeText) themeText.textContent = "LIGHT";
        if (mobileThemeIcon) mobileThemeIcon.className = "fas fa-sun";
        if (mobileThemeText) mobileThemeText.textContent = "LIGHT";
    }
}

window.toggleTheme = () => {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");
    const mobileThemeIcon = document.getElementById("mobile-theme-icon");
    const mobileThemeText = document.getElementById("mobile-theme-text");

    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        if (themeIcon) themeIcon.className = "fas fa-moon";
        if (themeText) themeText.textContent = "DARK";
        if (mobileThemeIcon) mobileThemeIcon.className = "fas fa-moon";
        if (mobileThemeText) mobileThemeText.textContent = "DARK";
    } else {
        localStorage.setItem("theme", "dark");
        if (themeIcon) themeIcon.className = "fas fa-sun";
        if (themeText) themeText.textContent = "LIGHT";
        if (mobileThemeIcon) mobileThemeIcon.className = "fas fa-sun";
        if (mobileThemeText) mobileThemeText.textContent = "LIGHT";
    }
};
