document.addEventListener('DOMContentLoaded', () => {

    // --- State ---
    let selectedAmount = 1000;

    // --- Elements ---
    const form = document.getElementById('donationForm');
    const payUpiBtn = document.getElementById('payUpiBtn');
    const notifyBtn = document.getElementById('notifyBtn');
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');

    // Anonymous Toggle
    const anonymousCheckbox = document.getElementById('anonymousDonation');
    const personalInfoFields = document.getElementById('personalInfoFields');

    // --- Helpers ---
    function updateDonateButton(amount) {
        selectedAmount = amount;

        // Update styling
        amountBtns.forEach(btn => {
            btn.classList.remove('selected');
            if (parseInt(btn.dataset.amount) === amount && !customAmountInput.value) {
                btn.classList.add('selected');
            }
        });

        // Update Pay Button Link & Text
        updatePayLink(amount);
    }

    function updatePayLink(amount) {
        if (payUpiBtn) {
            // Update tag text
            const tag = payUpiBtn.querySelector('.amount-tag');
            if (tag) tag.textContent = `₹${amount}`;

            // Set Href for direct opening
            payUpiBtn.href = `upi://pay?pa=9108021554@sbi&pn=Dogs%20Protection%20Trust&am=${amount}&cu=INR`;
        }
    }

    // --- Event Listeners ---

    // 1. Amount Presets
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = parseInt(btn.dataset.amount);
            customAmountInput.value = ''; // Clear custom input
            updateDonateButton(amount);
        });
    });

    // 2. Custom Amount
    customAmountInput.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        if (val && val > 0) {
            amountBtns.forEach(b => b.classList.remove('selected'));
            updateDonateButton(val);
        } else {
            selectedAmount = val || 0;
            updatePayLink(selectedAmount);
        }
    });

    // 3. Anonymous Toggle
    if (anonymousCheckbox) {
        anonymousCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                personalInfoFields.style.display = 'none';
                document.getElementById('donorName').required = false;
                document.getElementById('donorPhone').required = false;
            } else {
                personalInfoFields.style.display = 'block';
                document.getElementById('donorName').required = true;
                document.getElementById('donorPhone').required = true;
            }
        });
    }

    // 4. Pay Button Click (Just opens app, no form submit)
    if (payUpiBtn) {
        payUpiBtn.addEventListener('click', (e) => {
            if (!selectedAmount || selectedAmount < 1) {
                e.preventDefault();
                alert('Please enter a valid donation amount.');
            }
            // Logic: It's an <a> tag, so it will naturally open the href (UPI Intent)
        });
    }

    // 5. Notify Button (Form Submit -> WhatsApp)
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isAnonymous = anonymousCheckbox && anonymousCheckbox.checked;
        const name = isAnonymous ? 'Anonymous' : document.getElementById('donorName').value;
        const phone = isAnonymous ? '' : document.getElementById('donorPhone').value;

        // Construct Message
        let message = `Hi, I have made a donation of ₹${selectedAmount} to Dogs Protection Trust.`;

        if (!isAnonymous) {
            message += `\n\nMy Details:\nName: ${name}\nPhone: ${phone}`;
        } else {
            message += `\n\n(This is an anonymous donation)`;
        }

        message += `\n\nPlease confirm receipt.`;

        // Open WhatsApp
        const waLink = `https://wa.me/919108021554?text=${encodeURIComponent(message)}`;
        window.open(waLink, '_blank');
    });

    // Initial call
    updateDonateButton(1000);

});
