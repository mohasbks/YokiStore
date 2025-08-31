<template>
  <div class="contact">
    <div class="container py-5">
      <!-- Page Header -->
      <div class="row mb-5">
        <div class="col-12 text-center">
          <div class="contact-hero mb-4">
            <div class="contact-eyebrow mb-3">
              <span class="eyebrow-contact">GET IN TOUCH</span>
            </div>
            <h1 class="contact-title mb-3">Contact yoki</h1>
            <p class="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Contact Form -->
        <div class="col-lg-8 mx-auto">
          <div class="card shadow-sm border-0">
            <div class="card-body p-5">
              <h3 class="mb-4 contact-form-title">Send us a Message</h3>
              
              <!-- Success Alert -->
              <div v-if="showSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle me-2"></i>
                <strong>Thank you for contacting us!</strong> We'll get back to you soon.
                <button type="button" class="btn-close" @click="showSuccess = false"></button>
              </div>

              <form @submit.prevent="submitForm" novalidate>
                <!-- Name Field -->
                <div class="mb-4">
                  <label for="name" class="form-label fw-bold">Name *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': errors.name }"
                    id="name"
                    placeholder="Enter your full name"
                    @blur="validateField('name')"
                    @input="clearFieldError('name')"
                  >
                  <div v-if="errors.name" class="invalid-feedback">
                    {{ errors.name }}
                  </div>
                </div>

                <!-- Email Field -->
                <div class="mb-4">
                  <label for="email" class="form-label fw-bold">Email Address *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="form-control form-control-lg"
                    :class="{ 'is-invalid': errors.email }"
                    id="email"
                    placeholder="Enter your email address"
                    @blur="validateField('email')"
                    @input="clearFieldError('email')"
                  >
                  <div v-if="errors.email" class="invalid-feedback">
                    {{ errors.email }}
                  </div>
                </div>

                <!-- Subject Field (Optional) -->
                <div class="mb-4">
                  <label for="subject" class="form-label fw-bold">Subject</label>
                  <input
                    v-model="form.subject"
                    type="text"
                    class="form-control form-control-lg"
                    id="subject"
                    placeholder="What is this about?"
                  >
                </div>

                <!-- Message Field -->
                <div class="mb-4">
                  <label for="message" class="form-label fw-bold">Message *</label>
                  <textarea
                    v-model="form.message"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    @blur="validateField('message')"
                    @input="clearFieldError('message')"
                  ></textarea>
                  <div v-if="errors.message" class="invalid-feedback">
                    {{ errors.message }}
                  </div>
                </div>

                <!-- Newsletter Subscription -->
                <div class="mb-4">
                  <div class="form-check">
                    <input
                      v-model="form.subscribe"
                      class="form-check-input"
                      type="checkbox"
                      id="subscribe"
                    >
                    <label class="form-check-label" for="subscribe">
                      Subscribe to our newsletter for updates and offers
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="d-grid gap-2">
                  <button 
                    type="submit" 
                    class="btn btn-primary btn-lg"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <span class="spinner-border spinner-border-sm me-2"></span>
                      Sending Message...
                    </span>
                    <span v-else>
                      <i class="bi bi-envelope me-2"></i>
                      Send Message
                    </span>
                  </button>
                </div>

                <div class="mt-3 text-center">
                  <small class="text-muted">
                    * Required fields. We respect your privacy and won't share your information.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="row mt-5">
        <div class="col-lg-10 mx-auto">
          <div class="card bg-light border-0">
            <div class="card-body p-4">
              <h4 class="mb-4 text-center text-primary">Other Ways to Reach Us</h4>
              
              <div class="row g-4 text-center">
                <div class="col-md-4">
                  <div class="contact-info">
                    <i class="bi bi-geo-alt display-5 text-primary mb-3"></i>
                    <h5 class="fw-bold mb-2">Visit Us</h5>
                    <p class="text-muted mb-0">
                      123 Fashion Avenue<br>
                      Style District, NY 10001
                    </p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="contact-info">
                    <i class="bi bi-telephone display-5 text-success mb-3"></i>
                    <h5 class="fw-bold mb-2">Call Us</h5>
                    <p class="text-muted mb-0">
                      +1 (555) 123-4567<br>
                      Mon - Fri, 9AM - 6PM
                    </p>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <div class="contact-info">
                    <i class="bi bi-envelope display-5 text-info mb-3"></i>
                    <h5 class="fw-bold mb-2">Email Us</h5>
                    <p class="text-muted mb-0">
                      hello@yoki.com<br>
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'Contact',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
      subscribe: false
    })

    const errors = ref({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    // Validation rules
    const validateField = (fieldName) => {
      switch (fieldName) {
        case 'name':
          if (!form.name.trim()) {
            errors.value.name = 'Name is required'
          } else if (form.name.trim().length < 2) {
            errors.value.name = 'Name must be at least 2 characters long'
          } else {
            delete errors.value.name
          }
          break

        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!form.email.trim()) {
            errors.value.email = 'Email is required'
          } else if (!emailRegex.test(form.email)) {
            errors.value.email = 'Please enter a valid email address'
          } else {
            delete errors.value.email
          }
          break

        case 'message':
          if (!form.message.trim()) {
            errors.value.message = 'Message is required'
          } else if (form.message.trim().length < 10) {
            errors.value.message = 'Message must be at least 10 characters long'
          } else {
            delete errors.value.message
          }
          break
      }
    }

    // Clear individual field error
    const clearFieldError = (fieldName) => {
      if (errors.value[fieldName]) {
        delete errors.value[fieldName]
      }
    }

    // Validate all required fields
    const validateForm = () => {
      validateField('name')
      validateField('email')
      validateField('message')
      return Object.keys(errors.value).length === 0
    }

    // Submit form
    const submitForm = async () => {
      // Validate all fields
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Reset form on success
        form.name = ''
        form.email = ''
        form.subject = ''
        form.message = ''
        form.subscribe = false

        // Show success message
        showSuccess.value = true

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          showSuccess.value = false
        }, 5000)

        console.log('Contact form submitted successfully:', {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          subscribe: form.subscribe
        })

      } catch (error) {
        console.error('Error submitting form:', error)
        // Handle error (could show error alert)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      showSuccess,
      validateField,
      clearFieldError,
      submitForm
    }
  }
}
</script>

<style scoped>
.contact-info {
  transition: transform 0.3s ease;
}

.contact-info:hover {
  transform: translateY(-5px);
}

.form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.form-control.is-invalid:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.card {
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
}

.btn:disabled {
  opacity: 0.7;
}

.alert {
  border: none;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .card-body.p-5 {
    padding: 2rem !important;
  }
  
  .display-5 {
    font-size: 2rem;
  }
}

/* Contact Page Premium Styling */
.contact-eyebrow {
  margin-bottom: 1rem;
}

.eyebrow-contact {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--text-light);
  text-transform: uppercase;
  position: relative;
  padding-left: 2rem;
}

.eyebrow-contact::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1px;
  background: var(--text-light);
}

.contact-title {
  font-size: 3.5rem;
  font-weight: 300;
  color: var(--text-dark);
  letter-spacing: var(--letter-spacing-wide);
  line-height: 1.1;
}

.contact-subtitle {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-form-title {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-dark);
  letter-spacing: 0.05em;
}

/* Custom form styling */
.form-label {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.025em;
}

.form-control-lg {
  border-radius: var(--border-radius-md);
  padding: 1rem 1.25rem;
  border: 1px solid var(--border-light);
  transition: var(--transition-smooth);
  font-size: 0.95rem;
}

.form-control:focus {
  border-color: var(--text-dark);
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
}

textarea.form-control {
  resize: vertical;
  min-height: 140px;
  line-height: 1.6;
}

.form-check-input:checked {
  background-color: var(--text-dark);
  border-color: var(--text-dark);
}

.btn-primary {
  background: var(--text-dark);
  border-color: var(--text-dark);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 1rem 2rem;
  border-radius: var(--border-radius-md);
}

.btn-primary:hover {
  background: #333;
  border-color: #333;
  transform: translateY(-1px);
  box-shadow: var(--shadow-medium);
}
</style>
