<template>
  <div class="cart">
    <div class="container py-5">
      <!-- Page Header -->
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="display-4 fw-bold mb-3">Shopping Cart</h1>
          <p class="lead text-muted">Review your selected items</p>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-if="cartItems.length === 0" class="row">
        <div class="col-12">
          <div class="card shadow-sm border-0">
            <div class="card-body text-center py-5">
              <i class="bi bi-cart-x display-1 text-muted mb-4"></i>
              <h3 class="mb-3">Your cart is empty</h3>
              <p class="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
              <router-link to="/products" class="btn btn-primary btn-lg">
                <i class="bi bi-shop me-2"></i>
                Start Shopping
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Cart Items -->
      <div v-else class="row">
        <div class="col-lg-8">
          <div class="card shadow-sm border-0 mb-4">
            <div class="card-header bg-white">
              <h5 class="mb-0 fw-bold">Cart Items ({{ cartItemsCount }} items)</h5>
            </div>
            <div class="card-body p-0">
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead class="table-light">
                    <tr>
                      <th scope="col" class="border-0">Product</th>
                      <th scope="col" class="border-0 text-center">Price</th>
                      <th scope="col" class="border-0 text-center">Quantity</th>
                      <th scope="col" class="border-0 text-center">Total</th>
                      <th scope="col" class="border-0 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in cartItems" :key="item.id" class="align-middle">
                      <!-- Product Info -->
                      <td class="py-3">
                        <div class="d-flex align-items-center">
                          <img 
                            :src="item.image" 
                            :alt="item.title"
                            class="cart-item-image me-3"
                            @error="onImageError"
                          >
                          <div>
                            <h6 class="mb-1 fw-bold">{{ truncateTitle(item.title) }}</h6>
                            <small class="text-muted">ID: {{ item.id }}</small>
                          </div>
                        </div>
                      </td>

                      <!-- Price -->
                      <td class="text-center py-3">
                        <span class="fw-bold text-primary">${{ item.price.toFixed(2) }}</span>
                      </td>

                      <!-- Quantity Controls -->
                      <td class="text-center py-3">
                        <div class="d-flex align-items-center justify-content-center">
                          <button 
                            @click="decreaseQuantity(item.id)"
                            class="btn btn-outline-secondary btn-sm me-2"
                            :disabled="updatingQuantity === item.id"
                          >
                            <i class="bi bi-dash"></i>
                          </button>
                          
                          <span class="mx-2 fw-bold quantity-display">
                            <span v-if="updatingQuantity === item.id" class="spinner-border spinner-border-sm"></span>
                            <span v-else>{{ item.quantity }}</span>
                          </span>
                          
                          <button 
                            @click="increaseQuantity(item.id)"
                            class="btn btn-outline-secondary btn-sm ms-2"
                            :disabled="updatingQuantity === item.id"
                          >
                            <i class="bi bi-plus"></i>
                          </button>
                        </div>
                      </td>

                      <!-- Item Total -->
                      <td class="text-center py-3">
                        <span class="fw-bold">${{ (item.price * item.quantity).toFixed(2) }}</span>
                      </td>

                      <!-- Remove Button -->
                      <td class="text-center py-3">
                        <button 
                          @click="removeItem(item.id)"
                          class="btn btn-outline-danger btn-sm"
                          :disabled="removingItem === item.id"
                          :title="'Remove ' + item.title"
                        >
                          <span v-if="removingItem === item.id">
                            <span class="spinner-border spinner-border-sm"></span>
                          </span>
                          <i v-else class="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Cart Actions -->
          <div class="d-flex justify-content-between">
            <router-link to="/products" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i>
              Continue Shopping
            </router-link>
            <button @click="clearCart" class="btn btn-outline-danger" :disabled="clearingCart">
              <span v-if="clearingCart">
                <span class="spinner-border spinner-border-sm me-2"></span>
                Clearing...
              </span>
              <span v-else>
                <i class="bi bi-trash me-2"></i>
                Clear Cart
              </span>
            </button>
          </div>
        </div>

        <!-- Cart Summary -->
        <div class="col-lg-4">
          <div class="card shadow-sm border-0 sticky-top" style="top: 90px;">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0 fw-bold">Order Summary</h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>Items ({{ cartItemsCount }}):</span>
                <span>${{ cartTotal.toFixed(2) }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span class="text-success">Free</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>${{ (cartTotal * 0.1).toFixed(2) }}</span>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-4">
                <strong>Total:</strong>
                <strong class="text-primary">${{ (cartTotal * 1.1).toFixed(2) }}</strong>
              </div>
              
              <button class="btn btn-primary w-100 btn-lg mb-3" :disabled="processingCheckout">
                <span v-if="processingCheckout">
                  <span class="spinner-border spinner-border-sm me-2"></span>
                  Processing...
                </span>
                <span v-else>
                  <i class="bi bi-credit-card me-2"></i>
                  Proceed to Checkout
                </span>
              </button>
              
              <div class="text-center">
                <small class="text-muted">
                  <i class="bi bi-shield-check me-1"></i>
                  Secure checkout with SSL encryption
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Toast -->
    <div 
      v-if="showToast" 
      class="toast-container position-fixed bottom-0 end-0 p-3"
    >
      <div class="toast show" role="alert">
        <div class="toast-header" :class="toastType === 'success' ? 'bg-success text-white' : 'bg-warning text-dark'">
          <i :class="toastType === 'success' ? 'bi bi-check-circle me-2' : 'bi bi-info-circle me-2'"></i>
          <strong class="me-auto">{{ toastType === 'success' ? 'Success' : 'Info' }}</strong>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { 
  cartItems, 
  cartTotal, 
  cartItemsCount, 
  updateQuantity, 
  removeFromCart 
} from '../stores/cart.js'

export default {
  name: 'Cart',
  setup() {
    const updatingQuantity = ref(null)
    const removingItem = ref(null)
    const clearingCart = ref(false)
    const processingCheckout = ref(false)
    const showToast = ref(false)
    const toastMessage = ref('')
    const toastType = ref('success')

    const showNotification = (message, type = 'success') => {
      toastMessage.value = message
      toastType.value = type
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    }

    const increaseQuantity = async (productId) => {
      updatingQuantity.value = productId
      await new Promise(resolve => setTimeout(resolve, 200))
      
      const item = cartItems.value.find(item => item.id === productId)
      if (item) {
        updateQuantity(productId, item.quantity + 1)
        showNotification('Quantity updated successfully')
      }
      
      updatingQuantity.value = null
    }

    const decreaseQuantity = async (productId) => {
      updatingQuantity.value = productId
      await new Promise(resolve => setTimeout(resolve, 200))
      
      const item = cartItems.value.find(item => item.id === productId)
      if (item) {
        if (item.quantity > 1) {
          updateQuantity(productId, item.quantity - 1)
          showNotification('Quantity updated successfully')
        } else {
          removeFromCart(productId)
          showNotification('Item removed from cart', 'info')
        }
      }
      
      updatingQuantity.value = null
    }

    const removeItem = async (productId) => {
      removingItem.value = productId
      await new Promise(resolve => setTimeout(resolve, 300))
      
      removeFromCart(productId)
      showNotification('Item removed from cart', 'info')
      
      removingItem.value = null
    }

    const clearCart = async () => {
      if (confirm('Are you sure you want to clear all items from your cart?')) {
        clearingCart.value = true
        await new Promise(resolve => setTimeout(resolve, 500))
        
        cartItems.value.splice(0)
        localStorage.removeItem('vue-cart')
        showNotification('Cart cleared successfully', 'info')
        
        clearingCart.value = false
      }
    }

    const truncateTitle = (title) => {
      return title.length > 40 ? title.substring(0, 40) + '...' : title
    }

    const onImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/80x80?text=No+Image'
    }

    return {
      cartItems,
      cartTotal,
      cartItemsCount,
      updatingQuantity,
      removingItem,
      clearingCart,
      processingCheckout,
      showToast,
      toastMessage,
      toastType,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
      clearCart,
      truncateTitle,
      onImageError
    }
  }
}
</script>

<style scoped>
.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 0.375rem;
  background-color: #f8f9fa;
  padding: 0.5rem;
}

.quantity-display {
  min-width: 30px;
  display: inline-block;
}

.table td {
  vertical-align: middle;
}

.sticky-top {
  z-index: 1020;
}

.toast-container {
  z-index: 1050;
}

@media (max-width: 768px) {
  .table-responsive {
    font-size: 0.875rem;
  }
  
  .cart-item-image {
    width: 60px;
    height: 60px;
  }
  
  .btn-sm {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
  
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
}

.card {
  transition: box-shadow 0.3s ease;
}

.table-hover tbody tr:hover {
  background-color: rgba(0,0,0,0.025);
}

.btn:disabled {
  opacity: 0.6;
}
</style>
