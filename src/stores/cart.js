import { ref, reactive, computed } from 'vue'

// Cart state management using Composition API
const cartItems = ref([])

// Load cart from localStorage on initialization
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('vue-cart')
    if (saved) {
      cartItems.value = JSON.parse(saved)
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
  }
}

// Save cart to localStorage
const saveCartToStorage = () => {
  try {
    localStorage.setItem('vue-cart', JSON.stringify(cartItems.value))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

// Add product to cart
const addToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cartItems.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }
  
  saveCartToStorage()
}

// Remove product from cart
const removeFromCart = (productId) => {
  const index = cartItems.value.findIndex(item => item.id === productId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
    saveCartToStorage()
  }
}

// Update quantity
const updateQuantity = (productId, newQuantity) => {
  const item = cartItems.value.find(item => item.id === productId)
  if (item) {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = newQuantity
      saveCartToStorage()
    }
  }
}

// Calculate total price
const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
})

// Get cart items count
const cartItemsCount = computed(() => {
  return cartItems.value.reduce((count, item) => count + item.quantity, 0)
})

// Initialize cart from localStorage
loadCartFromStorage()

export {
  cartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  cartTotal,
  cartItemsCount
}
