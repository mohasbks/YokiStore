<template>
  <div class="home fade-in-up">
    <!-- Premium Hero Section with Background -->
    <section class="premium-hero-bg">
      <div class="hero-background-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="hero-content-centered">
              <div class="hero-eyebrow mb-4">
                <span class="eyebrow-text">NEW COLLECTION</span>
              </div>
              <h1 class="hero-title-bg mb-4">
                Timeless
                <br>
                <em>Elegance</em>
              </h1>
              <p class="hero-description-bg mb-5">
                Discover our carefully curated selection of premium pieces. 
                Each item tells a story of craftsmanship and contemporary design.
              </p>
              <div class="hero-actions-centered">
                <router-link to="/products" class="btn btn-hero-white me-4">
                  Explore Collection
                </router-link>
                <a href="#featured" class="btn btn-hero-white-outline">
                  View Lookbook
                </a>
              </div>
              <div class="hero-metrics-bg mt-5">
                <div class="row justify-content-center">
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-4">
                        <div class="metric-item-bg">
                          <div class="metric-number-bg">10K+</div>
                          <div class="metric-label-bg">Pieces</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="metric-item-bg">
                          <div class="metric-number-bg">50+</div>
                          <div class="metric-label-bg">Brands</div>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="metric-item-bg">
                          <div class="metric-number-bg">24/7</div>
                          <div class="metric-label-bg">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section id="featured" class="premium-collection py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="collection-header text-center mb-5">
              <div class="section-eyebrow mb-3">
                <span class="eyebrow-featured">CURATED COLLECTION</span>
              </div>
              <h2 class="section-title-enhanced">Featured Products</h2>
              <p class="section-subtitle-enhanced">Discover our handpicked selection of premium products crafted with exceptional attention to detail</p>
              <div class="section-divider"></div>
            </div>
          </div>
        </div>
        
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3">Loading products...</p>
        </div>

        <div v-else class="row g-4">
          <div v-for="product in featuredProducts" :key="product.id" class="col-lg-3 col-md-6">
            <div class="featured-product-card">
              <div class="product-image-container">
                <img :src="product.image" :alt="product.title" class="product-image">
                <div class="product-overlay">
                  <button class="btn quick-view-btn" @click="quickView(product)">
                    <i class="bi bi-eye"></i>
                  </button>
                </div>
              </div>
              <div class="product-info">
                <h5 class="product-title">{{ truncateTitle(product.title) }}</h5>
                <p class="product-price">${{ product.price }}</p>
                <button class="btn add-to-cart-btn" @click="addToCart(product)">
                  <i class="bi bi-cart-plus me-2"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12 text-center">
            <router-link to="/products" class="btn enhanced-btn-outline btn-lg">
              <i class="bi bi-grid me-2"></i>
              View All Products
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Featured Collection -->
    <section class="premium-collection section-spacing" id="featured">
      <div class="container">
        <div class="collection-header text-center mb-5">
          <div class="collection-eyebrow mb-3">
            <span class="eyebrow-text">FEATURED COLLECTION</span>
          </div>
          <h2 class="collection-title display-4 mb-4">
            Curated for You
          </h2>
          <p class="collection-subtitle text-muted-premium mx-auto" style="max-width: 600px;">
            Each piece in our collection is thoughtfully selected for its exceptional quality, 
            timeless design, and contemporary relevance.
          </p>
        </div>
        
        <div v-if="loading" class="loading-state text-center py-5">
          <div class="premium-spinner">
            <div class="spinner-ring"></div>
          </div>
          <p class="loading-text mt-4">Curating your collection...</p>
        </div>
        
        <div v-else class="collection-grid">
          <div v-for="product in featuredProducts" :key="product.id" class="collection-item">
            <div class="product-card-premium">
              <div class="product-image-wrapper">
                <img :src="product.image" :alt="product.title" class="product-image-premium">
                <div class="product-actions-overlay">
                  <button @click="quickView(product)" class="action-btn quick-view-btn">
                    <i class="bi bi-eye"></i>
                  </button>
                  <button @click="addToCart(product)" class="action-btn add-cart-btn">
                    <i class="bi bi-bag-plus"></i>
                  </button>
                </div>
                <div class="product-badge" v-if="product.rating?.rate >= 4.5">
                  <span>Bestseller</span>
                </div>
              </div>
              <div class="product-details">
                <div class="product-category">{{ product.category }}</div>
                <h3 class="product-name">{{ truncateTitle(product.title) }}</h3>
                <div class="product-price-section">
                  <span class="product-price">${{ product.price }}</span>
                  <div class="product-rating">
                    <div class="stars">
                      <i class="bi bi-star-fill"></i>
                      <span class="rating-value">{{ product.rating?.rate || 4.5 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Premium Services Section -->
    <section class="premium-services section-spacing">
      <div class="container">
        <div class="services-header text-center mb-5">
          <div class="services-eyebrow mb-3">
            <span class="eyebrow-text">PREMIUM SERVICES</span>
          </div>
          <h2 class="services-title display-5 mb-4">
            Elevated Experience
          </h2>
          <p class="services-subtitle text-muted-premium mx-auto" style="max-width: 500px;">
            Every detail matters. From selection to delivery, 
            we ensure an uncompromising standard of excellence.
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-item">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-truck"></i>
              </div>
              <h3 class="service-title">Complimentary Delivery</h3>
              <p class="service-description">
                Free express shipping on orders over $100. 
                Same-day delivery available in select cities.
              </p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <h3 class="service-title">Secure Transactions</h3>
              <p class="service-description">
                Bank-level encryption and fraud protection. 
                Your privacy and security are our priority.
              </p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-arrow-repeat"></i>
              </div>
              <h3 class="service-title">Effortless Returns</h3>
              <p class="service-description">
                60-day return window with prepaid labels. 
                No questions asked, complete satisfaction guaranteed.
              </p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-person-check"></i>
              </div>
              <h3 class="service-title">Personal Styling</h3>
              <p class="service-description">
                Complimentary styling consultation with our experts. 
                Curated recommendations just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Features Section -->
    <section class="enhanced-features-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="features-title-enhanced mb-4">
              Why Choose VueShop
            </h2>
            <p class="features-subtitle-enhanced">
              Experience the difference with our premium services
            </p>
          </div>
        </div>
        
        <div class="row g-4">
          <!-- Feature 1: Premium Quality -->
          <div class="col-lg-4 col-md-6">
            <div class="enhanced-feature-card text-center">
              <div class="feature-icon-enhanced mb-4">
                <i class="bi bi-gem"></i>
              </div>
              <h5 class="feature-title-enhanced mb-3">Premium Quality</h5>
              <p class="feature-description-enhanced">
                Every product meets the highest standards of quality and craftsmanship, ensuring you receive only the best.
              </p>
            </div>
          </div>

          <!-- Feature 2: Fast Delivery -->
          <div class="col-lg-4 col-md-6">
            <div class="enhanced-feature-card text-center">
              <div class="feature-icon-enhanced mb-4">
                <i class="bi bi-lightning-charge"></i>
              </div>
              <h5 class="feature-title-enhanced mb-3">Fast Delivery</h5>
              <p class="feature-description-enhanced">
                Experience our delivery system that gets your orders to you quickly without compromising on care.
              </p>
            </div>
          </div>

          <!-- Feature 3: 24/7 Support -->
          <div class="col-lg-4 col-md-6">
            <div class="enhanced-feature-card text-center">
              <div class="feature-icon-enhanced mb-4">
                <i class="bi bi-headset"></i>
              </div>
              <h5 class="feature-title-enhanced mb-3">24/7 Support</h5>
              <p class="feature-description-enhanced">
                Our dedicated support team is always ready to assist you with personalized service and solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Simple Newsletter Section -->
    <section class="simple-newsletter-section py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="newsletter-content-simple">
              <h3 class="newsletter-title-simple mb-3">
                Stay in the Loop
              </h3>
              <p class="newsletter-description-simple mb-4">
                Be the first to know about new arrivals, exclusive offers, and premium collections.
              </p>
              <div class="newsletter-form-simple">
                <div class="input-group mb-3">
                  <input type="email" class="form-control newsletter-input-simple" placeholder="Enter your email address">
                  <button class="btn simple-btn-primary newsletter-btn-simple" type="button">
                    Subscribe
                  </button>
                </div>
                <small class="newsletter-note-simple">
                  We respect your privacy. Unsubscribe at any time.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { addToCart as addToCartStore } from '../stores/cart.js'

export default {
  name: 'Home',
  setup() {
    const featuredProducts = ref([])
    const loading = ref(true)

    const fetchFeaturedProducts = async () => {
      try {
        loading.value = true
        const response = await fetch('https://fakestoreapi.com/products?limit=4')
        const products = await response.json()
        featuredProducts.value = products
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        loading.value = false
      }
    }

    const truncateTitle = (title) => {
      return title.length > 20 ? title.substring(0, 20) + '...' : title
    }

    const addToCart = (product) => {
      addToCartStore(product)
      // Show success message
      const toast = document.createElement('div')
      toast.className = 'toast-notification'
      toast.innerHTML = `
        <div class="toast-content">
          <i class="bi bi-check-circle-fill text-success me-2"></i>
          Product added to cart!
        </div>
      `
      document.body.appendChild(toast)
      
      setTimeout(() => {
        toast.classList.add('show')
      }, 100)
      
      setTimeout(() => {
        toast.classList.remove('show')
        setTimeout(() => {
          document.body.removeChild(toast)
        }, 300)
      }, 2000)
    }

    const quickView = (product) => {
      alert(`Quick View: ${product.title}\nPrice: $${product.price}\nDescription: ${product.description.substring(0, 100)}...`)
    }

    onMounted(() => {
      fetchFeaturedProducts()
    })

    return {
      featuredProducts,
      loading,
      truncateTitle,
      addToCart,
      quickView
    }
  }
}
</script>

<style scoped>
/* Premium Hero Section with Background */
.premium-hero-bg {
  background-image: url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=90');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-content-centered {
  position: relative;
  z-index: 2;
  padding: 4rem 2rem;
}

.hero-eyebrow {
  margin-bottom: 2rem;
}

.eyebrow-text {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  position: relative;
  padding-left: 2.5rem;
}

.eyebrow-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);
}

.hero-title-bg {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-title-bg em {
  font-style: italic;
  font-weight: 400;
}

.hero-description-bg {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 3rem;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}

.hero-actions-centered {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

/* Hero Buttons - Simple & Elegant */
.btn-hero-white {
  background: white;
  color: var(--text-dark);
  border: none;
  padding: 0.9rem 2rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

.btn-hero-white:hover {
  background: #f8f9fa;
  color: var(--text-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

.btn-hero-white-outline {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.8);
  padding: 0.9rem 2rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-hero-white-outline:hover {
  background: white;
  color: var(--text-dark);
  border-color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

.hero-metrics-bg {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
}

.metric-item-bg {
  text-align: center;
}

.metric-number-bg {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  line-height: 1;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
}

.metric-label-bg {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.5rem;
}

/* Premium Collection Styles */
.premium-collection {
  background: #fafafa;
}

.collection-header {
  margin-bottom: 4rem;
}

.section-eyebrow {
  margin-bottom: 1rem;
}

.eyebrow-featured {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--text-light);
  text-transform: uppercase;
  position: relative;
  padding-left: 2rem;
}

.eyebrow-featured::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1px;
  background: var(--text-light);
}

.section-title-enhanced {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  letter-spacing: var(--letter-spacing-wide);
  line-height: 1.2;
}

.section-subtitle-enhanced {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  font-weight: 400;
}

.section-divider {
  width: 60px;
  height: 2px;
  background: var(--primary-color);
  margin: 0 auto;
}

.collection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.collection-item {
  position: relative;
}

.product-card-premium {
  background: white;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-light);
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;
}

.product-card-premium:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-heavy);
}

.product-image-wrapper {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-smooth);
}

.product-card-premium:hover .product-image {
  transform: scale(1.05);
}

.product-actions-overlay {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
}

.product-card-premium:hover .product-actions-overlay {
  opacity: 1;
  transform: translateY(0);
}

.action-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-smooth);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-light);
}

.action-btn:hover {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-details {
  padding: 1.5rem;
}

.product-category {
  font-size: 0.75rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  line-height: 1.3;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.product-price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
}

.product-rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #ffc107;
  font-size: 0.9rem;
}

.rating-value {
  color: var(--text-light);
  font-size: 0.85rem;
  margin-left: 0.25rem;
}

/* Premium Loading State */
.loading-state {
  padding: 4rem 0;
}

.premium-spinner {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.spinner-ring {
  width: 60px;
  height: 60px;
  border: 2px solid #f0f0f0;
  border-top: 2px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.hero-subtitle-simple {
  font-size: 1.2rem;
  color: var(--text-light);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.simple-btn-primary {
  background: var(--bg-dark);
  border: 2px solid var(--bg-dark);
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.simple-btn-primary:hover {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
}

.simple-btn-outline {
  background: transparent;
  border: 2px solid var(--bg-dark);
  color: var(--bg-dark);
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.simple-btn-outline:hover {
  background: var(--bg-dark);
  color: white;
}

/* Enhanced Hero Section Styles */
.hero-badge-simple {
  display: inline-block;
  background: var(--bg-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-title-enhanced {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.2;
}

.brand-highlight-enhanced {
  color: var(--text-dark);
  position: relative;
}

.brand-highlight-enhanced::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--text-dark);
}

.hero-subtitle-enhanced {
  font-size: 1.3rem;
  color: var(--text-light);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.enhanced-btn-primary {
  background: var(--bg-dark);
  border: 2px solid var(--bg-dark);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.enhanced-btn-primary:hover {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.enhanced-btn-outline {
  background: transparent;
  border: 2px solid var(--bg-dark);
  color: var(--bg-dark);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.enhanced-btn-outline:hover {
  background: var(--bg-dark);
  color: white;
  transform: translateY(-2px);
}

.hero-stats-simple {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.stat-number-simple {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1;
}

.stat-label-simple {
  font-size: 0.9rem;
  color: var(--text-light);
}

/* Premium Services Section */
.premium-services {
  background: white;
}

.services-header {
  margin-bottom: 4rem;
}

.services-eyebrow {
  margin-bottom: 1.5rem;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--text-dark);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.services-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-item {
  position: relative;
}

.service-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: var(--border-radius-md);
  border: 1px solid #f0f0f0;
  transition: var(--transition-smooth);
  height: 100%;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
  border-color: #e0e0e0;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: #f8f8f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: var(--text-dark);
  transition: var(--transition-smooth);
}

.service-card:hover .service-icon {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.service-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}

.service-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

.features-title-enhanced {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.features-subtitle-enhanced {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

.enhanced-feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;
  height: 100%;
}

.enhanced-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-color: var(--text-dark);
}

.feature-icon-enhanced {
  width: 80px;
  height: 80px;
  background: var(--bg-dark);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto;
}

.feature-title-enhanced {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.feature-description-enhanced {
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;
}

.hero-visual {
  height: 100vh;
  position: relative;
}

.hero-image-wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-badge-floating {
  position: absolute;
  top: 2rem;
  right: 2rem;
}

.floating-badge {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-medium);
}

.badge-text {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-dark);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-icon {
  font-size: 1rem;
}

.quick-view-btn {
  background: white;
  color: var(--text-dark);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.quick-view-btn:hover {
  background: var(--text-dark);
  color: white;
  transform: scale(1.1);
}

.product-info {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.3;
  height: 2.6rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-top: auto;
}

.add-to-cart-btn {
  background: var(--bg-dark);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
}

.add-to-cart-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  color: white;
}

/* Toast Notification */
.toast-notification {
  position: fixed;
  top: 100px;
  right: 20px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(400px);
  opacity: 0;
  transition: all 0.3s ease;
}

.toast-notification.show {
  transform: translateX(0);
  opacity: 1;
}

.toast-content {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--text-dark);
}

.hero-stats {
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
}

/* Simple About Section */
.simple-about-section {
  background: var(--bg-light);
  border-bottom: 1px solid #e5e5e5;
}

.about-content-simple {
  padding: 2rem 0;
}

.section-title-simple {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-subtitle-simple {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.section-description-simple {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.about-features-simple {
  margin-bottom: 2rem;
}

.feature-item-simple {
  font-size: 1rem;
  color: var(--text-light);
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.feature-item-simple:last-child {
  border-bottom: none;
}

/* Simple Newsletter Section */
.simple-newsletter-section {
  background: #f8f9fa;
  border-top: 1px solid #e5e5e5;
}

.newsletter-content-simple {
  padding: 2rem 0;
}

.newsletter-title-simple {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-dark);
}

.newsletter-description-simple {
  font-size: 1.1rem;
  color: var(--text-light);
  line-height: 1.6;
}

.newsletter-input-simple {
  border: 2px solid #e5e5e5;
  border-radius: 5px 0 0 5px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
}

.newsletter-input-simple:focus {
  border-color: var(--text-dark);
  box-shadow: none;
}

.newsletter-btn-simple {
  border-radius: 0 5px 5px 0;
  padding: 0.75rem 1.5rem;
}

.newsletter-note-simple {
  color: var(--text-light);
  font-size: 0.9rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Premium About Section */
.premium-about-section {
  background: var(--light-color);
  position: relative;
}

.about-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-image-container {
  position: relative;
  width: 250px;
  height: 250px;
}

.about-decoration {
  position: absolute;
  border-radius: 20px;
}

.decoration-1 {
  width: 150px;
  height: 150px;
  background: var(--gradient-primary);
  top: 0;
  left: 0;
  animation: float 8s ease-in-out infinite;
}

.decoration-2 {
  width: 100px;
  height: 100px;
  background: var(--gradient-secondary);
  bottom: 0;
  right: 0;
  animation: float 8s ease-in-out infinite reverse;
}

.about-main-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary-color);
  box-shadow: var(--shadow-xl);
  z-index: 2;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--dark-color);
  line-height: 1.2;
}

.section-description {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.7;
}

.feature-item {
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--dark-color);
}

/* Premium Features Section */
.premium-features-section {
  background: white;
  position: relative;
}

.premium-feature-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  height: 100%;
}

.premium-feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.feature-icon-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-icon-bg {
  position: absolute;
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.1;
}

.feature-icon {
  font-size: 2rem;
  color: var(--primary-color);
  z-index: 2;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.feature-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-link {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feature-link:hover {
  gap: 0.5rem;
}

/* Newsletter Section */
.newsletter-section {
  background: var(--dark-color);
  padding: 5rem 0;
}

.newsletter-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
}

.newsletter-title {
  font-size: 2rem;
  font-weight: 600;
  color: white;
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
}

.newsletter-input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 50px 0 0 50px;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--primary-color);
  color: white;
  box-shadow: none;
}

.newsletter-btn {
  border-radius: 0 50px 50px 0;
  padding: 1rem 1.5rem;
}

.newsletter-note {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.5rem;
  display: block;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content-centered {
    padding: 2rem 1rem;
  }
  
  .hero-title-bg {
    font-size: 2.8rem;
  }
  
  .hero-actions-centered {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .btn {
    text-align: center;
  }
  
  .collection-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .product-card-premium {
    max-width: 100%;
  }
  
  .product-image-wrapper {
    height: 180px;
  }
  
  .product-info {
    padding: 1rem;
  }
  
  .product-title {
    font-size: 0.85rem;
    height: 2.2rem;
  }
  
  .product-price {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .newsletter-card {
    padding: 2rem;
  }
  
  .newsletter-title {
    font-size: 1.5rem;
  }
}
</style>
