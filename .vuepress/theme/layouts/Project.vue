<template lang="pug">
  article.project-page
    a.link-back( href="/") ← back
    header.header
      a.header-icon( :href="$page.frontmatter.projectUrl" )
        img.header-icon__img( :src="$page.frontmatter.icon" )
      .header-info
        span.header-info__tag {{$page.frontmatter.year}}
        h1.header-info__title {{$page.title}}
        ul.header-info__list
          li( v-for="tag in tags") {{tag}}
    main.project-description
      Content
  </div>
</template>

<script>
export default {
  name: "Project",
  data () {
    return {
      comments: []
    }
  },
  computed: {
    tags () {
      return this.$page.frontmatter.tags.split(',').map(t => t.trim())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/vars.scss";

.project-page {
  max-width: 820px;
  margin: 0 auto;
  padding: 1rem;
  margin-bottom: 4rem;
}

.header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.header-icon {
  --size: 14rem;

  @media (max-width: $sm-break-point) {
    --size: 12rem;
  }

  border-bottom: none;

  &__img {
    height: var(--size);
    width: var(--size);
    padding: 2.5rem;
    background: #1A1A1A;
    border-radius: 5px;
  }
}

.header-info {
  padding: 1.25rem 2.25rem;

  &__tag {
    color: #DF4444;;
    font-weight: 800;
  }

  &__title {
    font-size: 3rem;
    margin: 0.4rem 0;
    position: relative;
    left: -2px;
  }

  &__list {
    list-style-type: none;
    margin: -0.45rem 0;
    padding-left: 1.25rem;
    font-weight: 700;
    font-size: 1rem;

    li {
      position: relative;
      margin: .875rem 0;
    }

    li::marker {
      font-size: 3em;
      color: #DF4444;
    }

    li::before {
      --size: .75rem;
      content: '';
      position: absolute;
      left: -1.25rem;
      top: .05rem;
      height: var(--size);
      width: var(--size);
      background-color: #DF4444;
      border-radius: calc(var(--size) / 2);
    }
  }
}

.project-description {
  font-weight: 600;
  line-height: 1.6em;

  div /deep/ h1:first-child {
    display: none;
  }

  div /deep/ img {
    width: 100%;
  }
}

.link-back {
  font-weight: 800;
  border-bottom: none;
}
</style>
