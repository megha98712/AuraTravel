const destinations = [
    {
        id: 1,
        name: "Lonavala Clouds",
        type: "nature",
        price: "₹4,000",
        tags: "hillstation fog",
        img: "https://images.unsplash.com/photo-1626715206440-410a527c6225?auto=format&fit=crop&w=800",
        desc: "Sahyadri's misty trails optimized for monsoon trekking."
    },

    {
        id: 2,
        name: "Ganpatipule Beach",
        type: "beach",
        price: "₹6,500",
        tags: "beach ocean konkan",
        img: "https://images.unsplash.com/photo-1590559253013-94c6536551ca?auto=format&fit=crop&w=800",
        desc: "Pristine white sands with AI weather monitoring for sunsets."
    },

    {
        id: 3,
        name: "Raigad Fort",
        type: "fort",
        price: "₹2,500",
        tags: "history fort adventure",
        img: "https://images.unsplash.com/photo-1623151443427-047f3b89097e?auto=format&fit=crop&w=800",
        desc: "Experience the capital of Maratha Empire with AR guides."
    },

    {
        id: 4,
        name: "Mahabaleshwar",
        type: "nature",
        price: "₹5,200",
        tags: "strawberry cold nature",
        img: "https://images.unsplash.com/photo-1598285511043-461d36d4002e?auto=format&fit=crop&w=800",
        desc: "Fresh berry farms and scenic valley views curated by AI."
    },

    {
        id: 5,
        name: "Alibaug Coast",
        type: "beach",
        price: "₹5,800",
        tags: "beach water-sports",
        img: "https://images.unsplash.com/photo-1560932505-f996d9337588?auto=format&fit=crop&w=800",
        desc: "Weekend getaway with smart ferry schedules and luxury stays."
    },

    {
        id: 6,
        name: "Harihareshwar",
        type: "fort",
        price: "₹3,400",
        tags: "temple beach history",
        img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800",
        desc: "The 'Kashi of South' with rugged cliffs and coastal beauty."
    }
];

const container = document.getElementById('dest-container');
const loader = document.getElementById('ai-loader');

function renderCards(data) {

    container.innerHTML = "";

    data.forEach(dest => {

        container.innerHTML += `
            <div class="card">

                <div
                    class="card-img"
                    style="background-image: url('${dest.img}')"
                ></div>

                <div class="card-body">

                    <span class="ai-tag">#Maharashtra_AI</span>

                    <h3 style="margin: 10px 0;">
                        ${dest.name}
                    </h3>

                    <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">
                        ${dest.desc}
                    </p>

                    <div
                        style="
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        "
                    >

                        <span
                            style="
                                font-weight: bold;
                                color: var(--primary-neon);
                            "
                        >
                            ${dest.price}
                        </span>

                        <button
                            class="btn-neon"
                            style="padding: 8px 15px; font-size: 0.8rem;"
                            onclick="bookNow('${dest.name}', '${dest.desc}')"
                        >
                            Explore
                        </button>

                    </div>

                </div>

            </div>
        `;
    });
}

function suggestByMood(mood) {

    loader.classList.remove('hidden');
    container.style.opacity = "0.3";

    setTimeout(() => {

        loader.classList.add('hidden');
        container.style.opacity = "1";

        const filtered =
            mood === 'all'
            ? destinations
            : destinations.filter(
                d => d.type === mood || d.tags.includes(mood)
            );

        renderCards(filtered);

    }, 800);
}

/* AI Search */
document.getElementById('ai-btn').addEventListener('click', () => {

    const query =
        document.getElementById('ai-input')
        .value
        .toLowerCase();

    suggestByMood(query || 'all');
});

/* Modal */
function toggleModal() {

    const modal = document.getElementById('booking-modal');

    modal.style.display =
        (modal.style.display === "block")
        ? "none"
        : "block";
}

function bookNow(name, desc) {

    document.getElementById('modal-title').innerText =
        "AI Plan: " + name;

    document.getElementById('modal-desc').innerText =
        desc;

    toggleModal();
}

/* Initial Load */
renderCards(destinations);