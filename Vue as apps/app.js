const app = Vue.createApp({
    data() {
        return {
            url: 'https://www.google.com',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: "https://picsum.photos/200/300", isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: "https://picsum.photos/200/300", isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: "https://picsum.photos/200/300", isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')