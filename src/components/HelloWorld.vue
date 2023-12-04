<template>
  <v-container class="fill-height">
    <v-overlay
        height="100%"
        width="100%"
        openDelay
        persistent
        :model-value="overlay"
        class="align-center justify-center"
      >
      <vue-damp-fireworks style="width: 100%;height: 100%" class="position-relative" duration="5000000">
        <v-card style="z-index: -1; top: 0;background: #064866; display: flex; align-items: center" width="100%" height="100%" background-color="#fff" class="position-absolute">
          <v-img
            v-if="memberSelected"
            :src="imageUrl"
          ></v-img>
        </v-card>
      </vue-damp-fireworks>
    </v-overlay>
    <v-responsive class="align-center text-center fill-height">
      <v-card style="background-color: #064866" theme="dark" class="pa-8 d-flex justify-center flex-wrap">
          <v-responsive max-width="550">
            <v-img
              class="mx-auto mt-12 mb-16"
              max-height="140"
              max-width="240"
              src="https://namebook.caynen.vn/assets/logo-61c750d3.svg"
            ></v-img>
              <v-autocomplete
                v-model="memberSelected"
                :items="items"
                class="flex-full-width"
                density="comfortable"
                item-props
                menu-icon=""
                placeholder="Nhập tên vô đây"
                prepend-inner-icon="mdi-magnify"
                rounded
                theme="light"
                variant="solo"
              >
              </v-autocomplete>
              <v-btn
                size="large"
                color="#00bdc7"
                @click="overlay = memberSelected ?  true : false"
              >
              <div class="text-white">
                xem
              </div>
                <v-icon class="ml-2" size="30" color="#fff">
                  mdi-arrow-right-bold-box
                </v-icon>
              </v-btn>
          </v-responsive>
        </v-card>
    </v-responsive>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      overlay: false,
      memberSelected: null,
      items: [
        {
          title: 'Lê Đức Thắng',
        },
        {
          title: 'Vũ Thái Dương',
        },
        {
          title: 'Nguyễn Văn Việt',
        },
        {
          title: 'Nguyễn Hữu Tuấn',
        },
        {
          title: 'Nguyễn Văn Việt',
        }
      ]
    }),
    computed: {
      imageUrl () {
        return new URL(`../assets/${this.memberSelected}.jpg`, import.meta.url).href
      }
    },
    methods: {
      alertsth () {
        alert(';asdads')
      }
    }
  }
</script>
