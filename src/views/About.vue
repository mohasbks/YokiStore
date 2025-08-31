<template>
  <div class="about">
    <!-- About Hero Section -->
    <section class="about-hero">
      <div class="about-hero-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="about-hero-content">
              <div class="about-eyebrow mb-4">
                <span class="eyebrow-text">OUR STORY</span>
              </div>
              <h1 class="about-hero-title mb-4">About yoki</h1>
              <p class="about-hero-description">
                Discover the passion, craftsmanship, and vision behind yoki's timeless fashion collections
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container py-5">

      <!-- Main Content -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto">
          <div class="card shadow-sm border-0">
            <div class="card-body p-5">
              <h2 class="h3 mb-4 text-primary">Our Story</h2>
              <p class="mb-4">
                yoki was founded with a simple vision: to make premium fashion accessible, 
                enjoyable, and trustworthy for everyone. We started as a small team passionate 
                about creating beautiful, timeless pieces that reflect modern elegance and 
                sophisticated style.
              </p>
              <p class="mb-4">
                What began as a dream to curate exceptional fashion has evolved into a premium 
                destination that celebrates individuality and craftsmanship. Every piece in our 
                collection is carefully selected to meet our high standards of quality and design.
              </p>
              <p class="mb-0">
                Today, yoki stands as a symbol of refined taste and contemporary fashion, 
                offering our customers not just products, but a lifestyle that embodies 
                elegance, quality, and timeless appeal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="row mb-5">
        <div class="col-12 text-center mb-4">
          <h2 class="h3 text-primary">Our Team</h2>
          <p class="text-muted">Meet the passionate team behind yoki</p>
        </div>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 text-center">
            <div class="card-body p-4">
              <div class="avatar mb-3">
                <i class="bi bi-person-circle display-4 text-primary"></i>
              </div>
              <h5 class="fw-bold mb-2">Creative Director</h5>
              <p class="text-muted mb-3">Fashion & Design</p>
              <p class="small text-muted">
                Leads our creative vision and ensures every piece reflects yoki's 
                commitment to timeless elegance and contemporary style.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 text-center">
            <div class="card-body p-4">
              <div class="avatar mb-3">
                <i class="bi bi-person-circle display-4 text-success"></i>
              </div>
              <h5 class="fw-bold mb-2">Brand Manager</h5>
              <p class="text-muted mb-3">Brand Strategy & Marketing</p>
              <p class="small text-muted">
                Develops yoki's brand identity and ensures consistent messaging 
                across all touchpoints to build lasting customer relationships.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm border-0 text-center">
            <div class="card-body p-4">
              <div class="avatar mb-3">
                <i class="bi bi-person-circle display-4 text-info"></i>
              </div>
              <h5 class="fw-bold mb-2">Style Curator</h5>
              <p class="text-muted mb-3">Fashion & Trends</p>
              <p class="small text-muted">
                Curates our collections and stays ahead of fashion trends 
                to bring you the most coveted pieces each season.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="card bg-light border-0">
            <div class="card-body p-5">
              <h2 class="h3 text-center mb-4 text-primary">Our Values</h2>
              
              <div class="row g-4">
                <div class="col-md-4 text-center">
                  <i class="bi bi-gem display-5 text-success mb-3"></i>
                  <h5 class="fw-bold mb-2">Premium Quality</h5>
                  <p class="text-muted small">
                    We source only the finest materials and work with skilled artisans 
                    to ensure exceptional quality in every piece.
                  </p>
                </div>
                
                <div class="col-md-4 text-center">
                  <i class="bi bi-heart display-5 text-primary mb-3"></i>
                  <h5 class="fw-bold mb-2">Customer Love</h5>
                  <p class="text-muted small">
                    Every customer is part of the yoki family. We're dedicated 
                    to providing personalized service and unforgettable experiences.
                  </p>
                </div>
                
                <div class="col-md-4 text-center">
                  <i class="bi bi-stars display-5 text-warning mb-3"></i>
                  <h5 class="fw-bold mb-2">Timeless Style</h5>
                  <p class="text-muted small">
                    We believe in creating pieces that transcend trends, 
                    offering timeless elegance that never goes out of style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Brand Promise Section -->
      <div class="row mt-5">
        <div class="col-lg-10 mx-auto">
          <div class="brand-promise-section">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="promise-card">
                  <div class="promise-icon mb-3">
                    <i class="bi bi-award"></i>
                  </div>
                  <h4 class="promise-title">Craftsmanship Excellence</h4>
                  <p class="promise-description">
                    Every piece is meticulously crafted with attention to detail, 
                    ensuring you receive only the finest quality fashion.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="promise-card">
                  <div class="promise-icon mb-3">
                    <i class="bi bi-globe"></i>
                  </div>
                  <h4 class="promise-title">Global Inspiration</h4>
                  <p class="promise-description">
                    Our designs draw inspiration from fashion capitals worldwide, 
                    bringing you contemporary style with international flair.
                  </p>
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
export default {
  name: 'About'
}
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
}

.avatar i {
  transition: transform 0.3s ease;
}

.card:hover .avatar i {
  transform: scale(1.1);
}

.display-6 {
  font-size: 2.5rem;
}

/* About Hero Section */
.about-hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 60vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.about-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23000" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.about-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.about-hero-content {
  position: relative;
  z-index: 2;
  padding: 3rem 2rem;
}

.about-eyebrow {
  margin-bottom: 1.5rem;
}

.eyebrow-text {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: var(--text-light);
  text-transform: uppercase;
  position: relative;
  padding-left: 2rem;
}

.eyebrow-text::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1px;
  background: var(--text-light);
}

.about-hero-title {
  font-size: 4rem;
  font-weight: 300;
  color: var(--text-dark);
  letter-spacing: var(--letter-spacing-wide);
  line-height: 1.1;
  margin-bottom: 2rem;
}

.about-hero-description {
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Brand Promise Section */
.brand-promise-section {
  padding: 3rem 0;
}

.promise-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-light);
  transition: var(--transition-smooth);
  height: 100%;
}

.promise-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.promise-icon {
  width: 80px;
  height: 80px;
  background: var(--bg-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: var(--text-dark);
  font-size: 2rem;
}

.promise-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 1rem;
  letter-spacing: 0.025em;
}

.promise-description {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .display-6 {
    font-size: 2rem;
  }
  
  .card-body.p-5 {
    padding: 2rem !important;
  }
  
  .about-hero-title {
    font-size: 2.5rem;
  }
  
  .about-hero-content {
    padding: 2rem 1rem;
  }
  
  .promise-card {
    padding: 1.5rem;
  }
}
</style>
