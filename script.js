// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }),
  )
}

// Product filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const productCards = document.querySelectorAll(".product-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    productCards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block"
      } else {
        const category = card.getAttribute("data-category")
        if (category === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      }
    })
  })
})

// Product details modal
const modal = document.getElementById("productModal")
const closeModal = document.querySelector(".close")

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  })
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

// Product details data
const productDetails = {
  "gold-scalper": {
    title: "Gold Scalper EA",
    price: "$299",
    images: ["/gold-scalper-ea-backtest.png", "/gold-scalper-ea-settings.png", "/gold-scalper-ea-results.png"],
    description:
      "Advanced scalping robot specifically designed for XAUUSD (Gold) trading with sophisticated entry and exit algorithms.",
    features: [
      "Advanced scalping algorithm optimized for Gold",
      "87% win rate based on 2-year backtest",
      "Built-in risk management system",
      "Works on M1, M5, and M15 timeframes",
      "Low drawdown strategy (Max DD: 12%)",
      "News filter to avoid high-impact events",
      "Customizable lot sizing options",
      "Compatible with all major brokers",
    ],
    specifications: {
      "Minimum Deposit": "$500",
      "Recommended Timeframe": "M5",
      "Currency Pair": "XAUUSD",
      Platform: "MT4/MT5",
      "Strategy Type": "Scalping",
      "Max Spread": "30 points",
    },
    performance: {
      "Total Return": "+2,450%",
      "Win Rate": "87%",
      "Profit Factor": "2.34",
      "Max Drawdown": "12%",
      "Average Trade": "+$45",
      "Total Trades": "1,234",
    },
  },
  "eurusd-trend": {
    title: "EUR/USD Trend EA",
    price: "$199",
    images: ["/eurusd-trend-ea.png", "/eurusd-trend-ea-dashboard.png", "/eurusd-trend-ea-metrics.png"],
    description: "Professional trend-following Expert Advisor designed for major currency pairs with focus on EUR/USD.",
    features: [
      "Advanced trend detection algorithm",
      "92% win rate on trending markets",
      "Multi-timeframe analysis",
      "Works on all major currency pairs",
      "Automatic lot sizing based on account balance",
      "Trailing stop functionality",
      "Economic calendar integration",
      "Email and push notifications",
    ],
    specifications: {
      "Minimum Deposit": "$300",
      "Recommended Timeframe": "H1",
      "Currency Pairs": "EUR/USD, GBP/USD, USD/JPY",
      Platform: "MT4/MT5",
      "Strategy Type": "Trend Following",
      "Max Spread": "20 points",
    },
    performance: {
      "Total Return": "+1,890%",
      "Win Rate": "92%",
      "Profit Factor": "3.12",
      "Max Drawdown": "8%",
      "Average Trade": "+$67",
      "Total Trades": "987",
    },
  },
  "multi-hedge": {
    title: "Multi-Pair Hedge EA",
    price: "$399",
    images: ["/multi-pair-hedging-dashboard.png", "/hedging-strategy-correlation-matrix.png", "/multi-pair-ea-risk-management-panel.png"],
    description:
      "Sophisticated hedging strategy that trades multiple currency pairs simultaneously to minimize risk and maximize profits.",
    features: [
      "Advanced correlation-based hedging",
      "Trades 6 major currency pairs simultaneously",
      "Dynamic position sizing",
      "Risk-balanced portfolio approach",
      "Automatic correlation monitoring",
      "Advanced money management",
      "Market volatility adaptation",
      "Professional risk controls",
    ],
    specifications: {
      "Minimum Deposit": "$1,000",
      "Recommended Timeframe": "H4",
      "Currency Pairs": "6 Major Pairs",
      Platform: "MT4/MT5",
      "Strategy Type": "Hedging/Portfolio",
      "Max Spread": "25 points",
    },
    performance: {
      "Total Return": "+3,120%",
      "Win Rate": "89%",
      "Profit Factor": "2.87",
      "Max Drawdown": "15%",
      "Average Trade": "+$89",
      "Total Trades": "756",
    },
  },
  "trend-master": {
    title: "Trend Master Indicator",
    price: "$99",
    images: ["/trend-master-indicator.png", "/trend-indicator-settings.png", "/trend-master-indicator.png"],
    description: "Advanced trend detection indicator with precise buy/sell signals and trend strength analysis.",
    features: [
      "Precise trend direction detection",
      "Buy/sell arrow signals",
      "Trend strength meter",
      "Multi-timeframe analysis",
      "No repainting guarantee",
      "Customizable alert system",
      "Works on all timeframes",
      "Compatible with all currency pairs",
    ],
    specifications: {
      Platform: "MT4/MT5",
      Timeframes: "All",
      "Currency Pairs": "All",
      "Signal Type": "Arrows + Alerts",
      Repainting: "No",
      "Buffer Values": "Available",
    },
    performance: {
      Accuracy: "87%",
      "Signal Frequency": "5-8 per day",
      "False Signals": "<13%",
      "Best Timeframe": "H1, H4",
      "Avg Profit per Signal": "45 pips",
      "User Rating": "4.7/5",
    },
  },
  "sr-pro": {
    title: "Support Resistance Pro",
    price: "$79",
    images: ["/placeholder-0ua8s.png", "/support-resistance-pro-settings.png", "/dynamic-support-resistance.png"],
    description: "Automatic support and resistance level detection with dynamic updates and breakout alerts.",
    features: [
      "Automatic S/R level detection",
      "Dynamic level updates",
      "Breakout alert system",
      "Historical level tracking",
      "Customizable level colors",
      "Strength-based level filtering",
      "Works on all timeframes",
      "Easy installation and setup",
    ],
    specifications: {
      Platform: "MT4/MT5",
      Timeframes: "All",
      "Currency Pairs": "All",
      "Level Types": "Support/Resistance",
      Updates: "Real-time",
      Alerts: "Yes",
    },
    performance: {
      Accuracy: "82%",
      "Level Strength": "3 Levels",
      "Update Frequency": "Real-time",
      "Best Timeframe": "H1, H4, D1",
      "Breakout Success": "78%",
      "User Rating": "4.6/5",
    },
  },
  "volume-pro": {
    title: "Volume Analysis Pro",
    price: "$129",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description: "Professional volume analysis tool with market sentiment indicators and volume profile analysis.",
    features: [
      "Advanced volume analysis",
      "Market sentiment indicator",
      "Volume profile display",
      "Institutional volume tracking",
      "Volume divergence detection",
      "Customizable histogram",
      "Real-time volume alerts",
      "Multi-timeframe analysis",
    ],
    specifications: {
      Platform: "MT4/MT5",
      Timeframes: "All",
      "Currency Pairs": "All",
      "Analysis Type": "Volume + Sentiment",
      Alerts: "Yes",
      Profile: "Volume Profile",
    },
    performance: {
      Accuracy: "85%",
      "Signal Quality": "High",
      "Volume Tracking": "Real-time",
      "Best Timeframe": "M15, H1, H4",
      "Divergence Detection": "91%",
      "User Rating": "4.8/5",
    },
  },
}

// Show product details
function showProductDetails(productId) {
  const product = productDetails[productId]
  if (!product) return

  const modalContent = document.getElementById("modalContent")

  modalContent.innerHTML = `
        <h2>${product.title}</h2>
        <div class="product-detail-price">${product.price}</div>
        
        <div class="product-images">
            ${product.images.map((img) => `<img src="${img}" alt="${product.title}" style="width: 100%; margin-bottom: 1rem; border-radius: 5px;">`).join("")}
        </div>
        
        <div class="product-detail-description">
            <h3>Description</h3>
            <p>${product.description}</p>
        </div>
        
        <div class="product-detail-features">
            <h3>Key Features</h3>
            <ul>
                ${product.features.map((feature) => `<li><i class="fas fa-check" style="color: #28a745; margin-right: 0.5rem;"></i>${feature}</li>`).join("")}
            </ul>
        </div>
        
        <div class="product-detail-specs">
            <h3>Specifications</h3>
            <div class="specs-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0;">
                ${Object.entries(product.specifications)
                  .map(
                    ([key, value]) => `
                    <div class="spec-item" style="background: #f8f9fa; padding: 1rem; border-radius: 5px;">
                        <strong>${key}:</strong><br>${value}
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="product-detail-performance">
            <h3>Performance Metrics</h3>
            <div class="performance-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin: 1rem 0;">
                ${Object.entries(product.performance)
                  .map(
                    ([key, value]) => `
                    <div class="performance-item" style="text-align: center; background: #f8f9fa; padding: 1rem; border-radius: 5px;">
                        <div style="font-size: 1.5rem; font-weight: bold; color: #00d4ff; margin-bottom: 0.5rem;">${value}</div>
                        <div style="color: #666; font-size: 0.9rem;">${key}</div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>
        
        <div class="product-detail-actions" style="margin-top: 2rem; text-align: center;">
            <button onclick="downloadProduct('${productId}')" style="background: #00d4ff; color: white; border: none; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; font-size: 1.1rem; margin-right: 1rem;">
                <i class="fas fa-download"></i> Download Now
            </button>
            <button onclick="contactProduct('${productId}')" style="background: transparent; color: #00d4ff; border: 2px solid #00d4ff; padding: 1rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600; font-size: 1.1rem;">
                <i class="fas fa-comments"></i> Contact Support
            </button>
        </div>
    `

  modal.style.display = "block"
}

// Download product (redirect to Telegram)
function downloadProduct(productId) {
  // Replace with your actual Telegram link
  const telegramLink = "https://t.me/forexexpert_official"
  window.open(telegramLink, "_blank")
}

// Contact for specific product
function contactProduct(productId) {
  const product = productDetails[productId]
  const message = `Hi! I'm interested in ${product.title}. Can you provide more information?`
  sendChatMessage(message)
  modal.style.display = "none"
}

// Chat functionality
const chatMessages = []

function sendMessage() {
  const chatInput = document.getElementById("chatInput")
  const message = chatInput.value.trim()

  if (message === "") return

  sendChatMessage(message)
  chatInput.value = ""
}

function sendChatMessage(message) {
  const chatMessagesContainer = document.getElementById("chatMessages")
  if (!chatMessagesContainer) return

  // Add user message
  const userMessage = document.createElement("div")
  userMessage.className = "message user-message"
  userMessage.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">${new Date().toLocaleTimeString()}</span>
        </div>
    `
  chatMessagesContainer.appendChild(userMessage)

  // Simulate sending to Telegram (in real implementation, this would be an API call)
  console.log("Message sent to Telegram:", message)

  // Auto-reply after a short delay
  setTimeout(() => {
    const botMessage = document.createElement("div")
    botMessage.className = "message bot-message"
    botMessage.innerHTML = `
            <div class="message-content">
                <p>Thank you for your message! I've received it and will respond shortly. You can also contact me directly on Telegram @forexexpert_official for faster response.</p>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `
    chatMessagesContainer.appendChild(botMessage)
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
  }, 1500)

  chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight
}

// Quick contact functions
function quickContact(type) {
  const messages = {
    general: "Hi! I have a general inquiry about your services.",
    "custom-ea": "Hi! I'm interested in getting a custom Expert Advisor developed.",
    signals: "Hi! I'd like to know more about your trading signals service.",
    support: "Hi! I need technical support with one of your products.",
  }

  sendChatMessage(messages[type] || messages["general"])
}

// Service contact function
function contactService(serviceType) {
  const messages = {
    "custom-ea": "Hi! I'm interested in custom Expert Advisor development. Can you provide a quote?",
    "custom-indicator": "Hi! I need a custom indicator developed. What information do you need?",
    signals: "Hi! I'd like to subscribe to your premium trading signals.",
    mentoring: "Hi! I'm interested in your trading education and mentoring services.",
    optimization: "Hi! I have an EA that needs optimization. Can you help?",
    support: "Hi! I'd like to subscribe to your 24/7 technical support service.",
  }

  sendChatMessage(messages[serviceType] || "Hi! I'm interested in your services.")
}

// FAQ toggle functionality
function toggleFaq(element) {
  const faqItem = element.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Chat input enter key support
document.addEventListener("DOMContentLoaded", () => {
  const chatInput = document.getElementById("chatInput")
  if (chatInput) {
    chatInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage()
      }
    })
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add loading animation to buttons when clicked
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-download, .service-btn, .cta-button")) {
    const originalText = e.target.innerHTML
    e.target.innerHTML = '<span class="loading"></span> Loading...'
    e.target.disabled = true

    setTimeout(() => {
      e.target.innerHTML = originalText
      e.target.disabled = false
    }, 2000)
  }
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Add any initialization code here
  console.log("ForexExpert website loaded successfully!")

  // Set current year in footer if needed
  const currentYear = new Date().getFullYear()
  const yearElements = document.querySelectorAll(".current-year")
  yearElements.forEach((element) => {
    element.textContent = currentYear
  })
})
