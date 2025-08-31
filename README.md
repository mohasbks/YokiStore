<div align="center">
  <h1 align="center">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/YOKI-000000?style=for-the-badge&logo=github&logoColor=white&labelColor=121212&color=121212">
      <img alt="YOKI" src="https://img.shields.io/badge/YOKI-ffffff?style=for-the-badge&logo=github&logoColor=black&labelColor=f8f9fa&color=f8f9fa">
    </picture>
  </h1>
  <p align="center">
    <strong>Premium Fashion Experience</strong>
  </p>
  <div align="center" style="margin: 20px 0;">
    <img src="https://img.shields.io/badge/Modern-Elegant-ff69b4?style=flat-square" alt="Modern Elegant">
    <img src="https://img.shields.io/badge/Luxury-Fashion-000000?style=flat-square" alt="Luxury Fashion">
    <img src="https://img.shields.io/badge/Exclusive-Collection-8a2be2?style=flat-square" alt="Exclusive Collection">
  </div>
</div>

<div align="center">
  <img src="https://svgshare.com/i/14zG.svg" width="100%" alt="YOKI Banner Divider">
</div>

# Yoki - Premium Fashion Store

A modern, elegant e-commerce platform built with Vue 3, offering a curated collection of premium fashion items with a seamless shopping experience.

## ✨ Features

### 🛍️ Premium Shopping Experience
- **Curated Collections**: Handpicked selection of premium fashion items
- **Seamless Navigation**: Intuitive product browsing and filtering
- **Responsive Design**: Perfect shopping experience on all devices
- **Secure Checkout**: Safe and easy payment process
- **Wishlist**: Save your favorite items for later

### 🎨 Modern UI/UX
- **Responsive Design**: Bootstrap 5 responsive grid system
- **Modern Components**: Cards, tables, forms, and navigation
- **Interactive Elements**: Hover effects, animations, and transitions
- **Toast Notifications**: User feedback for actions

### 📱 Pages
1. **Home**: Hero section, features showcase, call-to-action
2. **Products**: API-integrated product grid with search functionality
3. **About**: Company information and team details
4. **Cart**: Full cart management with checkout summary
5. **Contact**: Form validation and contact information

## 🛠 Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Routing**: Vue Router 4
- **Styling**: Bootstrap 5 + Custom CSS
- **Build Tool**: Vite
- **Icons**: Bootstrap Icons
- **Deployment**: GitHub Pages

## 🏗 Project Structure

```
src/
├── main.js              # Application entry point
├── App.vue              # Root component with navbar
├── router/
│   └── index.js         # Vue Router configuration
├── stores/
│   └── cart.js          # Cart state management
└── views/
    ├── Home.vue         # Home page with hero section
    ├── Products.vue     # Products with API integration
    ├── About.vue        # About page
    ├── Cart.vue         # Shopping cart
    └── Contact.vue      # Contact form
```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🌟 Key Features

### 🔍 Search with Watcher
- Real-time product filtering using Vue watchers
- Search by product title, description, and category
- Responsive search bar with Bootstrap styling

### 🛒 Cart Management
- Add products to cart with animated feedback
- Quantity controls with +/- buttons
- Remove individual items or clear entire cart
- Real-time total calculation including tax
- Cart badge showing item count in navbar

### 📝 Form Validation
- Required field validation for contact form
- Email format validation
- Real-time error display
- Bootstrap form styling with validation states

### 💾 LocalStorage Integration
- Cart state persists across browser sessions
- Automatic save/load functionality
- Error handling for storage operations

### 🎯 API Integration
- Fetch products from Fake Store API
- Loading states and error handling
- Responsive product cards with hover effects
- Image fallback for missing product images

## Bootstrap Components Used

- **Layout**: Container, row, col, card
- **Navigation**: Navbar, nav-link, badge
- **Buttons**: btn, btn-primary, btn-outline-*
- **Forms**: form-control, form-label, form-check
- **Tables**: table, table-hover, table-responsive
- **Utilities**: py-5, text-center, d-flex, etc.

## Vue 3 Features

- **Composition API**: Modern reactive state management
- **Script Setup**: Clean component syntax
- **Reactive**: Reactive data and computed properties
- **Watchers**: Real-time search functionality
- **Lifecycle**: onMounted for API calls

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for learning purposes.

## Contributing

This is a learning project demonstrating Vue 3 best practices. Feel free to fork and experiment!
