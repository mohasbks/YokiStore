<template>
  <div id="app">
    
    <nav class="navbar navbar-expand-lg fixed-top premium-navbar">
      <div class="container">
        <router-link class="navbar-brand brand-logo" to="/">
          <div class="d-flex align-items-center">
            <div class="logo-icon me-2">
              <i class="bi bi-gem"></i>
            </div>
            <div class="brand-text">
              <span class="brand-name font-display">yoki</span>
              <small class="brand-tagline d-block">Premium Store</small>
            </div>
          </div>
        </router-link>
        
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto ms-4">
            <li class="nav-item">
              <router-link class="nav-link premium-nav-link" to="/" :class="{ active: $route.name === 'Home' }">
                <i class="bi bi-house me-1"></i>
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link premium-nav-link" to="/products" :class="{ active: $route.name === 'Products' }">
                <i class="bi bi-grid me-1"></i>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link premium-nav-link" to="/about" :class="{ active: $route.name === 'About' }">
                <i class="bi bi-info-circle me-1"></i>
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link premium-nav-link" to="/contact" :class="{ active: $route.name === 'Contact' }">
                <i class="bi bi-envelope me-1"></i>
                Contact
              </router-link>
            </li>
          </ul>
          
          <div class="d-flex align-items-center">
            <router-link class="btn premium-cart-btn position-relative me-2" to="/cart">
              <i class="bi bi-bag-heart me-1"></i>
              <span class="cart-text">Cart</span>
              <span v-if="cartItemsCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-badge">
                {{ cartItemsCount }}
              </span>
            </router-link>
          
            <div class="dropdown">
              <button class="btn btn-link text-white dropdown-toggle user-profile" type="button" data-bs-toggle="dropdown">
                <i class="bi bi-person-circle fs-4"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#"><i class="bi bi-person me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-heart me-2"></i>Wishlist</a></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-clock-history me-2"></i>Orders</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="enhanced-footer">
      <div class="container">
        <div class="footer-main py-5">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="footer-brand">
                <div class="d-flex align-items-center mb-4">
                  <div class="footer-logo-icon me-3">
                    <i class="bi bi-gem"></i>
                  </div>
                  <span class="footer-brand-name">yoki</span>
                </div>
                <p class="footer-description mb-4">Your premium destination for quality products and exceptional shopping experience.</p>
                <div class="social-links">
                  <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="social-link"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h6 class="footer-title mb-3">Shop</h6>
                <ul class="footer-links">
                  <li><router-link to="/products">All Products</router-link></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Best Sellers</a></li>
                  <li><a href="#">Sale Items</a></li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h6 class="footer-title mb-3">Support</h6>
                <ul class="footer-links">
                  <li><router-link to="/contact">Help Center</router-link></li>
                  <li><a href="#">Shipping Info</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Size Guide</a></li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h6 class="footer-title mb-3">Company</h6>
                <ul class="footer-links">
                  <li><router-link to="/about">About Us</router-link></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h6 class="footer-title mb-3">Legal</h6>
                <ul class="footer-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                  <li><a href="#">GDPR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <hr class="footer-divider">
          <div class="row align-items-center py-3">
            <div class="col-md-6 mb-2 mb-md-0">
              <p class="copyright mb-0">&copy; 2024 yoki. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-md-end">
              <div class="payment-methods">
                <span class="payment-text me-3">We Accept:</span>
                <i class="bi bi-credit-card payment-icon"></i>
                <i class="bi bi-paypal payment-icon"></i>
                <i class="bi bi-apple payment-icon"></i>
                <i class="bi bi-google payment-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { cartItemsCount } from './stores/cart.js'

export default {
  name: 'App',
  setup() {
    return {
      cartItemsCount
    }
  }
}
</script>

<style>

.premium-navbar {
  background: white;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.brand-logo {
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand-logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: var(--gradient-accent);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: var(--shadow-md);
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1;
}

.brand-tagline {
  font-size: 0.7rem;
  color: var(--text-light);
  font-weight: 400;
  letter-spacing: 0.5px;
}

.premium-nav-link {
  color: var(--text-dark);
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.premium-nav-link:hover,
.premium-nav-link.active {
  color: var(--text-dark);
  background: #f8f9fa;
  transform: translateY(-2px);
}

.premium-nav-link.active {
  box-shadow: var(--shadow-sm);
}

.premium-cart-btn {
  background: var(--gradient-secondary);
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);
}

.premium-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  color: white;
}

.cart-badge {
  background: var(--accent-color) !important;
  font-size: 0.7rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.user-profile {
  border: none;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.user-profile:hover {
  transform: scale(1.1);
}

.custom-toggler {
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.25rem 0.5rem;
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}


.main-content {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}


.enhanced-footer {
  background: var(--bg-dark);
  color: white;
  border-top: 1px solid #333;
}

.footer-main {
  border-bottom: 1px solid #333;
}

.footer-brand .footer-brand-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.5px;
}

.footer-logo-icon {
  width: 50px;
  height: 50px;
  background: white;
  color: var(--bg-dark);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
}

.footer-description {
  color: #bbb;
  line-height: 1.7;
  font-size: 0.95rem;
  max-width: 280px;
}

.footer-section {
  padding-left: 1rem;
}

.footer-title {
  font-weight: 600;
  color: white;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #bbb;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: inline-block;
  position: relative;
}

.footer-links a:hover {
  color: white;
  transform: translateX(8px);
}

.footer-links a::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.footer-links a:hover::before {
  width: 10px;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #2a2a2a;
  color: #bbb;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid #404040;
  font-size: 1.1rem;
}

.social-link:hover {
  background: white;
  color: var(--bg-dark);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
  border-color: white;
}


.footer-bottom {
  padding-top: 1rem;
}

.footer-divider {
  border-color: #404040;
  margin: 0 0 1.5rem 0;
  opacity: 0.6;
}

.copyright {
  color: #888;
  font-size: 0.85rem;
  font-weight: 400;
}

.payment-methods {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.payment-text {
  color: #888;
  font-size: 0.85rem;
  font-weight: 500;
}

.payment-icon {
  font-size: 1.6rem;
  color: #666;
  transition: all 0.3s ease;
  padding: 0.25rem;
}

.payment-icon:hover {
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .footer-section {
    padding-left: 0;
    margin-bottom: 2rem;
  }
  
  .footer-brand .footer-brand-name {
    font-size: 1.5rem;
  }
  
  .footer-logo-icon {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
  
  .newsletter-form {
    margin-left: 0;
    margin-top: 1rem;
  }
  
  .payment-methods {
    justify-content: center;
    margin-top: 1rem;
  }
}

.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.card {
  border: none;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 768px) {
  .brand-name {
    font-size: 1.3rem;
  }
  
  .brand-tagline {
    display: none;
  }
  
  .premium-nav-link {
    padding: 0.75rem 1rem !important;
    margin: 0.25rem 0;
  }
  
  .cart-text {
    display: none;
  }
  
  .main-content {
    margin-top: 70px;
  }
}

html {
  scroll-behavior: smooth;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>
