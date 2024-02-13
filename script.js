
const Showcards = async () => {
    const api = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await api.json();
    const cards = data.data;

    displayCards(cards);
}
Showcards();




const displayCards = (cards) => {
    const btnContainer = document.getElementById('btn-container');

    // console.log(cards)
    cards.forEach(btn => {
        const btns = document.createElement('div');
        btns.innerHTML = `
                <a onclick=" categoryChange(${btn.category_id})" class="tab text-2xl text-center text-black rounded bg-gray-300 active:bg-red-600"> ${btn?.category ? btn?.category : 'data not found'}</a>
        `;
        btnContainer.appendChild(btns);
        // console.log(btn)

    });
};

const categoryChange = (id) => {
    console.log(id)
    let categoryId = id;
    handleCard(categoryId);

    if(id === 1005){
        callModal()
    }


}

// modal function 
const callModal = ()=>{
    my_modal_5.showModal();
}
const ref = ()=>{
    location.reload();
}

const handleCard = async (categoryId) => {
    // console.log(categoryId);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const cards = data.data;
    singleCard(cards);
    // console.log(cards)


};

handleCard(1000);

const sortBy = ()=>{
   
    
}

const singleCard = (cards) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cards.forEach(card => {
        console.log(card.authors[0].profile_picture)
        const singleCard = document.createElement('div');
        singleCard.innerHTML = `
       <div class="card  bg-base-100 shadow-xl">
       <figure><img class="h-52 w-96" src=${card.thumbnail} alt="Shoes" /></figure>
            <div class="card-body">
                <div class="box-1 flex gap-4">
                    <div class="pic  ">
                        <img class="rounded-full w-14 h-14 leading-14" src=${card.authors[0].profile_picture} alt="Shoes" />
                    </div>
                    <div class="title">
                        <h2 class="card-title font-bold text-2xl mt-4">${card?.title ? card.title : 'no data'}</h2>
                    </div>
                </div>
                
         
                <div class="pl-8">
                <div class="box-2 flex gap-4">
                <div class="name">
                    <h2 class="mt-4">${card.authors[0]?.profile_name}</h2>
                </div>
                <div class="varify-sim">
                
                    ${card.authors[0].varified ? `<img src = "img/quality.png"` : ''}
                </div>
            </div>
                    <p class="mt-4">${card.others.views} views</p>
                </div>
         
            </div>
        </div>
       `;
       console.log(card.authors[0].varified)
        cardContainer.appendChild(singleCard);
    })


}

// shortBy function call 
