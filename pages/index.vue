<template>
  <main>
    <div class="container mx-auto">
      <section class="my-12 w-full">
        <h1 class="text-3xl font-bold title-font mb-2 text-gray-900">
          Recent Posts
        </h1>
        <p
          class="lg:w-1/2 w-full text-lg text-gray-600 leading-relaxed text-base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <section class="w-full">
        <PostItem
          v-for="post in posts"
          :key="post.fields.slug"
          :title="post.fields.title"
          :description="post.fields.description"
        />
      </section>
      <!--
          <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link> -->
    </div>
  </main>
</template>

<script>
import contentful from '~/plugins/contentful'

export default {
  computed: {
    posts() {
      return this.$store.state.posts
    },
  },
  head: {
    title: '',
  },
}
</script>

<style lang="postcss" scoped></style>
