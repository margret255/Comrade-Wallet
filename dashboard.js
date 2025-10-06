// Toggle transaction list visibility
        document.querySelector('.see-all').addEventListener('click', function(event) {
            event.preventDefault();
            const transactionList = document.querySelector('.transaction-list');
            transactionList.classList.toggle('active');
        });

        // Navigate to Analytics page (placeholder)
        document.getElementById('analytics-link').addEventListener('click', function(event) {
            event.preventDefault();
            // Placeholder for analytics page transition
            alert('Navigating to Analytics page - Please provide details to implement!');
            // You can replace this with actual page navigation or content swap logic later
        });