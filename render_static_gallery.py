import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

GALLERY_PHOTOS = [
    {
        "image": "images/gallery-ashwini-wheelchair-rescue.jpg",
        "caption": "Founder Ashwini with Sanctuary Hero",
        "description": "Shelter founder Ashwini with our special-needs rescue dog thriving on custom mobility wheels."
    },
    {
        "image": "images/gallery-rescued-golden-puppy.jpg",
        "caption": "Rescued Golden Indie Pup",
        "description": "Safe in loving arms, receiving nutrition, warmth, and care at our puppy nursery."
    },
    {
        "image": "images/gallery-white-eared-pup.jpg",
        "caption": "Playful Big-Eared Indie",
        "description": "Curious, spirited, and recovering happily after gentle roadside rescue in Mysore."
    },
    {
        "image": "images/gallery-sanctuary-tan-indie.jpg",
        "caption": "Gentle Sanctuary Resident",
        "description": "Resting peacefully on the shelter veranda after orthopedic rehabilitation."
    },
    {
        "image": "images/gallery-tri-color-rescue.jpg",
        "caption": "Alert & Loving Companion",
        "description": "Fully vaccinated, healthy, and enjoying safe shelter life at Dogs Protection Trust."
    },
    {
        "image": "images/hero-dog.jpg",
        "caption": "Hero – Safe & Happy",
        "description": "Rescued from heavy traffic near Mysore ring road. Now energetic and loving life at DPT."
    },
    {
        "image": "images/blog-wheelchair-sanctuary.jpg",
        "caption": "Courage on Wheels",
        "description": "Paralyzed rescue dog running joyfully on mobility wheels in our Mysore sanctuary yard."
    },
    {
        "image": "images/blog-emergency-rescue.jpg",
        "caption": "24/7 Emergency Rescue Unit",
        "description": "Field rescue ambulance team lifting and stabilizing an injured street dog in Mysore."
    },
    {
        "image": "images/blog-shelter-kitchen.jpg",
        "caption": "Shelter Kitchen Daily Feeding",
        "description": "Freshly cooked warm chicken and rice meals prepared daily for 400+ street and shelter dogs."
    },
    {
        "image": "images/blog-drain-extraction.jpg",
        "caption": "Drain & Pit Extractions",
        "description": "Rescuers safely extracting a trapped Indie puppy from a deep stormwater drain shaft."
    },
    {
        "image": "images/blog-vaccination-guide.jpg",
        "caption": "Vaccination & Clinical Care",
        "description": "Senior vet administering essential Anti-Rabies and 7-in-1 multi-vaccines in Mysore clinic."
    },
    {
        "image": "images/blog-wound-care.jpg",
        "caption": "Intensive Wound Healing",
        "description": "Veterinary surgical desk treating advanced wounds with sterile antiseptics and soothing dressings."
    },
    {
        "image": "images/blog-trauma-rehab.jpg",
        "caption": "Psychological Healing",
        "description": "Shelter volunteer bonding and playing with a recovered Indie dog on the sanctuary lawn."
    },
    {
        "image": "images/blog-nutrition-recovery.jpg",
        "caption": "Thriving After Malnutrition",
        "description": "A healthy recovered rescue dog enjoying balanced clinical nutrition in a clean sanctuary pen."
    },
    {
        "image": "images/blog-indie-adoption.jpg",
        "caption": "Indie Puppies For Adoption",
        "description": "Healthy, vaccinated, and socialized Indie puppies waiting for loving families in Mysore."
    },
    {
        "image": "images/blog-max-story.jpg",
        "caption": "Max – Shelter Ambassador",
        "description": "Inspiring senior rescue dog who overcame compound fractures to become DPT's official greeter."
    },
    {
        "image": "images/about.jpg",
        "caption": "Permanent Sanctuary & Dignity",
        "description": "Providing lifetime love, specialized medicines, and comfort to senior and disabled dogs."
    }
]

def generate_gallery_html(photos_subset):
    items = []
    for p in photos_subset:
        caption_esc = p['caption'].replace("'", "\\'")
        desc_esc = p['description'].replace("'", "\\'")
        item = f'''                <div class="gallery-item-main" onclick="openLightbox('{p['image']}', '{caption_esc}', '{desc_esc}')">
                    <img src="{p['image']}" alt="{p['caption']}" loading="lazy">
                    <div class="gallery-item-overlay">
                        <div class="gallery-item-caption">{p['caption']}</div>
                        <div class="gallery-item-description">{p['description']}</div>
                    </div>
                </div>'''
        items.append(item)
    return "\n".join(items)

# 1. Clean and update gallery-listing.html
with open('gallery-listing.html', 'r', encoding='utf-8') as fp:
    content = fp.read()

all_gallery_html = generate_gallery_html(GALLERY_PHOTOS)
new_listing_grid = f'<div class="gallery-grid-main" id="galleryGridMain">\n{all_gallery_html}\n            </div>\n\n            <!-- CTA Banner -->'

content = re.sub(
    r'<div class="gallery-grid-main" id="galleryGridMain">.*?<!-- CTA Banner -->',
    new_listing_grid,
    content,
    flags=re.DOTALL
)

with open('gallery-listing.html', 'w', encoding='utf-8') as fp:
    fp.write(content)
print(f"Cleaned and updated gallery-listing.html with {len(GALLERY_PHOTOS)} gallery items.")

# 2. Clean and update index.html
with open('index.html', 'r', encoding='utf-8') as fp:
    content_index = fp.read()

# On homepage, show all 5 new rescue photos in the preview gallery
top_5_gallery_html = generate_gallery_html(GALLERY_PHOTOS[:5])
new_index_gallery_grid = f'<div class="gallery-grid-main" id="galleryGridMain">\n{top_5_gallery_html}\n            </div>\n        </div>\n    </section>'

content_index = re.sub(
    r'<div class="gallery-grid-main" id="galleryGridMain">.*?</section>',
    new_index_gallery_grid,
    content_index,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as fp:
    fp.write(content_index)
print("Cleaned and updated index.html with all 5 new preview gallery items.")
