function displayProperties(list) {
  const container = document.getElementById("propertyList");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No properties found matching your criteria.</p>";
    return;
  }

  list.forEach((prop, index) => {
    const card = document.createElement("div");
    card.className = "property-card";
    const imageId = `img-${prop.id}`;
    card.innerHTML = `
      <div class="image-gallery">
        <img id="${imageId}" src="${prop.images[0]}" alt="${prop.title}" onclick="openImageModal(${index})" />
        <button class="prev" onclick="changeImage(${index}, -1)">❮</button>
        <button class="next" onclick="changeImage(${index}, 1)">❯</button>
      </div>
      <div class="info">
        <h3>${prop.title}</h3>
        <p><strong>Location:</strong> ${prop.location}</p>
        <p><strong>Address:</strong> ${prop.address}</p>
        <p><strong>Price:</strong> ₹${prop.price.toLocaleString()}/month</p>
        <p><strong>Type:</strong> ${prop.propertyType}</p>
        <p><strong>Amenities:</strong> ${prop.amenities.join(', ')}</p>
        <button onclick="openContactModal('${prop.title}')">Contact Owner</button>
      </div>
      <div class="map-container">
        <iframe width="100%" height="200" style="border:0;" loading="lazy"
          src="https://www.google.com/maps?q=${encodeURIComponent(prop.address)}&output=embed">
        </iframe>
      </div>
    `;
    card.dataset.imgIndex = 0;
    card.dataset.images = JSON.stringify(prop.images);
    container.appendChild(card);
  });
}

function changeImage(index, direction) {
  const card = document.querySelectorAll('.property-card')[index];
  const images = JSON.parse(card.dataset.images);
  let imgIndex = Number(card.dataset.imgIndex);
  imgIndex += direction;
  if (imgIndex < 0) imgIndex = images.length - 1;
  if (imgIndex >= images.length) imgIndex = 0;
  card.dataset.imgIndex = imgIndex;
  const imgElement = card.querySelector('img');
  imgElement.src = images[imgIndex];
}

function filterProperties() {
  let filtered = [...properties];
  const location = document.getElementById("location").value;
  const propertyType = document.getElementById("propertyType").value;
  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);
  const sortBy = document.getElementById("sortBy").value;

  if (location) {
    filtered = filtered.filter(p => p.location === location);
  }
  if (propertyType) {
    filtered = filtered.filter(p => p.propertyType === propertyType);
  }
  if (!isNaN(minPrice) && minPrice > 0) {
    filtered = filtered.filter(p => p.price >= minPrice);
  }
  if (!isNaN(maxPrice) && maxPrice > 0) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  switch(sortBy) {
    case "priceAsc":
      filtered.sort((a,b) => a.price - b.price);
      break;
    case "priceDesc":
      filtered.sort((a,b) => b.price - a.price);
      break;
    case "locationAsc":
      filtered.sort((a,b) => a.location.localeCompare(b.location));
      break;
    case "locationDesc":
      filtered.sort((a,b) => b.location.localeCompare(a.location));
      break;
  }

  displayProperties(filtered);
}

// Modal logic
const modal = document.getElementById("contactModal");
const contactForm = document.getElementById("contactForm");

function openContactModal(title) {
  modal.classList.remove("hidden");
  contactForm.reset();
  contactForm.dataset.property = title;
}

function closeModal() {
  modal.classList.add("hidden");
}

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  alert(`Message sent to owner of: ${contactForm.dataset.property}`);
  closeModal();
});

// Initial display when page loads
document.addEventListener('DOMContentLoaded', function() {
  displayProperties(properties);
});

// Fullscreen Image Modal Logic
let currentImageModal = {
  propertyIndex: 0,
  imageIndex: 0,
  images: []
};

function openImageModal(propertyIndex) {
  const property = getCurrentFilteredProperties()[propertyIndex];
  if (!property) return;
  
  currentImageModal.propertyIndex = propertyIndex;
  currentImageModal.imageIndex = 0;
  currentImageModal.images = property.images;
  
  const modal = document.getElementById("imageModal");
  const fullscreenImage = document.getElementById("fullscreenImage");
  const imageCounter = document.getElementById("imageCounter");
  const sliderTrack = document.getElementById("sliderTrack");
  
  // Set initial image
  fullscreenImage.src = currentImageModal.images[0];
  
  // Update counter
  updateImageCounter();
  
  // Create slider thumbnails
  createSliderThumbnails();
  
  // Show modal
  modal.classList.remove("hidden");
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  
  // Restore body scrolling
  document.body.style.overflow = 'auto';
}

function changeFullscreenImage(direction) {
  currentImageModal.imageIndex += direction;
  
  if (currentImageModal.imageIndex < 0) {
    currentImageModal.imageIndex = currentImageModal.images.length - 1;
  }
  if (currentImageModal.imageIndex >= currentImageModal.images.length) {
    currentImageModal.imageIndex = 0;
  }
  
  updateFullscreenImage();
}

function updateFullscreenImage() {
  const fullscreenImage = document.getElementById("fullscreenImage");
  fullscreenImage.src = currentImageModal.images[currentImageModal.imageIndex];
  updateImageCounter();
  updateSliderThumbnails();
}

function updateImageCounter() {
  const imageCounter = document.getElementById("imageCounter");
  imageCounter.textContent = `${currentImageModal.imageIndex + 1} / ${currentImageModal.images.length}`;
}

function createSliderThumbnails() {
  const sliderTrack = document.getElementById("sliderTrack");
  sliderTrack.innerHTML = "";
  
  currentImageModal.images.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.src = image;
    thumb.className = `slider-thumb ${index === 0 ? 'active' : ''}`;
    thumb.onclick = () => goToImage(index);
    sliderTrack.appendChild(thumb);
  });
}

function updateSliderThumbnails() {
  const thumbs = document.querySelectorAll(".slider-thumb");
  thumbs.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentImageModal.imageIndex);
  });
}

function goToImage(index) {
  currentImageModal.imageIndex = index;
  updateFullscreenImage();
}

function getCurrentFilteredProperties() {
  // This function returns the currently filtered properties
  // For now, we'll return all properties, but this should match your filter logic
  let filtered = [...properties];
  const location = document.getElementById("location").value;
  const propertyType = document.getElementById("propertyType").value;
  const minPrice = Number(document.getElementById("minPrice").value);
  const maxPrice = Number(document.getElementById("maxPrice").value);
  const sortBy = document.getElementById("sortBy").value;

  if (location) {
    filtered = filtered.filter(p => p.location === location);
  }
  if (propertyType) {
    filtered = filtered.filter(p => p.propertyType === propertyType);
  }
  if (!isNaN(minPrice) && minPrice > 0) {
    filtered = filtered.filter(p => p.price >= minPrice);
  }
  if (!isNaN(maxPrice) && maxPrice > 0) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  switch(sortBy) {
    case "priceAsc":
      filtered.sort((a,b) => a.price - b.price);
      break;
    case "priceDesc":
      filtered.sort((a,b) => b.price - a.price);
      break;
    case "locationAsc":
      filtered.sort((a,b) => a.location.localeCompare(b.location));
      break;
    case "locationDesc":
      filtered.sort((a,b) => b.location.localeCompare(a.location));
      break;
  }

  return filtered;
}

// Close modal when clicking outside the image
document.addEventListener('click', function(event) {
  const imageModal = document.getElementById('imageModal');
  const imageModalContent = document.querySelector('.image-modal-content');
  
  if (event.target === imageModal && !imageModalContent.contains(event.target)) {
    closeImageModal();
  }
});

// Keyboard navigation for fullscreen modal
document.addEventListener('keydown', function(event) {
  const imageModal = document.getElementById('imageModal');
  
  if (!imageModal.classList.contains('hidden')) {
    switch(event.key) {
      case 'ArrowLeft':
        changeFullscreenImage(-1);
        break;
      case 'ArrowRight':
        changeFullscreenImage(1);
        break;
      case 'Escape':
        closeImageModal();
        break;
    }
  }
});