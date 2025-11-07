// Data
let currentUser = null;
let authMode = 'login';

const gyms = [
    {
        id: 1,
        name: "FitPro Academia",
        address: "Rua das Flores, 123 - Centro, São Paulo - SP",
        distance: 0.5,
        rating: 4.8,
        reviews: 342,
        hours: "Seg-Sex: 6h-22h | Sáb-Dom: 8h-18h",
        phone: "(11) 98765-4321",
        amenities: ["Musculação", "Cardio", "Piscina", "CrossFit", "Vestiário", "Estacionamento"],
        description: "Academia completa com equipamentos modernos e profissionais qualificados. Oferecemos diversas modalidades para todos os níveis.",
        userRatings: []
    },
    {
        id: 2,
        name: "PowerGym Elite",
        address: "Av. Principal, 456 - Jardins, São Paulo - SP",
        distance: 1.2,
        rating: 4.6,
        reviews: 218,
        hours: "Seg-Dom: 24 horas",
        phone: "(11) 91234-5678",
        amenities: ["Musculação", "Artes Marciais", "Spinning", "Vestiário"],
        description: "Academia 24 horas com foco em musculação e artes marciais. Ambiente moderno e acolhedor.",
        userRatings: []
    },
    {
        id: 3,
        name: "FlexFit Studio",
        address: "Rua dos Esportes, 789 - Vila Nova, São Paulo - SP",
        distance: 2.1,
        rating: 4.9,
        reviews: 456,
        hours: "Seg-Sex: 5h-23h | Sáb-Dom: 7h-20h",
        phone: "(11) 99876-5432",
        amenities: ["Yoga", "Pilates", "Funcional", "Dance Fit", "Spa"],
        description: "Estúdio especializado em aulas coletivas. Yoga, Pilates, Funcional e muito mais!",
        userRatings: []
    },
    {
        id: 4,
        name: "Iron Paradise",
        address: "Rua do Músculo, 321 - Bela Vista, São Paulo - SP",
        distance: 3.0,
        rating: 4.7,
        reviews: 289,
        hours: "Seg-Sex: 6h-22h | Sáb: 8h-14h",
        phone: "(11) 97654-3210",
        amenities: ["Musculação", "Powerlifting", "Strongman", "Nutricionista"],
        description: "Academia focada em força e hipertrofia. Equipamentos específicos para powerlifting e strongman.",
        userRatings: []
    }
];

let workouts = [
    {
        id: 1,
        title: "Treino de Peito e Tríceps - Hipertrofia",
        author: "João Silva",
        authorId: "demo1",
        description: "Treino focado em hipertrofia para peito e tríceps, ideal para ganho de massa muscular.",
        exercises: [
            { number: 1, name: "Supino Reto com Barra", sets: 4, reps: "8-12" },
            { number: 2, name: "Supino Inclinado com Halteres", sets: 4, reps: "10-12" },
            { number: 3, name: "Crucifixo com Halteres", sets: 3, reps: "12-15" },
            { number: 4, name: "Crossover", sets: 3, reps: "12-15" },
            { number: 5, name: "Tríceps Testa", sets: 3, reps: "10-12" },
            { number: 6, name: "Tríceps Corda", sets: 3, reps: "12-15" },
            { number: 7, name: "Mergulho em Paralelas", sets: 3, reps: "até a falha" },
            { number: 8, name: "Tríceps Coice", sets: 3, reps: "12-15" }
        ],
        duration: "60 min",
        difficulty: "Intermediário",
        category: "Hipertrofia",
        likes: 342,
        views: 1542,
        comments: [],
        likedBy: []
    },
    {
        id: 2,
        title: "Full Body - Treino Funcional",
        author: "Ana Paula",
        authorId: "demo2",
        description: "Treino de corpo inteiro com exercícios funcionais, ótimo para queimar calorias.",
        exercises: [
            { number: 1, name: "Agachamento", sets: 4, reps: "15-20" },
            { number: 2, name: "Flexão de Braço", sets: 3, reps: "12-15" },
            { number: 3, name: "Prancha", sets: 3, reps: "30-60 seg" },
            { number: 4, name: "Burpees", sets: 3, reps: "10-15" },
            { number: 5, name: "Mountain Climbers", sets: 3, reps: "20-30" },
            { number: 6, name: "Jump Squat", sets: 3, reps: "12-15" }
        ],
        duration: "45 min",
        difficulty: "Iniciante",
        category: "Funcional",
        likes: 567,
        views: 3421,
        comments: [],
        likedBy: []
    },
    {
        id: 3,
        title: "Pernas e Glúteos - Intenso",
        author: "Mariana Lima",
        authorId: "demo3",
        description: "Treino pesado para membros inferiores com foco em glúteos e quadríceps.",
        exercises: [
            { number: 1, name: "Agachamento Livre", sets: 5, reps: "6-8" },
            { number: 2, name: "Leg Press 45°", sets: 4, reps: "10-12" },
            { number: 3, name: "Stiff", sets: 4, reps: "10-12" },
            { number: 4, name: "Cadeira Extensora", sets: 3, reps: "12-15" },
            { number: 5, name: "Cadeira Flexora", sets: 3, reps: "12-15" }
        ],
        duration: "75 min",
        difficulty: "Avançado",
        category: "Hipertrofia",
        likes: 289,
        views: 987,
        comments: [],
        likedBy: []
    }
];

const products = [
    {
        id: 1,
        name: "Whey Protein Isolado 1kg",
        category: "Suplementos",
        price: 159.90,
        rating: 4.8,
        reviews: 542,
        description: "Proteína isolada de alta qualidade da Growth Supplements",
        inStock: true,
        url: "https://www.gsuplementos.com.br/whey-protein-isolado",
        store: "Growth Supplements"
    },
    {
        id: 2,
        name: "Creatina Monohidratada 300g",
        category: "Suplementos",
        price: 89.90,
        rating: 4.9,
        reviews: 891,
        description: "Creatina pura para aumento de força e desempenho",
        inStock: true,
        url: "https://www.gsuplementos.com.br/creatina-100-pure",
        store: "Growth Supplements"
    },
    {
        id: 3,
        name: "BCAA 2:1:1 120 cápsulas",
        category: "Suplementos",
        price: 69.90,
        rating: 4.6,
        reviews: 567,
        description: "Aminoácidos essenciais para recuperação muscular",
        inStock: true,
        url: "https://www.gsuplementos.com.br/bcaa",
        store: "Growth Supplements"
    },
    {
        id: 4,
        name: "Luvas de Treino Pro",
        category: "Acessórios",
        price: 49.90,
        rating: 4.5,
        reviews: 234,
        description: "Luvas acolchoadas com aderência antiderrapante",
        inStock: true,
        url: "https://www.netshoes.com.br/luvas-de-academia",
        store: "Netshoes"
    },
    {
        id: 5,
        name: "Cinto de Musculação",
        category: "Equipamentos",
        price: 119.90,
        rating: 4.7,
        reviews: 456,
        description: "Cinto de couro legítimo para proteção lombar",
        inStock: true,
        url: "https://www.netshoes.com.br/cinto-musculacao",
        store: "Netshoes"
    },
    {
        id: 6,
        name: "Faixa Elástica Kit 5 unidades",
        category: "Equipamentos",
        price: 79.90,
        rating: 4.8,
        reviews: 321,
        description: "Kit com 5 faixas de resistências variadas",
        inStock: false,
        url: "https://www.netshoes.com.br/faixas-elasticas",
        store: "Netshoes"
    }
];

const faqs = [
    {
        question: "Como criar um treino?",
        answer: "Acesse a seção 'Listas de Treinos' e clique em 'Criar Treino'. Preencha as informações do seu treino, incluindo título, descrição, dificuldade e exercícios. Depois é só publicar!"
    },
    {
        question: "Como encontrar academias próximas?",
        answer: "Na seção 'Procure academias', você pode buscar por nome ou usar sua localização para ver academias próximas a você. Clique em 'Ver detalhes' para mais informações."
    },
    {
        question: "Como avaliar uma academia?",
        answer: "Acesse os detalhes da academia e você verá a opção de avaliar. Você pode dar de 1 a 5 estrelas e deixar um comentário sobre sua experiência."
    },
    {
        question: "Posso salvar treinos favoritos?",
        answer: "Sim! Quando você estiver visualizando um treino, clique no botão 'Salvar' e ele ficará disponível no seu perfil na aba 'Treinos Salvos'."
    },
    {
        question: "Como funciona a compra de produtos?",
        answer: "Na seção de produtos, você encontrará links para sites confiáveis onde pode comprar suplementos e equipamentos. Ao clicar no produto, você será redirecionado para o site da loja oficial."
    },
    {
        question: "É grátis usar o Trainaki?",
        answer: "Sim! O Trainaki é completamente gratuito. Você pode criar sua conta, buscar academias, criar e salvar treinos sem pagar nada."
    }
];

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadUser();
    renderGyms();
    renderWorkouts();
    renderProducts();
    renderFAQ();
});

// Theme
function toggleTheme() {
    const html = document.documentElement;
    const moonIcon = document.getElementById('theme-icon-moon');
    const sunIcon = document.getElementById('theme-icon-sun');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-icon-moon').classList.add('hidden');
        document.getElementById('theme-icon-sun').classList.remove('hidden');
    }
}

// Auth
function loadUser() {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
        currentUser = JSON.parse(saved);
        updateUIForUser();
    }
}

function updateUIForUser() {
    if (currentUser) {
        document.getElementById('auth-buttons').classList.add('hidden');
        document.getElementById('user-dropdown').classList.remove('hidden');
        document.getElementById('user-name').textContent = currentUser.name;
        document.getElementById('user-avatar').textContent = currentUser.name[0].toUpperCase();
        renderMyWorkouts();
    } else {
        document.getElementById('auth-buttons').classList.remove('hidden');
        document.getElementById('user-dropdown').classList.add('hidden');
    }
}

function openAuthModal(mode) {
    authMode = mode;
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-modal-title');
    const desc = document.getElementById('auth-modal-desc');
    const nameGroup = document.getElementById('name-group');
    const submit = document.getElementById('auth-submit');
    const switchText = document.getElementById('auth-switch');
    
    if (mode === 'login') {
        title.textContent = 'Entrar';
        desc.textContent = 'Entre com suas credenciais para acessar sua conta';
        nameGroup.style.display = 'none';
        submit.textContent = 'Entrar';
        switchText.innerHTML = 'Não tem uma conta? <button type="button" onclick="switchAuthMode()" style="color: var(--primary); background: none; border: none; cursor: pointer; text-decoration: underline;">Cadastre-se</button>';
    } else {
        title.textContent = 'Criar Conta';
        desc.textContent = 'Crie sua conta para começar a usar o Trainaki';
        nameGroup.style.display = 'block';
        submit.textContent = 'Criar Conta';
        switchText.innerHTML = 'Já tem uma conta? <button type="button" onclick="switchAuthMode()" style="color: var(--primary); background: none; border: none; cursor: pointer; text-decoration: underline;">Entrar</button>';
    }
    
    modal.classList.add('active');
}

function switchAuthMode() {
    openAuthModal(authMode === 'login' ? 'signup' : 'login');
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value;

    if (authMode === 'login') {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                savedWorkouts: user.savedWorkouts || [],
                comments: user.comments || [],
                ratings: user.ratings || []
            };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateUIForUser();
            document.getElementById('auth-modal').classList.remove('active');
            showToast('Login realizado com sucesso!', 'success');
        } else {
            showToast('Email ou senha incorretos', 'error');
        }
    } else {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(u => u.email === email)) {
            showToast('Este email já está cadastrado', 'error');
            return;
        }

        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password,
            savedWorkouts: [],
            comments: [],
            ratings: []
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        currentUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            savedWorkouts: [],
            comments: [],
            ratings: []
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUIForUser();
        document.getElementById('auth-modal').classList.remove('active');
        showToast('Cadastro realizado com sucesso!', 'success');
    }

    e.target.reset();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUIForUser();
    showToast('Você saiu da conta', 'success');
    toggleUserMenu();
}

function toggleUserMenu() {
    const menu = document.getElementById('user-menu');
    menu.classList.toggle('active');
}

function openProfileModal() {
    if (!currentUser) return;
    
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-avatar').textContent = currentUser.name[0].toUpperCase();
    document.getElementById('profile-modal').classList.add('active');
    toggleUserMenu();
}

function switchProfileTab(tab) {
    const tabs = ['saved', 'comments', 'ratings'];
    tabs.forEach(t => {
        document.querySelector(`[onclick="switchProfileTab('${t}')"]`).classList.toggle('active', t === tab);
        document.getElementById(`profile-tab-${t}`).classList.toggle('active', t === tab);
    });
}

// Navigation
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Gyms
function renderGyms(filtered = gyms) {
    const grid = document.getElementById('gyms-grid');
    grid.innerHTML = filtered.map((gym, index) => `
        <div class="card ${index === 0 ? 'ring-highlight' : ''}">
            <div class="card-header">
                <div class="gym-card">
                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&q=80" 
                         alt="${gym.name}" class="gym-image">
                    <div class="gym-info">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <div class="card-title">
                                    ${gym.name}
                                    ${index === 0 ? '<span class="badge badge-highlight">Mais próxima</span>' : ''}
                                </div>
                                <div class="card-description" style="margin-top: 0.25rem;">
                                    ${gym.distance.toFixed(1)} km
                                </div>
                            </div>
                            <div class="rating">
                                ${renderStars(gym.rating)}
                                <span>${gym.rating}</span>
                                <span style="color: var(--text-secondary);">(${gym.reviews})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <p class="card-description">${gym.address}</p>
                <div class="info-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    ${gym.hours}
                </div>
                <div class="info-row">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    ${gym.phone}
                </div>
                <div style="margin: 1rem 0;">
                    ${gym.amenities.slice(0, 4).map(a => `<span class="badge badge-outline">${a}</span>`).join('')}
                    ${gym.amenities.length > 4 ? `<span class="badge badge-outline">+${gym.amenities.length - 4}</span>` : ''}
                </div>
                <button class="btn btn-primary w-full" onclick="openGymModal(${gym.id})">Ver detalhes</button>
            </div>
        </div>
    `).join('');
}

function filterGyms() {
    const search = document.getElementById('gym-search').value.toLowerCase();
    const filtered = gyms.filter(gym => 
        gym.name.toLowerCase().includes(search) ||
        gym.address.toLowerCase().includes(search) ||
        gym.amenities.some(a => a.toLowerCase().includes(search))
    );
    renderGyms(filtered);
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<svg class="star ${i > rating ? 'empty' : ''}" viewBox="0 0 24 24" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>`;
    }
    return stars;
}

function openGymModal(id) {
    const gym = gyms.find(g => g.id === id);
    if (!gym) return;

    const content = document.getElementById('gym-modal-content');
    content.innerHTML = `
        <div class="modal-header">
            <h3>${gym.name}</h3>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                 alt="${gym.name}" style="width: 100%; height: 16rem; object-fit: cover; border-radius: 0.5rem;">
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h4 class="mb-2">Informações</h4>
            <div class="info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                    <p><strong>Endereço</strong></p>
                    <p class="text-sm">${gym.address}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}" 
                       target="_blank" style="color: var(--primary); font-size: 0.875rem;">Ver no Google Maps</a>
                </div>
            </div>
            <div class="info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                <div>
                    <p><strong>Horário</strong></p>
                    <p class="text-sm">${gym.hours}</p>
                </div>
            </div>
            <div class="info-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary);">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div>
                    <p><strong>Telefone</strong></p>
                    <a href="tel:${gym.phone}" style="color: var(--text-secondary); font-size: 0.875rem;">${gym.phone}</a>
                </div>
            </div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h4 class="mb-2">Sobre</h4>
            <p class="card-description">${gym.description}</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <h4 class="mb-2">Comodidades</h4>
            ${gym.amenities.map(a => `<span class="badge badge-outline">${a}</span>`).join('')}
        </div>
        ${currentUser ? `
        <div class="card mb-4">
            <div class="card-header">
                <h4>Faça sua avaliação</h4>
            </div>
            <div class="card-content">
                <label class="mb-2" style="display: block;">Sua nota</label>
                <div class="flex gap-2 mb-4" id="rating-stars">
                    ${[1,2,3,4,5].map(i => `
                        <svg class="star-large empty" data-rating="${i}" 
                             onclick="selectRating(${i})" 
                             onmouseover="hoverRating(${i})"
                             onmouseout="unhoverRating()"
                             viewBox="0 0 24 24" stroke-width="2">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                    `).join('')}
                </div>
                <label for="rating-comment" class="mb-2" style="display: block;">Comentário</label>
                <textarea id="rating-comment" class="mb-2" placeholder="Conte sobre sua experiência..."></textarea>
                <button class="btn btn-primary" onclick="submitGymRating(${gym.id})">Enviar Avaliação</button>
            </div>
        </div>
        ` : `<p class="text-sm card-description mb-4">Faça login para avaliar esta academia</p>`}
        <div>
            <h4 class="mb-2">Avaliações</h4>
            <div id="gym-ratings">
                ${gym.userRatings.length === 0 ? 
                    '<p class="text-sm card-description">Seja o primeiro a avaliar!</p>' :
                    gym.userRatings.map(r => `
                        <div class="comment">
                            <div class="comment-header">
                                <div class="avatar">${r.userName[0]}</div>
                                <div style="flex: 1;">
                                    <div class="comment-author">${r.userName}</div>
                                    <div class="rating">${renderStars(r.rating)}</div>
                                </div>
                                <span class="comment-date">${r.date}</span>
                            </div>
                            <p class="text-sm">${r.comment}</p>
                        </div>
                    `).join('')
                }
            </div>
        </div>
    `;

    document.getElementById('gym-modal').classList.add('active');
}

let selectedRating = 0;

function selectRating(rating) {
    selectedRating = rating;
    updateRatingStars(rating);
}

function hoverRating(rating) {
    updateRatingStars(rating);
}

function unhoverRating() {
    updateRatingStars(selectedRating);
}

function updateRatingStars(rating) {
    const stars = document.querySelectorAll('#rating-stars .star-large');
    stars.forEach((star, i) => {
        if (i < rating) {
            star.classList.remove('empty');
        } else {
            star.classList.add('empty');
        }
    });
}

function submitGymRating(gymId) {
    if (!currentUser) {
        showToast('Você precisa estar logado', 'error');
        return;
    }

    if (selectedRating === 0) {
        showToast('Selecione uma avaliação', 'error');
        return;
    }

    const comment = document.getElementById('rating-comment').value;
    if (!comment.trim()) {
        showToast('Escreva um comentário', 'error');
        return;
    }

    const gym = gyms.find(g => g.id === gymId);
    gym.userRatings.push({
        userId: currentUser.id,
        userName: currentUser.name,
        rating: selectedRating,
        comment,
        date: new Date().toLocaleDateString('pt-BR')
    });

    selectedRating = 0;
    showToast('Avaliação enviada!', 'success');
    openGymModal(gymId);
}

// Workouts
function renderWorkouts(filtered = workouts) {
    const grid = document.getElementById('workouts-grid');
    grid.innerHTML = filtered.map(workout => `
        <div class="card" onclick="openWorkoutModal(${workout.id})">
            <div class="card-header">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div class="card-title" style="flex: 1;">${workout.title}</div>
                    <span class="badge ${getDifficultyBadge(workout.difficulty)}">${workout.difficulty}</span>
                </div>
                <div class="card-description flex items-center gap-2">
                    <div class="avatar" style="width: 1.5rem; height: 1.5rem; font-size: 0.75rem;">
                        ${workout.author[0]}
                    </div>
                    <span>${workout.author}</span>
                </div>
            </div>
            <div class="card-content">
                <p class="card-description mb-4">${workout.description}</p>
                <div class="workout-meta">
                    <div class="workout-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary); width: 1rem; height: 1rem;">
                            <path d="M6.5 6.5l11 11m0-11l-11 11"/>
                        </svg>
                        ${workout.exercises.length} exercícios
                    </div>
                    <div class="workout-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary); width: 1rem; height: 1rem;">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${workout.duration}
                    </div>
                    <div class="workout-meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary); width: 1rem; height: 1rem;">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="4"/>
                        </svg>
                        ${workout.category}
                    </div>
                </div>
                <div class="workout-stats">
                    <button onclick="event.stopPropagation(); toggleLike(${workout.id})" class="${isLiked(workout) ? 'liked' : ''}">
                        <svg class="heart-icon ${isLiked(workout) ? 'filled' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem;">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                        <span>${workout.likes}</span>
                    </button>
                    <div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem;">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        <span>${workout.views}</span>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem;">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                        </svg>
                        <span>${workout.comments.length}</span>
                    </div>
                </div>
                <button class="btn btn-primary w-full" onclick="event.stopPropagation(); openWorkoutModal(${workout.id})">
                    Ver Treino Completo
                </button>
            </div>
        </div>
    `).join('');
}

function renderMyWorkouts() {
    if (!currentUser) {
        document.getElementById('my-workouts-grid').innerHTML = `
            <div class="text-center" style="grid-column: 1/-1; padding: 3rem 1rem;">
                <p class="card-description">Faça login para ver seus treinos</p>
            </div>
        `;
        return;
    }

    const myWorkouts = workouts.filter(w => w.authorId === currentUser.id);
    
    if (myWorkouts.length === 0) {
        document.getElementById('my-workouts-grid').innerHTML = `
            <div class="text-center" style="grid-column: 1/-1; padding: 3rem 1rem;">
                <p class="card-description">Você ainda não criou nenhum treino.</p>
                <p class="text-sm card-description">Clique em "Criar Treino" para começar!</p>
            </div>
        `;
    } else {
        document.getElementById('my-workouts-grid').innerHTML = myWorkouts.map(workout => `
            <div class="card">
                <div class="card-header">
                    <div class="card-title">${workout.title}</div>
                    <div class="card-description">${workout.category} • ${workout.difficulty}</div>
                </div>
                <div class="card-content">
                    <p class="card-description mb-2">${workout.description}</p>
                    <div class="text-sm">
                        ${workout.exercises.length} exercícios • ${workout.duration} • ${workout.likes} curtidas
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function filterWorkouts() {
    const search = document.getElementById('workout-search').value.toLowerCase();
    const filtered = workouts.filter(w => 
        w.title.toLowerCase().includes(search) ||
        w.category.toLowerCase().includes(search) ||
        w.author.toLowerCase().includes(search)
    );
    renderWorkouts(filtered);
}

function getDifficultyBadge(difficulty) {
    switch(difficulty) {
        case 'Iniciante': return 'badge-green';
        case 'Intermediário': return 'badge-yellow';
        case 'Avançado': return 'badge-red';
        default: return '';
    }
}

function isLiked(workout) {
    return currentUser && workout.likedBy.includes(currentUser.id);
}

function toggleLike(id) {
    if (!currentUser) {
        showToast('Faça login para curtir', 'error');
        return;
    }

    const workout = workouts.find(w => w.id === id);
    const index = workout.likedBy.indexOf(currentUser.id);
    
    if (index > -1) {
        workout.likedBy.splice(index, 1);
        workout.likes--;
    } else {
        workout.likedBy.push(currentUser.id);
        workout.likes++;
    }

    renderWorkouts();
}

function switchWorkoutTab(tab) {
    const tabs = ['browse', 'my', 'saved'];
    tabs.forEach(t => {
        document.querySelector(`[onclick="switchWorkoutTab('${t}')"]`).classList.toggle('active', t === tab);
        document.getElementById(`workout-tab-${t}`).classList.toggle('active', t === tab);
    });

    if (tab === 'my') {
        renderMyWorkouts();
    }
}

function openWorkoutModal(id) {
    const workout = workouts.find(w => w.id === id);
    if (!workout) return;

    const content = document.getElementById('workout-modal-content');
    content.innerHTML = `
        <div class="modal-header">
            <h3>${workout.title}</h3>
            <div class="card-description flex items-center gap-2">
                <div class="avatar" style="width: 1.5rem; height: 1.5rem; font-size: 0.75rem;">
                    ${workout.author[0]}
                </div>
                <span>Por ${workout.author}</span>
            </div>
        </div>
        <div>
            <p class="mb-4">${workout.description}</p>
            <div class="flex gap-4 p-4 mb-4" style="background: var(--bg-secondary); border-radius: 0.5rem; flex-wrap: wrap;">
                <span class="badge ${getDifficultyBadge(workout.difficulty)}">${workout.difficulty}</span>
                <span>${workout.exercises.length} exercícios</span>
                <span>${workout.duration}</span>
                <span>${workout.category}</span>
            </div>
            <div class="mb-4">
                <h4 class="mb-2">Exercícios</h4>
                <div>
                    ${workout.exercises.map(ex => `
                        <div class="exercise-item">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="exercise-number">${ex.number}</span>
                                <span>${ex.name}</span>
                            </div>
                            <p class="text-sm card-description">${ex.sets} séries x ${ex.reps} repetições</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="flex gap-4 mb-4" style="padding-top: 1rem; border-top: 1px solid var(--border);">
                <button class="btn ${isLiked(workout) ? 'btn-primary' : 'btn-outline'}" 
                        onclick="toggleLike(${workout.id}); openWorkoutModal(${workout.id})">
                    <svg class="heart-icon ${isLiked(workout) ? 'filled' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem;">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                    ${workout.likes} Curtidas
                </button>
                <button class="btn btn-outline">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem;">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                    Salvar
                </button>
            </div>
            <div>
                <h4 class="mb-2">Comentários (${workout.comments.length})</h4>
                <div class="mb-4">
                    ${workout.comments.map(c => `
                        <div class="comment">
                            <div class="comment-header">
                                <div class="avatar" style="width: 2rem; height: 2rem;">${c.author[0]}</div>
                                <div style="flex: 1;">
                                    <div class="comment-author">${c.author}</div>
                                    <span class="comment-date">${c.date}</span>
                                </div>
                            </div>
                            <p class="text-sm">${c.text}</p>
                        </div>
                    `).join('')}
                </div>
                ${currentUser ? `
                <div style="padding-top: 1rem; border-top: 1px solid var(--border);">
                    <label for="workout-comment" class="mb-2" style="display: block;">Adicionar comentário</label>
                    <textarea id="workout-comment" class="mb-2" placeholder="Compartilhe sua experiência..."></textarea>
                    <button class="btn btn-primary" onclick="submitWorkoutComment(${workout.id})">Publicar Comentário</button>
                </div>
                ` : '<p class="text-sm card-description">Faça login para comentar</p>'}
            </div>
        </div>
    `;

    document.getElementById('workout-modal').classList.add('active');
}

function submitWorkoutComment(workoutId) {
    if (!currentUser) {
        showToast('Faça login para comentar', 'error');
        return;
    }

    const text = document.getElementById('workout-comment').value;
    if (!text.trim()) {
        showToast('Digite um comentário', 'error');
        return;
    }

    const workout = workouts.find(w => w.id === workoutId);
    workout.comments.push({
        id: Date.now(),
        author: currentUser.name,
        userId: currentUser.id,
        text,
        date: new Date().toLocaleDateString('pt-BR')
    });

    showToast('Comentário adicionado!', 'success');
    openWorkoutModal(workoutId);
}

function openCreateWorkoutModal() {
    if (!currentUser) {
        showToast('Faça login para criar treinos', 'error');
        return;
    }
    document.getElementById('create-workout-modal').classList.add('active');
}

function addExerciseInput() {
    const container = document.getElementById('exercises-container');
    const div = document.createElement('div');
    div.className = 'exercise-input mb-2';
    div.innerHTML = `
        <input type="text" placeholder="Nome do exercício" class="exercise-name w-full mb-2" style="padding-left: 0.75rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
            <input type="number" placeholder="Séries" class="exercise-sets" value="3" min="1" style="padding-left: 0.75rem;">
            <input type="text" placeholder="Repetições" class="exercise-reps" value="12" style="padding-left: 0.75rem;">
        </div>
    `;
    container.appendChild(div);
}

function handleCreateWorkout(e) {
    e.preventDefault();

    const title = document.getElementById('workout-title').value;
    const description = document.getElementById('workout-description').value;
    const difficulty = document.getElementById('workout-difficulty').value;
    const category = document.getElementById('workout-category').value;
    const duration = document.getElementById('workout-duration').value;

    const exerciseInputs = document.querySelectorAll('.exercise-input');
    const exercises = [];
    exerciseInputs.forEach((input, i) => {
        const name = input.querySelector('.exercise-name').value;
        if (name.trim()) {
            exercises.push({
                number: i + 1,
                name,
                sets: parseInt(input.querySelector('.exercise-sets').value),
                reps: input.querySelector('.exercise-reps').value
            });
        }
    });

    if (exercises.length === 0) {
        showToast('Adicione pelo menos um exercício', 'error');
        return;
    }

    const newWorkout = {
        id: Date.now(),
        title,
        author: currentUser.name,
        authorId: currentUser.id,
        description,
        exercises,
        duration: duration + ' min',
        difficulty,
        category,
        likes: 0,
        views: 0,
        comments: [],
        likedBy: []
    };

    workouts.unshift(newWorkout);
    renderWorkouts();
    renderMyWorkouts();
    
    document.getElementById('create-workout-modal').classList.remove('active');
    document.getElementById('create-workout-form').reset();
    
    // Reset exercises container
    const container = document.getElementById('exercises-container');
    container.innerHTML = `
        <div class="exercise-input mb-2">
            <input type="text" placeholder="Nome do exercício" class="exercise-name w-full mb-2" style="padding-left: 0.75rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <input type="number" placeholder="Séries" class="exercise-sets" value="3" min="1" style="padding-left: 0.75rem;">
                <input type="text" placeholder="Repetições" class="exercise-reps" value="12" style="padding-left: 0.75rem;">
            </div>
        </div>
    `;

    showToast('Treino criado com sucesso!', 'success');
}

// Products
function renderProducts(filtered = products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = filtered.map(product => `
        <div class="card">
            <div style="position: relative;">
                <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=400&q=80" 
                     alt="${product.name}" class="product-image">
                <div class="product-store">${product.store}</div>
            </div>
            <div class="card-content">
                <span class="badge badge-outline mb-2">${product.category}</span>
                <div class="card-title line-clamp-2">${product.name}</div>
                <p class="card-description line-clamp-2 mb-2">${product.description}</p>
                <div class="rating mb-2">
                    ${renderStars(product.rating)}
                    <span>${product.rating}</span>
                    <span style="color: var(--text-secondary);">(${product.reviews})</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <p class="text-sm card-description">A partir de</p>
                        <span class="product-price">R$ ${product.price.toFixed(2)}</span>
                    </div>
                    ${!product.inStock ? '<span class="badge badge-red">Esgotado</span>' : ''}
                </div>
                <a href="${product.url}" target="_blank" rel="noopener noreferrer" style="width: 100%;">
                    <button class="btn ${product.inStock ? 'btn-primary' : 'btn-outline'} w-full" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? 'Ver Produto' : 'Indisponível'}
                        ${product.inStock ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' : ''}
                    </button>
                </a>
                ${product.inStock ? `<p class="text-center text-sm card-description mt-2">Redirecionando para ${product.store}</p>` : ''}
            </div>
        </div>
    `).join('');
}

function filterProducts() {
    const search = document.getElementById('product-search').value.toLowerCase();
    const category = document.getElementById('product-category').value;
    
    const filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search) || 
                             p.description.toLowerCase().includes(search);
        const matchesCategory = category === 'all' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filtered);
}

// FAQ
function renderFAQ() {
    const container = document.getElementById('faq-accordion');
    container.innerHTML = faqs.map((faq, i) => `
        <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(${i})">
                ${faq.question}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="accordion-icon-${i}">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="accordion-content" id="accordion-content-${i}">
                ${faq.answer}
            </div>
        </div>
    `).join('');
}

function toggleAccordion(index) {
    const content = document.getElementById(`accordion-content-${index}`);
    content.classList.toggle('active');
}

// Modals
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Toast
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}
