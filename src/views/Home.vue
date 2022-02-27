<template>
  <div class="home">
    <div class="vertical-center">
      <h1 class="title is-size-2 mt-4">
        Hi <font-awesome-icon :icon="['fas', 'hand-peace']" />, I'm Ba Thien
      </h1>

      <p class="is-size-5 m-3">
        I am a research software engineer at the
        <a href="https://www.montefiore.uliege.be/">Montefiore Institute</a>
        (<a href="https://www.uliege.be/">University of Liège</a>), <br />
        working at the
        <a href="https://uliege.cytomine.org/">Cytomine ULiège Research & Development</a>.
      </p>

      <p class="m-3">
        <img
          src="https://uliege.cytomine.org/images/logo_hu81929b023bf79bdfa325dae3c994e64a_23106_0x70_resize_mitchellnetravali_2.png"
          alt="Cytomine Research @ ULiège"
        />
      </p>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 400px;
}

.vertical-center {
  position: relative;
  top: 50%;
}
</style>
