const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      description: 'A warm fuzzy pair of socks.',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com/',
      inStock: false,
      inventory: 0,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ],
      sizes: ['S', 'M', 'L', 'XL'],
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1
      }
    },
    updateImage(variantImage) {
      this.image = variantImage
    },
  }
})

