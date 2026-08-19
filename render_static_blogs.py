import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# All 12 blogs static card HTML template
BLOGS = [
    {
        "pageUrl": "blog-rescue-emergency-helpline.html",
        "image": "images/blog-emergency-rescue.jpg",
        "badge": "🚨 Rescue & Emergency Help",
        "meta": "2024-03-18 • DPT Emergency Rescue Unit",
        "title": "24/7 Emergency Rescue: The Definitive Protocol for Saving Distressed & Injured Street Dogs Across Mysore",
        "excerpt": "An exhaustive guide on 24/7 emergency street dog rescues in Mysore. Learn our field triage standards, road accident trauma care, gentle containment methods, and veterinary stabilization procedures."
    },
    {
        "pageUrl": "blog-complex-extractions-drains-wells.html",
        "image": "images/blog-drain-extraction.jpg",
        "badge": "🚨 Rescue & Emergency Help",
        "meta": "2024-03-12 • Ashwini, Founder & Rescue Lead",
        "title": "Puppies in Pits to Trapped Canines: Behind the Scenes of Complex Animal Extractions",
        "excerpt": "How DPT executes technical confined-space and high-angle animal rescues from deep stormwater drains, agricultural open wells, and construction foundation shafts across Mysore."
    },
    {
        "pageUrl": "blog-essential-vaccinations-guide.html",
        "image": "images/blog-vaccination-guide.jpg",
        "badge": "💉 Medical Treatment",
        "meta": "2024-03-05 • Dr. Aisha Sharma, Senior Veterinarian",
        "title": "Essential Medical Care: Vaccinations, Deworming & Disease Prevention in Street Dogs",
        "excerpt": "The definitive veterinary guide to street dog immunizations in India. Learn Anti-Rabies protocols, DHPPiL 7-in-1 multi-vaccines, deworming cycles, and cold-chain integrity."
    },
    {
        "pageUrl": "blog-sterilization-maggot-wound-care.html",
        "image": "images/blog-wound-care.jpg",
        "badge": "💉 Medical Treatment",
        "meta": "2024-02-28 • DPT Veterinary Surgical Desk",
        "title": "Sterilization & Emergency Surgeries: Humane Population Control & Advanced Wound Recovery",
        "excerpt": "Clinical protocols on surgical Animal Birth Control (ABC/CNVR), treating advanced necrotic maggot infestations (myiasis), and eradicating severe mange in street dogs."
    },
    {
        "pageUrl": "blog-psychological-rehabilitation-trauma.html",
        "image": "images/blog-trauma-rehab.jpg",
        "badge": "🏥 Shelter & Rehabilitation",
        "meta": "2024-02-20 • DPT Rehabilitation Unit",
        "title": "From Fear to Joy: The Step-by-Step Psychological Rehabilitation of Traumatized Dogs",
        "excerpt": "How Dogs Protection Trust rehabilitates abused, fearful, and abandoned street dogs through our 4-phase decompression method, sensory enrichment, and pack therapy."
    },
    {
        "pageUrl": "blog-lifetime-sanctuary-special-needs.html",
        "image": "images/blog-wheelchair-sanctuary.jpg",
        "badge": "🏥 Shelter & Rehabilitation",
        "meta": "2024-02-15 • Ashwini, Shelter Founder",
        "title": "A Safe Haven for Life: Dedicated Palliative Care for Disabled, Paralyzed and Senior Dogs",
        "excerpt": "Inside our permanent sanctuary for disabled, blind, paralyzed, and geriatric street dogs in Mysore. Custom wheelchairs, bladder management, and our non-euthanasia promise."
    },
    {
        "pageUrl": "blog-shelter-kitchen-daily-feeding.html",
        "image": "images/blog-shelter-kitchen.jpg",
        "badge": "🥘 Daily Feeding & Care",
        "meta": "2024-02-10 • DPT Nutrition & Kitchen Staff",
        "title": "Nutritious Meals Every Day: How We Cook and Serve 400+ Balanced Fresh Meals Daily",
        "excerpt": "Behind the scenes of our 5:00 AM shelter kitchen in Mysore. Sourcing fresh chicken, cooking 400+ wholesome daily meals, street feeding routes, and balanced canine nutrition."
    },
    {
        "pageUrl": "blog-clinical-nutrition-malnourishment.html",
        "image": "images/blog-nutrition-recovery.jpg",
        "badge": "🥘 Daily Feeding & Care",
        "meta": "2024-02-05 • DPT Clinical Nutrition Team",
        "title": "Clinical Nutrition: Reversing Severe Starvation, Cachexia & Refeeding Syndrome",
        "excerpt": "The clinical veterinary science of refeeding starved, emaciated street dogs. How DPT prevents refeeding syndrome, restores organ function, and rebuilds muscle mass."
    },
    {
        "pageUrl": "blog-indie-dog-adoption-guide.html",
        "image": "images/blog-indie-adoption.jpg",
        "badge": "❤️ Adoption Counselling",
        "meta": "2024-01-28 • DPT Adoption Counselling Desk",
        "title": "Adopt, Don't Shop: Why Rescued Indie (Desi) Dogs Make the Best Family Companions",
        "excerpt": "The definitive guide to adopting an Indian Native (Indie/Desi) dog in Mysore. Learn the 3-3-3 adoption transition rule, natural climate immunity, and zero grooming benefits."
    },
    {
        "pageUrl": "blog-community-awareness-legal-rights.html",
        "image": "images/blog-community-rights.jpg",
        "badge": "📢 Community Awareness",
        "meta": "2024-01-20 • DPT Legal & Community Outreach Desk",
        "title": "Building a Rabies-Free Mysore: Community Awareness, Feeder Rights & Animal Welfare Laws",
        "excerpt": "The definitive legal and community guide to animal welfare in India. Learn the Prevention of Cruelty to Animals Act, AWBI feeding guidelines, and feeder rights."
    },
    {
        "pageUrl": "blog-success-story-max-recovery.html",
        "image": "images/blog-max-story.jpg",
        "badge": "🏆 Rescue Success Stories",
        "meta": "2024-01-15 • Ashwini, Shelter Founder",
        "title": "Success Story: Max's Complete 6-Month Orthopedic & Emotional Rehabilitation",
        "excerpt": "The inspiring true story of Max, an abandoned senior Indie dog who overcame compound femur fractures and severe trauma to become DPT's welcoming shelter ambassador."
    },
    {
        "pageUrl": "blog-understanding-canine-parvovirus.html",
        "image": "images/blog-parvo-icu.jpg",
        "badge": "💉 Medical Treatment",
        "meta": "2024-01-10 • Dr. Aisha Sharma, Senior Veterinarian",
        "title": "Understanding Canine Parvovirus: Emergency Clinical Protocols, Warning Signs & Treatment",
        "excerpt": "An exhaustive veterinary emergency guide on Canine Parvovirus (CPV-2). Learn early clinical symptoms, strict quarantine protocols, and IV fluid resuscitation."
    }
]

def generate_blog_cards_html(blogs_subset):
    cards = []
    for b in blogs_subset:
        card = f'''                <a href="{b['pageUrl']}" class="blog-card-main" style="text-decoration: none; color: inherit; display: block;">
                    <img src="{b['image']}" alt="{b['title']}" class="blog-card-image" loading="lazy">
                    <div class="blog-card-content">
                        <div class="blog-card-meta">
                            <span class="blog-cat-badge">{b['badge']}</span>
                            <span>{b['meta']}</span>
                        </div>
                        <h3 class="blog-card-title">{b['title']}</h3>
                        <p class="blog-card-excerpt">{b['excerpt']}</p>
                        <span class="blog-card-link" style="display: inline-block; margin-top: 10px; color: var(--orange); font-weight: 600;">Read Blog →</span>
                    </div>
                </a>'''
        cards.append(card)
    return "\n".join(cards)

# 1. Update blog-listing.html with all 12 cards
with open('blog-listing.html', 'r', encoding='utf-8') as fp:
    content = fp.read()

all_12_cards_html = generate_blog_cards_html(BLOGS)
new_grid = f'<div class="blog-grid-main" id="blogGridMain">\n{all_12_cards_html}\n            </div>'

content = re.sub(
    r'<div class="blog-grid-main" id="blogGridMain">.*?</div>',
    new_grid,
    content,
    flags=re.DOTALL
)

with open('blog-listing.html', 'w', encoding='utf-8') as fp:
    fp.write(content)
print("Updated blog-listing.html with 12 static cards.")

# 2. Update index.html with top 3 featured cards
with open('index.html', 'r', encoding='utf-8') as fp:
    content = fp.read()

top_3_cards_html = generate_blog_cards_html(BLOGS[:3])
new_index_grid = f'<div class="blog-grid-main" id="blogGridMain">\n{top_3_cards_html}\n            </div>'

content = re.sub(
    r'<div class="blog-grid-main" id="blogGridMain">.*?</div>',
    new_index_grid,
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as fp:
    fp.write(content)
print("Updated index.html with 3 static preview cards.")
