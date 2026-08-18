// ==========================================================================
// DOGS PROTECTION TRUST (DPT) - MASTER BLOGS DATA REPOSITORY
// Mapped directly to dedicated standalone blog HTML pages (1,500+ words each)
// Every blog features topic-specific realistic photography & verified NGO meta
// ==========================================================================

const DPT_ALL_BLOGS = [
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

if (typeof window !== 'undefined') {
    window.DPT_ALL_BLOGS = DPT_ALL_BLOGS;
}
