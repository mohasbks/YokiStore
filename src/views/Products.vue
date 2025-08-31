<template>
  <div class="products">
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold mb-3">Our Products</h1>
          <p class="lead text-muted">Discover amazing products from our curated collection</p>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-6 mx-auto">
          <div class="input-group input-group-lg">
            <span class="input-group-text">
              <i class="bi bi-search"></i>
            </span>
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search products..."
              @input="onSearchInput"
            >
          </div>
        </div>
      </div>
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-3 text-muted">Loading products...</p>
      </div>

      <div v-else-if="error" class="alert alert-danger text-center">
        <i class="bi bi-exclamation-triangle me-2"></i>
        {{ error }}
      </div>
      <div v-else class="row g-4">
        <div v-for="product in filteredProducts" :key="product.id" class="col-lg-3 col-md-4 col-sm-6">
          <div class="card h-100 shadow-sm border-0 product-card">
            <div class="card-img-container">
              <img 
                :src="product.image" 
                :alt="product.title"
                class="card-img-top product-image"
                @error="onImageError"
              >
            </div>
            <div class="card-body d-flex flex-column">
              <h6 class="card-title fw-bold mb-2" :title="product.title">
                {{ truncateTitle(product.title) }}
              </h6>
              <p class="card-text text-muted small flex-grow-1">
                {{ truncateDescription(product.description) }}
              </p>
              <div class="mt-auto">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="h5 mb-0 text-primary fw-bold">${{ product.price }}</span>
                  <div class="badge bg-secondary">{{ product.category }}</div>
                </div>
                <button 
                  @click="addToCart(product)"
                  class="btn btn-primary w-100"
                  :disabled="adding === product.id"
                >
                  <span v-if="adding === product.id">
                    <span class="spinner-border spinner-border-sm me-2"></span>
                    Adding...
                  </span>
                  <span v-else>
                    <i class="bi bi-cart-plus me-2"></i>
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!loading && !error && filteredProducts.length === 0" class="text-center py-5">
        <i class="bi bi-search display-4 text-muted mb-3"></i>
        <h3 class="text-muted">No products found</h3>
        <p class="text-muted">Try adjusting your search criteria</p>
      </div>
    </div>

    <div 
      v-if="showSuccessToast" 
      class="toast-container position-fixed bottom-0 end-0 p-3"
    >
      <div class="toast show" role="alert">
        <div class="toast-header bg-success text-white">
          <i class="bi bi-check-circle me-2"></i>
          <strong class="me-auto">Success</strong>
        </div>
        <div class="toast-body">
          Product added to cart successfully!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import { addToCart as addProductToCart } from '../stores/cart.js'

export default {
  name: 'Products',
  setup() {
    const products = ref([])
    const loading = ref(false)
    const error = ref('')
    const searchQuery = ref('')
    const adding = ref(null)
    const showSuccessToast = ref(false)
    const fetchProducts = async () => {
      loading.value = true
      error.value = ''
      
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        products.value = data
      } catch (err) {
        error.value = 'Failed to load products. Please try again later.'
        console.error('Error fetching products:', err)
      } finally {
        loading.value = false
      }
    }

    const filteredProducts = computed(() => {
      if (!searchQuery.value.trim()) {
        return products.value
      }
      
      const query = searchQuery.value.toLowerCase().trim()
      return products.value.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      )
    })

    watch(searchQuery, (newQuery) => {
      console.log('Searching for:', newQuery)
    })

    const onSearchInput = () => {
      // Additional search handling if needed
    }

    // Add product to cart
    const addToCart = async (product) => {
      adding.value = product.id
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 300))
      
      addProductToCart(product)
      adding.value = null
      
      // Show success message
      showSuccessToast.value = true
      setTimeout(() => {
        showSuccessToast.value = false
      }, 3000)
    }

    // Utility functions
    const truncateTitle = (title) => {
      return title.length > 50 ? title.substring(0, 50) + '...' : title
    }

    const truncateDescription = (description) => {
      return description.length > 100 ? description.substring(0, 100) + '...' : description
    }

    const onImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/300x300?text=No+Image'
    }

    // Load products on component mount
    onMounted(() => {
      fetchProducts()
    })

    return {
      products,
      filteredProducts,
      loading,
      error,
      searchQuery,
      adding,
      showSuccessToast,
      addToCart,
      truncateTitle,
      truncateDescription,
      onImageError,
      onSearchInput
    }
  }
}
</script>

<style scoped>
.product-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
}

.card-img-container {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.card-title {
  height: 2.5em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.input-group-lg .input-group-text {
  padding: 0.75rem 1rem;
}

.toast-container {
  z-index: 1050;
}

.badge {
  font-size: 0.7rem;
  text-transform: capitalize;
}

@media (max-width: 768px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (max-width: 576px) {
  .col-sm-6 {
    width: 100%;
  }
}
</style>
