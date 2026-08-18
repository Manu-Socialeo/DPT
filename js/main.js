// Dogs Protection Trust - Main JavaScript

// State & Constants
const DPT_UPI_ID = '9108021554@sbi';
const DPT_WHATSAPP = '9108021554';

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
}

// Smooth Scroll for on-page hash links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Stats Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'), 10) || 0;
    const duration = 2000; // 2 seconds
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, stepTime);
}

// Intersection Observer for Stats Counter
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                animateCounter(num);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Copy UPI ID to Clipboard
function copyUPI() {
    navigator.clipboard.writeText(DPT_UPI_ID).then(() => {
        showToast('UPI ID copied: ' + DPT_UPI_ID);
    }).catch(() => {
        const fallback = document.createElement('textarea');
        fallback.value = DPT_UPI_ID;
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand('copy');
        document.body.removeChild(fallback);
        showToast('UPI ID copied: ' + DPT_UPI_ID);
    });
}

// Copy Bank Details to Clipboard
function copyBankDetails() {
    const bankDetails = `Dogs Protection Trust - Bank Details for NEFT/IMPS:
Name: Dogs Protection Trust, Mysuru
Bank: State Bank of India
Acc No: 40462867297
Branch: Ramkrishna Nagar branch, Mysuru
IFSC code: SBIN0013231
Gpay/Phone: 9108021554
UPI ID: 9108021554@sbi`;

    navigator.clipboard.writeText(bankDetails).then(() => {
        showToast('Bank details copied to clipboard!');
    }).catch(() => {
        showToast('Please copy account details manually.');
    });
}

// Toast Notification
function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

// Volunteer Form Submission -> WhatsApp Redirect
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('volunteerName');
        const phoneInput = document.getElementById('volunteerPhone');

        const name = nameInput ? nameInput.value.trim() : 'Volunteer';
        const phone = phoneInput ? phoneInput.value.trim() : '';

        const message = `Hi, I am ${name} and I am interested in volunteering with Dogs Protection Trust in Mysore. My phone number is ${phone}.`;
        const whatsappURL = `https://wa.me/${DPT_WHATSAPP}?text=${encodeURIComponent(message)}`;

        showToast('Redirecting to WhatsApp...');
        setTimeout(() => {
            window.open(whatsappURL, '_blank');
        }, 500);

        volunteerForm.reset();
    });
}

// Set Dynamic Current Year in Footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear().toString();
}

// Gallery Seeds
const DEFAULT_GALLERY_PHOTOS = [
    {
        id: 'photo_1',
        image: 'images/hero-dog.jpg',
        caption: 'Hero – Safe & Happy',
        description: 'Rescued from heavy traffic near Mysore ring road. Now energetic and loving life at DPT.'
    },
    {
        id: 'photo_2',
        image: 'images/blog-wheelchair-sanctuary.jpg',
        caption: 'Courage on Wheels',
        description: 'Paralyzed rescue dog running joyfully on mobility wheels in our Mysore sanctuary yard.'
    },
    {
        id: 'photo_3',
        image: 'images/blog-emergency-rescue.jpg',
        caption: '24/7 Emergency Rescue Unit',
        description: 'Field rescue ambulance team lifting and stabilizing an injured street dog in Mysore.'
    },
    {
        id: 'photo_4',
        image: 'images/blog-shelter-kitchen.jpg',
        caption: 'Shelter Kitchen Daily Feeding',
        description: 'Freshly cooked warm chicken and rice meals prepared daily for 400+ street and shelter dogs.'
    },
    {
        id: 'photo_5',
        image: 'images/blog-drain-extraction.jpg',
        caption: 'Drain & Pit Extractions',
        description: 'Rescuers safely extracting a trapped Indie puppy from a deep stormwater drain shaft.'
    },
    {
        id: 'photo_6',
        image: 'images/blog-vaccination-guide.jpg',
        caption: 'Vaccination & Clinical Care',
        description: 'Senior vet administering essential Anti-Rabies and 7-in-1 multi-vaccines in Mysore clinic.'
    },
    {
        id: 'photo_7',
        image: 'images/blog-wound-care.jpg',
        caption: 'Intensive Wound Healing',
        description: 'Veterinary surgical desk treating advanced wounds with sterile antiseptics and soothing dressings.'
    },
    {
        id: 'photo_8',
        image: 'images/blog-trauma-rehab.jpg',
        caption: 'Psychological Healing',
        description: 'Shelter volunteer bonding and playing with a recovered Indie dog on the sanctuary lawn.'
    },
    {
        id: 'photo_9',
        image: 'images/blog-nutrition-recovery.jpg',
        caption: 'Thriving After Malnutrition',
        description: 'A healthy recovered rescue dog enjoying balanced clinical nutrition in a clean sanctuary pen.'
    },
    {
        id: 'photo_10',
        image: 'images/blog-indie-adoption.jpg',
        caption: 'Indie Puppies For Adoption',
        description: 'Healthy, vaccinated, and socialized Indie puppies waiting for loving families in Mysore.'
    },
    {
        id: 'photo_11',
        image: 'images/blog-max-story.jpg',
        caption: 'Max – Shelter Ambassador',
        description: 'Inspiring senior rescue dog who overcame compound fractures to become DPT\'s official greeter.'
    },
    {
        id: 'photo_12',
        image: 'images/about.jpg',
        caption: 'Permanent Sanctuary & Dignity',
        description: 'Providing lifetime love, specialized medicines, and comfort to senior and disabled dogs.'
    }
];

// Load Gallery
function loadGalleryMain(isHomePage = null) {
    const galleryGrid = document.getElementById('galleryGridMain');
    if (!galleryGrid) return;

    const photos = DEFAULT_GALLERY_PHOTOS;

    // Check if this grid is on the home page preview section or on the full listing page
    let isHome = isHomePage;
    if (isHome === null) {
        isHome = galleryGrid.closest('.gallery-section') !== null || (!!document.querySelector('.hero') && !document.querySelector('.listing-hero'));
    }

    const numToShow = isHome ? 3 : photos.length;
    const displayPhotos = photos.slice(0, numToShow);

    galleryGrid.innerHTML = displayPhotos.map((photo, idx) => `
        <div class="gallery-item-main" onclick="openLightbox('${photo.image}', '${photo.caption.replace(/'/g, "\\'")}', '${(photo.description || '').replace(/'/g, "\\'")}')">
            <img src="${photo.image}" alt="${photo.caption}" loading="lazy">
            <div class="gallery-item-overlay">
                <div class="gallery-item-caption">${photo.caption}</div>
                ${photo.description ? `<div class="gallery-item-description">${photo.description}</div>` : ''}
            </div>
        </div>
    `).join('');
}// Blog Seeds - 12 Comprehensive Pillars of Shelter Care (What We Do)
const DEFAULT_BLOGS = [
    {
        id: 'dpt_blog_rescue_helpline',
        category: '🚨 Rescue & Emergency Help',
        title: '24/7 Emergency Rescue: The Definitive Protocol for Saving Distressed & Injured Street Dogs Across Mysore',
        date: '2024-03-18',
        author: 'DPT Emergency Rescue Unit',
        readTime: '14 min read',
        image: 'images/blog-emergency-rescue.jpg',
        pageUrl: 'blog-rescue-emergency-helpline.html',
        excerpt: 'An exhaustive guide on 24/7 emergency street dog rescues in Mysore. Learn our field triage standards, road accident trauma care, gentle containment methods, and veterinary stabilization procedures.'
    },
    {
        id: 'dpt_blog_complex_extractions',
        category: '🚨 Rescue & Emergency Help',
        title: 'Puppies in Pits to Trapped Canines: Behind the Scenes of Complex Animal Extractions',
        date: '2024-03-12',
        author: 'Ashwini, Founder & Rescue Lead',
        readTime: '13 min read',
        image: 'images/blog-drain-extraction.jpg',
        pageUrl: 'blog-complex-extractions-drains-wells.html',
        excerpt: 'How DPT executes technical confined-space and high-angle animal rescues from deep stormwater drains, agricultural open wells, and construction foundation shafts across Mysore.'
    },
    {
        id: 'dpt_blog_vaccinations_guide',
        category: '💉 Medical Treatment',
        title: 'Essential Medical Care: Vaccinations, Deworming & Disease Prevention in Street Dogs',
        date: '2024-03-05',
        author: 'Dr. Aisha Sharma, Senior Veterinarian',
        readTime: '14 min read',
        image: 'images/blog-vaccination-guide.jpg',
        pageUrl: 'blog-essential-vaccinations-guide.html',
        excerpt: 'The definitive veterinary guide to street dog immunizations in India. Learn Anti-Rabies protocols, DHPPiL 7-in-1 multi-vaccines, deworming cycles, and cold-chain integrity.'
    },
    {
        id: 'dpt_blog_sterilization_wounds',
        category: '💉 Medical Treatment',
        title: 'Sterilization & Emergency Surgeries: Humane Population Control & Advanced Wound Recovery',
        date: '2024-02-28',
        author: 'DPT Veterinary Surgical Desk',
        readTime: '14 min read',
        image: 'images/blog-wound-care.jpg',
        pageUrl: 'blog-sterilization-maggot-wound-care.html',
        excerpt: 'Clinical protocols on surgical Animal Birth Control (ABC/CNVR), treating advanced necrotic maggot infestations (myiasis), and eradicating severe mange in street dogs.'
    },
    {
        id: 'dpt_blog_psychological_rehab',
        category: '🏥 Shelter & Rehabilitation',
        title: 'From Fear to Joy: The Step-by-Step Psychological Rehabilitation of Traumatized Dogs',
        date: '2024-02-20',
        author: 'DPT Rehabilitation Unit',
        readTime: '13 min read',
        image: 'images/blog-trauma-rehab.jpg',
        pageUrl: 'blog-psychological-rehabilitation-trauma.html',
        excerpt: 'How Dogs Protection Trust rehabilitates abused, fearful, and abandoned street dogs through our 4-phase decompression method, sensory enrichment, and pack therapy.'
    },
    {
        id: 'dpt_blog_lifetime_sanctuary',
        category: '🏥 Shelter & Rehabilitation',
        title: 'A Safe Haven for Life: Dedicated Palliative Care for Disabled, Paralyzed and Senior Dogs',
        date: '2024-02-15',
        author: 'Ashwini, Shelter Founder',
        readTime: '13 min read',
        image: 'images/blog-wheelchair-sanctuary.jpg',
        pageUrl: 'blog-lifetime-sanctuary-special-needs.html',
        excerpt: 'Inside our permanent sanctuary for disabled, blind, paralyzed, and geriatric street dogs in Mysore. Custom wheelchairs, bladder management, and our non-euthanasia promise.'
    },
    {
        id: 'dpt_blog_shelter_kitchen',
        category: '🥘 Daily Feeding & Care',
        title: 'Nutritious Meals Every Day: How We Cook and Serve 400+ Balanced Fresh Meals Daily',
        date: '2024-02-10',
        author: 'DPT Nutrition & Kitchen Staff',
        readTime: '13 min read',
        image: 'images/blog-shelter-kitchen.jpg',
        pageUrl: 'blog-shelter-kitchen-daily-feeding.html',
        excerpt: 'Behind the scenes of our 5:00 AM shelter kitchen in Mysore. Sourcing fresh chicken, cooking 400+ wholesome daily meals, street feeding routes, and balanced canine nutrition.'
    },
    {
        id: 'dpt_blog_clinical_nutrition',
        category: '🥘 Daily Feeding & Care',
        title: 'Clinical Nutrition: Reversing Severe Starvation, Cachexia & Refeeding Syndrome',
        date: '2024-02-05',
        author: 'DPT Clinical Nutrition Team',
        readTime: '13 min read',
        image: 'images/blog-nutrition-recovery.jpg',
        pageUrl: 'blog-clinical-nutrition-malnourishment.html',
        excerpt: 'The clinical veterinary science of refeeding starved, emaciated street dogs. How DPT prevents refeeding syndrome, restores organ function, and rebuilds muscle mass.'
    },
    {
        id: 'dpt_blog_indie_adoption',
        category: '❤️ Adoption Counselling',
        title: 'Adopt, Don\'t Shop: Why Rescued Indie (Desi) Dogs Make the Best Family Companions',
        date: '2024-01-28',
        author: 'DPT Adoption Counselling Desk',
        readTime: '14 min read',
        image: 'images/blog-indie-adoption.jpg',
        pageUrl: 'blog-indie-dog-adoption-guide.html',
        excerpt: 'The definitive guide to adopting an Indian Native (Indie/Desi) dog in Mysore. Learn the 3-3-3 adoption transition rule, natural climate immunity, and zero grooming benefits.'
    },
    {
        id: 'dpt_blog_community_laws',
        category: '📢 Community Awareness',
        title: 'Building a Rabies-Free Mysore: Community Awareness, Feeder Rights & Animal Welfare Laws',
        date: '2024-01-20',
        author: 'DPT Legal & Community Outreach Desk',
        readTime: '14 min read',
        image: 'images/blog-community-rights.jpg',
        pageUrl: 'blog-community-awareness-legal-rights.html',
        excerpt: 'The definitive legal and community guide to animal welfare in India. Learn the Prevention of Cruelty to Animals Act, AWBI feeding guidelines, and feeder rights.'
    },
    {
        id: 'dpt_blog_max_story',
        category: '🏆 Rescue Success Stories',
        title: 'Success Story: Max\'s Complete 6-Month Orthopedic & Emotional Rehabilitation',
        date: '2024-01-15',
        author: 'Ashwini, Shelter Founder',
        readTime: '13 min read',
        image: 'images/blog-max-story.jpg',
        pageUrl: 'blog-success-story-max-recovery.html',
        excerpt: 'The inspiring true story of Max, an abandoned senior Indie dog who overcame compound femur fractures and severe trauma to become DPT\'s welcoming shelter ambassador.'
    },
    {
        id: 'dpt_blog_parvovirus_guide',
        category: '💉 Medical Treatment',
        title: 'Understanding Canine Parvovirus: Emergency Clinical Protocols, Warning Signs & Treatment',
        date: '2024-01-10',
        author: 'Dr. Aisha Sharma, Senior Veterinarian',
        readTime: '14 min read',
        image: 'images/blog-parvo-icu.jpg',
        pageUrl: 'blog-understanding-canine-parvovirus.html',
        excerpt: 'An exhaustive veterinary emergency guide on Canine Parvovirus (CPV-2). Learn early clinical symptoms, strict quarantine protocols, and IV fluid resuscitation.'
    }
];

// Load Blog Posts
function loadBlogMain(isHomePage = null) {
    const blogGrid = document.getElementById('blogGridMain');
    if (!blogGrid) return;

    let blogs = [];
    if (typeof window !== 'undefined' && window.DPT_ALL_BLOGS && window.DPT_ALL_BLOGS.length > 0) {
        blogs = window.DPT_ALL_BLOGS;
    } else {
        blogs = DEFAULT_BLOGS;
    }

    // Check if this grid is on the home page preview section or on the full listing page
    let isHome = isHomePage;
    if (isHome === null) {
        isHome = blogGrid.closest('.blog-section') !== null || (!!document.querySelector('.hero') && !document.querySelector('.listing-hero'));
    }

    const numToShow = isHome ? 3 : blogs.length;
    const displayBlogs = blogs.slice(0, numToShow);

    blogGrid.innerHTML = displayBlogs.map(blog => `
        <a href="${blog.pageUrl || 'blog-listing.html'}" class="blog-card-main" style="text-decoration: none; color: inherit; display: block;">
            <img src="${blog.image || 'images/blog-1.jpg'}" alt="${blog.title}" class="blog-card-image" loading="lazy">
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-cat-badge">${blog.category || 'Rescue Story'}</span>
                    <span>${blog.date} • ${blog.author}</span>
                </div>
                <h3 class="blog-card-title">${blog.title}</h3>
                <p class="blog-card-excerpt">${blog.excerpt}</p>
                <span class="blog-card-link" style="display: inline-block; margin-top: 10px; color: var(--orange); font-weight: 600;">Read Blog →</span>
            </div>
        </a>
    `).join('');
}

// Lightbox Modal Functionality (For Photos Gallery)
function openLightbox(imageUrl, caption, description) {
    let modal = document.getElementById('galleryModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'galleryModal';
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
                <img id="lightboxImg" src="" alt="Rescued dog photo">
                <div class="lightbox-text">
                    <h3 id="lightboxTitle"></h3>
                    <p id="lightboxDesc"></p>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
    }

    document.getElementById('lightboxImg').src = imageUrl;
    document.getElementById('lightboxTitle').textContent = caption;
    document.getElementById('lightboxDesc').textContent = description || '';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('galleryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Read Blog Navigation Functionality (Direct page navigation)
function openBlogPost(blogId) {
    let blogs = (typeof window !== 'undefined' && window.DPT_ALL_BLOGS && window.DPT_ALL_BLOGS.length > 0) 
        ? window.DPT_ALL_BLOGS 
        : DEFAULT_BLOGS;

    const blog = blogs.find(b => b.id === blogId);
    if (blog && blog.pageUrl) {
        window.location.href = blog.pageUrl;
    } else {
        window.location.href = 'blog-listing.html';
    }
}

function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Global Keyboard Escape Handler
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
        closeLightbox();
        closeBlogModal();
    }
});

// Header Shadow Effect on Scroll
const headerElement = document.querySelector('.header');
if (headerElement) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryMain();
    loadBlogMain();
});
