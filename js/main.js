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
function loadGalleryMain(isHomePage = false) {
    const photos = DEFAULT_GALLERY_PHOTOS;
    const galleryGrid = document.getElementById('galleryGridMain');
    if (!galleryGrid) return;

    const numToShow = isHomePage ? 3 : photos.length;
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
}
// Blog Seeds - 10 Comprehensive Pillars of Shelter Care (What We Do)
const DEFAULT_BLOGS = [
    // 1. Rescue & Emergency Help (1)
    {
        id: 'dtp_blog_1',
        category: '🚨 Rescue & Emergency Help',
        title: '24/7 Rescue Helpline: How We Save Dogs in Distress Across Mysore and Nearby Villages',
        date: '2024-03-18',
        author: 'DPT Emergency Rescue Team',
        excerpt: 'Inside our daily emergency missions responding to road accidents, severe trauma, and abandoned dogs across Mysore city and rural outskirts.',
        image: 'images/hero-dog.jpg',
        content: `
            <p>Every single day in Mysore and its surrounding villages, vulnerable street dogs face severe emergencies—from high-speed highway hit-and-run accidents to territorial bite wounds and sudden abandonments. At Dogs Protection Trust, our emergency response helpline operates continuously to answer distress calls.</p>
            <h3>Our Rapid Response Protocol</h3>
            <p>When a rescue alert is received via WhatsApp or phone, our field protocol is executed promptly:</p>
            <ul>
                <li><strong>Safe Containment & Triage:</strong> Approaching scared or injured animals with specialized rescue blankets, gentle handling, and muzzles to prevent spinal shock or panic.</li>
                <li><strong>Emergency Transport:</strong> Transporting injured dogs safely in our rescue vehicle equipped with stretchers, antiseptics, and trauma kits to partner veterinary clinics.</li>
                <li><strong>Stabilization:</strong> Immediate IV fluid resuscitation, pain relief, anti-inflammatory support, and sterile splints for fractured limbs.</li>
            </ul>
            <p>Rescue is only the first critical step. Once stabilized, the canine enters our shelter to begin their journey of full healing and recovery.</p>
        `
    },
    // 2. Rescue & Emergency Help (2)
    {
        id: 'dtp_blog_2',
        category: '🚨 Rescue & Emergency Help',
        title: 'Puppies in Pits to Trapped Canines: Behind the Scenes of Complex Animal Rescues',
        date: '2024-03-12',
        author: 'Ashwini, Shelter Founder',
        excerpt: 'How our volunteers navigate open drains, construction pits, and hazardous roads to save newborn puppies and trapped animals.',
        image: 'images/about.jpg',
        content: `
            <p>Not all rescues occur on open roads. Many of our most challenging missions involve trapped animals—such as newborn litters washed into storm drains during Mysore monsoon rains, or frightened dogs fallen into deep construction trenches.</p>
            <h3>Specialized Rescue Techniques</h3>
            <p>Saving trapped animals requires patience, teamwork, and specialized techniques:</p>
            <ol>
                <li><strong>Drain & Pit Extractions:</strong> Using secure harnesses, ladders, and nets to carefully lift trapped dogs without causing neck strain or bone injury.</li>
                <li><strong>Reuniting & Nursing Puppies:</strong> Ensuring mother dogs and their puppies are rescued together so newborn pups continue receiving vital maternal colostrum and warmth.</li>
                <li><strong>Post-Extraction Health Check:</strong> Immediate screening for hypothermia, dehydration, tick-borne infections, and respiratory distress.</li>
            </ol>
            <p>Every distress call we answer is a life saved and a second chance given.</p>
        `
    },
    // 3. Medical Treatment (1)
    {
        id: 'dtp_blog_3',
        category: '💉 Medical Treatment',
        title: 'Essential Medical Care: Vaccinations, Deworming & Preventing Deadly Viral Outbreaks',
        date: '2024-03-05',
        author: 'Dr. Aisha Sharma, Veterinarian',
        excerpt: 'Why timely 7-in-1 multi-vaccinations and annual anti-rabies immunizations are crucial for protecting street dogs and our community.',
        image: 'images/blog-1.jpg',
        content: `
            <p>Preventative veterinary medicine is the foundation of shelter care. In high-density street canine populations, deadly viruses like Canine Distemper and Parvovirus can spread rapidly if preventative immunizations are neglected.</p>
            <h3>Our Clinical Vaccination & Deworming Protocol</h3>
            <ul>
                <li><strong>Anti-Rabies Vaccine (ARV):</strong> 100% of all resident shelter dogs and community packs receive annual ARV immunizations to maintain a safe, rabies-free Mysore.</li>
                <li><strong>DHPPiL Multi-Vaccine (7-in-1):</strong> Essential protection against Parvovirus, Distemper, Infectious Hepatitis, Leptospirosis, and Parainfluenza.</li>
                <li><strong>Quarterly Deworming & Tick Control:</strong> Regular broad-spectrum dewormers paired with spot-on anti-tick treatments to eliminate blood parasites and prevent anaemia.</li>
            </ul>
            <p>Vaccinating street dogs creates herd immunity, protecting both animals and citizens across the city.</p>
        `
    },
    // 4. Medical Treatment (2)
    {
        id: 'dtp_blog_4',
        category: '💉 Medical Treatment',
        title: 'Sterilization & Emergency Surgeries: Humane Population Control and Wound Recovery',
        date: '2024-02-28',
        author: 'DPT Veterinary Care Desk',
        excerpt: 'How humane Catch-Neuter-Vaccinate-Return (CNVR) and dedicated wound clinics eliminate suffering on Mysore streets.',
        image: 'images/blog-2.jpg',
        content: `
            <p>Surgical sterilization combined with vaccination is the globally recognized humane standard for managing street dog populations and stopping the cycle of puppy homelessness and starvation.</p>
            <h3>Surgical Protocols & Intensive Wound Care</h3>
            <ul>
                <li><strong>Safe Animal Birth Control (ABC):</strong> High-standard laparoscopic and sterile spay/neuter surgeries with complete post-operative antibiotics and analgesia.</li>
                <li><strong>Maggot Wound & Laceration Management:</strong> Gentle manual extraction of maggots, deep tissue irrigation with sterile saline/iodine, and healing dressings.</li>
                <li><strong>Orthopedic Fracture Management:</strong> Partnering with senior orthopedic surgeons for internal fixation, bone plating, and cast management for accident victims.</li>
            </ul>
            <p>Our goal is to ensure every patient heals cleanly without pain, restoring full mobility and zest for life.</p>
        `
    },
    // 5. Shelter & Rehabilitation (1)
    {
        id: 'dtp_blog_5',
        category: '🏥 Shelter & Rehabilitation',
        title: 'From Fear to Joy: The Physical and Emotional Rehabilitation of Injured Dogs',
        date: '2024-02-20',
        author: 'DPT Rehabilitation Unit',
        excerpt: 'Healing broken bones is only half the journey. Discover how gentle handling, pack support, and patience rebuild trust in traumatized dogs.',
        image: 'images/blog-3.jpg',
        content: `
            <p>Dogs that have experienced human cruelty, stone pelting, or months of agonizing pain often arrive with deep emotional trauma. Rebuilding their trust requires patience, gentle hands, and a calm environment.</p>
            <h3>Holistic Rehabilitation Steps</h3>
            <ol>
                <li><strong>Quiet Acclimatization Spaces:</strong> Providing cozy, low-stress recovery kennels where fearful dogs can observe their caregivers in safety.</li>
                <li><strong>Daily Physiotherapy & Massage:</strong> Gentle limb passive range-of-motion exercises, hot fomentation, and assisted walking for dogs recovering from spinal or leg trauma.</li>
                <li><strong>Pack Therapy:</strong> Introducing calm, friendly resident shelter dogs who naturally model confidence and teach newcomers that human touch brings warmth and meals.</li>
            </ol>
            <p>The transformation from a cowering, fearful dog to an affectionate tail-wagging companion is the heart of what we do.</p>
        `
    },
    // 6. Shelter & Rehabilitation (2)
    {
        id: 'dtp_blog_6',
        category: '🏥 Shelter & Rehabilitation',
        title: 'A Safe Haven for Life: Dedicated Palliative Care for Disabled, Paralyzed and Senior Dogs',
        date: '2024-02-14',
        author: 'Ashwini, Shelter Founder',
        excerpt: 'Why paralyzed dogs with spinal fractures and blind seniors find permanent dignity, wheelchairs, and lifetime love at DPT.',
        image: 'images/hero-dog.jpg',
        content: `
            <p>For paralyzed canines, three-legged amputees, and blind senior dogs, survival on the streets is impossible. Many shelters turn away unadoptable dogs, but at Dogs Protection Trust, these special animals receive permanent sanctuary.</p>
            <h3>Lifetime Dignity & Comfort</h3>
            <ul>
                <li><strong>Custom Wheelchair Carts:</strong> Equipping paralyzed dogs with lightweight custom wheeled carts so they can run and play with the pack every morning.</li>
                <li><strong>Orthopedic Bedding:</strong> Thick foam mattresses washed daily to eliminate pressure sores and keep elderly dogs cozy in all seasons.</li>
                <li><strong>Lifelong Palliative Care:</strong> Regular bladder expression, arthritis supplements, and constant affection until their natural last day.</li>
            </ul>
            <p>We believe every life has value. No dog is ever euthanized simply because they require extra daily care.</p>
        `
    },
    // 7. Daily Feeding & Care (1)
    {
        id: 'dtp_blog_7',
        category: '🥘 Daily Feeding & Care',
        title: 'Nutritious Meals Every Day: How We Cook and Serve Balanced Food to 400+ Dogs',
        date: '2024-02-05',
        author: 'DPT Kitchen Team',
        excerpt: 'Take a tour of our shelter kitchen: Fresh rice, protein-rich boiled chicken, eggs, turmeric broth, and clean water served every single day.',
        image: 'images/about.jpg',
        content: `
            <p>Feeding over 50 resident shelter dogs and hundreds of street dogs across our feeding routes requires extensive daily preparation, spotless food hygiene, and high-quality ingredients.</p>
            <h3>What Goes Into Our Large Cooking Pots</h3>
            <ul>
                <li><strong>Fresh Cooked Rice & Broken Grains:</strong> Wholesome carbohydrates providing sustained daily energy.</li>
                <li><strong>Fresh Boiled Chicken & Eggs:</strong> Rich protein sources critical for muscle repair, healing wounds, and nursing mothers.</li>
                <li><strong>Turmeric & Veggie Puree:</strong> Natural anti-inflammatory agents to support immunity and digestive balance.</li>
                <li><strong>Calcium & Bone Meal Supplements:</strong> Ensuring strong bones and joint longevity for growing pups and aging seniors.</li>
            </ul>
            <p>A simple contribution of ₹100 funds nutritious daily meals for a rescued dog in our care.</p>
        `
    },
    // 8. Daily Feeding & Care (2)
    {
        id: 'dtp_blog_8',
        category: '🥘 Daily Feeding & Care',
        title: 'Healing Through Nutrition: Specialized Diets for Starved and Sick Street Rescues',
        date: '2024-01-28',
        author: 'DPT Nutrition Desk',
        excerpt: 'How clinical nutritional therapy reverses emaciation, restores organ function, and speeds recovery in critically ill patients.',
        image: 'images/blog-1.jpg',
        content: `
            <p>Severely starved dogs cannot digest heavy meals immediately. Their fragile digestive tracts require scientifically managed, easily digestible refeeding protocols to avoid dangerous metabolic complications.</p>
            <h3>Clinical Feeding Strategies</h3>
            <ul>
                <li><strong>Frequent Micro-Portions:</strong> Offering 4 to 6 small, warm portions of broth and soft chicken throughout the day.</li>
                <li><strong>Oral Rehydration & Electrolytes:</strong> Filtered water infused with electrolytes and probiotics to restore cellular hydration.</li>
                <li><strong>Puppy Growth Nutrition:</strong> High-calorie starter mousse and calcium-rich diets to overcome early developmental malnutrition.</li>
            </ul>
            <p>Watching sunken ribs fill out and dull coats turn glossy is proof that good food is the ultimate medicine.</p>
        `
    },
    // 9. Adoption Counselling (1)
    {
        id: 'dtp_blog_9',
        category: '❤️ Adoption Counselling',
        title: 'Adoption Counselling: Matching Rescued Indie Dogs with Loving Forever Families',
        date: '2024-01-20',
        author: 'DPT Adoption Desk',
        excerpt: 'Why native Indian Indie (Desi) dogs are the smartest, sturdiest, and most loyal pets, and how our adoption matching process works.',
        image: 'images/blog-2.jpg',
        content: `
            <p>Native Indian street dogs (Indies) have adapted over millennia to our climate. They possess strong natural immunity, low grooming needs, high intelligence, and immense emotional devotion to their human families.</p>
            <h3>Our Responsible Adoption Process</h3>
            <ol>
                <li><strong>Matching Lifestyle & Temperament:</strong> Helping families choose a dog whose energy level and personality match their household.</li>
                <li><strong>Health & Vaccination Handover:</strong> Every dog adopted from DPT is fully vaccinated, dewormed, and sterilized (if age-appropriate).</li>
                <li><strong>Post-Adoption Guidance:</strong> Offering continuous dietary and behavioral advice to ensure a smooth transition into family life.</li>
            </ol>
            <p>When you adopt a rescue dog, you transform a life and make room for another street animal in need.</p>
        `
    },
    // 10. Community Awareness (1)
    {
        id: 'dtp_blog_10',
        category: '📢 Community Awareness',
        title: 'Building a Compassionate Mysore: Community Awareness and Volunteer Power at DPT',
        date: '2024-01-12',
        author: 'DPT Community Team',
        excerpt: 'From school education drives to neighborhood feeder networks, discover how community awareness is creating a safer Mysore for all.',
        image: 'images/blog-3.jpg',
        content: `
            <p>A sustainable animal welfare movement requires strong community participation. Educating neighborhood residents on street dog behavior, rabies prevention, and compassionate co-existence prevents cruelty and creates harmonious communities.</p>
            <h3>How You Can Drive Change in Mysore</h3>
            <ul>
                <li><strong>Become a Neighborhood Feeder & Guardian:</strong> Help monitor community dogs for injuries or breeding, alerting DPT for timely care.</li>
                <li><strong>Volunteer on Weekends:</strong> Spend a rewarding morning at our shelter helping with dog bathing, grooming, and walking.</li>
                <li><strong>Support via UPI & Wishlist:</strong> Make direct contributions to <code>9108021554@sbi</code> or send dog food via our Amazon Wishlist.</li>
                <li><strong>Advocate for Compassion:</strong> Educate children and neighbors that street dogs are sentient community friends who protect neighborhoods.</li>
            </ul>
            <p>Together, hand in hand, we are creating a kinder, rabies-free Mysore where every dog lives in safety.</p>
        `
    }
];

// Load Blog Posts
function loadBlogMain(isHomePage = false) {
    let blogs = [];
    if (typeof window !== 'undefined' && window.DPT_ALL_BLOGS && window.DPT_ALL_BLOGS.length > 0) {
        blogs = window.DPT_ALL_BLOGS;
    } else {
        blogs = DEFAULT_BLOGS;
    }

    const blogGrid = document.getElementById('blogGridMain');
    if (!blogGrid) return;

    const numToShow = isHomePage ? 3 : blogs.length;
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
    // Check if this is the homepage or a dedicated listing page
    const isGalleryListingPage = window.location.pathname.includes('gallery-listing.html');
    const isBlogListingPage = window.location.pathname.includes('blog-listing.html');

    loadGalleryMain(!isGalleryListingPage);
    loadBlogMain(!isBlogListingPage);
});
