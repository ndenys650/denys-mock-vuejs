<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <h1 class="title">{{ heading }}</h1>
        <div class="is-two-thirds column is-paddingless">
          <h2 class="subtitle is-4">{{ subheading }}</h2>
        </div>
        <a class="button is-large is-primary" id="learn">Follow</a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>If you’re looking for some new ideas for your business I’d love to spend some time brainstorming ideas with you!</strong></p>
          </div>
          <div class="column">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nibh dolor, gravida eget imperdiet a, maximus sed elit. </p>
          </div>
        </div>
      </div>

      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
              <p class="subtitle">- John Doe</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
              <p class="subtitle">- John Doe</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">“Excellent brainstormer who provided great feedback on new systems and implementations for my business. Highly recommended if you think you’re business has hit a wall.”</p>
              <p class="subtitle">- John Doe</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    heading: "Head in the Clouds",
    subheading: "Since 1993"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/clouds.jpg')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2em 0

</style>
